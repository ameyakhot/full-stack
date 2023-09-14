import React from 'react'
import EdgeImage from '../Assets/edge-banner-image.png'
import '../Styles/Edge.css'

const Edge = () => {
  return (
    <div className="edge-banner">
        <div className="edge-text">
            <h1>Manage your finances comfortably and safely</h1>
            <span className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
        </div>
        
        <div className="edge-image">
            <img src={EdgeImage} alt="Dummy" />
        </div>
    </div>
  )
}

export default Edge