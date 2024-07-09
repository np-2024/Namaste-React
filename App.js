import React, { useEffect, useState } from "react";
import { Outlet, RouterProvider } from "react-router-dom";
// import "./App.css";
import Header from "./src/components/Header";
import "./index.css";
import UserContext from "./src/context/UserContext";

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = "Neha";
    setUserName(data);
  });

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="flex flex-col gap-6 pt-12 relative font-serif">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
};

export default App;
