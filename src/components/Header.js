import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [authState, setAuthState] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="authButton" onClick={()=> setAuthState((prev) => prev =="Login" ? "Logout" : "Login")}>{authState}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
