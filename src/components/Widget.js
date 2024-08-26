// src/components/Widget.js
import React from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Widget = ({ widget, categoryIndex, widgetIndex, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.title}</h3>
      {widget.type === "pie_chart" && <PieChart data={widget.data} />}
      {widget.type === "bar_chart" && <BarChart data={widget.data} />}
      <button onClick={() => removeWidget(categoryIndex, widgetIndex)}>
        Remove Widget
      </button>
    </div>
  );
};

export default Widget;
