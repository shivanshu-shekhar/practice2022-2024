import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all components
Chart.register(...registerables);

const VendorGraph = ({ filteredData }) => {
    // Aggregate data for each vendor
    const vendorData = {};

    filteredData.forEach(item => {
        const vendorName = item.VendorName;

        if (!vendorData[vendorName]) {
            vendorData[vendorName] = {
                totalOrderQuantity: 0,
                totalAvailableQuantity: 0,
            };
        }

        vendorData[vendorName].totalOrderQuantity += item.OrderItemQuantity;
        vendorData[vendorName].totalAvailableQuantity += item.AvaliableQuantity;
    });

    // Prepare data for the chart
    const labels = Object.keys(vendorData);
    const totalOrderQuantities = labels.map(vendor => vendorData[vendor].totalOrderQuantity);
    const totalAvailableQuantities = labels.map(vendor => vendorData[vendor].totalAvailableQuantity);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Total Order Quantity',
                data: totalOrderQuantities,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Total Available Quantity',
                data: totalAvailableQuantities,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    // Options for the chart
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                stacked: false,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <>
        <h2>Vendor Order and Availability</h2>
        <div style={{ width: '65%', margin:'0 auto',height:'30vw' }}>
            <Bar data={data} options={options} />
        </div>
        </>
    );
};

export default VendorGraph;