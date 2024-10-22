import React from 'react';
import useEducation from './useEducation';
import {checkBoxTitleUserDetails} from '../../constants/constant'

export default function Education({index, removeEducation}) {
    const {
        educationDetails,
        handleEducationDetails,
    } = useEducation();

    return (
        <>
          <div className="input-group mb-1">
                <div className="input-group-text">
                <span className='mx-2'>Phone</span>
                    <input 
                        className="form-check-input mt-0" 
                        type="checkbox" 
                        // checked={userDetailsValue.userPhoneChecked}
                        title={checkBoxTitleUserDetails} 
                        onChange={(e)=>handleEducationDetails('userPhoneChecked',e.target.checked)}
                    />
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Your Phone Number'
                    // value={educationDetails.qualification}
                    id="userPhone"
                    onChange={(e)=>{handleEducationDetails('userPhone',e.target.value)}}
                />
                <button className='btn btn-danger' onClick={()=>{removeEducation(index)}}>Remove</button>
            </div>
        </>
    );
}
