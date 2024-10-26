import React from "react";
import Chart from "react-apexcharts";

const DataChart = ({ series }) => {
  const options = {
    labels: ["มาเรียน", "ลา", "ขาดเรียน"],
    colors: ["#148f77", "#f1c40f", "#F20000"]
  };

  return <Chart options={options} series={series} type="pie" width="350" />;
};

export default DataChart;
