import React from "react";
import "./App.css";
import Donute_chart from "./diagramm_components/donute/donute_chart.jsx"; 
import {TestData} from "./diagramm_components/TestData.jsx"

const App = () => {
  
  const [sensor_data, setsensor_data] = React.useState({
  type :  "doughnut",
  data : TestData,
  });


  
  return (
    <div className="">
      <p className="">new App</p>
      <Donute_chart data={sensor_data} />
    </div>
  );
};

export default App;
