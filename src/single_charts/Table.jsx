import React from "react";

export default function Table({ Data }) {
    
    const [o2_level, setO2_level] = React.useState("Good");
    const [N2_level, setN2_level] = React.useState("Good");
    const [Co2_level, setCO2_level] = React.useState("Good");
    const [H2O_level, setH2O_level] = React.useState("Good");



    React.useEffect(() => {
        if(Data[0] > 0.235 || Data[0] < 0.195){
            setO2_level("Bad");
    
    }else{setO2_level("Good")}},[Data[0]]);

    React.useEffect(() => {
        if(Data[1] > 0.235 || Data[1] < 0.195){
            setO2_level("Bad");
    
    }else{setO2_level("Good")}},[Data[1]]);

    React.useEffect(() => {
        if(Data[2] > 0.235 || Data[2] < 0.195){
            setO2_level("Bad");
    
    }else{setO2_level("Good")}},[Data[2]]);
  
    React.useEffect(() => {
        if(Data[3] > 0.235 || Data[3] < 0.195){
            setO2_level("Bad");
    
    }else{setO2_level("Good")}},[Data[3]]);
  
    return (
    <div className=" grid-cols-3 flex">
      <ul className="col-1">
        <li>O2: </li>
        <li>N2: </li>
        <li>CO2: </li>
        <li>H2O: </li>
        
      </ul>
      <ul className="col-2">
        <li>{Data[0]}</li>
        <li>{Data[1]}</li>
        <li>{Data[2]}</li>
        <li>{Data[3]}</li>
       
      </ul>
      <ul className="col-3">
        <li>{o2_level}</li>
        <li>{N2_level}</li>
        <li>{Co2_level}</li>
        <li>{H2O_level}</li>

        
      </ul>
    </div>
  );
}
