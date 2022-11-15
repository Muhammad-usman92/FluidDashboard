import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      style={{ backgroundColor: "white", borderRadius: "10px" }}
      className='px-4'
    />
  );
}

export default BarChart;
