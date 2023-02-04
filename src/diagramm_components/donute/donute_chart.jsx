import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const Donute_chart = () => {
  chartjs.register(ArcElement, Tooltip, Legend);

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
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
  const handleClick = (event, chartElements) => {
    if (chartElements.length > 0) {
      const index = chartElements[0]._index;
      const value = data.datasets[0].data[index];
      console.log(value);
      console.log(data.labels[index]);
      
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center">
<<<<<<< Updated upstream
      <Doughnut data={data} plugins={[textCenter]} />
=======
      <Doughnut data={data} height="100" width="100" getelementatevent={handleClick} />
>>>>>>> Stashed changes
    </div>
  );
};

export default Donute_chart;
