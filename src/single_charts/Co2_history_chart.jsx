import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { getCO2OverTimeFB} from "../db";



function Co2_history_chart() {
  chartjs.register(ArcElement, Tooltip, Legend);
  let countdown = 1000;
  //Alway get the current time as an array
  const [time, setTime] = useState(get_time);

  //This date will be pulled from Firebase
  const [current_data, setCurrentData] = useState([]);

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
              
              return "CO2 Percentage:" + context.raw * 1000 + "%";
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
    countdown = 60000;
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

  }, countdown);

  //This function is deleting the first element of the array and adds a new one at the end

  async function get_Data() {
    return new Promise((resolve, reject) => {
      getCO2OverTimeFB((data) => {
        if (data) {
          resolve(data.reverse());
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
      hours + ":" + (minutes - 4),
      hours + ":" + (minutes - 3),
      hours + ":" + (minutes - 2),
      hours + ":" + (minutes - 1),
      hours + ":" + minutes




    ];
  }

  async  function startUp(){

      setCurrentData(await get_Data());

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
