import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
        if (existingItem.quantity <= 0) {
          return state.filter(item => item.id !== id);
        }
      } else {
        state.push({ id, quantity });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;