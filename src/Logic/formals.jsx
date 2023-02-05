import React from "react";

//Function for prediction
export function co2_pre(last, room_dim){

    //Formel für berechnung der CO2 in %
    //Here will the app calculate the CO2 emissions in % for the next 5 minutes.


    return [0.04,0.04,0.05,0.03, 0.02, 0.04];


}

//Gerneral function for data get
export function H20_overtime (){

    return []

}

export function CO2_overtime (){

    return []
    
}

export function O2_overtime(){

    return []
    

}

export function N2_overtime(){

    return

}


//For big doughnut chart
export function air_overall(){

    //this will be late read from the database

    let CO2 = 0.04;
    let O2  = 0.10;
    let H20 = 0.10;
    let N2  = 0.78;

    return {
        labels: ["O2", "N2", "H2O", "CO2"],
        datasets: [
          {
            data: [O2, N2, H20, CO2],
            backgroundColor: [
              "rgba(101, 147, 245)",
              "rgba(0, 0, 128)",
              "rgb(16 52 166)",
              "rgb(0 49 80)",
            ],
            borderColor: "black",
          },
        ],
      }

}