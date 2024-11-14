import React, { useContext, useState, useEffect, useRef } from 'react';
import { DataContext } from '../contexts/DataContext';
import StatusGraph from './StatusGraph';
import VendorGraph from './VendorGraph'; // Import VendorGraph component
import CategoryGraphs from './CategoryGraphs'; // Import CategoryGraphs component
import CategoryAndWarehouseTable from './CategoryAndWarehouseTable'; // Import CategoryAndWarehouseTable component
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Row, Col } from 'react-bootstrap';

const SummaryPage = () => {
    const data = useContext(DataContext); // Accessing data from context
    const [selectedDate, setSelectedDate] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const pdfRef = useRef(); // Create a reference for the PDF export

    // Update filtered data whenever selectedDate changes
    useEffect(() => {
        if (selectedDate) {
            const filtered = data.filter(item => {
                const orderDate = new Date(item.OrderDate); // Ensure OrderDate is a Date object
                const formattedSelectedDate = new Date(selectedDate);
                return orderDate <= formattedSelectedDate; // Compare dates
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(data); // Reset to original data if no date is selected
        }
    }, [selectedDate, data]);

    // Calculate totals based on filteredData
    const totalWarehouses = new Set(filteredData.map(item => item.WarehouseName)).size;
    const totalCategories = new Set(filteredData.map(item => item.CategoryName)).size;
    const totalProducts = new Set(filteredData.map(item => item.ProductId)).size;
    const totalVendors = new Set(filteredData.map(item => item.VendorName)).size;
    const shippedCount = filteredData.filter(item => item.Status === "Shipped").length;
    const receivedCount = filteredData.filter(item => item.Status === "Received").length;
    const totalOrderQuantity = filteredData.reduce((total, item) => total + item.OrderItemQuantity, 0);
    const totalAvailableQuantity = filteredData.reduce((total, item) => total + item.AvaliableQuantity, 0);

    // Reset selected date to null
    const handleResetDate = () => {
        setSelectedDate('');
        setFilteredData(data); // Reset filtered data to original data
    };

    // Function to download the page as PDF
    const downloadPDF = () => {
        html2canvas(pdfRef.current, { scrollY: -window.scrollY }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190; // Width of image in mm
            const pageHeight = pdf.internal.pageSize.height; // Height of PDF page in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height based on width
            let heightLeft = imgHeight;

            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('summary_page.pdf');
        });
    };

    return (
        <div ref={pdfRef} style={{ padding: '20px' }}> {/* Reference for PDF export */}
            <h1>Summary Page</h1>
            <p>Select a Date (yyyy-mm-dd):</p>
            <input 
                type="date" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
                className="form-control" // Use Bootstrap styling
            />
            <button onClick={handleResetDate} className="btn btn-secondary mt-2">Reset Date</button>
            {/* <p>Total Warehouses: {totalWarehouses}</p>
            <p>Total Categories: {totalCategories}</p>
            <p>Total Products: {totalProducts}</p>
            <p>Total Vendors: {totalVendors}</p>
            <p>Total Shipped Orders: {shippedCount}</p>
            <p>Total Received Orders: {receivedCount}</p>
            <p>Total Order Quantity: {totalOrderQuantity}</p>
            <p>Total Available Quantity: {totalAvailableQuantity}</p> */}
            <Row className="text-center">
            <Col md={3}>
                <p>Total Warehouses: {totalWarehouses}</p>
            </Col>
            <Col md={3}>
                <p>Total Categories: {totalCategories}</p>
            </Col>
            <Col md={3}>
                <p>Total Products: {totalProducts}</p>
            </Col>
            <Col md={3}>
                <p>Total Vendors: {totalVendors}</p>
            </Col>
            <Col md={3}>
                <p>Total Shipped Orders: {shippedCount}</p>
            </Col>
            <Col md={3}>
                <p>Total Received Orders: {receivedCount}</p>
            </Col>
            <Col md={3}>
                <p>Total Order Quantity: {totalOrderQuantity}</p>
            </Col>
            <Col md={3}>
                <p>Total Available Quantity: {totalAvailableQuantity}</p>
            </Col>
            </Row>
            <hr/>
            {/* Include the StatusGraph component */}
            <StatusGraph filteredData={filteredData} />
            <hr/>
            {/* Include the VendorGraph component */}
            <VendorGraph filteredData={filteredData} />
            <hr/>
            {/* Include the CategoryGraphs component */}
            <CategoryGraphs filteredData={filteredData} />
            <hr/>
            {/* Include the CategoryAndWarehouseTable component */}
            <CategoryAndWarehouseTable filteredData={filteredData} />
            <hr/>
            {/* Button to download as PDF */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={downloadPDF} className="btn btn-primary">
                    Download Page as PDF
                </button>
            </div>
        </div>
    );
};

export default SummaryPage;