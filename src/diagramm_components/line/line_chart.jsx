import React, { useState } from "react";
import { Line } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { co2_pre } from "../../Logic/formals";

const Line_chart = ({ trigger }) => {
  //Alway get the current time as an array
  const [time, setTime] = useState(get_time);

  //This date will be pulled from Firebase
  const [current_data, setCurrentData] = useState([

    0.04, 0.04, 0.03, 0.05, 0.03,

  ]);

  //Standart layout for chart data
  const [chart, setChart] = useState({

    //Those are the stamps under the chart
    labels: time,
    datasets: [
      {
        //Those are the points in the chart
        data: current_data,

      },
    ],
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

  //Displays the chart if the trigger is true

  return trigger ? (
    <div className="w-3/6 h-3/6 flex justify-center align-middle">
      <Line data={chart} />
    </div>
  ) : null;
};

export default Line_chart;
