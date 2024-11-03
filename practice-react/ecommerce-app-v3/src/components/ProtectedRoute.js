// // src/components/ProtectedRoute.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../store/authSlice';
// import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store

// const ProtectedRoute = ({ children }) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Access the isLoggedIn state from Redux
//     if(isLoggedIn){
//         return children;
//     }
//     else{
//         dispatch(logout());
//         navigate('/login'); 
//     }
// //   return isLoggedIn ? children : <Navigate to="/login" replace />; // Redirect if not logged in
// };

// export default ProtectedRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Access the isLoggedIn state from Redux

    // If not logged in, redirect to login
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children; // Return children if logged in
};

export default ProtectedRoute;