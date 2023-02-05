import React from "react";
import { Bar } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";


const bar_chart = ({ trigger }) => {
  chartjs.register(ArcElement, Tooltip, Legend);
  const [data, setData] = React.useState();

  return trigger ? (
    <div className="w-screen h-screen flex justify-center align-middle">
      <Bar data={data} />
    </div>
  ) : null;
};

export default bar_chart;
