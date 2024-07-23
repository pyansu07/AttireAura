import React from 'react';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; 
  transition: all 0.5s ease;
  cursor: pointer;
  padding: 10px; 
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  border-radius: 8px; 
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  z-index: 1;
`;

const Image = styled.img`
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  border-radius: 8px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  
  &:hover {
    background-color: #1ad0d0;
    transform: scale(1.2); 
  }
`;

const Product = ({ item }) => {
  return (
    <div>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    </div>
  );
};

export default Product;
