import React from 'react'
import usePreview from './usePreview'

export default function UserSkillsExpertisePreview() {
    const {
        skillsExpertiseDetails
    } = usePreview()
    return (
        <>
            {skillsExpertiseDetails.some(skill => skill.flag) &&
                <>
                    <div>Skills & Expertise</div>
                    {skillsExpertiseDetails?.map((skill, index) => (
                        skill.flag &&
                        <div className='d-flex' key={index}>
                            <div>{`${skill.title}:`}</div>
                            <div>{skill.description}</div>
                        </div>
                    ))}
                </>
            }
        </>
    )
}
