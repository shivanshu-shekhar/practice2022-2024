import { createSlice } from '@reduxjs/toolkit';

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [], // Store all reviews here
  },
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload); // Add new review to the state
    },
    updateReview: (state, action) => {
      const { id, name, email, review, score } = action.payload;
      const existingReview = state.reviews.find((rev) => rev.id === id);
      if (existingReview) {
        existingReview.name = name;
        existingReview.email = email;
        existingReview.review = review;
        existingReview.score = score;
      }
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter((rev) => rev.id !== action.payload.id);
    },
  },
});

export const { addReview, updateReview, deleteReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
