import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
import reviewsReducer from '../features/reviewsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    reviews: reviewsReducer,
  },
});

export default store;
