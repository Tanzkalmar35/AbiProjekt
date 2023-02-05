import React, { useState } from "react";
import { Line } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { co2_pre } from "../../Logic/formals";

const Line_chart = ({ trigger }) => {
  const [time, setTime] = useState(get_time);
  const [current_data, setCurrentData] = useState([0.04, 0.04, 0.03, 0.05, 0.03]);
  const [chart, setChart] = useState({
    labels: time,
    datasets: [
      {
        data: current_data,
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
  //const [] = useState()

  setTimeout(() => {
    setTime(get_time);
    setCurrentData(get_Data(current_data));
    
    setChart({
      labels: time,
      datasets: [
        {
          data: current_data,
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
  }, 1000)

  
  
  function get_Data(data) {
    let next = current_data;
    
    
    const remove = next.slice(0,1);
    next[4] = Math.random() * (0.05 - 0.03) + 0.05;
    
    return next;
  
  
  }

  

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

  return trigger ? (
    <div className="w-3/6 h-3/6 flex justify-center align-middle">
      <Line data={chart} />
    </div>
  ) : null;
};

export default Line_chart;
