import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: {}, isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action) {
      console.log('authSlice', action);
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export const userAuth = authSlice.reducer;

export const isUserLoggedIn = (state) => state.auth.isLoggedIn;
