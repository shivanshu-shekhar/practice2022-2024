// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import reviewsReducer from './reviewsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
  },
});

export default store;