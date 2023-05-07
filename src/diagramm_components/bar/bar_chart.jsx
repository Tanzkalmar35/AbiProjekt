import React from "react";
import { Bar } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";


const BarChart = ({ Data, Options}) => {
  chartjs.register(ArcElement, Tooltip, Legend);
  

  return(
    <div className="">
      <Bar data={Data} width={300} height={420} options={Options} />
    </div>
  )
};

export default BarChart;
