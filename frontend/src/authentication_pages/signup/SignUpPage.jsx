import React from "react";
import { Link } from "react-router-dom";

// Importing form styling
import "../forms.css";

function SignUpPage() {
  return (
    <>
      <div className="container-fluid form-cont">
        <div
          className="container"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <div className="col mt-5 mb-5 pt-5 pb-5">
              <div class="card" style={{ width: "30rem" }}>
                <div class="card-body text-center">
                  <h2 class="card-title mt-3">Sign Up</h2>
                  <p class="card-text text-muted mt-3">
                    Let's get started with your registration!
                  </p>
                  <form action="">
                    <input
                      className="mt-3 mb-4"
                      type="text"
                      placeholder="Name"
                    />
                    <br />
                    <input className="mb-4" type="text" placeholder="Email" />
                    <br />
                    <input
                      className="mb-4"
                      type="password"
                      placeholder="Password"
                    />
                    <br />
                    <button
                      className="btn btn-primary mb-4"
                      style={{ width: "375px" }}
                    >
                      Sign Up
                    </button>
                    <p className="text-muted">
                      Already have an account?{" "}
                      <Link to={"/login"}><span style={{ color: "#0A58CA" }}>Log In</span></Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
