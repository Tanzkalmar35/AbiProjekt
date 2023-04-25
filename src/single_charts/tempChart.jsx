import React from 'react'
import BarChart from '../diagramm_components/bar/bar_chart'
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { getTempLast5Min } from '../db'
export default function TempChart() {
    chartjs.register(ArcElement, Tooltip, Legend);
    const [TempLast5Min, setTempLast5Min] = React.useState({})
    const ChartOptions = {
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            console.log(context)
                            return "CO2 Percentage:" + context.raw + "%";
                        },



                    }
                }
            }
        }
    }

    setTimeout(async () => { setTempLast5Min(await readLast5Min()) }, 1000)

    //await function for Data of the last week
    function readLast5Min() {
        return new Promise((resolve, reject) => {
            getTempLast5Min((datalast) => {
                datalast ? resolve(datalast) : reject(new Error)
            })
        })
    }
    //Creating an object that chartjs can read for the cahrt
    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
        datasets: [
            {
                data: [TempLast5Min.FourMinutes, TempLast5Min.ThreeMinutes, TempLast5Min.TwoMinutes, TempLast5Min.Now],
                backgroundColor: "#660066",
                borderWidth: 3


            },
        ],
        options : ChartOptions
        
    });


    //Updating the Chart object when there is new data temperature
    React.useEffect(() => {
        setData({
            labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
            datasets: [
                {
                    label: "Temperature in the last 5 minutes",
                    data: [TempLast5Min.FourMinutes, TempLast5Min.ThreeMinutes, TempLast5Min.TwoMinutes, TempLast5Min.OneMinutes, TempLast5Min.Now],
                    backgroundColor: "#660066",
                    borderWidth: 4


                },
            ],
            options : ChartOptions
        });

    }, [TempLast5Min])




    return (
        <div><BarChart Data={data} ></BarChart></div>

    )
}
