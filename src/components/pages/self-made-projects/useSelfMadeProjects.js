import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addSelfMadeProject, removeSelfMadeProject, addDescriptionForProject, removeDescriptionForProject } from '../../../redux/userSelfMadeProjectsSlice';

export default function useSelfMadeProjects() {

    const [selfMadeProjectCnt, setSelfMadeProjectCnt] = useState(1);
    const [projectDescriptionCnt, setProjectDescriptionCnt] = useState({
        0: 1, // Initialize the first project with one description
    });

    const selfMadeProjectList = useSelector((state) => state.self_made_project);
    const dispatch = useDispatch();

    const addNewSelfMadeProject = () => {
        const newProjectIndex = selfMadeProjectCnt;
        setSelfMadeProjectCnt(prev => prev + 1);

        // Initialize the new project with one description field
        setProjectDescriptionCnt(prev => ({
            ...prev,
            [newProjectIndex]: 1 // Set count for the new project index
        }));

        // Dispatch actions to add the new project and an initial description for it
        dispatch(addSelfMadeProject());
        dispatch(addDescriptionForProject({ projectIndex: newProjectIndex, descriptionText: "" }));
    };

    const removeLastSelfMadeProject = () => {
        if (selfMadeProjectCnt > 1) {
            const lastIndex = selfMadeProjectCnt - 1;
            setSelfMadeProjectCnt(prev => prev - 1);

            // Remove the last project's description count entry
            setProjectDescriptionCnt(prev => {
                const updatedProjectDescriptionCnt = { ...prev };
                delete updatedProjectDescriptionCnt[lastIndex];
                return updatedProjectDescriptionCnt;
            });

            dispatch(removeSelfMadeProject(lastIndex));
        }
    };

    const addNewProjectDescription = (index) => {
        setProjectDescriptionCnt(prev => ({
            ...prev,
            [index]: (prev[index] || 0) + 1
        }));
        dispatch(addDescriptionForProject({ projectIndex: index, descriptionText: "" }));
    };

    const removeLastProjectDescription = (index) => {
        setProjectDescriptionCnt(prev => ({
            ...prev,
            [index]: prev[index] > 1 ? prev[index] - 1 : 1 // Ensure at least one description remains
        }));

        const currentCount = projectDescriptionCnt[index];
        if (currentCount > 1) {
            dispatch(removeDescriptionForProject({ projectIndex: index, descriptionIndex: currentCount - 1 }));
        }
    };

    return {
        selfMadeProjectCnt,
        selfMadeProjectList,
        addNewSelfMadeProject,
        removeLastSelfMadeProject,
        projectDescriptionCnt,
        addNewProjectDescription,
        removeLastProjectDescription
    };
}
