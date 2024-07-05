import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./src/components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App

