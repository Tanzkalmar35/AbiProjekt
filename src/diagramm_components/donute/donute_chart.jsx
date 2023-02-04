import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";


const Donute_chart = () => {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [middle, setMiddle] = useState("he");

  const [data, setData] = React.useState({
    labels: ["O2", "N2", "H2O", "CO2"],

    datasets: [
      {
        data: [20, 78, 10, 4],
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

  return (
    <div className="w-screen h-screen flex justify-center">
      <Doughnut data={data} height="100" width="100" onClick={(value) => {console.log(value.value)}} />
    </div>
  );
};

export default Donute_chart;
