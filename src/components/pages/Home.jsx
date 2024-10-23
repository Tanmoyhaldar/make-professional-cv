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
    <div className='border border-primary m-2 p-2'>
      <table>
        <tr>
          <td>
            <div className='border border-success p-2 rounded my-1'>
              <UserDetails />
            </div>

            <div className='border border-success p-2 rounded my-1'>
              <Education />
            </div>
          </td>
          <td>
            <Preview />
          </td>
        </tr>
      </table>

    </div>
  )
}
