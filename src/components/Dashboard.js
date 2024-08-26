import React from "react";
import Category from "./Category";
import "../styles.css";

const Dashboard = ({ categories, addWidget, removeWidget, openDrawer }) => {
  return (
    <div className="dashboard">
      {categories.map((category, index) => (
        <Category
          key={index}
          index={index}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
          openDrawer={openDrawer}
        />
      ))}
    </div>
  );
};

export default Dashboard;
