import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        flag: false,
        extraCurricular: "",
    },
]

const userExtraCurricularSlice = createSlice({
    name: 'eca',
    initialState,
    reducers: {
        setExtraCurricularDetails: (state, action) => {
            const {index, id, value} = action.payload;
            if(state[index]) {
                state[index][id] = value;
            }
        },
        addExtraCurricular: (state) => {
            state.push({
                flag: false,
                extraCurricular: "",
            });
        },
        removeExtraCurricular: (state, action) => {
            const indexToRemove = action.payload;
            const updatedState = [...state];
            updatedState.splice(indexToRemove, 1);
            return updatedState;
        },
    },
});

export const {setExtraCurricularDetails, addExtraCurricular, removeExtraCurricular} = userExtraCurricularSlice.actions;
export default userExtraCurricularSlice.reducer;