import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import userReducer from './userDetailsSlice';
import userEducationReducer from './userEducationSlice';
import skillsExperiseReducer from './skillsExperiseSlice';
import userCourseWorkReducer from './userCourseWorkSlice';
import userAllCourseFlagReducer from './userAllCourseWorkSlice';

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer, 
    education: userEducationReducer,
    skills: skillsExperiseReducer,
    course: userCourseWorkReducer,
    course_flag: userAllCourseFlagReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;


// redux-saga