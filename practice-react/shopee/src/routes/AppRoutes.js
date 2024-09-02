import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from '../components/CustomNavbar';
import { Provider } from 'react-redux';
import store from '../store/store';
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
export default function AppRoutes() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <CustomNavbar />
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<ProductsPage />} />
                                <Route path="/cart" element={<CartPage />} />
                            </Routes>
                        </Suspense>
                    </div>
                </Router>
            </Provider>
        </div>
    )
}
