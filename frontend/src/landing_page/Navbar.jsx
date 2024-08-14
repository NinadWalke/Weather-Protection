import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg p-4 pb-4">
        <div class="container-fluid text-center">
          <Link class="navbar-brand text-center ms-5 ps-5" to="/">
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
              <li class="nav-item" style={{ width: "150px" }}>
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item" style={{ width: "150px" }}>
                <Link class="nav-link active" to="/health">
                  Your health
                </Link>
              </li>
              <li class="nav-item" style={{ width: "150px" }}>
                <Link class="nav-link active" to="/strokes">
                  Sun Strokes
                </Link>
              </li>
              <li class="nav-item" style={{ width: "150px" }}>
                <Link class="nav-link active" to="/about">
                  About Us
                </Link>
              </li>
              <li class="nav-item ms-5" style={{ width: "150px" }}>
                <Link
                  class="nav-link active btn btn-primary"
                  to="/register"
                  style={{ color: "white" }}
                >
                  Get started
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
