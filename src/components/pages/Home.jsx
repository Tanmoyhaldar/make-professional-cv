import React from 'react'
import Preview from './preview/preview'
import UserDetails from './user-details/userDetails'
import Education from './education/Education'
import useHome from './useHome'
import SkillsExpertise from './skill-expertise/skillsExpertise'
import CourseWork from './courseWork/courseWork'

export default function Home() {
  // 1. user details
  // 2. education

  const {
    educationList,
  } = useHome()
  return (
      <div className="d-flex p-2 justify-content-center">
        <div>

          <div className='border border-success p-2 rounded my-1'>
            <UserDetails />
          </div>

          <div className='border border-success p-2 rounded my-1'>
            <Education />
          </div>

          <div className='border border-success p-2 rounded my-1'>
            <SkillsExpertise />
          </div>

          <div className='border border-success p-2 rounded my-1'>
            <CourseWork />
          </div>

        </div>

        <div>
          <Preview />
        </div>

    </div>
  )
}
