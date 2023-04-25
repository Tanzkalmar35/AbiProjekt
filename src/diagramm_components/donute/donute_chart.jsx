import React from "react";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
//Alway import this else it wont work
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import {  get_current_data} from "../../db";
import Table from "../../single_charts/Table";
import { get_AirQualtiy, getRH, getTempNow } from "../../db";


const Donute_chart = ({ trigger }) => {
  //Dont rly understand but is needed for better styles
  chartjs.register(ArcElement, Tooltip, Legend);
  
  
  
  /*
  Normal levels
  N2 = 0.78
  O2 = 0.20
  CO2 = 0.0004
  */


  

  //This is the const for storing the current data its a state so it can be updated
  const [current_data, setCurrentData] = useState();
  
  /*This data is using the get_current_data function 
  to get the current data and if there is no it will use the normal data*/
  const fetchData = () => {
    get_current_data("random_id", (data) => {
      if (data) {

        setCurrentData(data);
        
      } else {
        setCurrentData([O2, N2, CO2]);
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
      labels: ["O2", "N2", "CO2"],
      datasets: [
        {
          data: current_data,
          backgroundColor: [
            "rgba(101, 147, 245)",
            "rgba(0, 0, 128)",
            "rgb(16 52 166)",
          
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
    labels: ["O2", "N2", "CO2"],
    datasets: [
      {
        data: current_data,
        backgroundColor: [
          "rgba(101, 147, 245)",
          "rgba(0, 0, 128)",
          "rgb(16 52 166)",
          
        ],
        borderColor: "black",
        hoverOffset: 20,
      },
    ],
  });

  //Extra Data for the Table on the left side of the chart
  const [AirQuality, setAirQuality] = React.useState([]);
  const [RH, setRH] = React.useState([])
  const [Temp, setTemp] = React.useState();

  setTimeout(async () => { setAirQuality(await AirQulitayGet()) }, 1000);
  setTimeout(async () => { setRH(await RHGet()) }, 1000);
  setTimeout(async () => { setTemp(await TempGet()) }, 1000)
  
  function RHGet(){
    return new Promise((resolve, reject) =>{
      getRH((data)=>{
        if(data){
          resolve(data);
        }else{resolve()}
      })
    })
  }

  function TempGet(){
    return new Promise((resolve, reject) =>{
      getTempNow((data)=>{
        if(data){
          resolve(data);
        }else{resolve()}
      })
    })
  }

  function AirQulitayGet() {
    return new Promise((resolve, reject) => {
      get_AirQualtiy((data) => {
        if (data) { resolve(data); }
        else { resolve() }
      })

    })
  }

  //returns the chart object if trigger is true else returns null
  return current_data && RH && AirQuality ? (
    <div className=" grid-cols-2 flex items-center   ">
      
      <div className="text-6xl col-span-1 ">
        
        <Table Data={{"O2" :current_data[0], "N2" :current_data[1], "CO2" :current_data[2], "Air" : AirQuality, "RH" : RH, "Temp" : Temp }}></Table>
        
      </div>
      <Doughnut
        data={data}
        options={chart_option.options}
        className="col-span-2"
      />
    </div>
  ) : (<h1 className="text-5xl text-purple-600">Loading</h1>);
};

export default Donute_chart;
