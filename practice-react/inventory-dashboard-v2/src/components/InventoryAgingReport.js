// import React, { useContext,useState } from 'react';
// import { DataContext } from '../contexts/DataContext';
// const InventoryAgingReport = () => {
//     const data = useContext(DataContext);
//     const [todayDate, setTodayDate] = useState(() => {
//         const today = new Date();
//         const yyyy = today.getFullYear();
//         const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//         const dd = String(today.getDate()).padStart(2, '0');
//         return `${yyyy}-${mm}-${dd}`; // Format: yyyy-mm-dd
//     });
//     return (
//         <div>
//             <h1>Inventory Aging Report</h1>
//             <p>This report shows aging inventory details. of {todayDate}</p>
//         </div>
//     );
// };

// export default InventoryAgingReport;

import React, { useState } from 'react';
import withInventoryData from '../hocs/withInventoryData';
import CategoryAgingGraph from './CategoryAgingGraph';
import ProductAgingGraph from './ProductAgingGraph';

const InventoryAgingReport = ({ uniqueCategories, uniqueProducts, data }) => {
    const [todayDate] = useState(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`; // Format: yyyy-mm-dd
    });

    // Check if data is available before rendering
    if (!data || !Array.isArray(data)) {
        return <div>Loading...</div>; // Or some other loading state
    }

    return (
        <div>
            <h1>Inventory Aging Report</h1>
            <p>This report shows aging inventory details as of {todayDate}.</p>

            {/* Render the graphs */}
            <CategoryAgingGraph data={data} uniqueCategories={uniqueCategories} />
            <ProductAgingGraph data={data} uniqueProducts={uniqueProducts} />
        </div>
    );
};

// Wrap InventoryAgingReport with HOC to get inventory data
export default withInventoryData(InventoryAgingReport);