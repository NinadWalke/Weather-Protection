import React from "react";

// Page Imports
import CollabCard from "./components/CollabCard";
const descriptions = [
  "Hi, I am Ninad, a Full Stack Web Developer, who is orientied in backend based development. I've also worked with Java in the past and I'm currently a C++ DSA student.",
  "Hi, I am Shweta, a passionate full stack web developer with proficiency in Python. My expertise spans across the MERN stack and Django, enabling me to build dynamic and robust web applications. ",
  "Hi, I am Sakshi, a full stack developer with a growing interest in Java. On the frontend, I work with HTML and CSS to build responsive and user-friendly web applications. I am passionate about developing scalable solutions and continuously expanding my knowledge in full stack development.",
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
                img="/media/ninad.jpg"
                name="Ninad Walke"
                title="MERN Stack Developer"
                desc={descriptions[0]}
              />
              <CollabCard
                img="/media/sakshi.jpg"
                name="Sakshi Nikum"
                title="Full Stack Java Developer"
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
