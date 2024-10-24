import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

import userReducer from './userDetailsSlice';
import userEducationReducer from './userEducationSlice';
import userSkillsExperiseReducer from './userSkillsExpertiseSlice';
import userCourseWorkReducer from './userCourseWorkSlice';
import userAllCommonFlagReducer from './userAllCommonSlice';
import userAwardsReducer from './userAwardsSlice';
import userExtraCurricularReducer from './userExtraCurricularSlice';

// Configure the store
const store = configureStore({
  reducer: {
    user        : userReducer, 
    education   : userEducationReducer,
    skills      : userSkillsExperiseReducer,
    course      : userCourseWorkReducer,
    awards      : userAwardsReducer,
    common_flag : userAllCommonFlagReducer,
    eca         : userExtraCurricularReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;


// redux-saga