import React from "react";

// Page Imports
import CollabCard from "./components/CollabCard";
const descriptions = [
  "Hi, I am Ninad, a Full Stack Web Developer, who is orientied in backend based development. I've also worked with Java in the past and I'm currently a C++ DSA student.",
  "Hi, I am Shweta, a passionate full stack web developer with proficiency in Python. My expertise spans across the MERN stack and Django, enabling me to build dynamic and robust web applications. ",
  "Hi, I am Aarya, a full stack web developer with a keen interest in Cybersecurity and Networking. Additionally I offer my experience as a freelance Web Developer, helping clients bring their digital vision to life.",
];
function Collaborators() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center">The dream team of Web Developers!</h1>
            <div
              className="mt-4"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <CollabCard
                img="/media/melol.png"
                name="Ninad Walke"
                title="MERN Stack Developer"
                desc={descriptions[0]}
              />
              <CollabCard
                img="/media/dumboo.jpg"
                name="Aarya Walve"
                title="MERN Stack Developer"
                desc={descriptions[2]}
              />
              <CollabCard
              img="/media/shevta.png"
                name="Shweta Shimpi"
                title="MERN Stack Developer"
                desc={descriptions[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaborators;
