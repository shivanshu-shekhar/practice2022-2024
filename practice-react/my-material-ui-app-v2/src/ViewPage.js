import React, { useContext } from 'react';
import { DataContext } from './DataContext'; // Adjust path as needed
import {
    Box,
    Button,
    Typography,
} from '@mui/material';

const ViewPage = () => {
    const { data, currentIndex, setCurrentIndex, setStart, setEnd } = useContext(DataContext);

    const handleNext = () => {
        if (currentIndex !== null && currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex !== null && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleBackToTable = () => {
        // Calculate new start and end based on current index
        // if (currentIndex !== null) {
        //     const newStart = Math.floor(currentIndex / 5) * 5; // Calculate start for pagination
        //     const newEnd = newStart + 5;
        //     setStart(newStart);
        //     setEnd(newEnd > data.length ? data.length : newEnd);
        // }
        // Calculate new start and end based on current index
        if (currentIndex !== null) {
        const newStart = Math.floor(currentIndex / 5) * 5; // Calculate start for pagination
        const newEnd = Math.min(newStart + 5, data.length); // Ensure end doesn't exceed data length
        setStart(newStart);
        setEnd(newEnd);
        setCurrentIndex(null); // Reset current index to null
        };
    }

    if (currentIndex === null || !data[currentIndex]) return null; // Handle case where currentIndex is out of bounds

    const currentItem = data[currentIndex];

    return (
        <Box p={2}>
            <Typography variant="h4">{currentItem.title}</Typography>
            <Typography variant="h6">ID: {currentItem.id}</Typography>
            <Typography>Category: {currentItem.category}</Typography>
            <Typography>Description: {currentItem.description}</Typography>
            <Typography>Rate: {currentItem.rating.rate}</Typography>
            <Typography>Count: {currentItem.rating.count}</Typography>
            {/* Add more content as needed */}
            <Box mt={2}>
                <Button onClick={handlePrevious} disabled={currentIndex === 0} variant="outlined">Previous</Button>
                <Button onClick={handleNext} disabled={currentIndex === data.length - 1} variant="outlined" style={{ marginLeft: '10px' }}>Next</Button>
                <Button onClick={handleBackToTable} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>Back to Table</Button> {/* Call to go back */}
            </Box>
        </Box>
    );
};

export default ViewPage;