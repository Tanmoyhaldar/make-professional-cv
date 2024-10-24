import React from 'react'
import Preview from './preview/preview'
import UserDetails from './user-details/userDetails'
import Education from './education/Education'
import SkillsExpertise from './skill-expertise/skillsExpertise'
import CourseWork from './courseWork/courseWork'
import Awards from './awards/awards'
import ExtraCurricular from './extraCurricular/extraCurricular'

export default function Home() {

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

          <div className='border border-success p-2 rounded my-1'>
            <Awards />
          </div>

          <div className='border border-success p-2 rounded my-1'>
            <ExtraCurricular />
          </div>

        </div>

        <div>
          <Preview />
        </div>

    </div>
  )
}
