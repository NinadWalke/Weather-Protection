import React from "react";
import {Link} from 'react-router-dom'

import './PostABlog.css';

function PostABlog() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Post your blog!</h1>
      <div
        className="mb-5 p-5"
        style={{ width: "80%", margin: "0 auto", backgroundColor: "#fcfcfc", borderRadius: "1rem", border: "1px solid lightgrey"}}
      >
        <form action="">
          <h3>Blog Title</h3>
          <input className="blog-inputs" type="text" placeholder="Sunstrokes, a man's worst nightmare....."/>
          <h3 className="mt-4">Blog Summary</h3>
          <input className="blog-inputs" type="text" placeholder="Write a good attractive invitation to your blog!"/>
          <h3 className="mt-4">Blog Content</h3>
          <textarea className="blog-ta" name="" id="" style={{width: "100%", height: "300px", borderRadius: "0.5rem", padding: "1rem"}} placeholder="Today, we talk about..."></textarea>
        <div className="btn-holder-div mt-4 mb-4" style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <Link to={""}><button className="btn btn-primary" style={{width: "250px"}}>Post</button></Link>
        </div>
        </form>
      </div>
    </>
  );
}

export default PostABlog;
