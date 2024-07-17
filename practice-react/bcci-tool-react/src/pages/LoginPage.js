import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = () => {
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just check if the name is 'admin' and the password is '1234'
    if (name === 'admin' && password === '1234') {
      // Redirect to the ToolPage component
      navigate('/tool');
    } else {
      alert('Invalid name or password.');
    }
  };
 
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow">
        <h1 className="mb-4">Login</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
 
export default LoginPage;