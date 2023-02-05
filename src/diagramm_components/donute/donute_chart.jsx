import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { store } from "../../db";
import { air_overall } from "../../Logic/formals";

const Donute_chart = ({ trigger }) => {
  chartjs.register(ArcElement, Tooltip, Legend);

  //Draws the Text in the middel can't be changed (later maybe but right now its just "AIR QUALITY CHART")
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 30px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "AIR QUALITY CHART",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  //Sample data for the chart, later will be replaced with actual data from Firebase
  const [data, setData] = React.useState(air_overall);

  //returns the chart object if trigger is true else returns null
  return trigger ? (
    <div className="w-screen h-screen flex justify-center">
      <Doughnut data={data} plugins={[textCenter]} height="100" width="100" />
    </div>
  ) : null;
};

export default Donute_chart;
