import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { get_CO2_overtime } from "../db";



function Co2_history_chart() {
  chartjs.register(ArcElement, Tooltip, Legend);

  //Alway get the current time as an array
  const [time, setTime] = useState(get_time);

  //This date will be pulled from Firebase
  const [current_data, setCurrentData] = useState([0,0,0,0,0]);

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
              
              return "CO2 Percentage:" + context.raw + "%";
            },
          },
        },
      },
    },
  });

  //Standart layout for chart data
  const [chart, setChart] = useState({
    //Those are the stamps under the chart
    labels: time,
    datasets: [
      {
        //Those are the points in the chart
        data: current_data,
        label: "CO2 Hisotry chart",

        borderColor: "#0000ff",
        borderWidth: 3,
      },
    ],
    options: options_for_chart,
  });

  //update the chart dynamically
  setTimeout(async () => {
    setTime(get_time);
    setCurrentData( await get_Data());
    setChart({
      labels: time,
      datasets: [
        {
          data: current_data,
          label: "CO2 Hisotry chart",
          borderColor: "#0000ff",
          borderWidth: 3,
        },
      ],
      options: options_for_chart
    });

  }, 1000);

  //This function is deleting the first element of the array and adds a new one at the end

  function get_Data() {
    return new Promise((resolve, reject) => {
      get_CO2_overtime((data) => {
        if (data) {
          resolve(data);
        } else {
          console.log("No data");
          resolve([]);
        }
      });
    });
  }

  /*THis function is getting the current time and makes a array where the first 
     element is the current time and following elements 
     are the current data + minutes*/

  function get_time() {
    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    return [
      hours + ":" + (minutes + 4),
      hours + ":" + (minutes + 3),
      hours + ":" + (minutes + 2),
      hours + ":" + (minutes + 1),
      hours + ":" + minutes




    ];
  }

  return (
    <Line_chart
      trigger={true}
      data={chart}
      options={options_for_chart.options}
    ></Line_chart>
  );
}

export default Co2_history_chart;
