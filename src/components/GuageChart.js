// src/components/GaugeChart.js
import React from "react";
import { RadialGauge } from "react-canvas-gauges";

const GaugeChart = ({ value, min = 0, max = 100, title }) => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <RadialGauge
        units="Units"
        title={title}
        value={value}
        minValue={min}
        maxValue={max}
        majorTicks={["0", "20", "40", "60", "80", "100"]}
        minorTicks={2}
        strokeTicks={true}
        highlights={[{ from: 0, to: 40, color: "rgba(200, 50, 50, .5)" }]}
        colors={["#FF0000", "#FFFF00", "#00FF00"]}
        needleType="arrow"
        needleOutline={{ width: 2 }}
        needleStartValue={10}
        needleColor="black"
        needleWidth={2}
        ticksAngle={240}
        startAngle={-120}
        animationDuration={1500}
      />
    </div>
  );
};

export default GaugeChart;
