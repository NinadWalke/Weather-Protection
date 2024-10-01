import React from "react";

// Imports
import ImageCard from "./components/ImageCard";

function Offers() {
  return (
    <>
    <h1 className='text-center mb-5 pb-5 pt-5' style={{fontSize: "3rem",}}>OFFERS</h1>
      <div
        className="fluid-container mt-5 mb-5 d-flex"
        style={{ width: "100%", justifyContent: "space-evenly" }}
      >
        {/* 
            The below data is to be filled in as props:
            cardImg=""
            cardTitle=""
            cardData=""
            cardLink=""
        */}
        <ImageCard/>
        <ImageCard />
        <ImageCard />
      </div>
      <div className="container text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vitae suscipit dolores nobis quis necessitatibus optio officiis quia incidunt aliquid laudantium esse, illo libero cumque sapiente accusamus! Laudantium, quo repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illo maiores autem non similique cum qui quo, ex ea, numquam laboriosam odit doloribus ab, voluptate quaerat possimus labore impedit debitis.
        Quas accusantium quis adipisci voluptates ad molestiae, ipsam deserunt suscipit qui nesciunt commodi doloremque accusamus? Laboriosam debitis saepe dolorem facilis, beatae molestias impedit illo repudiandae cumque atque distinctio quidem sunt.
        Est accusamus iusto adipisci qui temporibus, animi ducimus, quaerat sequi corporis modi quia provident obcaecati a! Id quibusdam accusantium ab cumque? Quam natus delectus corporis, in odit laborum omnis dolorem?
      </div>
    </>
  );
}

export default Offers;
