import React, { useContext, useState } from 'react';
import { DataContext } from '../contexts/DataContext';
import { Pie } from 'react-chartjs-2';

const BackorderReport = () => {
    const data = useContext(DataContext);
    const [selectedCategory, setSelectedCategory] = useState('');

    // Get unique categories
    const uniqueCategories = [...new Set(data.map(item => item.CategoryName))];

    // Handle category selection change
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // Calculate backorders for the selected category
    const warehouseBackorders = {};

    data.forEach(item => {
        if (item.CategoryName === selectedCategory) {
            const backorderQuantity = item.OrderItemQuantity - item.AvaliableQuantity;
            if (backorderQuantity > 0) {
                const warehouseName = item.WarehouseName;
                if (!warehouseBackorders[warehouseName]) {
                    warehouseBackorders[warehouseName] = 0;
                }
                warehouseBackorders[warehouseName] += backorderQuantity;
            }
        }
    });

    // Prepare data for pie chart
    const chartData = {
        labels: Object.keys(warehouseBackorders),
        datasets: [{
            data: Object.values(warehouseBackorders),
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
        }],
    };

    return (
        <div>
            <h1>Backorder Report</h1>
            <p>This report provides information on backordered items.</p>
            <p>On selecting the option from dropdown box the pie graph of backorders of
                selected category in the warehouses are shown if no backorders then message is shown.
            </p>
            <h2>Select Category</h2>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="" disabled>Select a category</option>
                {uniqueCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>

            {selectedCategory ? (
                Object.keys(warehouseBackorders).length > 0 ? (
                    <div style={{ width: '60%', margin: '20px auto', height:'400px' }}>
                        <Pie data={chartData} options={{ maintainAspectRatio: false }} />
                    </div>
                ) : (
                    <p>No backorders for the selected category.</p> // Message when there are no backorders
                )
            ) : null}
        </div>
    );
};

export default BackorderReport;