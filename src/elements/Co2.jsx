import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { get_CO2_overtime } from "../db";
import Co2_history_chart from "../single_charts/co2_history_chart";
import Co2_future_chart from "../single_charts/Co2_future_chart";
const Co2 = () => {
  
  return (
    <div className="">
      <div className="text-5xl p-4  flex justify-center">
        <p>CO2 Page</p>
      </div>
      
      <div className="flex justify-center">
       <Co2_future_chart></Co2_future_chart>
     
        
      </div>
    </div>
  );
};

export default Co2;
