// src/components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    dispatch(register({ email, password })); // Dispatch register action with new user data
    
    alert('Registration successful! You can now log in.');

    // Clear input fields
    setEmail('');
    setPassword('');

    navigate('/login'); // Navigate back to the login page
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>

            <Button variant="primary" onClick={handleRegister} className="w-100 mt-3">
              Register
            </Button>
            <Button variant="link" onClick={() => navigate('/login')} className="w-100 mt-2">
              Already have an account? Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;