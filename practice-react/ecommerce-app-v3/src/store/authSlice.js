import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(sessionStorage.getItem('registeredUsers')) || [], // Load users from session storage
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      state.users.push(action.payload);
      sessionStorage.setItem('registeredUsers', JSON.stringify(state.users)); // Store users in session storage
    },
    login(state, action) {
      const user = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
      if (user) {
        state.isLoggedIn = true;
      } else {
        alert('Unregistered user or incorrect credentials!');
      }
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;