import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [authState, setAuthState] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="navbar-container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="authButton"
            onClick={() =>
              setAuthState((prev) => (prev == "Login" ? "Logout" : "Login"))
            }
          >
            {authState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
