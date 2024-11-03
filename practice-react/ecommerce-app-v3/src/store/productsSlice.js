import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../api/fakeStoreApi';

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const products = await fetchProducts();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find(p => p.id === id);
      if (product) product.quantity = quantity;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      return action.payload.map(product => ({ ...product, quantity: 0 }));
    });
  }
});

export const { updateProductQuantity } = productsSlice.actions;
export default productsSlice.reducer;