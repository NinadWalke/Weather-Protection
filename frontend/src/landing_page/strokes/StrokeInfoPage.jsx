import React from "react";

// Imports

import SunStrokes from "./SunStrokes";
import StrokeStatistics from "./StrokeStatistics";
import Causes from "./Causes";
import Symptoms from "./Symptoms";

function StrokeInfoPage() {
  return (
    <>
      <div className="stroke-hero">
        <div
          className="home-hero-div"
          style={{
            backgroundImage: "url(/media/strokeheroimg.jpg)",
            width: "100%",
            height: "550px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row py-5">
              <div className="col pt-5 mt-5">
                <h1 style={{ fontSize: "5rem", color: "white" }}>
                  Know your enemy!
                  <br />
                </h1>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
      <SunStrokes />
      <Causes />
      <Symptoms />
      <StrokeStatistics />
    </>
  );
}

export default StrokeInfoPage;
