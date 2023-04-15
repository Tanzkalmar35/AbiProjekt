import React from "react";

import Co2_history_chart from "../single_charts/Co2_history_chart";
import Co2_future_chart from "../single_charts/Co2_future_chart";
const Co2 = () => {
  
  return (
    <div className="">
      <div className="text-5xl p-4  flex justify-center">
      <p className="text-white">CO2 Page</p>
      </div>


      
      <div className=" pl-40  text-center">
      <li><Co2_history_chart></Co2_history_chart></li>
      <li><Co2_future_chart></Co2_future_chart></li>    
      </div>
    </div>
  );
};

export default Co2;
