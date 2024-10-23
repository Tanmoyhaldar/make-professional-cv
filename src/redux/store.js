import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userDetailsSlice';
import userEducationReducer from './userEducationSlice';
import skillsExperiseSlice from './skillsExperiseSlice';

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer,  // Add other reducers as needed
    education: userEducationReducer,
    skills: skillsExperiseSlice
  },
});

export default store;
