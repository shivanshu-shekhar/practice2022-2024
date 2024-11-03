// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice'; // Import the logout action
import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action to update state
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Navbar expand="lg" className={`sticky-top navbar-${props.mode} bg-${props.mode}`} >
      <Container>
        <Link className="navbar-brand" to="/products">Shopee</Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
          {/* Toggle Switch for Dark Mode */}
          {/* <Form className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <Form.Check 
              type="switch" 
              id="custom-switch" 
              label={props.mode === 'light' ? 'Enable dark mode' : 'Disable dark mode'} 
              onChange={props.toggleMode} 
              checked={props.mode === 'dark'} // Set checked based on the mode
            />
          </Form> */}
          <Form className="d-flex align-items-center ms-2">
            <Form.Check 
              type="switch" 
              id="custom-switch" 
              label={props.mode === 'light' ? 'Enable dark mode' : 'Disable dark mode'} 
              onChange={props.toggleMode} 
              checked={props.mode === 'dark'} // Set checked based on the mode
            />
          </Form>
          {/* Rounded Logout Button */}
          <Button 
            variant="danger" 
            onClick={handleLogout} 
            className="rounded-pill ms-2"
            style={{ marginLeft: '8px', borderRadius: '20px' }} 
          >
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;