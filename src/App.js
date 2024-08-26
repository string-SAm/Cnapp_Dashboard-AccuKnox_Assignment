// src/App.js
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import "./styles.css";
import { data } from "./data";

const App = () => {
  const [dashboardData, setDashboardData] = useState(data);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDashboardData(data);
  }, []);

  const addWidget = (categoryIndex, widget) => {
    const newCategories = [...dashboardData.categories];
    newCategories[categoryIndex].widgets.push(widget);
    setDashboardData({ ...dashboardData, categories: newCategories });
  };

  const removeWidget = (categoryIndex, widgetIndex) => {
    const newCategories = [...dashboardData.categories];
    newCategories[categoryIndex].widgets.splice(widgetIndex, 1);
    setDashboardData({ ...dashboardData, categories: newCategories });
  };

  return (
    <div className="App">
      <Navbar openDrawer={() => setDrawerOpen(true)} />
      <Dashboard
        categories={dashboardData.categories}
        removeWidget={removeWidget}
        addWidget={addWidget}
        openDrawer={() => setDrawerOpen(true)}
      />
      <SideDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        addWidget={addWidget}
      />
    </div>
  );
};

export default App;
