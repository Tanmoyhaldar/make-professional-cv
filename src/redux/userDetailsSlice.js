import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = {
  userName: "",
  userPhone: "",
  userEmail: "",
  userNameChecked: false,
  userPhoneChecked: false,
  userEmailChecked: false,
};

// Create the user slice
const userDetailsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { id, value } = action.payload;
      state[id] = value;  // Update specific field dynamically
    }
  },
});

export const { setUserDetails } = userDetailsSlice.actions;  // Export the action creator
export default userDetailsSlice.reducer;  // Export the reducer
