import React from 'react';
import useEducation from './useEducation';
import NewEducation from './newEducation';

export default function Education() {
  const {
    educationDetails,
    handleEducationDetails,
    handleEducationDetailsCheckBox,
    educationListCnt,
    setEducationListCnt,
    removeEducation
  } = useEducation();

  return (
    <>
      {[...Array(educationListCnt)].map((_, index) => (
        <NewEducation
          key={index}
          index={index}
          handleEducationDetails={handleEducationDetails}
          educationDetails={educationDetails}
          handleEducationDetailsCheckBox={handleEducationDetailsCheckBox}
          removeEducation={removeEducation}
        />
      ))}

      <button
        className='btn btn-primary mx-1'
        onClick={() => setEducationListCnt(prev => prev + 1)}
      >+ Add More
      </button>
      <button
        className='btn btn-danger mx-1'
        onClick={() => removeEducation()}
      >
        - Remove
      </button>
    </>
  );
}
