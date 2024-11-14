import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all components
Chart.register(...registerables);

const StatusGraph = ({ filteredData }) => {
    // Count Shipped and Received
    const shippedCount = filteredData.filter(item => item.Status === "Shipped").length;
    const receivedCount = filteredData.filter(item => item.Status === "Received").length;

    // Data for the bar chart
    const data = {
        labels: ['Shipped', 'Received'],
        datasets: [
            {
                label: 'Order Status',
                data: [shippedCount, receivedCount],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the chart
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
        <h2>Shipped vs Received</h2>
        <div style={{ width: '50%', margin:'0 auto', height:'30vw'}}>
            <Bar data={data} options={options} />
        </div>
        </>
    );
};

export default StatusGraph;