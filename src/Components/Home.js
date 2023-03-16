import 'react-slideshow-image/dist/styles.css';
import React from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import HomePageImg1 from '../Components/Assets/banner.png'
import HomePageImg2 from '../Components/Assets/mvp-banner.png'
import HomePageImg3 from "../Components/Assets/Pizza.jpg";
import HomePageImg4 from "../Components/Assets/pizza1.jpg";
import '../Components/Styles/Home.css'

export const Home = () => {
  const slideImages = [HomePageImg1,HomePageImg2, HomePageImg3,HomePageImg4];
  const properties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    
  };

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide" style={{ 'backgroundImage': `url(${image})` }}>
             <h1>LEZZETLİ DİLİMLER <br/> MUTLU YÜZLER </h1>
          </div>
        ))}
        
      </Slide>
     
      <div className="order">
        <Link to="/pizza">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
};
