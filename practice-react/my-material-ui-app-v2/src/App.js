import React, { useContext }  from 'react';
import { DataProvider,DataContext } from './DataContext'; // Adjust path as needed
import TablePage from './TablePage'; // Adjust path as needed
import ViewPage from './ViewPage'; // Adjust path as needed
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme(); // You can customize the theme here

const App = () => {
    return (
        <DataProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Main />
            </ThemeProvider>
        </DataProvider>
    );
};

const Main = () => {
    const { currentIndex } = useContext(DataContext);

    return (
        <>
            {currentIndex === null ? <TablePage /> : <ViewPage />}
        </>
    );
};

export default App;