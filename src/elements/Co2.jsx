import React from "react";

import Co2_history_chart from "../single_charts/Co2_history_chart";
import Co2_future_chart from "../single_charts/Co2_future_chart";
import Co2LastWeekBar from "../single_charts/Co2LastWeekBar";
import {getCO2FB, getCO2OverTimeFB, getLastWeek, getTempLast5Min, makeTimeStamp} from "../db";


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

  const [now, setNow] = React.useState(0)
  const [last, setLast] = React.useState([])

  setTimeout(async () => { setNow(await getCO2fromFB()) }, 1000)
  setTimeout(async () => { setLast(await getLastFromFB()) }, 1000)
  setTimeout(merge , 60000)



  function merge(){

    let data = {"zero" : now, "one" : last[0], "two" : last[1],"three" : last[2], "four" : last[3]}
    console.log(data)
    makeTimeStamp(data)
  }

  async function getCO2fromFB(){
    return new Promise((resolve, reject) =>{
      getCO2FB((data1) =>{
        if(data1){

          setNow(data1)
        }else{
          reject(new Error)
        }

      })
    })
  }

  async function getLastFromFB(){
    return new Promise((resolve, reject) =>{
      getCO2OverTimeFB((data) =>{
        if(data){

          setLast(data)
        }else{
          reject(new Error)
        }

      })
    })
  }

  return (
      <>
        <h1 className="justify-center text-center text-6xl text-purple-600  ">CO2</h1>
        <div className="grid-cols-2 flex justify-center ">

          <div className="col-span-1 pt-20 pr-32">
            <div className="pb-10"><Co2_history_chart></Co2_history_chart></div>

            <div className="pt-10"><Co2_future_chart></Co2_future_chart></div>
          </div>
      <div className="cols-2 flex pt-48">
        <Co2LastWeekBar></Co2LastWeekBar>
      </div>
    </div>
    </>
  );
};

export default Co2;
