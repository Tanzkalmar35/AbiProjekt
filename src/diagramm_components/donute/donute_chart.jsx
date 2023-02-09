import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { add_vorlage, new_data_overall, get_current_data } from "../../db";

const Donute_chart = ({ trigger }) => {
  chartjs.register(ArcElement, Tooltip, Legend);
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

  const [current_data, setCurrentData] = useState([]);

  setTimeout(() => {
    async function fetchData() {
      const data = await get_current_data("random_id");
      if (data) {
        setCurrentData(data);
      } else {
        setCurrentData([]);
      }
      console.log(data)
    }
    fetchData();
  }, 1000);

  const [chart_option, setChartOptions] = useState({
    options: {
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: { padding: 25 },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              console.log(context);
              if (context.label == "CO2") {
                return CO2 * 100 + "%";
              } else {
                return context.parsed * 100 + "%";
              }
            },
          },
        },
        title: {
          display: true,
          text: "H2O : 0.1 | O2 : 0.1 | N2 : 0.78 | CO2 < 0.1",
          font: { size: 25 },
        },
      },
    },
  });

  //Sample data for the chart, later will be replaced with actual data from Firebase
  const [data, setData] = React.useState({
    //this will be late read from the database
    type: "doughnut",
    labels: ["O2", "N2", "H2O", "CO2"],
    datasets: [{
      data: current_data,
      backgroundColor: [
        "rgba(101, 147, 245)",
        "rgba(0, 0, 128)",
        "rgb(16 52 166)",
        "rgb(0 49 80)",
      ],
      borderColor: "black",
      hoverOffset: 20,
    }],
  });

  //returns the chart object if trigger is true else returns null
  return trigger ? (
    <div className="w-screen h-screen flex justify-center ">
      <Doughnut
        data={data}
        
        options={chart_option.options}
        height="100"
        width="100"
      />
    </div>
  ) : null;
};

export default Donute_chart;
