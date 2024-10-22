import React from 'react'
import Preview from './preview/preview'
import UserDetails from './user-details/userDetails'
import Education from './education/Education'
import useHome from './useHome'

export default function Home() {
  // 1. user details
  // 2. education

  const {
    educationList,
  } = useHome()
  return (
    <div>
      <Preview />
      <hr />

      <UserDetails />
      <hr />

        <Education/> {/* Pass the unique index as a prop */}
      <div>
      </div>
    </div>
  )
}
