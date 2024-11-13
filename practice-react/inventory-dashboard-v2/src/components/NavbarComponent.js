import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" text="light" sticky="top">
            <Container>
                <Navbar.Brand
                    as={NavLink} 
                    to="/" 
                    className={({ isActive }) => (isActive ? "active" : "")}
                >Inventory Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            as={NavLink} 
                            to="/summary-page" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Summary Page
                        </Nav.Link>
                        <Nav.Link 
                            as={NavLink} 
                            to="/inventory-aging-report" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Inventory Aging Report
                        </Nav.Link>
                        <Nav.Link 
                            as={NavLink} 
                            to="/backorder-report" 
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Backorder Report
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;