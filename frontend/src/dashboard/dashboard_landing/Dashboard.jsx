import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-5 pb-5">
          <div className="col">
            <h1 style={{ fontSize: "3.5rem" }}>Welcome to your dashboard!</h1>
            <p className="mt-4" style={{marginRight: "5rem"}}>
              This dashboard is your personalized guide to staying safe and
              informed about sunstroke risks. From tracking live weather
              conditions to analyzing your symptoms, we provide the tools you
              need to take proactive steps against heat-related illnesses.<br/>You
              can also explore a wealth of informational blogs that offer expert
              advice on sunstroke prevention, recovery tips, and healthy
              lifestyle recommendations to keep you safe during extreme weather.
              Choose from the options below to get started and stay protected
              under the sun.
            </p>
            <div className="btn-div mt-5 mx-2" style={{width: "100%"}}>
                <Link to={"/dashboard/weather"}><button className="btn btn-primary" style={{width: "450px", height: "50px"}}>Start with Weather Tracking</button></Link>
            </div>
          </div>
          <div className="col">
            <img
              src="/media/dashboardstats.jpg"
              alt="Oops...error occurred"
              width={"700px"}
              height={"550px"}
              style={{
                borderRadius: "1.5rem",
                outline: "1px solid grey",
                boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
