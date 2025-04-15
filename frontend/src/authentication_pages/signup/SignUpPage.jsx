import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify"
import axios from "axios";

// Importing form styling
import "../forms.css";

function SignUpPage() {
  const navigate = useNavigate();
  // UseState for the form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    gender: "",
    password: "",
    confpassword: ""
  });
  // useState for show password
  const [showEnabled, setShowEnabled] = useState(false);
  const enableShow = () => setShowEnabled(!showEnabled);

  // Handling form change
  function handleChange(e) {
    setFormData((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  }
  // Handling signup
  function handleSignup(e) {
    e.preventDefault(); // Prevent default submission behavior
    axios
      .post("http://localhost:8080/signup", formData) // send form data
      .then((res) => {
        console.log("Successfully registered user!");
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: "3000",
        });
        // Reset form data after success
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          confPassword: "",
          dob: "",
          gender: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log("Error while user registration!" + err);
        toast.error("Error registering user!", {
          position: "top-right",
          autoClose: "3000",
        });
        navigate("/register");
      });
  }
  return (
    <>
      <div className="container-fluid form-cont">
        <div className="row">
          <div className="col-12 mt-3 mb-5 pt-5 pb-5 d-flex justify-content-center">
            <div class="card" style={{ width: "40%" }}>
              <div class="card-body">
                <h2 class="card-title mt-3 text-center">Sign Up</h2>
                <p class="card-text text-muted mt-3 text-center">
                  Let's get started with your registration!
                </p>
                <form onSubmit={handleSignup}>
                  <label className="mx-3" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="mt-3 mb-4 mx-3"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <label className="mx-3" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="mt-3 mb-4 mx-3"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                  <label className="mx-3" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="mt-3 mb-4 mx-3"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                  <div className="row">
                  <div className="col">
                  <label htmlFor="dob" className="mx-3">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="mx-3 mt-3 mb-4"
                    name="dob"
                    onChange={handleChange}
                    value={formData.dob}
                    required
                    style={{height: "3rem", padding: "1rem"}}
                  />
                </div>
                <div className="col">
                  <label htmlFor="gender" className="signup-label">
                    Gender
                  </label>
                  <br />
                  <select
                    name="gender"
                    id="gender"
                    style={{
                      width: "92%",
                      height: "50px",
                      marginTop: "1rem",
                      paddingLeft: "1rem",
                      background: "none",
                      border: "1px solid lightgrey"
                    }}
                    onChange={handleChange}
                    value={formData.gender}
                    required
                  >
                    <option value="" disabled>
                      Select gender
                    </option>
                    <option value="Male" style={{ color: "black" }}>
                      Male
                    </option>
                    <option value="Female" style={{ color: "black" }}>
                      Female
                    </option>
                    <option value="Other" style={{ color: "black" }}>
                      Other
                    </option>
                    <option
                      value="N/A"
                      style={{ color: "black" }}
                    >
                      Prefer not to say
                    </option>
                  </select>
                </div>
              </div>
                  <label className="mx-3" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="mt-3 mb-4 mx-3"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <label htmlFor="password" className="mx-3">
                    Password
                  </label>
                  <div className="position-relative d-flex align-items-center">
                    <input
                      type={showEnabled ? "text" : "password"}
                      className="mt-3 mb-4 mx-3"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    {showEnabled ? (
                      <i
                        className="fa-solid fa-eye position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px" }}
                        onClick={enableShow}
                      ></i>
                    ) : (
                      <i
                        class="fa-solid fa-eye-slash position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px" }}
                        onClick={enableShow}
                      ></i>
                    )}
                  </div>
                  <label htmlFor="confpassword" className="mx-3">
                    Confirm Password
                  </label>
                  <div className="position-relative d-flex align-items-center">
                    <input
                      type={showEnabled ? "text" : "password"}
                      className="mt-3 mb-4 mx-3"
                      name="confpassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                    />
                    {showEnabled ? (
                      <i
                        className="fa-solid fa-eye position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px" }}
                        onClick={enableShow}
                      ></i>
                    ) : (
                      <i
                        class="fa-solid fa-eye-slash position-absolute end-0 top-50 translate-middle-y me-5"
                        style={{ cursor: "pointer", fontSize: "19px" }}
                        onClick={enableShow}
                      ></i>
                    )}
                  </div>
                  <div className="btn-holder text-center">
                    <button
                      className="btn btn-primary mb-4"
                      style={{ width: "375px" }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-muted text-center">
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span style={{ color: "#0A58CA" }}>Log In</span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
