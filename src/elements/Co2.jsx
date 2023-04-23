import React from "react";

import Co2_history_chart from "../single_charts/Co2_history_chart";
import Co2_future_chart from "../single_charts/Co2_future_chart";
import Co2LastWeekBar from "../single_charts/Co2LastWeekBar";
import { getLastWeek } from "../db";


const Co2 = () => {
  const [DataLastWeek, setDataLastWeek] = React.useState({})

  setTimeout(async () => { setDataLastWeek(await getData()) }, 1000)

  function getData() {
    return new Promise((resolve, reject) => {
      getLastWeek((data) => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error)
        }
      })
    })
  }

  /*
      <div className="grid-cols-2">
      <div className="text-5xl p-4  flex justify-center col-span-1">
      <p className="text-white">CO2 Page</p>
      </div>


      
      <div className=" pl-40  text-center">
      <li><Co2_history_chart></Co2_history_chart></li>
      <li><Co2_future_chart></Co2_future_chart></li>    
      
      </div>
      <div className="col-span-2">
        <Co2LastWeekBar></Co2LastWeekBar>
      </div>
    </div>
  */
  return (
    <>
    <h1 className="justify-center text-center text-6xl text-purple-600  " >CO2</h1>
    <div className="grid-cols-2 flex justify-center ">
       
      <div className="col-span-1 pt-20 pr-32">
        <div className="pb-10"><Co2_history_chart ></Co2_history_chart></div>
        
        <div className="pt-10"><Co2_future_chart></Co2_future_chart></div>
      </div>
      <div className="cols-2 pt-48">
        <Co2LastWeekBar></Co2LastWeekBar>
      </div>
    </div>
    </>
  );
};

export default Co2;
