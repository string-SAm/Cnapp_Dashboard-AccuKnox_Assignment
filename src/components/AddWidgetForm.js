// src/components/AddWidgetForm.js
import React, { useState } from "react";

const AddWidgetForm = ({ addWidget, onClose }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("summary");
  const [labels, setLabels] = useState([""]);
  const [dataValues, setDataValues] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [activeTab, setActiveTab] = useState(0); // Default tab selection set to 0 (index)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      type,
      title,
      data: { labels, values: dataValues, colors },
    };
    addWidget(activeTab, newWidget); // Pass the correct index (0 to 3) depending on the active tab
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setType("summary");
    setLabels([""]);
    setDataValues([""]);
    setColors([""]);
  };

  const handleAddDetail = () => {
    setLabels([...labels, ""]);
    setDataValues([...dataValues, ""]);
    setColors([...colors, ""]);
  };

  const handleRemoveDetail = (index) => {
    const updatedLabels = labels.filter((_, i) => i !== index);
    const updatedDataValues = dataValues.filter((_, i) => i !== index);
    const updatedColors = colors.filter((_, i) => i !== index);

    setLabels(updatedLabels);
    setDataValues(updatedDataValues);
    setColors(updatedColors);
  };

  return (
    <div className="add-widget-form-container">
      {/* Navbar */}
      <div className="add-widget-navbar">
        <span>Add Widget</span>
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
      </div>
      <p>Personalise your dashboard by adding the following widget </p>
      {/* Tabs for category selection */}
      <div className="add-widget-tabs">
        {["CSPM", "CWPP", "Image", "Ticket"].map((tab, index) => (
          <div
            key={tab}
            className={`add-widget-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="add-widget-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="summary">Summary</option>
            <option value="pie_chart">Pie Chart</option>
            <option value="bar_chart">Bar Chart</option>
          </select>
          {type === "pie_chart" && (
            <div>
              <h4>Pie Chart Details</h4>
              {labels.map((label, index) => (
                <div key={index} className="detail-entry">
                  <input
                    type="text"
                    placeholder="Label"
                    value={label}
                    onChange={(e) => {
                      const updatedLabels = [...labels];
                      updatedLabels[index] = e.target.value;
                      setLabels(updatedLabels);
                    }}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Value"
                    value={dataValues[index]}
                    onChange={(e) => {
                      const updatedDataValues = [...dataValues];
                      updatedDataValues[index] = e.target.value;
                      setDataValues(updatedDataValues);
                    }}
                    required
                  />
                  <input
                    type="color"
                    value={colors[index]}
                    onChange={(e) => {
                      const updatedColors = [...colors];
                      updatedColors[index] = e.target.value;
                      setColors(updatedColors);
                    }}
                    required
                  />
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => handleRemoveDetail(index)}
                  >
                    Cancel
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddDetail}>
                Add More Details
              </button>
            </div>
          )}

          {/* Footer Buttons */}
        </form>
      </div>
      <div className="add-widget-footer">
        <button className="cancel-button" type="button" onClick={onClose}>
          Cancel
        </button>
        <button className="confirm-button" type="submit">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddWidgetForm;
