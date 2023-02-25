import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { get_CO2_overtime } from "../db";

const Co2 = () => {
  chartjs.register(ArcElement, Tooltip, Legend);
  //Alway get the current time as an array
  const [time, setTime] = useState(get_time);

  const [trigger_history, setTriggerHistory] = useState(false);
  const [trigger_future, setTriggerFuture] = useState(true);

  //This date will be pulled from Firebase
  const [current_data, setCurrentData] = useState([
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
    Math.random() * (0.05 - 0.03) + 0.05,
  ]);

  const future_data = useState([0, 0, 0, 0, 0]);

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

  //Standart layout for chart data
  const [chart, setChart] = useState({
    //Those are the stamps under the chart
    labels: time,
    datasets: [
      {
        //Those are the points in the chart
        data: [0,0,0,0,0]
        ,
        label: "CO2 in the next 5 minuts",
      },
    ],
    options: options_for_chart,
  });

  //update the chart dynamically

  setTimeout(() => {
    setTime(get_time);
    setCurrentData(get_Data());

    setChart({
      labels: time,
      datasets: [
        {
          data: () => {
            if (trigger_future == true) {
              return future_data;
            } else {
              return current_data;
            }},
        },
      ],
    });
  }, 60000);

  //This function is deleting the first element of the array and adds a new one at the end

  function get_Data() {
    get_CO2_overtime("random_id", (data) => {
      if (data) {
        console.log(data);
        return [...data];
      } else {
        console.log("No data");
        return [];
      }
    });
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
    <div className="">
      <div className="text-5xl p-4  flex justify-center">
        <p>CO2 Page</p>
      </div>
      <div className="flex justify-center m-10">
        <button
          className="bg-purple-900 mr-5 rounded-md text-xl"
          type="button"
          onClick={() => {
            setTriggerFuture(true);
            setTriggerHistory(false);
          }}
        >
          CO2 in future
        </button>
        <button
          className="bg-purple-900 ml-5 rounded-md text-xl"
          type="button"
          onClick={() => {
            setTriggerFuture(false);
            setTriggerHistory(true);
          }}
        >
          CO2 History
        </button>
      </div>
      <div className="flex justify-center">
        <Line_chart
          trigger={trigger_history}
          data={chart}
          options={options_for_chart.options}
        ></Line_chart>
      </div>
      <div className="flex justify-center">
        <Line_chart
          trigger={trigger_future}
          data={chart}
          options={options_for_chart.options}
        ></Line_chart>
      </div>
    </div>
  );
};

export default Co2;
