import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

const Co2 = () => {
  chartjs.register(ArcElement, Tooltip, Legend);
  //Alway get the current time as an array
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
          position : "bottom"
          
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return context.parsed
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
        label: "CO2 in the next 5 minuts",
      },
    ],
    options: options_for_chart,
  });

  //update the chart dynamically

  setTimeout(() => {
    setTime(get_time);
    setCurrentData(get_Data(current_data));

    setChart({
      labels: time,
      datasets: [
        {
          data: current_data,
        },
      ],
    });
  }, 60000);

  //This function is deleting the first element of the array and adds a new one at the end

  function get_Data(data) {
    let next = current_data;

    const remove = next.splice(0, 1);
    next.push(Math.random() * (0.05 - 0.03) + 0.05);
    console.log(next);

    return next;
  }

  /*THis function is getting the current time and makes a array where the first 
   element is the current time and following elements 
   are the current data + minutes*/

  function get_time() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return [
      hours + ":" + minutes,
      hours + ":" + (minutes + 1),
      hours + ":" + (minutes + 2),
      hours + ":" + (minutes + 3),
      hours + ":" + (minutes + 4),
    ];
  }
  return (
    <div>
      <Line_chart
        trigger={true}
        data={chart}
        options={options_for_chart.options}
      ></Line_chart>
    </div>
  );
};

export default Co2;
