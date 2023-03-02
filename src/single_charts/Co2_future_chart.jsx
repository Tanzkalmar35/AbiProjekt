import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { get_CO2_overtime } from "../db";
import { future_values } from "./Funticons_for_charts";

function Co2_future_chart() {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [Data, setData] = React.useState([0.06, 0.06, 0.04, 0.04, 0.05]);
  setTimeout(() => {

    setData(future_values(Data[3], Data[4]));
    

  }, 10000);
}

export default Co2_future_chart;
