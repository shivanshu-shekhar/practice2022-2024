import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

// Create an API slice
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({getProducts: builder.query({query: () => 'products',}),}),
});
 
// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi;
 // Create a slice for cart management
const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (state[id]) {
        state[id].quantity += 1;
      } else {
        state[id] = { ...action.payload, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      if (state[id]) {
        state[id].quantity -= 1;
        if (state[id].quantity <= 0) {
          delete state[id];
        }
      }
    },
  },
});
 
// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;
 
// Export the cart reducer
export const cartReducer = cartSlice.reducer;

 