import React from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import "../styles.css";

const Category = ({ category, index, removeWidget, openDrawer }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgetContainer">
        {category.widgets.map((widget, widgetIndex) => (
          <Widget
            key={widgetIndex}
            widget={widget}
            categoryIndex={index}
            widgetIndex={widgetIndex}
            removeWidget={removeWidget}
          />
        ))}
        <div className="widget">
          <button onClick={openDrawer}>Add Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
