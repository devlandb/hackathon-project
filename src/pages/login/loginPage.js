import React, { useState } from "react";
import "./loginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit clicked!");
        let authenticated;
        if (!username || !password) {
          setError("You must enter a username and password");
          return;
        }
        console.log("here"); 
        {/*
        try {
          const allUsersResponse = await fetch(
            `http://localhost:8000/api/database?query=SELECT COUNT(*), id FROM users WHERE username = '${username}' AND password = '${password}'`
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data[0]);
              authenticated = data[0]["COUNT(*)"];
              let user_data = { id: data[0]["id"] };
              localStorage.setItem("resumeUserData", JSON.stringify(user_data));
              localStorage.setItem("selectedResume", "-1");
            });
        } catch (e) {
          authenticated = 0;
          console.warn(e);
        }
        */}
        if (authenticated) {
          console.log("Login successful");
          //logInToApp();
          // navigate('/');
        } else {
          setError("Invalid username or password.");
        }
      };
      return (
        <div className="login-body">
          <div className="login-container">
            <h1 className="form-title">Log In to RamblePlan</h1>
            {error && <div className="error">{error}</div>}
    
            <form onSubmit={() => handleSubmit} className="login-form">
              <div>
                <label htmlFor="username" className="input-label">
                  Username or Email:
                </label>
                <input
                  className="input-box"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username or Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="input-label">
                  Password:
                </label>
                <input
                  className="input-box"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
    
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button onClick={handleSubmit} className="login-button">
                Log In
              </button>
            </form>
    
            <p className="signup">
              Don't have an account?{" "}
              <a href="#" className="signup-link">
                Sign up
              </a>
            </p>
          </div>
        </div>
      );
};
export default LoginPage;