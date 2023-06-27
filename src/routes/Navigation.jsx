import React from "react";
import Home from "../components/Home";
import Ministries from "../components/Ministries";
import { Routes, Route } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ministries" element={<Ministries />} />
      </Routes>
    </div>
  );
}

export default Navigation;
