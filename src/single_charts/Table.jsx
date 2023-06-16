import React from "react";
import { TempCheck, check, rounded, TempStatus } from "./Funticons_for_charts";
import { get_AirQualtiy, getRH } from "../db";

export default function Table({ Data }) {
  /*
  Data[0] = O2
  Data[1] = N2
 
  Data[3] = CO2
  */
  //console.log(Data);
  const [o2_level, setO2_level] = React.useState("Good");
  const [N2_level, setN2_level] = React.useState("");
  const [Co2_level, setCO2_level] = React.useState("");

  React.useEffect(() => {
    if (Data.N2 > 77 && Data.N2 < 80) {
      setN2_level("Good");
    } else {
      setN2_level("Bad");
    }
  }, [Data.N2]);


  React.useEffect(() => {
    if (Data.CO2 > 0 && Data.CO2 < 0.6) {
      setCO2_level("Good");
    } else {
      setCO2_level("Bad");
    }
  }, [Data.CO2]);



  return (
    <div className="mr-40 ml-20 ">
      
      <div className="mb-10">
        <table className="border-4 border-separate border-black ">
          <thead>
            <tr>
              <th className="pr-10 bg-slate-700 text-purple-500">Stoff: </th>
              <th className="pr-10 bg-slate-700 text-purple-500">Anteil:</th>
              <th className="pr-10 bg-slate-700 text-purple-500" >Status:</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="pr-10 bg-slate-500">CO2</td>
            <td className="pr-10 bg-slate-500">{rounded(Data.CO2)}%</td>
            <td className={check(Co2_level)}>{Co2_level}</td>
          </tr>
          <tr>
            <td className="pr-10 bg-slate-500">O2</td>
            <td className="pr-10 bg-slate-500">20%</td>
            <td className={check(o2_level)}>{"Good"}</td>
          </tr>
          <tr>
            <td className="pr-10 bg-slate-500">N2</td>
            <td className="pr-10 bg-slate-500"> {Data.N2}%</td>
            <td className={check(N2_level)}>{N2_level}</td>
          </tr>
          
          <tr>
            <td className="pr-10 bg-slate-500 ">Air</td>
            <td className="pr-10  bg-slate-500">{Data.Air[0]}</td>
            <td className={check(Data.Air[1])}>{Data.Air[1]}</td>
          </tr>
          <tr>
            <td className="pr-10 bg-slate-500 ">RH</td>
            <td className="pr-10 bg-slate-500 ">{Data.RH + "%"}</td>
            <td className="bg-black"></td>
            
          </tr>
          <tr>
            <td className="pr-10 bg-slate-500 ">Temp</td>
            <td className="pr-10  bg-slate-500">{Data.Temp + "°C"}</td>
            <td className={TempCheck(Data.Temp)}>{TempStatus(Data.Temp)}</td>
          </tr>
          </tbody>
        </table>


      </div>

      



    </div>
  );
}
