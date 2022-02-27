import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2'; 

function PieChart(props) {
    const {items} = props;
    const [availableCounter, setAvailable] = useState(0);
    const [fullCounter, setFull] = useState(0);

    useEffect(() => {
        countAvailability();
    }, [])

    const countAvailability = () => {
        
        items.forEach((e, index) => {
            if(e.availability === "Available") {
                setAvailable(availableCounter => availableCounter + 1);
                
            } else if(e.availability === "Full") {
                setFull(fullCounter => fullCounter + 1);
            }
        })
    }

    const data = {
        labels: [
            'Available',
            'Full'
        ],
        datasets: [
            {
                label: "First Dataset",
                data: [availableCounter, fullCounter],
                backgroundColor: [
                    "rgba(32, 73, 8, 0.8)",
                    "rgba(183, 6, 6, 0.8)"
                ]
            }
        ]
    }

    return(
        <div>
            <Doughnut 
                data={data}
            />
            
        </div>
    )
}

export default PieChart;