import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register all components
Chart.register(...registerables);

const CategoryGraphs = ({ filteredData }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [uniqueCategories, setUniqueCategories] = useState([]);

    // Extract unique categories from filteredData
    useEffect(() => {
        const categories = [...new Set(filteredData.map(item => item.CategoryName))];
        setUniqueCategories(categories);
        if (categories.length > 0) {
            setSelectedCategory(categories[0]); // Set default selected category
        }
    }, [filteredData]);

    // Filter data for the selected category
    const categoryData = filteredData.filter(item => item.CategoryName === selectedCategory);

    // Calculate OrderItemQuantity and AvailableQuantity for the selected category
    const totalOrderQuantity = categoryData.reduce((total, item) => total + item.OrderItemQuantity, 0);
    const totalAvailableQuantity = categoryData.reduce((total, item) => total + item.AvaliableQuantity, 0);

    // Calculate Shipped and Received counts for the selected category
    const shippedCount = categoryData.filter(item => item.Status === "Shipped").length;
    const receivedCount = categoryData.filter(item => item.Status === "Received").length;

    // Data for the first graph (OrderItemQuantity and AvailableQuantity)
    const orderAvailabilityData = {
        labels: ['Order Quantity', 'Available Quantity'],
        datasets: [
            {
                label: 'Quantities',
                data: [totalOrderQuantity, totalAvailableQuantity],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
            },
        ],
    };

    // Data for the second graph (Shipped vs Received)
    const statusData = {
        labels: ['Shipped', 'Received'],
        datasets: [
            {
                label: 'Status Count',
                data: [shippedCount, receivedCount],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
            },
        ],
    };

    return (
        <div>
            <h2>Category Graphs</h2>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ width: '48%' }}>
                    <h3>Order and Availability</h3>
                    <Bar data={orderAvailabilityData} options={{ scales: { y: { beginAtZero: true } } }} />
                </div>
                <div style={{ width: '48%' }}>
                    <h3>Shipped vs Received</h3>
                    <Bar data={statusData} options={{ scales: { y: { beginAtZero: true } } }} />
                </div>
            </div>
        </div>
    );
};

export default CategoryGraphs;