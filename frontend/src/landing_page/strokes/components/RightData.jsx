import React from "react";

function RightData({
    sectionImgUrl,
    sectionTitle = "Title",
    sectionData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil, labore eligendi eveniet itaque saepe ducimusnostrum sequi aspernatur deleniti voluptates quo dolores, quaeratassumenda facere temporibus quidem suscipit possimus!",
  }) {
  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">{sectionTitle}</h3>
            <p>
              {sectionData}
            </p>
          </div>
          <div className="col">
            <div
              style={{
                width: "550px",
                height: "300px",
                backgroundColor: "red",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightData;
