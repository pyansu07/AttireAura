import React, { useState } from 'react'
import styled from 'styled-components'
//import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: #8DECB4; */
    position: relative;
    overflow: hidden;
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff7f7;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    align-items: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
    opacity: 0.5;
`
const Wrapper=styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide=styled.div`
width:100vw;
 display: flex;
 align-items: center;
 height: 100vh;

 background-color:#${props=>props.bg} ;
`
const ImgContainer=styled.div`
  flex:1;
  height: 100%;
`
const Image=styled.img`
  height: 80%;
`
const InfoContainer=styled.div`
  flex:1;
  padding: 50px;
`
const Title=styled.h1`
  font-size: 70px;
`
const Desc=styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button=styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightIcon/>
        </Arrow>  
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>Shop Now</Button>
          </InfoContainer>        
          <ImgContainer>
          <Image src={item.img}/>
          </ImgContainer>
          </Slide>
))}
        </Wrapper>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeft/>

        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
