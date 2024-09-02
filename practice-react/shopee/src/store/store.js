// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import { productsApi ,cartReducer  } from './productsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  // this is solution since using create store was giving error
  reducer: {[productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
 
 
// Optional: Setup listeners for RTK Query
setupListeners(store.dispatch);
 
export default store;
