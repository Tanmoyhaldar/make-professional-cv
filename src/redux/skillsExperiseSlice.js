import { createSlice } from '@reduxjs/toolkit';

// Initial state for user details
const initialState = [{
    flag: false,
    title: "",
    description: "",
}];

// Create the user slice
const userSkillsExpertiseSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setSkillsExpertise: (state, action) => {
            const { index, id, value } = action.payload;
            if (state[index]) {
                state[index][id] = value;
            }
        },
        addSkillsExpertise: (state) => {
            state.push({
                flag: false,
                title: "",
                description: "",
            })
        },
        removeSkillsExpertise: (state, action) => {
            const indexToRemove = action.payload;
            const updatedState = [...state];
            updatedState.splice(indexToRemove, 1);
            return updatedState;
        }
    },
});

export const { setSkillsExpertise, addSkillsExpertise, removeSkillsExpertise } = userSkillsExpertiseSlice.actions;  // Export the action creator
export default userSkillsExpertiseSlice.reducer;  // Export the reducer
