// src/components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components for Bar Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Values",
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
