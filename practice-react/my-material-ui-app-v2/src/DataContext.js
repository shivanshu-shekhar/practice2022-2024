import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]); // Your data array
    const [currentIndex, setCurrentIndex] = useState(null); // Start with null
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5); // Assuming 5 entries per page
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result); // Set the fetched data
            } catch (err) {
                setError(err.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <DataContext.Provider value={{ data, currentIndex, start, end, setCurrentIndex, setStart, setEnd, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};