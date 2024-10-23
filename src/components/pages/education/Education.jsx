import React from 'react';
import useEducation from './useEducation';
import NewEducation from './newEducation';

export default function Education() {
  const {
    educationDetails,
    handleEducationDetails,
    handleEducationDetailsCheckBox,
    educationListCnt,
    removeEducation,
    addNewEducation
  } = useEducation();

  return (
    <>
      {educationListCnt != 0 && [...Array(educationListCnt)].map((_, index) => (
        <>
          <NewEducation
            key={index}
            index={index}
            handleEducationDetails={handleEducationDetails}
            educationDetails={educationDetails}
            handleEducationDetailsCheckBox={handleEducationDetailsCheckBox}
            removeEducation={removeEducation}
          />
          <hr />
        </>
      ))}

      <button
        className='btn btn-primary mx-1'
        onClick={addNewEducation}
      >+ Add Education
      </button>

      {educationListCnt > 1 &&
        <button
          className='btn btn-danger mx-1'
          onClick={() => removeEducation()}
        >
          - Remove Education
        </button>
      }
    </>
  );
}
