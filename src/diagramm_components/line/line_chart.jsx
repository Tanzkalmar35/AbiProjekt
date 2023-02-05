import React from "react";
import { Line } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { co2_pre } from "../../Logic/formals";

const Line_chart = ({ trigger }) => {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [data, setData] = React.useState({
    labels: ["12:01", "12:02", "12:03", "12:04", "12:05", "12:06", "12:07"],
    datasets: [
      {
        data: co2_pre(0.4),
        

        borderColor: "gray",
      },
    ],
  });

  return trigger ? (
    <div className="w-screen h-screen flex justify-center align-middle">
      <Line data={data} />
    </div>
  ) : null;
};

export default Line_chart;
