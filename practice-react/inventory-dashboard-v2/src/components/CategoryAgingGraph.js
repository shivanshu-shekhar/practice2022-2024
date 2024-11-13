import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const CategoryAgingGraph = ({ data, uniqueCategories }) => {
    const [selectedCategory, setSelectedCategory] = useState(uniqueCategories[0]);

    // Calculate aging data
    const todayDate = new Date();
    const agingBuckets = {
        '0-30': 0,
        '31-60': 0,
        '61-90': 0,
        '91-120': 0,
        'Others': 0,
    };

    data.forEach(item => {
        if (item.CategoryName === selectedCategory) {
            const orderDate = new Date(item.OrderDate);
            const ageInDays = Math.floor((todayDate - orderDate) / (1000 * 60 * 60 * 24));

            if (ageInDays <= 30) agingBuckets['0-30'] += item.AvaliableQuantity;
            else if (ageInDays <= 60) agingBuckets['31-60'] += item.AvaliableQuantity;
            else if (ageInDays <= 90) agingBuckets['61-90'] += item.AvaliableQuantity;
            else if (ageInDays <= 120) agingBuckets['91-120'] += item.AvaliableQuantity;
            else agingBuckets['Others'] += item.AvaliableQuantity;
        }
    });

    // Prepare chart data
    const chartData = {
        labels: Object.keys(agingBuckets),
        datasets: [{
            label: 'Available Quantity',
            data: Object.values(agingBuckets),
            backgroundColor: 'rgba(255, 215, 0, 0.6)', // Golden yellowish color
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1,
        }],
    };

    return (
        <div>
            <h2>Select Category</h2>
            <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} >
            <option value="" disabled selected>
                Select an option
            </option>
                {uniqueCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <div style={{ width: '60%', margin: '20px auto', height:'400px'}}>
                <Bar data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    );
};

export default CategoryAgingGraph;