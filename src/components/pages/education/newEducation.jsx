import React from 'react'
import { checkBoxTitleUserDetails } from '../../constants/constant'

export default function NewEducation({ index, handleEducationDetails, educationDetails, handleEducationDetailsCheckBox }) {
    return (
        <>
            <div className="input-group-text my-1">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={educationDetails[index]?.flag}
                    title={checkBoxTitleUserDetails}
                    onChange={(e) => { handleEducationDetailsCheckBox(index, 'flag', e.target.checked) }}
                />
                <span className='mx-2'>Education Details - {index + 1}</span>
            </div>

            {/* Qualification */}
            <div className="input-group mb-1" key={`${index}_qualification`}>
                <div className="input-group-text">
                    <span className='mx-2'>Qualification</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={educationDetails[index]?.qualificationChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleEducationDetailsCheckBox(index, 'qualificationChecked', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Your Qualification'
                    value={educationDetails[index]?.qualification}
                    id="qualification"
                    onChange={(e) => { handleEducationDetails(index, 'qualification', e.target.value) }}
                />
            </div>

            {/* Institute */}
            <div className="input-group mb-1" key={`${index}_institute`}>
                <div className="input-group-text">
                    <span className='mx-2'>Institute</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={educationDetails[index]?.instituteChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleEducationDetailsCheckBox(index, 'instituteChecked', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Institute Name'
                    value={educationDetails[index]?.institute}
                    id="institute"
                    onChange={(e) => { handleEducationDetails(index, 'institute', e.target.value) }}
                />
            </div>

            {/* Stream */}
            <div className="input-group mb-1" key={`${index}_stream`}>
                <div className="input-group-text">
                    <span className='mx-2'>Stream</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={educationDetails[index]?.streamChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleEducationDetailsCheckBox(index, 'streamChecked', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Stream Name'
                    value={educationDetails[index]?.stream}
                    id="stream"
                    onChange={(e) => { handleEducationDetails(index, 'stream', e.target.value) }}
                />
            </div>

            {/* Passing Year */}
            <div className="input-group mb-1" key={`${index}_passingYear`}>
                <div className="input-group-text">
                    <span className='mx-2'>Passing Year</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={educationDetails[index]?.passingYearChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleEducationDetailsCheckBox(index, 'passingYearChecked', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Passing Year'
                    value={educationDetails[index]?.passingYear}
                    id="passingYear"
                    onChange={(e) => { handleEducationDetails(index, 'passingYear', e.target.value) }}
                />
            </div>

            {/* Grades */}
            <div className="input-group mb-1" key={`${index}_grades`}>
                <div className="input-group-text">
                    <span className='mx-2'>Grades</span>
                    <input
                        className="form-check-input mt-0"
                        type="checkbox"
                        checked={educationDetails[index]?.gradesChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e) => { handleEducationDetailsCheckBox(index, 'gradesChecked', e.target.checked) }}
                    />
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter Grades'
                    value={educationDetails[index]?.grades}
                    id="grades"
                    onChange={(e) => { handleEducationDetails(index, 'grades', e.target.value) }}
                />
            </div>

        </>
    )
}
