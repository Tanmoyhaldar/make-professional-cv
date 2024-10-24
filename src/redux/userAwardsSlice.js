import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        flag        : false,
        awardName   : "",
    },
]

const userAwardSlice = createSlice({
    name: 'awards',
    initialState,
    reducers: {
        setAwardsDetails: (state, action) => {
            const {index, id, value} = action.payload;
            if(state[index]) {
                state[index][id] = value;
            }
        },
        addAward: (state) => {
            state.push({
                flag        : false,
                awardName   : "",
            });
        },
        removeAward: (state, action) => {
            const indexToRemove = action.payload;
            const updatedState = [...state];
            updatedState.splice(indexToRemove, 1);
            return updatedState;
        },
    },
});

export const {setAwardsDetails, addAward, removeAward} = userAwardSlice.actions;
export default userAwardSlice.reducer;