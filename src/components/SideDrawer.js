// src/components/SideDrawer.js
import React from "react";
import AddWidgetForm from "./AddWidgetForm";

const SideDrawer = ({ isOpen, onClose, addWidget }) => {
  if (!isOpen) {
    return null; // Return null if the drawer is not open
  }

  return (
    <div className="side-drawer">
      <AddWidgetForm addWidget={addWidget} onClose={onClose} />
    </div>
  );
};

export default SideDrawer;
