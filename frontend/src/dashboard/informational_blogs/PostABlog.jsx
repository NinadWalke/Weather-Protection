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
      <h1 className="blog-form-title">Post Your Blog</h1>

<div className="blog-form-container">
  <form onSubmit={handleSubmit} className="blog-form">
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter blog title"
      />
    </div>

    <div className="form-group">
      <label htmlFor="summary">Summary</label>
      <input
        name="summary"
        type="text"
        value={formData.summary}
        onChange={handleChange}
        placeholder="Enter blog summary"
      />
    </div>

    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Write your blog content here..."
      ></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="photo">Images (Min. 3 Required)</label>
      <input
        type="file"
        name="photo"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </div>

    <div className="button-group">
      <button type="submit" className="submit-btn">
        Post
      </button>
      <button type="button" className="draft-btn" onClick={handleDraft}>
        Save as Draft
      </button>
    </div>
  </form>
</div>

    </>
  );
}

export default PostABlog;
