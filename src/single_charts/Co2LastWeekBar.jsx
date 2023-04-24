import React from 'react'
import Barchart from '../diagramm_components/bar/bar_chart.jsx'
import { getLastWeek } from '../db.js';
function Co2LastWeekBar() {

    const [DataLastWeek, setDataLastWeek] = React.useState({})

    setTimeout(async () => { setDataLastWeek(await readLastWeek()) }, 1000)

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
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [
                {
                    data: [DataLastWeek.Monday, DataLastWeek.Tuesday, DataLastWeek.Wednesday, DataLastWeek.Thursday, DataLastWeek.Friday, DataLastWeek.Saturday, DataLastWeek.Sunday],
                    backgroundColor: "#660066",
                    borderWidth: 4


                },
            ],
        });

    }, [DataLastWeek])

    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
            {
                data: [DataLastWeek.Monday, DataLastWeek.Tuesday, DataLastWeek.Wednesday, DataLastWeek.Thursday, DataLastWeek.Friday, DataLastWeek.Saturday, DataLastWeek.Sunday],
                backgroundColor: "#660066",
                borderWidth: 3


            },
        ],
    });

    return DataLastWeek ? (
        <Barchart Data={data}></Barchart>
    ) : null;
}

export default Co2LastWeekBar