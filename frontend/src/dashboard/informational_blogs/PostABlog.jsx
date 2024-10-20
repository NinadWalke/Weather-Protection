import React from "react";

import './PostABlog.css';

function PostABlog() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Post your blog!</h1>
      <div
        className="mb-5 p-5"
        style={{ width: "80%", margin: "0 auto", backgroundColor: "#fcfcfc", borderRadius: "1rem", boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.3)"}}
      >
        <form action="">
          <h3>Blog Title</h3>
          <input className="blog-inputs" type="text" placeholder="Sunstrokes, a man's worst nightmare....."/>
          <h3 className="mt-4">Blog Tags</h3>
          <input className="blog-inputs" type="text" placeholder="Remedies, Precautions,...."/>
          <h3 className="mt-4">Blog Content</h3>
          <textarea className="blog-ta" name="" id="" style={{width: "100%", height: "300px", borderRadius: "0.5rem", padding: "1rem"}} placeholder="Today, we talk about..."></textarea>
        <div className="btn-holder-div mt-4 mb-4" style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <button className="btn btn-primary" style={{width: "250px"}}>Post</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default PostABlog;
