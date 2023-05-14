import React from 'react'

import {getCO2FB, getLastWeek} from '../db.js';
import { Chart as chartjs, ArcElement, Tooltip, Legend } from "chart.js/auto";

import {Bar} from "react-chartjs-2";
import {rounded} from "./Funticons_for_charts.js";
function Co2LastWeekBar() {
    chartjs.register(ArcElement, Tooltip, Legend);
    const [DataLastWeek, setDataLastWeek] = React.useState({})

    setTimeout(async () => { setDataLastWeek([await readLastWeek()]) }, 1000)


    const ChartOptions = {
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                           return rounded(context.raw * 1000) + "%"


                        },


                    }
                },
                subtitle : {
                    display : false

                },
                title : {
                    display: false
                }
            }
        }
    }
    //await function for Data of the last week
    function readLastWeek() {
        return new Promise((resolve, reject) => {
            getCO2FB((datalast) => {
                datalast ? resolve(datalast) : reject(new Error)
            })
        })
    }
    //Creating an object that chartjs can read for the cahrt
    React.useEffect(() => {
        setData({
            labels: ["Now"],
            datasets: [
                {
                    data: DataLastWeek,
                    backgroundColor: "#2C2F34",
                    borderWidth: 5,
                    label : "CO2 Now"

                },
            ],
            options : ChartOptions
        });

    }, [DataLastWeek])

    const [data, setData] = React.useState({
        //this will be late read from the database

        labels: ["Now"],
        datasets: [
            {
                data: DataLastWeek,
                backgroundColor: "#660066",
                borderWidth: 3,
                label : "CO2 Now"

            },
        ],
        options : ChartOptions
    });

    return (
        <Bar data={data} width={200} height={600} options={ChartOptions.options} />
    );
}

export default Co2LastWeekBar