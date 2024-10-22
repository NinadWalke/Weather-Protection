import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Importing form styling
import "../forms.css";

function SignUpPage() {
  // UseState for the form data
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: ""
  })
  // Handling form change
  function handleChange(e) {
    setFormData((currData) => {
      return {...currData, [e.target.name]: e.target.value};
    })
  }
  // Handling signup
  function handleSignup(e) {
    e.preventDefault();     // Prevent default submission behavior
    axios.post("http://localhost:8080/signup", formData) // send form data
    .then((res) => {
      console.log("Successfully registered user!");
    })
    .catch((err) => {
      console.log("Error while user registration!" + err);
    })
  }
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
                  <form onSubmit={handleSignup}>
                    <input
                     name="name"
                      className="mt-3 mb-4"
                      type="text"
                      placeholder="Name"
                    onChange={handleChange}/>
                    <br />
                    <input className="mb-4" name="username" type="text" placeholder="Username" onChange={handleChange}/>
                    <br />
                    <input
                      className="mb-4"
                      type="password"
                      placeholder="Password"
                      name="password"
                    onChange={handleChange}/>
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
