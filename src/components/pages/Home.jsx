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
    addMoreEducation,
    removeEducation,
  } = useHome()
  return (
    <div>
      <Preview />
      <hr />

      <UserDetails />
      <hr />

      <div>
        {console.log("educationList---",educationList)}
        {educationList.map((entry) => (
          <div key={entry.id}>
            <Education index={entry.id} removeEducation={removeEducation}/> {/* Pass the unique index as a prop */}
          </div>
        ))}
        <button
          className='btn btn-primary my-1 mx-1'
          onClick={addMoreEducation} // Call the function when clicked
        >
          + Add More
        </button>
      </div>
    </div>
  )
}
