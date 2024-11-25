import React, { useContext } from 'react';
import { DataContext } from './DataContext'; // Adjust path as needed
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Typography,
    Box,
} from '@mui/material';

const TablePage = () => {
    const { data, start, end, setStart, setEnd, setCurrentIndex, loading, error } = useContext(DataContext);

    if (loading) return <Typography variant="h6">Loading...</Typography>; // Show loading message
    if (error) return <Typography color="error">Error: {error}</Typography>; // Show error message

    const handleNext = () => {
        if (end < data.length) {
            setStart(start + 5);
            setEnd(end + 5);
        }
    };

    const handlePrevious = () => {
        if (start > 0) {
            setStart(start - 5);
            if(end === data.length && data.length % 5 !== 0){
                setEnd(start);
            }//because there was mistake for previous clicking of last table when length is not multiple of 5
            else{
            setEnd(end - 5);
            }
        }
        
    };

    const handleView = (index) => {
        setCurrentIndex(index-1); // Set currentIndex to the selected entry's index
    };

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>Product List</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(start, end).map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleView(item.id)}>View</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={2}>
                <Button onClick={handlePrevious} disabled={start === 0} variant="outlined">Previous</Button>
                <Button onClick={handleNext} disabled={end >= data.length} variant="outlined" style={{ marginLeft: '10px' }}>Next</Button>
            </Box>
        </Box>
    );
};

export default TablePage;