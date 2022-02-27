import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart(props) {
    const {categories} = props
    const labels = ["1", "2", "3", "4"]
    const data = {
        labels,
        datasets: [
            {
                label: "Quantity",
                data: categories,
                backgroundColor: 'rgb(54, 162, 235)'
            }
        ]
    }
    return(
        <div>
            <Bar 
                data={data}
                height={300}
                width={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )

}

export default BarChart;