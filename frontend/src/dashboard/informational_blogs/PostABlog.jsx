import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

import "./PostABlog.css";

function PostABlog() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    // images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here (you could POST to your backend API)
    console.log("Posting blog:", formData);
    try {
      const res = await axios.post("http://localhost:8080/blog/post", formData, {withCredentials: true});
      if (res.status == 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: "3000",
        });
        navigate("/dashboard/postblog"); // replace with actual route
      }
    } catch (e) {
      console.log(e);
      toast.error("Error posting blog!", {
        position: "top-right",
        autoClose: "3000",
      });
      navigate("/dashboard/postblog");
    }
    // Navigate or reset
  };
  const handleDraft = (e) => {
    e.preventDefault();
    console.log("Saving as draft:", formData);
    // Save draft logic here
  };
  return (
    <>
      <h1 className="text-center mt-5">Post your blog!</h1>
      <div className="p-3" style={{ width: "80%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            className="blog-inputs mt-3 mb-3"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Blog title"
          />

          <label htmlFor="summary">Summary</label>
          <input
            className="blog-inputs mt-3 mb-3"
            name="summary"
            type="text"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Blog summary"
          />

          <label htmlFor="content">Content</label>
          <textarea
            className="blog-ta mt-3 mb-3"
            name="content"
            value={formData.content}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "300px",
              padding: "1rem",
            }}
            placeholder="Write your blog content here..."
          ></textarea>

          <label htmlFor="photo" className="mb-3">
            Images (Minimum Three Required)
          </label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ border: "none", outline: "none" }}
          />

          <div
            className="btn-holder-div mt-4 mb-4 justify-content-evenly"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "200px", borderRadius: "0px" }}
            >
              Post
            </button>
            <button
              className="btn btn-primary"
              onClick={handleDraft}
              style={{ width: "300px", borderRadius: "0px" }}
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostABlog;
