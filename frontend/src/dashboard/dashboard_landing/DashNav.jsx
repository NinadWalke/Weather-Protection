import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg p-4 pb-4">
        <div class="container-fluid">
          <Link className="navbar-brand text-center ms-5 ps-5" to="/">
            <img
              src="./media/templogo.png"
              alt="Temp_Sun_Logo"
              width={"20%"}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav m-auto mb-2 mb-lg-0 text-center"
              style={{ fontFamily: "Montserrat", fontWeight: "500" }}
            >
              <li class="nav-item" style={{ width: "350px" }}>
                <Link class="nav-link active" to="/dashboard/weather">
                  Weather Tracking
                </Link>
              </li>
              <li class="nav-item" style={{ width: "350px" }}>
                <Link class="nav-link active" to="/dashboard/analyzer">
                  Symptoms Analyzer
                </Link>
              </li>
              <li class="nav-item" style={{ width: "350px" }}>
                <Link class="nav-link active" to="/dashboard/blogs">
                  Informational Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
