import React from "react";

// Imports
import ImageCard from "./components/ImageCard";

function Offers() {
  return (
    <>
    <h1 className='text-center mb-5 pb-5 pt-5' style={{fontSize: "3rem",}}>OFFERS</h1>
      <div
        className="fluid-container mt-5 mb-5 d-flex"
        style={{ width: "100%", justifyContent: "space-evenly"  }}
      >
        {/* 
            The below data is to be filled in as props:
            cardImg=""
            cardTitle=""
            cardData=""
            cardLink=""
        */}
        <ImageCard  cardImg = "media/weather app.png" cardTitle="Weather Alerts" cardData = "Stay updated with real-time weather data to monitor conditions and stay safe."/>
        <ImageCard cardImg = "media/alert.png" cardTitle="Symptoms" cardData = "Get notified about common sunstroke symptoms and timely alerts to prevent risk." />
        <ImageCard cardImg = "media/blog.png" cardTitle="Sunstroke Prevention Blogs" cardData = "Explore expert advice and tips on preventing and avoiding sunstroke."/>
      </div>
      <div className="container text-center">
       
The Sunstroke Protection and Avoidance System is designed to safeguard users from the dangers of extreme heat by providing real-time weather updates, alerts, and vital health information. It educates users on recognizing sunstroke symptoms and offers preventive measures to avoid heat-related illnesses. Additionally, the platform features informative blogs, helping users adopt healthy habits during hot weather. This system empowers individuals to stay informed, take precautions, and reduce the risk of sunstroke effectively.
      </div>
    </>
  );
}

export default Offers;
