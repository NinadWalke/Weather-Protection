import React from "react";

function BlogCard({blogImage = "/media/errorcardimg.jpg", blogTitle = "Default Title", blogSummary = "Default Summary"}) {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "460px"}}>
        <img src={blogImage} class="card-img-top" alt="..." width={"18rem"} height={"200px"}/>
        <div class="card-body">
          <h4 class="card-title mb-3">{blogTitle}</h4>
          <p class="card-text text-muted">
            {blogSummary}
          </p>
          <div className="text-center">
            <button className="site-btn-1 mt-3">Read</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
