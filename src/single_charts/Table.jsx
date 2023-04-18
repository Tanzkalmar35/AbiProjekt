import React from "react";
import { check, rounded } from "./Funticons_for_charts";
import { get_AirQualtiy, getRH } from "../db";

export default function Table({ Data }) {
  /*
  Data[0] = O2
  Data[1] = N2
 
  Data[3] = CO2
  */

  const [o2_level, setO2_level] = React.useState("");
  const [N2_level, setN2_level] = React.useState("");
  const [Co2_level, setCO2_level] = React.useState("");
  const [AirQuality, setAirQuality] = React.useState([]);
  const [RH, setRH] = React.useState([])

  setTimeout(async () => { setAirQuality(await AirQulitayGet()) }, 5000);
  setTimeout(async () => { setRH(await RHGet()) }, 5000);
  
  function RHGet(){
    return new Promise((resolve, reject) =>{
      getRH((data)=>{
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
  
  React.useEffect(() => {
    if (Data[0] > 19.5 && Data[0] < 23.5) {
      setO2_level("Good");
    } else {
      setO2_level("Bad");
    }
  }, [Data[0]]);

  React.useEffect(() => {
    if (Data[1] > 77 && Data[1] < 80) {
      setN2_level("Good");
    } else {
      setN2_level("Bad");
    }
  }, [Data[1]]);


  React.useEffect(() => {
    if (Data[2] > 0 && Data[2] < 5) {
      setCO2_level("Good");
    } else {
      setCO2_level("Bad");
    }
  }, [Data[2]]);



  return (
    <div className="mr-40 ml-10 shadow-inner">
      <div className="mb-10">
        <table>
          <thead>
            <tr>
              <th className="pr-10 bg-slate-700">Stoff: </th>
              <th className="pr-10 bg-slate-700">Anteil:</th>
              <th className="pr-10 bg-slate-700">Status:</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="pr-10">CO2</td>
            <td className="pr-10">{rounded(Data[2])}%</td>
            <td className={check(Co2_level)}>{Co2_level}</td>
          </tr>
          <tr>
            <td className="pr-10">O2</td>
            <td className="pr-10">{Data[0]}%</td>
            <td className={check(o2_level)}>{o2_level}</td>
          </tr>
          <tr>
            <td className="pr-10">N2</td>
            <td className="pr-10"> {Data[1]}%</td>
            <td className={check(N2_level)}>{N2_level}</td>
          </tr>
          <tr>
            <td className="pr-10 ">Tmp</td>
            <td className="pr-10 ">24°</td>
            <td className={check(o2_level)}>Bad</td>
          </tr>
          <tr>
            <td className="pr-10 ">Air</td>
            <td className="pr-10 ">{AirQuality[0]}</td>
            <td className={check( AirQuality[1])}>{AirQuality[1]}</td>
          </tr>
          <tr>
            <td className="pr-10 ">RH</td>
            <td className="pr-10 ">{RH[0]}</td>
            <td>NULL</td>
            
          </tr>
          </tbody>
        </table>


      </div>

      



    </div>
  );
}
