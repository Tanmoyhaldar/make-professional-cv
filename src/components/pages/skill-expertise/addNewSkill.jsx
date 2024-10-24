import React from 'react'
import { checkBoxTitleUserDetails } from '../../constants/constant'
import useSkillsExpertise from './useSkillsExpertise'

export default function AddNewSkill({ index }) {
    const {
        skillsExpertiseList, 
        handleSkillsExpertiseDetails
    } = useSkillsExpertise()
    return (
        <div>
            <div className="input-group-text mb-1" key={`skills_${index}`}>
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={skillsExpertiseList[index]?.flag}
                    title={checkBoxTitleUserDetails}
                    onChange={(e) => { handleSkillsExpertiseDetails(index, 'flag', e.target.checked) }}
                />
                <span className='mx-2'>Skills & Expertise - {index + 1}</span>
            </div>

        <div>
                <div className="form-group my-1">
                    <input 
                        type="text" 
                        className="form-control" 
                        id={`title`} 
                        placeholder="Title"
                        onChange={(e)=>{handleSkillsExpertiseDetails(index, "title", e.target.value)}}
                    />
                </div>
                
                <div className="form-group my-1">
                    <textarea 
                        className="form-control" 
                        id={`description`}  
                        rows="3" 
                        placeholder='Description'
                        onChange={(e)=>{handleSkillsExpertiseDetails(index, "description", e.target.value)}}
                    ></textarea>
                </div>
        </div>
        </div>
    )
}
