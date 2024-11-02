import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        flag: false,
        heading: "",
        description: [],
    },
]

const userSelfMadeProjectsSlice = createSlice({
    name: "self_made_projects",
    initialState,
    reducers: {
        setSelfMadeProjectDetails: (state, action) => {

        },
        addSelfMadeProject: (state) => {
            state.push({
                flag: false,
                heading: "",
                description: [],
            })
        },
        removeSelfMadeProject: (state, action) => {
            const indexToRemove = action.payload;
            const updatedState = [...state];
            updatedState.splice(indexToRemove, 1);
            return updatedState;
        },
        addDescriptionForProject: (state, action) => {
            const {projectIndex, descriptionText} = action.payload;

            if(state[projectIndex]) {
                state[projectIndex].description.push(descriptionText);
            }
        },
        removeDescriptionForProject: (state, action) => {
            const {projectIndex, descriptionIndex} = action.payload;
            if(state[projectIndex] && state[projectIndex].description[descriptionIndex]){
                state[projectIndex].description.splice(descriptionIndex, 1)
            }
        },
    },
});

export const {
    setSelfMadeProjectDetails,
    addSelfMadeProject,
    removeSelfMadeProject,
    addDescriptionForProject,
    removeDescriptionForProject
} = userSelfMadeProjectsSlice.actions;
export default userSelfMadeProjectsSlice.reducer