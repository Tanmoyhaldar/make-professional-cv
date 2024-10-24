import React from 'react'
import usePreview from './usePreview'
import useCourseWork from '../courseWork/useCourseWork'

export default function UserCourseWorkPreview() {
  const {
    courseDetails,
  } = usePreview()

  const {
    showAllCourseWork
  } = useCourseWork()

  return (
    <>
    {showAllCourseWork?.courseFlag && courseDetails?.some(course => course.flag) &&
    <>
    <div>Course Details</div>
      <div className='d-flex'>
        {courseDetails?.map((course, index) => (
          <>
            <div key={index}>{course.flag && course.courseName.trim()}
              {`${course.courseName && course.flag ? ' | ' : ''}`}
            </div>
          </>
        ))}
      </div>
      </>
      }
    </>
  )
}
