import React from "react";

function LeftData({
  sectionImgUrl,
  sectionTitle = "Title",
  sectionData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil, labore eligendi eveniet itaque saepe ducimusnostrum sequi aspernatur deleniti voluptates quo dolores, quaeratassumenda facere temporibus quidem suscipit possimus!",
}) {
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row pb-5">
          <div className="col">
            <div
              style={{
                width: "550px",
                height: "300px",
                backgroundColor: "red",
              }}
            ></div>
          </div>
          <div className="col">
            <h3 className="mb-4">{sectionTitle}</h3>
            <p>
              {sectionData}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftData;
