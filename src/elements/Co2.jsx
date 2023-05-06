import React from "react";

import Co2_history_chart from "../single_charts/Co2_history_chart";
import Co2_future_chart from "../single_charts/Co2_future_chart";
import Co2LastWeekBar from "../single_charts/Co2LastWeekBar";
import {getCO2FB, getLastWeek, getTempLast5Min, makeTimeStamp} from "../db";


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
  const [last5, setlast5] = React.useState([])


  setTimeout(
      async () => {
        setNow(await getCO2())
      }, 1000)

  setTimeout(async () => {
    setlast5(await getCO2OverTime())
  }, 1000)

  setTimeout(() => {

    makeTimeStamp([0,0,0,0,0])
  }, 30000)

  function merge() {


    let newData = [now, last5[0], last5[1], last5[2], last5[3]]


    return newData;

  }

  async  function getCO2OverTime() {
    return new Promise((resolve, reject) => {
      getCO2FB((datalast) => { datalast ? resolve(datalast) : ""}

      )
    })
  }

  async function getCO2() {
    return new Promise((resolve, reject) => {
      getCO2FB((datalast) => {
        datalast ? resolve(datalast) : ""
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
      <div className="cols-2 pt-48">
        <Co2LastWeekBar></Co2LastWeekBar>
      </div>
    </div>
    </>
  );
};

export default Co2;
