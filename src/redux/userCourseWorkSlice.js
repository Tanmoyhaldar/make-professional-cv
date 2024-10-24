import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        flag: false,
        courseName: "",
    },
]

const userCourseWorkSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseWorkDetails: (state, action) => {
            const {index, id, value} = action.payload;
            if(state[index]) {
                state[index][id] = value;
            }
        },
        addCourseWork: (state) => {
            state.push({
                flag: false,
                courseName: "",
            });
        },
        removeCourseWork: (state, action) => {
            const indexToRemove = action.payload;
            const updatedState = [...state];
            updatedState.splice(indexToRemove, 1);
            return updatedState;
        },
    },
});

export const {setCourseWorkDetails, addCourseWork, removeCourseWork} = userCourseWorkSlice.actions;
export default userCourseWorkSlice.reducer;