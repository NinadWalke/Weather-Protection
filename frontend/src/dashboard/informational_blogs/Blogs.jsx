import React from "react";
import { Link } from "react-router-dom";

// Imports
import BlogCard from "./components/BlogCard";

function Blogs() {
  return (
    <>
      <div className="btn-holder" style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Link to={"/dashboard/postblog"}><button className="btn btn-primary mt-5" style={{width: "250px", height: "50px", fontSize: "1.1rem"}}>Post a blog</button></Link>
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
            blogSummary = "Default Summary"} */
        }
        <Link to={"/dashboard/blogs/123"}><BlogCard /></Link>
        <BlogCard />
        <BlogCard />
      </div>
    </>
  );
}

export default Blogs;
