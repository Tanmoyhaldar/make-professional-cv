import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = [{
  qualification: "hello worl",
  institute: "",
  stream: "",
  passingYear: "",
  grades: "",
}];

// Create the user slice
const userEducationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    setEducationDetails: (state, action) => {
      const { index, id, value } = action.payload;
      if (state[index]) {
        state[index][id] = value;
      }
    }
  },
});

export const { setEducationDetails } = userEducationSlice.actions;  // Export the action creator
export default userEducationSlice.reducer;  // Export the reducer
