import React from 'react'
import AddNewSkill from './addNewSkill'
import useSkillsExpertise from './useSkillsExpertise'

export default function SkillsExpertise() {

    const {
        skillsExpertiseCnt,
        addNewSkill,
        removeSkill
    } = useSkillsExpertise()
    return (
        <>
            {skillsExpertiseCnt != 0 && [...Array(skillsExpertiseCnt)].map((_, index) => (
                <>
                    <AddNewSkill
                        index={index}
                    />
                    <hr />
                </>
            ))}

            <button
                className='btn btn-primary mx-1'
                onClick={addNewSkill}
            >+ Add Skills
            </button>

            {skillsExpertiseCnt > 1 &&
                <button
                    className='btn btn-danger mx-1'
                    onClick={() => removeSkill()}
                >
                    - Remove Skill
                </button>
            }

        </>
    )
}
