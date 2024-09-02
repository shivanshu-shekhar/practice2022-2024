import React from 'react';
import { NavLink } from 'react-router-dom';
 
const CustomNavbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <NavLink to="/" className="navbar-brand">
          Shopee
        </NavLink>
        <NavLink to="/cart" className="btn btn-outline-success me-2">
          Cart
        </NavLink>
      </form>
    </nav>
  );
};
 
export default CustomNavbar;





