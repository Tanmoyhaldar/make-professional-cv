import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = [{
  qualification: "",
  institute: "",
  stream: "",
  passingYear: "",
  grades: "",
  qualificationChecked: false,
  instituteChecked: false,
  streamChecked: false,
  passingYearChecked: false,
  gradesChecked: false,
},
];

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
    },
    removeEducationDetails: (state, action) => {
      const indexToRemove = action.payload;
      const updatedState = [...state];
    updatedState.splice(indexToRemove, 1);
    return updatedState;
    },
  },
});

export const { setEducationDetails, removeEducationDetails } = userEducationSlice.actions;  // Export the action creator
export default userEducationSlice.reducer;  // Export the reducer
