// // src/App.js
// import React from 'react';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import Login from './components/Login';
// import Register from './components/Register';
// import Products from './components/Products';
// import About from './components/About'; // Ensure this component exists
// import Contact from './components/Contact'; // Ensure this component exists
// import Cart from './components/Cart'; // Ensure this component exists
// import NavbarComponent from './components/Navbar';
// import Team from './components/Team';
// import Mission from './components/Mission';
// import Footer from './components/Footer';
// import ErrorPage from './components/ErrorPage';
// import { useState } from 'react'; 

// function App() {
//   const location = useLocation(); // Get current location
//   let [mode,setMode] = useState('light');
//   // Define paths where the Navbar should not be shown
//   const noNavbarPaths = ['/login', '/register','/'];
//   let toggleMode = () => {
//     if(mode === 'light'){
//       setMode('dark')
//       document.body.style.backgroundColor='#212529';
//       document.body.style.color = 'white';
//       document.title = 'Shopee Dark mode';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor='white';
//       document.body.style.color = 'black';
//       document.title = 'Shopee-Light mode';
//     }
//   }
//   return (
//     <>
//       {/* Conditionally render Navbar based on current path */}
//       {!noNavbarPaths.includes(location.pathname) && <NavbarComponent mode={mode} toggleMode={toggleMode} />}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/products" element={<Products mode={mode}/>} />
//         <Route path="/products" element={<Products mode={mode}/>} />
//         {/* About route with nested routes */}
//         <Route path="/about" element={<About />}>
//           <Route path="team" element={<Team />} />
//           <Route path="mission" element={<Mission />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart  mode={mode}/>} />
//         <Route path="*" element={<ErrorPage />} /> {/* Redirect all other paths to login */}
//       </Routes>
//       {!noNavbarPaths.includes(location.pathname)&& <Footer mode={mode}/>}
//     </>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Cart from './components/Cart'; 
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Team from './components/Team';
import Mission from './components/Mission';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { useSelector } from 'react-redux';


function App() {
  const location = useLocation(); 
  let [mode,setMode] = useState('light');
  
  const noNavbarPaths = ['/login', '/register','/'];
  
  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      document.body.style.color = 'white';
      document.title = 'Shopee Dark mode';
    } else if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color = 'black';
      document.title = 'Shopee Light mode';
    }
  };
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {/* Conditionally render Navbar based on current path */}

      {isLoggedIn && !noNavbarPaths.includes(location.pathname) && (
        <NavbarComponent mode={mode} toggleMode={toggleMode} />
      )}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route path="/products" element={<ProtectedRoute><Products mode={mode}/></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}>
          <Route path="team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          <Route path="mission" element={<ProtectedRoute><Mission /></ProtectedRoute>} />
        </Route>
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart mode={mode}/></ProtectedRoute>} />

        {/* Redirect all other paths to login */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {isLoggedIn && !noNavbarPaths.includes(location.pathname) && (<Footer mode={mode}/>)}
    </>
  );
}

export default App;