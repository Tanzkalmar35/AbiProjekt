import React from "react";
import { Bar } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const bar_chart = ({ trigger }) => {
  chartjs.register(ArcElement, Tooltip, Legend);
  const [data, setData] = React.useState({
    labels: ["O2", "N2", "H2O", "CO2"],
    datasets: [
      {
        data: [20, 78, 10, 0.04],
        backgroundColor: [
          "rgba(101, 147, 245)",
          "rgba(0, 0, 128)",
          "rgb(16 52 166)",
          "rgb(0 49 80)",
        ],
        borderColor: "black",
      },
    ],
  });

  return trigger ? (
    <div className="w-screen h-screen flex justify-center align-middle">
      <Bar data={data} />
    </div>
  ) : null;
};

export default bar_chart;
