import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import SummaryPage from './components/SummaryPage';
import InventoryAgingReport from './components/InventoryAgingReport';
import BackorderReport from './components/BackorderReport';
import { DataProvider } from './contexts/DataContext';

function App() {
    return (
      <DataProvider>
        <Router>
            <div className="App">
                <NavbarComponent />
                <Routes>
                    <Route path="/" element={<SummaryPage />} />
                    <Route path="/summary-page" element={<SummaryPage />} />
                    <Route path="/inventory-aging-report" element={<InventoryAgingReport />} />
                    <Route path="/backorder-report" element={<BackorderReport />} />
                </Routes>
            </div>
        </Router>
      </DataProvider>
    );
}

export default App;