import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userDetailsSlice';  // Assuming you will create a user slice for handling user details

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer,  // Add other reducers as needed
  },
});

export default store;
