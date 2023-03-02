import React, { useState } from "react";
import { Line } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const Line_chart = ({ trigger, data, options }) => {
  chartjs.register(ArcElement, Tooltip, Legend);

  //Displays the chart if the trigger is true
  return trigger ? (
    <div className="w-3/6 h-3/6 flex justify-center align-middle">
      <Line data={data} options={options} />
    </div>
  ) : null;
};

export default Line_chart;
