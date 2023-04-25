import React from "react";
import { Bar } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";


const BarChart = ({ Data, Options}) => {
  chartjs.register(ArcElement, Tooltip, Legend);
  

  return(
    <div className="text-5xl">
      <Bar data={Data} width={600} height={420} options={Options} />
    </div>
  )
};

export default BarChart;
