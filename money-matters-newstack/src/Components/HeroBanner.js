import React from 'react';
import '../Styles/HeroBanner.css';
import { FaArrowRight } from 'react-icons/fa';
import { BsPlayCircle } from 'react-icons/bs';
import BannerImage from '../Assets/hero-banner-image.png'

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-text">
        <h1>Manage your finances comfortably and safely</h1>
        <span className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
        <div className="hero-buttons">
            <a href="/" className="get-started-button">
                Get Started 
                <FaArrowRight />
            </a>
            <div className="watch-video-container">
                <span class="play-icon">
                    <BsPlayCircle/>
                </span>
                <a href="/" class="watch-video-btn">
                    Watch Video
                </a>
            </div>
        </div>
      </div>
      
      <div className="hero-image">
        <img src={BannerImage} alt="Dummy" />
      </div>
    </div>
  );
}

export default HeroBanner;
