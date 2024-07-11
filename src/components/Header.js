import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center fixed top-0 bottom-0 left-0 right-0 bg-white pl-5 pr-5 h-14 z-10 shadow-lg">
      <div onClick={() => navigate("/")} className="h-14 w-14 cursor-pointer">
        <img
          loading="lazy"
          src={LOGO_URL}
          className="h-full w-full  rounded-full"
        />
      </div>
      <div>
        Online Status:{" "}
        {onlineStatus === false ? <span>🔴</span> : <span>🟢</span>}
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-6 list-none no-underline font-semibold text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="relative">
            <Link to={"/cart"}>
              🛒
              {cartItems?.length > 0 && (
                <div className="text-xs absolute bg-green-500 rounded-full pl-1 pr-1 top-4 right-0">
                  {cartItems?.length}
                </div>
              )}
            </Link>
          </li>
        </ul>
        {/* <h2 className="ml-2 font-semibold text-lg">{loggedInUser}</h2> */}
        <button
          className="ml-2 p-2 w-20 cursor-pointer"
          onClick={() =>
            setAuthState((prev) => (prev == "Login" ? "Logout" : "Login"))
          }
        >
          {authState}
        </button>
      </div>
    </div>
  );
};

export default Header;
