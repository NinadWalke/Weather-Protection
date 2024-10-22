import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Importing form styling
import "../forms.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
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
        navigate("/dashboard");
      }
    } catch (err) {
      // If there is an error (invalid credentials), show an error message
      setErrorMessage("Invalid username or password");
    }
  }
  return (
    <>
      <div className="container-fluid form-cont">
        <div className="container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="row">
            <div className="col mt-5 mb-5 pt-5 pb-5">
              <div className="card" style={{ width: "30rem" }}>
                <div className="card-body text-center">
                  <h2 className="card-title mt-3">Log In</h2>
                  <p className="card-text text-muted mt-3">Welcome back! Ready to safeguard yourself?</p>
                  
                  {/* Error message */}
                  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                  <form onSubmit={handleLogin}>
                    <input 
                      className="mb-4" 
                      type="text" 
                      name="username" 
                      placeholder="Username" 
                      onChange={handleChange} 
                    />
                    <br />
                    <input 
                      className="mb-4" 
                      type="password" 
                      name="password" 
                      placeholder="Password" 
                      onChange={handleChange} 
                    />
                    <br />
                    <button className="btn btn-primary mb-4" style={{ width: "375px" }}>
                      Log In
                    </button>
                  </form>

                  <p className="text-muted">
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
      </div>
    </>
  );
}

export default LoginPage;
