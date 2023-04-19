import React from "react";
import { check, rounded } from "./Funticons_for_charts";
import { get_AirQualtiy, getRH } from "../db";

export default function Table({ Data }) {
  /*
  Data[0] = O2
  Data[1] = N2
 
  Data[3] = CO2
  */
  //console.log(Data);
  const [o2_level, setO2_level] = React.useState("");
  const [N2_level, setN2_level] = React.useState("");
  const [Co2_level, setCO2_level] = React.useState("");
  
  
  React.useEffect(() => {
    if (Data.O2 > 19.5 && Data.O2 < 23.5) {
      setO2_level("Good");
    } else {
      setO2_level("Bad");
    }
  }, [Data.O2]);

  React.useEffect(() => {
    if (Data.N2 > 77 && Data.N2 < 80) {
      setN2_level("Good");
    } else {
      setN2_level("Bad");
    }
  }, [Data.N2]);


  React.useEffect(() => {
    if (Data.CO2 > 0 && Data.CO2 < 5) {
      setCO2_level("Good");
    } else {
      setCO2_level("Bad");
    }
  }, [Data.CO2]);



  return (
    <div className="mr-40 ml-20 ">
      
      <div className="mb-10">
        <table>
          <thead>
            <tr>
              <th className="pr-10 bg-slate-700 text-purple-500">Stoff: </th>
              <th className="pr-10 bg-slate-700 text-purple-500">Anteil:</th>
              <th className="pr-10 bg-slate-700 text-purple-500" >Status:</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="pr-10">CO2</td>
            <td className="pr-10">{rounded(Data.CO2)}%</td>
            <td className={check(Co2_level)}>{Co2_level}</td>
          </tr>
          <tr>
            <td className="pr-10">O2</td>
            <td className="pr-10">{Data.O2}%</td>
            <td className={check(o2_level)}>{o2_level}</td>
          </tr>
          <tr>
            <td className="pr-10">N2</td>
            <td className="pr-10"> {Data.N2}%</td>
            <td className={check(N2_level)}>{N2_level}</td>
          </tr>
          <tr>
            <td className="pr-10 ">Tmp</td>
            <td className="pr-10 ">24°</td>
            <td className={check(o2_level)}>Bad</td>
          </tr>
          <tr>
            <td className="pr-10 ">Air</td>
            <td className="pr-10 ">{Data.Air[0]}</td>
            <td className={check(Data.Air[1])}>{Data.Air[1]}</td>
          </tr>
          <tr>
            <td className="pr-10 ">RH</td>
            <td className="pr-10 ">{Data.RH}</td>
            <td>NULL</td>
            
          </tr>
          </tbody>
        </table>


      </div>

      



    </div>
  );
}
