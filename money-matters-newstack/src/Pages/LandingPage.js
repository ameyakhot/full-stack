import React from 'react';
import NavBar from '../Components/NavBar';
import HeroBanner from '../Components/HeroBanner';
import Features from '../Components/Features';
import Edge from '../Components/Edge';
import Footer from '../Components/Footer';

function LandingPage() {
  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <Features/>
      <Edge/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
