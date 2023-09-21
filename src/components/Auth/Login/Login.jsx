import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="welcome-container">
        <h3>Welcome to HNGrid</h3>
        <div className="welcome-note">
          We are excited to have you here. If you haven't already, create and
          acount to get access to our awesome draggable grid.
        </div>
        <LoginButton />
      </div>
      <div className="sample-grid"></div>
    </div>
  );
};

export default Login;
