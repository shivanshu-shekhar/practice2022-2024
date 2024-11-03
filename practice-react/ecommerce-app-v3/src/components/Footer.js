// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({ mode }) => {
  return (
    <footer className={`bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'} py-4`}>
      <Container>
        <Row className="text-center">
          <Col>
            <Link to="/" className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>Shopee</Link>
          </Col> 
          <Col>
            <Link to="/about" className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>About</Link>
          </Col>
          <Col>
            <Link to="/contact" className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>Contact</Link>
          </Col>
          <Col>
            <Link to="/cart" className={`text-${mode === 'dark' ? 'light' : 'dark'}`}>Cart</Link>
          </Col> 
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p className={`m-0 text-${mode === 'dark' ? 'light' : 'dark'}`}>&copy; {new Date().getFullYear()} Shopee (Owner Shivanshu). All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;