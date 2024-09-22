import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file for custom styles

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand as={Link} to="/">Shopee</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;