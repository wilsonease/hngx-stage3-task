import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import SampleGrid from "../../../assets/images/sample-grid.png";
import SecurityIcon from "../../../assets/images/security-icon.svg";

import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="welcome-container">
          <h3>Welcome to HNGrid</h3>
          <div className="welcome-note">
            We are excited to have you here. If you haven't already, create and
            acount to get access to our awesome draggable grid.
          </div>
          <LoginButton />
        </div>
        <div className="sample-grid">
          <img src={SampleGrid} alt="sample grid" />
        </div>
      </div>
      <section className="security">
        <div>
          <img src={SecurityIcon} alt="security" />
        </div>
        <div>
          <h4>Your security is our priority</h4>

          <p>
            HNGrid uses the highest level of Internet Security and it is secured
            by 256 bits SSL security encryption to ensure that your information
            is comepletely protected from fraud.
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
