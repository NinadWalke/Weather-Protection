import React from "react";
import { Link } from "react-router-dom";

function ImageCard({cardImg = "/media/errorcardimg.jpg", cardTitle = "Offer", cardData = "Offer Data", cardLink}) {
  return (
    <>
      <Link to={cardLink}>
        <div className="card" style={{ width: "20rem", height: "375px"}}>
          <img src={cardImg} class="card-img-top" alt="Oops! Error occured..."  style ={{ height: "15vw" }}/>
          <div class="card-body">
            <h5>{cardTitle}</h5>
            <p class="card-text">
              {cardData}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ImageCard;
