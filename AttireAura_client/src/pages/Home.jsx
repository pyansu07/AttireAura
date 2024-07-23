import React from 'react';
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from "../Components/Footer";
import ChatWidget from '../ChatWidget';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <ChatWidget />
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

