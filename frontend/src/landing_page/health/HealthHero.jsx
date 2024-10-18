import React from "react";

function HealthHero() {
  return (
    <>
      <div
        className="health-hero-div"
        style={{
          backgroundImage: "url(/media/healthheroimg.jpg)",
          width: "100%",
          height: "550px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col pt-5 mt-5">
              <h1 style={{ fontSize: "5rem", color: "black" }}>
                Knowledge
                <br />
                <span style={{ fontSize: "3rem", color: "black"}}>is your ally!</span>
              </h1>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthHero;
