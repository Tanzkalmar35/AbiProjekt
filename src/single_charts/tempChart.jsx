import React from 'react'
import BarChart from '../diagramm_components/bar/bar_chart'
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";
import {getSingleData, getTempLast5Min, makeTimeStamp} from '../db'
export default function TempChart() {
    chartjs.register(ArcElement, Tooltip, Legend);

    const [TempLast5Min, setTempLast5Min] = React.useState([])
    const [now, setNow] = React.useState(0)


    setTimeout(async () => { setTempLast5Min(await readLast5Min()) }, 1000)
    setTimeout(async () => { setNow(await readTempNow()) }, 1000)

    setTimeout(merge , 60000)



    function merge(){

        let data = {"zero" : now, "one" : TempLast5Min[0], "two" : TempLast5Min[1],"three" : TempLast5Min[2], "four" : TempLast5Min[3]}

        makeTimeStamp(data)
    }

    async function readLast5Min() {
        return new Promise((resolve, reject) => {
            getTempLast5Min((datalast) => {
                datalast ? resolve(datalast) : reject(new Error)
            })
        })
    }
    async function readTempNow() {
        return new Promise((resolve, reject) => {
            getSingleData((data1) =>{
                if(data1){

                    resolve(data1)
                }else{
                    reject(new Error)
                }
            })
        })
    }



    const ChartOptions = {
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            console.log(context.raw)
                            return context.raw + "°C"
                        },



                    }
                }
            }
        }
    }
    //await function for Data of the last week

    //Creating an object that chartjs can read for the cahrt
    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
        datasets: [
            {
                data: TempLast5Min,
                backgroundColor: "#660066",
                borderWidth: 3


            },
        ],
        options : ChartOptions
        
    });


    //Updating the Chart object when there is new data temperature
    React.useEffect(() => {
        console.log(now)
        setData({
            labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
            datasets: [
                {
                    label: "Temperature in the last 5 minutes",
                    data: TempLast5Min,
                    backgroundColor: "#660066",
                    borderWidth: 4


                },
            ],
            options : ChartOptions
        });

    }, [TempLast5Min])




    return (
        <div><BarChart Data={data} Options={ChartOptions.options}></BarChart></div>

    )
}
