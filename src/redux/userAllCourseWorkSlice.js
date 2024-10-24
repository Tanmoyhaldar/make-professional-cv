import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = {
    courseFlag: false
};

const userAllCourseWorkSlice = createSlice({
  name: 'course_flag',
  initialState,
  reducers: {
    setCourseFlag: (state, action) => {
      const { value } = action.payload;
      state.courseFlag = value; 
    }
  },
});

export const { setCourseFlag } = userAllCourseWorkSlice.actions;  // Export the action creator
export default userAllCourseWorkSlice.reducer;  // Export the reducer
