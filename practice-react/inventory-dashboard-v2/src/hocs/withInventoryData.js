import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const withInventoryData = (WrappedComponent) => {
    return (props) => {
        const data = useContext(DataContext);

        // Get unique categories and products
        const uniqueCategories = [...new Set(data.map(item => item.CategoryName))];
        const uniqueProducts = [...new Set(data.map(item => item.ProductName))];

        return (
            <WrappedComponent 
                {...props} 
                data={data} 
                uniqueCategories={uniqueCategories} 
                uniqueProducts={uniqueProducts} 
            />
        );
    };
};

export default withInventoryData;