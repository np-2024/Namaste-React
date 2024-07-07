import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
// import "./App.css";
import Header from "./src/components/Header";
import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col gap-6 pt-12 relative font-serif">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App

