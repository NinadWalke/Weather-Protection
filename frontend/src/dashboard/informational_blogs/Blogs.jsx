import React from "react";
import { Link } from "react-router-dom";

// Imports
import BlogCard from "./components/BlogCard";

function Blogs() {
  return (
    <>
      <div
        className="btn-holder"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Link to={"/dashboard/postblog"}>
          <button
            className="site-btn-1 mt-5"
            style={{ width: "250px", height: "50px", fontSize: "1.1rem" }}
          >
            Post a blog
          </button>
        </Link>
      </div>
      <div
        className="grid-cards mt-5 mb-5 pb-5"
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyItems: "center",
          alignItems: "center",
          gap: "10px", // adjust spacing between cards
        }}
      >
        {/* Props for blogCard:
        {
            blogImage = "/media/errorcardimg.jpg", 
            blogTitle = "Default Title", 
            blogSummary = "Default Summary"} */}
        <Link to={"/dashboard/blogs/100"}>
          <BlogCard
            blogImage="/media/sunstrokeblog1.jpg"
            blogTitle="Home Remedies for Sun Strokes"
            blogSummary="We have launched various home remedies to counter sun strokes, which will eventually help you to safeguard your well being."
          />
        </Link>
        <Link to={"/dashboard/blogs/101"}>
          <BlogCard
            blogImage="/media/stormblog1.jpg"
            blogTitle="Stay Safe During Stormy Winds"
            blogSummary="Discover essential tips and precautions to protect yourself and your surroundings during high-speed stormy winds."
          />
        </Link>

        <Link to={"/dashboard/blogs/102"}>
          <BlogCard
            blogImage="/media/weathercareblog1.jpg"
            blogTitle="Daily Care from Weather Anomalies"
            blogSummary="Learn simple everyday practices that shield you from sudden weather shifts like humidity, pollution, and UV exposure."
          />
        </Link>
      </div>
    </>
  );
}

export default Blogs;
