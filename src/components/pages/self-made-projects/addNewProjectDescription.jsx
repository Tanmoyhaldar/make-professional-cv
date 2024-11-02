
export default function AddNewProjectDescription({ index }) {
    
    return (
        <>
                <div className="form-group my-1">
                    <textarea
                        className="form-control"
                        id={`description-${index}`}
                        rows="1"
                        placeholder='Add Description'
                    // onChange={(e)=>{handleSkillsExpertiseDetails(index, "description", e.target.value)}}
                    ></textarea>
                </div>
        </>
    )
}
