import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="logo-container">
        <img loading="lazy" src={LOGO_URL} />
      </div>
      <div className="navbar-container">
        Online Status:
        <div>{onlineStatus === false ? <span>🔴</span> : <span>🟢</span>}</div>
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
