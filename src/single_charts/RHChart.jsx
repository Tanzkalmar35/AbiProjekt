import React from 'react'
import BarChart from '../diagramm_components/bar/bar_chart'
import { getLastWeek } from '../db'
export default function RHChart() {
    const [DataLastWeek, setDataLastWeek] = React.useState({})

    setTimeout(async () => { setDataLastWeek(await readLastWeek()) }, 1000)
    const ChartOptions = {
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            console.log(context.raw)
                            return context.raw + "%"
                        },



                    }
                }
            }
        }
    }
    //await function for Data of the last week
    function readLastWeek() {
        return new Promise((resolve, reject) => {
            getLastWeek((datalast) => {
                datalast ? resolve(datalast) : reject(new Error)
            })
        })
    }
    //Creating an object that chartjs can read for the cahrt
    React.useEffect(() => {
        setData({
            labels:["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
            datasets: [
                {   
                    label: "RH in the last 5 Minutes",
                    data: [DataLastWeek.Monday, DataLastWeek.Tuesday, DataLastWeek.Wednesday, DataLastWeek.Thursday, DataLastWeek.Friday, DataLastWeek.Saturday, DataLastWeek.Sunday],
                    backgroundColor: "#665066",
                    borderWidth: 4


                },
            ],
        });

    }, [DataLastWeek])

    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minutes", "Now"],
        datasets: [
            {
                data: [DataLastWeek.Monday, DataLastWeek.Tuesday, DataLastWeek.Wednesday, DataLastWeek.Thursday, DataLastWeek.Friday, DataLastWeek.Saturday, DataLastWeek.Sunday],
                backgroundColor: "#660066",
                borderWidth: 4


            },
        ],
    });

    return (
    <div><BarChart Data={data} Options={ChartOptions.options}></BarChart></div>
    
  )
}
