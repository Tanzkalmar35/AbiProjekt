import React from "react";
import Line_chart from "../diagramm_components/line/line_chart";
import { useState } from "react";
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { get_CO2_overtime, future_values } from "../db";


function Co2_future_chart() {
  chartjs.register(ArcElement, Tooltip, Legend);

  const [Data, setData] = React.useState([]);

  const [ChartLabels, setChartLabels] = React.useState(["1", "2", "3", "4", "5"]);

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
              return "Co2 percentage: " + context.raw + "%";
            },
          },
        },
      },
    },
  };

  setTimeout(() => {
    setData(future_values());
    
      setChartDataSet({
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
      })
    
  }, 10000);

  return (
    <Line_chart
      trigger={true}
      data={ChartDataSet}
      options={ChartOptions.options}
    ></Line_chart>
  );
}

export default Co2_future_chart;
