import React from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px; /* Increase margin for more spacing */
  height: 70vh;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease; /* Add transition for border color changes */
  cursor: pointer;
  border: 2px solid #ddd; /* Add a border with a light color */
  border-radius: 15px; /* Optional: Rounded corners for a smoother look */
  box-shadow: 0px 2px 4px rgba(39, 38, 38, 0.1); /* Subtle shadow for a slight 3D effect */
  box-sizing: border-box; /* Include border in the element's total width and height */
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-color: #bbb; /* Optional: Change border color on hover for a visual effect */
  }
`;



const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  background-color: transparent;
  color: #fffefe;
  border: 2px solid #ddd;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
