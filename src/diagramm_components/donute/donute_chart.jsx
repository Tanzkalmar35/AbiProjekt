import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { add_vorlage, new_data_overall } from "../../db";

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

  const options = {
    Tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[0].data[tooltipItem.index] + "sus"
          );
        },
      },
    },
  };

  /*
  Normal levels
  N2 = 0.78
  O2 = 0.20
  CO2 = 0.0004
  */
  let CO2 = 0.0004;
  let O2 = 0.1;
  let H20 = 0.1;
  let N2 = 0.78;

  //Sample data for the chart, later will be replaced with actual data from Firebase
  const [data, setData] = React.useState({
    //this will be late read from the database

    labels: ["O2", "N2", "H2O", "CO2"],
    datasets: [
      {
        data: [O2, N2, H20, CO2 * 100],
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

  //returns the chart object if trigger is true else returns null
  return trigger ? (
    <div className="w-screen h-screen flex justify-center">
      <Doughnut
        data={data}
        plugins={[textCenter]}
        height="100"
        width="100"
        options={[options]}
      />
    </div>
  ) : null;
};

export default Donute_chart;
