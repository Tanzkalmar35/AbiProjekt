import React from 'react'
import BarChart from '../diagramm_components/bar/bar_chart'
import { getLastWeek } from '../db'
export default function RHChart() {
    const [DataLastWeek, setDataLastWeek] = React.useState([50,50,52,50,50])

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

    //Creating an object that chartjs can read for the cahrt


    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Four Minutes", "Three Minutes", "Two Minutes", "One Minute", "Now"],
        datasets: [
            {
                data: DataLastWeek,
                backgroundColor: "#0211D6",
                borderWidth: 4,
                label: "RH in the last 5 Minutes"


            },
        ],
    });

    return (
    <div><BarChart Data={data} Options={ChartOptions.options}></BarChart></div>
    
  )
}
