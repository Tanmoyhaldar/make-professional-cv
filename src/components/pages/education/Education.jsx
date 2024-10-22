import React from 'react';
import useEducation from './useEducation';
import NewEducation from './newEducation';

export default function Education() {
    const {
        educationDetails,
        handleEducationDetails,
        handleEducationDetailsCheckBox
    } = useEducation();
    return (
        <>
          <NewEducation 
            index={0} 
            handleEducationDetails={handleEducationDetails} 
            educationDetails={educationDetails} 
            handleEducationDetailsCheckBox={handleEducationDetailsCheckBox}
            />
          <NewEducation 
            index={1} 
            handleEducationDetails={handleEducationDetails} 
            educationDetails={educationDetails} 
            handleEducationDetailsCheckBox={handleEducationDetailsCheckBox}
            />
          <NewEducation 
            index={2} 
            handleEducationDetails={handleEducationDetails} 
            educationDetails={educationDetails} 
            handleEducationDetailsCheckBox={handleEducationDetailsCheckBox}
            />
        </>
    );
}
