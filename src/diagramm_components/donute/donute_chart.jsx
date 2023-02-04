import React from "react";
import {Pie} from "react-chartjs-2";
import {Chart as chartjs} from "chart.js/auto" 

const Donute_chart = ({data}) => {
  return <Pie data={data} />;
  
};

export default Donute_chart;
