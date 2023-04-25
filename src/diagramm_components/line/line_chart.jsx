import React, { useState } from "react";
import { Line } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const Line_chart = ({ trigger, data, options }) => {
  chartjs.register(ArcElement, Tooltip, Legend);

  //Displays the chart if the trigger is true
  return trigger ? (
    <div className="">
      <Line data={data} width={620} height={320} options={options}  />
    </div>
  ) : null;
};

export default Line_chart;
