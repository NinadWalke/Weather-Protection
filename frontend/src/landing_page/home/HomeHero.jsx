import React from "react";

function HomeHero() {
  return (
    <>
      <div
        className="home-hero-div"
        style={{
          backgroundImage: "url(/media/homeheroimg.jpg)",
          width: "100%",
          height: "550px",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
            <div className="row py-5">
                <div className="col pt-5 mt-5"><h1 style={{fontSize: "5rem", color: "white"}}>Out here,<br/><span style={{fontSize: "3rem"}}>for your protection!</span></h1></div>
                <div className="col"></div>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomeHero;
