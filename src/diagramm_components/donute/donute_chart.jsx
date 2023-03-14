import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { add_vorlage, new_data_overall, get_current_data, get_CO2_overtime } from "../../db";
import Table from "../../single_charts/Table";

const Donute_chart = ({ trigger }) => {
  //Dont rly understand but is needed for better styles
  chartjs.register(ArcElement, Tooltip, Legend);
  
  
  
  /*
  Normal levels
  N2 = 0.78
  O2 = 0.20
  CO2 = 0.0004
  */
  let CO2 = 0.0005;
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

  //This is the const for storing the current data its a state so it can be updated
  const [current_data, setCurrentData] = useState([]);

  /*This data is using the get_current_data function 
  to get the current data and if there is no it will use the normal data*/
  const fetchData = () => {
    get_current_data("random_id", (data) => {
      if (data) {
        setCurrentData(data);
        
      } else {
        setCurrentData([O2, N2, H20, CO2]);
        console.log("No data");
      }
    });
  };
  //This timeout is called every second to get the current data
  setTimeout(() => {
    fetchData();
    //sets the Data to a new Data object
    setData({
      //this will be late read from the database
      type: "doughnut",
      labels: ["O2", "N2", "H2O", "CO2"],
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
          hoverOffset: 20,
        },
      ],
    });
  }, 1000);

  

  //Those are the options for the chart
  const [chart_option, setChartOptions] = useState({
    options: {
      
      
      plugins: {
        legend: {
          //Shows the legend and its styles
          display: true,
          position: "right",
          labels: { padding: 25 },
        },
        //Tooltips very annoying to implement
        tooltip: {
          callbacks: {
            label: (context) => {
              
              if (context.label == "CO2") {
                
                return (context.raw).toFixed(2)  + "%";
              } else {
                return context.parsed + "%";
              }
            },
          },
        },
        
      },
    },
  });

  //Sample data for the chart, later will be replaced with actual data from Firebase
  const [data, setData] = React.useState({
    //this will be late read from the database
    type: "doughnut",
    labels: ["O2", "N2", "H2O", "CO2"],
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
        hoverOffset: 20,
      },
    ],
  });

  //returns the chart object if trigger is true else returns null
  return trigger ? (
    <div className=" grid-cols-2 flex items-center   ">
      <div className="text-6xl col-span-1 ">
        
        <Table Data={current_data}></Table>
      </div>
      <Doughnut
        data={data}
        options={chart_option.options}
        className="col-span-2"
      />
    </div>
  ) : null;
};

export default Donute_chart;
