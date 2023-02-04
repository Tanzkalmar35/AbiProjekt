import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const Donute_chart = () => {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [middle, setMiddle] = useState("he");

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
        "hallo",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  const [data, setData] = React.useState({
    labels: ["O2", "N2", "H2O", "CO2"],
    datasets: [
      {
        data: [20, 78, 10, 4],
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

  return (
    <div className="w-screen h-screen flex justify-center">
      <Doughnut data={data} plugins={[textCenter]} />
    </div>
  );
};

export default Donute_chart;
