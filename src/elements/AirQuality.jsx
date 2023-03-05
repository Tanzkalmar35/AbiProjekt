import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import Co2_future_chart from "../single_charts/Co2_future_chart";



const AirQuality = () => {


  return (
    <div>
      <p>AirQuality</p>
      <Co2_future_chart></Co2_future_chart>
    </div>
  );
};

export default AirQuality;
