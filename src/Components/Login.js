import React, { useState } from "react";
import Todo from "./Todo"; 
import "./Login.css"; 
import todo from "../utils/images/todo.jpg"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Todo />;
  }

  return (
    <div className="login-container">
      <img src={todo} alt="todo" className="todoImg"/>
      <div className="login-form">
        <h2>Sign in now</h2>
        <form>
          <div className="emailInput">
            <input
              className="email"
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="signup-link">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
          <button type="button" className="login-button" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
