import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PowerIcon from "../../../assets/images/power-icon.png";
import "./LogoutButton.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.href } })
      }
      className="logout-button"
    >
      <img src={PowerIcon} alt="logout icon" width={15} height={15} />
    </button>
  );
};

export default LogoutButton;
