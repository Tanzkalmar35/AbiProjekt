import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import {get_CO2_overtime, future_values, getCO2FB, getHistoryData} from "../db";


function Co2_future_chart() {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [Data, setData] = React.useState([]);

  const [ChartLabels, setChartLabels] = React.useState(["1", "2", "3", "4", "5"]);
  const [HisData, setHHisData] = React.useState([0.4, 0.45,0.4, 0.5])

  const [ChartDataSet, setChartDataSet] = React.useState({
    labels: ChartLabels,
    datasets: [
      {
        //Those are the points in the chart
        data: Data,
        label: "CO2 in the next 5 minuts",
        borderColor: '#6B3FA0',
        borderWidth: 3,
      },
    ],
  });

  const ChartOptions = {
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
              return "Co2 percentage: " + (context.raw).toFixed(2) + "%";
            },
          },
        },
      },
    },
  };

  setTimeout(async () => {
    setHHisData(await getHisData() )
    setData(await getFutureValues(HisData));
    
      setChartDataSet({
        labels: ChartLabels,
        datasets: [
          {
            //Those are the points in the chart
            data: Data,
            label: "CO2 in the next 5 minuts",
            borderColor: 'red',
            borderWidth: 3,
          },
        ],
      })
    
  }, 1000);

  async function getFutureValues() {
    return new Promise((resolve, reject) => {
      future_values((datalast) => {
        datalast ? resolve(datalast) : reject(new Error)
      })
    })
  }

  async function getHisData() {
    return new Promise((resolve, reject) => {
      getHistoryData((datalast) => {
        datalast ? resolve(datalast) : reject(new Error)
      })
    })
  }
  return (
    <Line_chart
      trigger={true}
      data={ChartDataSet}
      options={ChartOptions.options}
    ></Line_chart>
  );
}

export default Co2_future_chart;
