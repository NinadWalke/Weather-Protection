import React from "react";
import { Link } from "react-router-dom";

// Importing form styling
import "../forms.css";

function LoginPage() {
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
                  <h2 class="card-title mt-3">Log In</h2>
                  <p class="card-text text-muted mt-3">
                    Welcome back! Ready to safeguard yourself?
                  </p>
                  <form action="">
                    <br />
                    <input className="mb-4" type="text" placeholder="Email" />
                    <br />
                    <input
                      className="mb-4"
                      type="password"
                      placeholder="Password"
                    />
                    <br />
                    <Link to={"/dashboard"}>
                      <button
                        className="btn btn-primary mb-4"
                        style={{ width: "375px" }}
                      >
                        Log In
                      </button>
                    </Link>
                    <p className="text-muted">
                      Don't have an account?{" "}
                      <Link to={"/register"}>
                        <span style={{ color: "#0A58CA" }}>Sign Up!</span>
                      </Link>
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

export default LoginPage;
