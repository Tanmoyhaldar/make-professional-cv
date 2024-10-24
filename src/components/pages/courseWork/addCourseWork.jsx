import React from 'react'
import { checkBoxTitleUserDetails } from '../../constants/constant'
import useCourseWork from './useCourseWork'

export default function AddCourseWork({index}) {
    const {
        courseDetails,
        handleCourseWorkDetails
    } = useCourseWork()
    return (
        <>
            <div className="input-group mb-1" key={`${index}_coursework`}>
                <div className="input-group-text">
                    <span className='mx-2'>Course-{index+1}</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={courseDetails[index]?.courseNameChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleCourseWorkDetails(index, 'flag', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder={`Enter Course Work`}
                    value={courseDetails[index]?.courseName}
                    id="coursework"
                    onChange={(e) => { handleCourseWorkDetails(index, 'courseName', e.target.value) }}
                />
            </div>
        </>
    )
}
