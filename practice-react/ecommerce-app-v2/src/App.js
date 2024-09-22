import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './app/store';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
      </div>
    </Provider>
  );
}

export default App;
