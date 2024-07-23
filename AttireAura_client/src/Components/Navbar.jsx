import React from 'react';
import styled from 'styled-components';
//import { Search , ShoppingCartOutlined} from '@mui/material/icons'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Container= styled.div `
background-color: #FFFFFF;
`;

const SearchContainer=styled.div`
border:1px solid lightgray;
display:flex;
margin-left: 25px;
padding: 5px;
align-items: center;
`

const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
`;

const Language=styled.span`
font-size:14px;
cursor:pointer;
`
const Left=styled.div`
flex:1;
display:flex;
align-items:centre;
`
const Centre=styled.div`
flex:1;
`
const Right=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Input=styled.input`
  border: none;
`

const Logo=styled.h1`
  font-weight: bold;
  text-align: center;
`

const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)

  return (
        <Container>
          <Wrapper>
            <Left><Language>EN</Language>
            <SearchContainer>
              <Input/>
             <Search style={{color:"gray",fontSize:16}}/>
            </SearchContainer>
            </Left>
            <Centre><Logo>AttireAura</Logo></Centre>
            <Right>
            <Link to="/register">
              <MenuItem>Register</MenuItem>
              </Link>
              <Link to="/login">
              <MenuItem>Sign-IN</MenuItem></Link>
              <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
          </Link>
            </Right>
          </Wrapper>
        </Container>
    // <div className='container'>
    //   hi
    // </div>
  )
}

export default Navbar
