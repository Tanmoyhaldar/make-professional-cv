import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = {
    courseFlag  : false,
    awardsFlag  : false,
    ecaFlag     : false
};

const userAllCommonSlice = createSlice({
  name: 'common_flag',
  initialState,
  reducers: {
    setCommonFlag: (state, action) => {
      const { id, value } = action.payload;
      state[id] = value; 
    }
  },
});

export const { setCommonFlag } = userAllCommonSlice.actions;
export default userAllCommonSlice.reducer;
