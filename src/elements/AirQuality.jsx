import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";



const AirQuality = () => {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [time, setTime] = useState(get_time);

  //This date will be pulled from Firebase
  const [current_data, setCurrentData] = useState([
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
  ]);
  const [options_for_chart, setoptions_for_chart] = useState({
    options: {
      plugins: {
        legend: {
          //Shows the legend and its styles
          display: true,
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return context.parsed;
            },
          },
        },
      },
    },
  });
  const [chart, setChart] = useState({
    //Those are the stamps under the chart
    labels: time,
    datasets: [
      {
        //Those are the points in the chart
        data: current_data,
        label: "Air Quality",
      },
    ],
    options: options_for_chart,
  });
  /*THis function is getting the current time and makes a array where the first 
   element is the current time and following elements 
   are the current data + minutes*/

  function get_time() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return [
      hours + ":" + minutes,
      hours + ":" + (minutes - 1),
      hours + ":" + (minutes - 2),
      hours + ":" + (minutes - 3),
      hours + ":" + (minutes - 4),
    ];
  }
  setTimeout(() => {
    setTime(get_time);
    setCurrentData(current_data);

    setChart({
      labels: time,
      datasets: [
        {
          data: current_data,
        },
      ],
    });
  }, 60000);

  return (
    <div>
      <p>AirQuality</p>
      <Line_chart trigger={true} data={chart} options={options_for_chart}></Line_chart>
    </div>
  );
};

export default AirQuality;
