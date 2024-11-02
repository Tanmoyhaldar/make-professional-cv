import { checkBoxTitleUserDetails } from "../../constants/constant";
import AddNewProjectDescription from "./addNewProjectDescription";
import useSelfMadeProjects from "./useSelfMadeProjects";

export default function AddNewSelfMadeProject({ index }) {
    const {
        projectDescriptionCnt,
        addNewProjectDescription,
        removeLastProjectDescription,
    } = useSelfMadeProjects();

    // Access the description count directly using the project index as a key
    const descriptionCount = projectDescriptionCnt[index] || 0;

    return (
        <>
            <div>
                <div className="input-group-text mb-1" key={`project_${index}`}>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        title={checkBoxTitleUserDetails}
                        // Add any necessary onChange handler here
                    />
                    <span className='mx-2'>Self-made Project - {index + 1}</span>
                </div>

                <div>
                    <div className="form-group my-1">
                        <input
                            type="text"
                            className="form-control"
                            id={`heading`}
                            placeholder="Heading"
                            // Add any necessary onChange handler here
                        />
                    </div>

                    {[...Array(descriptionCount)].map((_, descriptionIndex) => (
                        <AddNewProjectDescription
                            key={`${index}-${descriptionIndex}`}
                            projectIndex={index}
                            descriptionIndex={descriptionIndex}
                        />
                    ))}

                    <div className="my-1">
                        <div className="d-flex">
                            <button
                                className="btn btn-primary btn-sm m-1"
                                onClick={() => addNewProjectDescription(index)}
                            >
                                Add New
                            </button>
                            <button
                                className="btn btn-sm btn-danger m-1"
                                onClick={() => removeLastProjectDescription(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
