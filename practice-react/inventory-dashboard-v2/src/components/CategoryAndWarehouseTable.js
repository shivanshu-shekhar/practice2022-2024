import React from 'react';
import { Table } from 'react-bootstrap';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const CategoryAndWarehouseTable = ({ filteredData }) => {
    // Calculate category-wise totals
    const categoryTotals = {};
    filteredData.forEach(item => {
        const categoryName = item.CategoryName;
        if (!categoryTotals[categoryName]) {
            categoryTotals[categoryName] = {
                totalOrderQuantity: 0,
                totalAvailableQuantity: 0,
            };
        }
        categoryTotals[categoryName].totalOrderQuantity += item.OrderItemQuantity;
        categoryTotals[categoryName].totalAvailableQuantity += item.AvaliableQuantity;
    });

    // Convert categoryTotals to an array for rendering
    const categoryRows = Object.entries(categoryTotals).map(([category, totals]) => ({
        category,
        ...totals,
    }));

    // Calculate warehouse-wise totals
    const warehouseTotals = {};
    filteredData.forEach(item => {
        const warehouseName = item.WarehouseName;
        if (!warehouseTotals[warehouseName]) {
            warehouseTotals[warehouseName] = {
                totalOrderQuantity: 0,
                totalAvailableQuantity: 0,
                shippedCount: 0,
                receivedCount: 0,
            };
        }
        warehouseTotals[warehouseName].totalOrderQuantity += item.OrderItemQuantity;
        warehouseTotals[warehouseName].totalAvailableQuantity += item.AvaliableQuantity;
        if (item.Status === "Shipped") {
            warehouseTotals[warehouseName].shippedCount += 1;
        } else if (item.Status === "Received") {
            warehouseTotals[warehouseName].receivedCount += 1;
        }
    });

    // Convert warehouseTotals to an array for rendering
    const warehouseRows = Object.entries(warehouseTotals).map(([warehouse, totals]) => ({
        warehouse,
        ...totals,
    }));

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ flex: '1 1 300px', marginRight: '10px' }}>
                <h3>Category-wise Totals</h3>
                <Table id="category-table" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Total Order Quantity</th>
                            <th>Total Available Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryRows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.category}</td>
                                <td>{row.totalOrderQuantity}</td>
                                <td>{row.totalAvailableQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <DownloadTableExcel 
                    filename="Category_Totals" 
                    sheet="Categories" 
                    currentTableRef={document.getElementById('category-table')}
                >
                    <button className="btn btn-success mb-2">Download this table as .xlsx file</button>
                </DownloadTableExcel>
            </div>

            <div style={{ flex: '1 1 300px' }}>
                <h3>Warehouse-wise Totals</h3>
                <Table id="warehouse-table" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Warehouse Name</th>
                            <th>Total Order Quantity</th>
                            <th>Total Available Quantity</th>
                            <th>Shipped Count</th>
                            <th>Received Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {warehouseRows.map((row, index) => (
                            <tr key={index}>
                                <td>{row.warehouse}</td>
                                <td>{row.totalOrderQuantity}</td>
                                <td>{row.totalAvailableQuantity}</td>
                                <td>{row.shippedCount}</td>
                                <td>{row.receivedCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <DownloadTableExcel 
                    filename="Warehouse_Totals" 
                    sheet="Warehouses" 
                    currentTableRef={document.getElementById('warehouse-table')}
                >
                    <button className="btn btn-success mb-2">Download this table as .xlsx file</button>
                </DownloadTableExcel>
            </div>
        </div>
    );
};

export default CategoryAndWarehouseTable;