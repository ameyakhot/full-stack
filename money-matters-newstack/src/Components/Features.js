import React from 'react';
import {AiFillCustomerService, AiFillBank, AiFillBug} from 'react-icons/ai'
import {AiFillBulb, AiFillControl, AiFillDollarCircle, AiFillCodeSandboxSquare} from 'react-icons/ai'
import '../Styles/Features.css';

// add props for customizing features
const singleFeature = (title, subtitle, icon) => {
    return (
        <div className="top-features">
        {icon}
        <h2>{title}</h2>
        <p>{subtitle}</p>
        </div>
    )
}

const singleStat = (title, subtitle, icon) => {
    return (
        <div className="single-stat-holder">
            <div className="icon-stat">
                {icon}
            </div>
            <div class="stat-box">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

const Features = () => {

  return (
    <div>
        <div className="top-features">
            <h2>Tailor-made Features</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="bottom-features">
            <div className="feature-container">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    {singleFeature("Robust Workflow", "Lorem ipsum dolor sit amet.", <AiFillCustomerService size={30} color="#4FC0A3"/>)}
                    {singleFeature("Flexbility", "Lorem ipsum dolor sit amet. ", <AiFillBank size={30} color="#4FC0A3"/>)}
                    {singleFeature("User friendly", "Lorem ipsum dolor sit amet. ", <AiFillBug size={30} color="#4FC0A3"/>)}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                    {singleFeature("Multiple layouts", "Lorem ipsum dolor sit amet. ", <AiFillBank size={30} color="#4FC0A3"/>)}
                    {singleFeature("Better components", "Lorem ipsum dolor sit amet. ", <AiFillBug size={30} color="#4FC0A3"/>)}
                    {singleFeature("Well organised", "Lorem ipsum dolor sit amet. ", <AiFillCustomerService size={30} color="#4FC0A3"/>)}
                </div>
            </div>
        </div>
        <div class="stats">
            <div class="stats-left">
                <h1>Out 18 years of Achievements</h1>
                <p>With our your superpowers we have reached here!</p>
            </div>
            <div class="stats-right">
                <div class="stats-right-container">
                    <div class="stats-right-row">
                        <div class="stats-right-col">
                            {singleStat("10,000+", "Clients", <AiFillControl size={45} color="#4FC0A3"/>)}
                        </div>
                        <div class="stats-right-col">
                            {singleStat("2 Million", "Users", <AiFillCodeSandboxSquare size={45} color="#4FC0A3"/>)}
                        </div>
                    </div>
                    <div class="stats-right-row">
                        <div class="stats-right-col">
                            {singleStat("500+", "Success Stories", <AiFillDollarCircle size={45} color="#4FC0A3"/>)}
                        </div>
                        <div class="stats-right-col">
                            {singleStat("40+", "Countries", <AiFillBulb size={45} color="#4FC0A3"/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features;