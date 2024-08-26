// src/components/Navbar.js
import React from "react";

const Navbar = ({ openDrawer }) => {
  return (
    <nav className="navbar">
      <h1>CNAPP Dashboard</h1>
      <button onClick={openDrawer}>Add Widget</button>
    </nav>
  );
};

export default Navbar;
