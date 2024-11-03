// src/components/About.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className="text-center">
      <h1>About Us</h1>
      <p>This is an e-commerce project aimed at providing a seamless shopping experience for our customers. Our platform offers a wide range of products, competitive pricing, and exceptional customer service.</p>
      <p>Key features of our e-commerce platform include:</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li>User-friendly interface</li>
        <li>Secure payment options</li>
        <li>Fast shipping and delivery</li>
        <li>24/7 customer support</li>
        <li>Regular promotions and discounts</li>
      </ul>
      
      <h2>Learn More</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><Link to="team">Our Team</Link></li>
          <li><Link to="mission">Our Mission</Link></li>
        </ul>
      </nav>

      {/* Outlet for nested routing */}
      <Outlet />
    </div>
  );
};

export default About;