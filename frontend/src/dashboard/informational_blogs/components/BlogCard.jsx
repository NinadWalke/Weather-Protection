import React from "react";

function BlogCard({blogImage = "/media/errorcardimg.jpg", blogTitle = "Default Title", blogSummary = "Default Summary"}) {
  return (
    <>
      <div class="card" style={{ width: "25rem", height: "400px"}}>
        <img src={blogImage} class="card-img-top" alt="..." width={"18rem"} height={"200px"}/>
        <div class="card-body">
          <h5 class="card-title">{blogTitle}</h5>
          <p class="card-text">
            {blogSummary}
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
