import React from "react";
import { check, rounded } from "./Funticons_for_charts";

export default function Table({ Data }) {
  /*
  Data[0] = O2
  Data[1] = N2
  Data[2] = H20
  Data[3] = CO2
  */

  const [o2_level, setO2_level] = React.useState("");
  const [N2_level, setN2_level] = React.useState("");
  const [Co2_level, setCO2_level] = React.useState("");
  const [RH_level, setRH_level] = React.useState("");

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
    if (Data[2] > 30 && Data[2] < 60) {
      setRH_level("Good");
    } else {
      setRH_level("Bad");
    }
  }, [Data[2]]);
  React.useEffect(() => {
    if (Data[3] > 0 && Data[3] < 5) {
      setCO2_level("Good");
    } else {
      setCO2_level("Bad");
    }
  }, [Data[3]]);



  return (
    <div className=" grid-cols-3 flex p-40 ">
      <ul className="col-1 pr-10">
        <li>O2 :</li>
        <li>N2 :</li>
        <li>CO2: </li>
        <li>RH: </li>
      </ul>
      <ul className="col-2">
        <li>{Data[0]}%</li>
        <li>{Data[1]}%</li>
        <li>{rounded(Data[3])}%</li>
        <li>{Data[2]}%</li>
      </ul>
      <ul className="pl-10 col-3">
        <li className={check(o2_level)}>{o2_level}</li>
        <li className={check(N2_level)}>{N2_level}</li>
        <li className={check(Co2_level)}>{Co2_level}</li>
        <li className={check(RH_level)}>{RH_level}</li>
      </ul>
    </div>
  );
}
