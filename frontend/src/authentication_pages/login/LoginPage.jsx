import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";

// Importing form styling
import "../forms.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // Show Password functionality
  const [showEnabled, setShowEnabled] = useState(false);
  const enableShow = () => setShowEnabled(!showEnabled);
  const navigate = useNavigate(); // React Router hook to navigate between pages

  // Handling form input change
  function handleChange(e) {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  }

  // Handling login form submission
  async function handleLogin(e) {
    e.preventDefault(); // Prevent default submission behavior

    try {
      const res = await axios.post("http://localhost:8080/login", formData); // Send login request to backend
      if (res.status === 200) {
        // If login is successful, redirect to the dashboard
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: "3000",
        });
        navigate("/dashboard");
      }
    } catch (err) {
      // If there is an error (invalid credentials), show an error message
        toast.error("Error logging user in!", {
          position: "top-right",
          autoClose: "3000",
        });
        navigate("/login");
    }
  }
  return (
    <>
      <div className="container-fluid form-cont">
        <div className="row">
          <div className="col-12 mt-5 mb-5 pt-5 pb-5 d-flex justify-content-center">
            <div className="card" style={{ width: "40%" }}>
              <div className="card-body">
                <h2 className="card-title mt-3 text-center">Log In</h2>
                <p className="card-text text-muted mt-3 text-center">
                  Welcome back! Ready to safeguard yourself?
                </p>
                <form onSubmit={handleLogin}>
                  <label htmlFor="username" className="mb-3 mx-3">
                    Username
                  </label>
                  <br />
                  <input
                    className="mb-4 mx-3"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                  <br />
                  <label htmlFor="password" className="mb-3 mx-3">
                    Password
                  </label>
                  <div className="position-relative d-flex align-items-center">
                    <input
                      type={showEnabled ? "text" : "password"}
                      className="signup-input mx-3"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    {showEnabled ? (
                      <i
                        className="fa-solid fa-eye position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px"}}
                        onClick={enableShow}
                      ></i>
                    ) : (
                      <i
                        class="fa-solid fa-eye-slash position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px"}}
                        onClick={enableShow}
                      ></i>
                    )}
                  </div>
                  <br />
                  <div className="btn-holder text-center">
                    <button
                      className="btn btn-primary mb-4"
                      style={{ width: "375px" }}
                    >
                      Log In
                    </button>
                  </div>
                </form>
                <p className="text-muted text-center">
                  Don't have an account?{" "}
                  <a href="/register">
                    <span style={{ color: "#0A58CA" }}>Sign Up!</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
