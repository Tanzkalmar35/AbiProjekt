import React from "react";
import { check, rounded } from "./Funticons_for_charts";

export default function Table({ Data }) {
  /*
  Data[0] = O2
  Data[1] = N2
 
  Data[3] = CO2
  */

  const [o2_level, setO2_level] = React.useState("");
  const [N2_level, setN2_level] = React.useState("");
  const [Co2_level, setCO2_level] = React.useState("");
  

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
    <div className=" grid-cols-3 flex justify-between m-40 ring-8 ring-white">
      <ul className="col-1 pr-10 bg-blue-400">
        <li className="bg-blue-400">O2 :</li>
        <li className="bg-blue-400">N2 :</li>
        <li className="bg-blue-400">CO2: </li>
      
      </ul>
      <ul className="col-2 bg-blue-500 ring-4 ring-white pr-5 pl-5">
        <li className="bg-blue-500 rounded-b-3xl rounded-white">{Data[0]}%</li>
        <li className="bg-blue-500">{Data[1]}%</li>
        <li className="bg-blue-500">{rounded(Data[2])}%</li>
       
      </ul>
      <ul className=" col-3 ring-4 ring-white">
        <li className={check(o2_level)}>{o2_level}</li>
        <li className={check(N2_level)}>{N2_level}</li>
        <li className={check(Co2_level)}>{Co2_level}</li>
       
      </ul>
    </div>
  );
}
