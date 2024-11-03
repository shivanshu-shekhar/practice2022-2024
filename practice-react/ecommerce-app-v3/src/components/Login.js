// src/components/Login.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../store/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Row, Col } from 'react-bootstrap';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Accessing the Redux store state for registered users
//   const registeredUsers = useSelector(state => state.auth.users); // Get users array

//   const handleLogin = () => {
//     // Check if the entered email and password match any registered user
//     const user = registeredUsers.find(user => user.email === email && user.password === password);
    
//     if (user) {
//       dispatch(login({ email, password })); // Dispatch login action
//       navigate('/products'); // Redirect to products page after successful login
//     } else {
//       alert('Unregistered user or incorrect credentials!'); // Alert for failed login
//     }
//   };

//   const handleRegister = () => {
//     navigate('/register'); // Navigate to the register page
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h2 className="text-center mb-4">Login</h2>
//           <Form>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Enter email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control 
//                 type="password" 
//                 placeholder="Password" 
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)} 
//                 required 
//               />
//             </Form.Group>

//             <Button variant="primary" onClick={handleLogin} className="w-100 mt-3">
//               Login
//             </Button>
//             <Button variant="link" onClick={handleRegister} className="w-100 mt-2">
//               Register
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Accessing the Redux store state for registered users and login status
  const registeredUsers = useSelector(state => state.auth.users); // Get users array
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Get login status

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/products'); // Redirect to products page if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Reset error state
    setLoading(true); // Set loading state

    // Check if the entered email and password match any registered user
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    
    if (user) {
      dispatch(login({ email, password })); // Dispatch login action
      navigate('/products'); // Redirect to products page after successful login
    } else {
      setError('Unregistered user or incorrect credentials!'); // Set error message
    }

    setLoading(false); // Reset loading state
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}
          <Form onSubmit={handleLogin}>
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

            <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <Button variant="link" onClick={handleRegister} className="w-100 mt-2">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;