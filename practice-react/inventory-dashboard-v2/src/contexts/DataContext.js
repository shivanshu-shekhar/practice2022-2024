import React, { createContext, useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const excelDateToJSDate = (serial) => {
            const epoch = new Date(Date.UTC(1899, 11, 30)); //December 30, 1899, as Excel's date serial system baseline
            const jsDate = new Date(epoch.getTime() + serial * 86400 * 1000);
            // Adjust for Excel's leap year bug
            // if (serial >= 60) {
            //     jsDate.setDate(jsDate.getDate() - 1); // Adjust for the leap year bug
            // }
            return jsDate.toISOString().split('T')[0];//Returns in 'YYYY-MM-DD' format
        };
        // Function to read Excel file
        const fetchData = async () => {
            const response = await fetch('/assets/excel-files/Update inventory data.xlsx');
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Assuming data is in the first sheet
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            const processedData = jsonData.map(item => ({
                ...item,
                OrderDate: excelDateToJSDate(item.OrderDate), // Convert OrderDate
            }));
        
            setData(processedData);
            };
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};