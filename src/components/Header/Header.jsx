import React from "react";
import LoginButton from "../Auth/LoginButton/LoginButton";
import LogoutButton from "../Auth/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <header className="header">
      <img className="logo" src={Logo} alt="logo" />
      <div className="authenticated-user-container">
        {isAuthenticated && (
          <div className="logout-container">
            <img
              className="authenticated-user-icon"
              src={user.picture}
              alt={user.name}
            />
            <LogoutButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
