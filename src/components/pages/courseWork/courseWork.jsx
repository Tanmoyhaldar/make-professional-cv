import { checkBoxTitleUserDetails } from "../../constants/constant"
import AddCourseWork from "./addCourseWork"
import useCourseWork from "./useCourseWork"

export default function CourseWork() {
    const {
        courseWorkListCnt,
        addNewCourseWork,
        removeLastCourseWork,
        showAllCourseWork,
        handleShowAllCourseWork
    } = useCourseWork()

    return (
        <>
            <div className="input-group-text my-1">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={showAllCourseWork?.courseFlag}
                    title={checkBoxTitleUserDetails}
                    onChange={(e) => { handleShowAllCourseWork(e.target.checked) }}
                />
                <span className='mx-2'>Course Details</span>
            </div>
            <div className="form-row">
                {courseWorkListCnt != 0 && [...Array(courseWorkListCnt)].map((_, index) => (
                    <>
                        <AddCourseWork
                            key={index}
                            index={index}
                        />
                        <hr />
                    </>
                ))}
                <button
                    className="btn btn-primary mx-1"
                    onClick={addNewCourseWork}
                >+ Add Course Work</button>
                {courseWorkListCnt > 1 &&
                    <button
                        className="btn btn-danger mx-1"
                        onClick={() => removeLastCourseWork()}
                    >- Remove Course Work</button>
                }
            </div>
        </>
    )
}
