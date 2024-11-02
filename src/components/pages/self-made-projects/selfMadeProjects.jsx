import React from 'react'
import AddNewSelfMadeProject from './addNewSelfMadeProject'
import useSelfMadeProjects from './useSelfMadeProjects'

export default function SelfMadeProjects() {
  const {
    selfMadeProjectCnt,
    addNewSelfMadeProject,
    removeLastSelfMadeProject,
  } = useSelfMadeProjects()
  return (
    <>
    {selfMadeProjectCnt != 0 && [...Array(selfMadeProjectCnt)].map((_,index) => (
      <>
      <AddNewSelfMadeProject 
          index={index}
      />
      <hr />
      </>
    ))}
      <button
        className='btn btn-primary mx-1'
        onClick={addNewSelfMadeProject}
      >+ Add Project
      </button>

      {selfMadeProjectCnt > 1 &&
        <button
          className='btn btn-danger mx-1'
          onClick={() => removeLastSelfMadeProject()}
        >
          - Remove Project
        </button>
      }
    </>
  )
}
