import React from 'react'
import useUserDetail from './useUserDetail'
import {checkBoxTitleUserDetails} from '../../constants/constant'

export default function UserDetails() {
    const {
        userDetailsValue,
        handleUserDetails,
    } = useUserDetail()
    return (
        <>
            <div className="input-group mb-1">
                <div className="input-group-text">
                <span className='mx-2'>Name</span>
                    <input 
                        className="form-check-input mt-0" 
                        type="checkbox" 
                        checked={userDetailsValue.userNameChecked}
                        title={checkBoxTitleUserDetails}
                        onChange={(e)=>handleUserDetails('userNameChecked',e.target.checked)}
                    />
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Your Name'
                    value={userDetailsValue.userName}
                    id="userName"
                    onChange={(e)=>{handleUserDetails('userName',e.target.value)}}
                />
            </div>

            <div className="input-group mb-1">
                <div className="input-group-text">
                <span className='mx-2'>Phone</span>
                    <input 
                        className="form-check-input mt-0" 
                        type="checkbox" 
                        checked={userDetailsValue.userPhoneChecked}
                        title={checkBoxTitleUserDetails} 
                        onChange={(e)=>handleUserDetails('userPhoneChecked',e.target.checked)}
                    />
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Your Phone Number'
                    value={userDetailsValue.userPhone}
                    id="userPhone"
                    onChange={(e)=>{handleUserDetails('userPhone',e.target.value)}}
                />
            </div>

            <div className="input-group mb-1">
                <div className="input-group-text">
                <span className='mx-2'>Email</span>
                    <input 
                        className="form-check-input mt-0" 
                        type="checkbox" 
                        checked={userDetailsValue.userEmailChecked}
                        title={checkBoxTitleUserDetails} 
                        onChange={(e)=>handleUserDetails('userEmailChecked',e.target.checked)}
                    />
                </div>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Your Email Id'
                    value={userDetailsValue.userEmail}
                    id="userEmail"
                    onChange={(e)=>{handleUserDetails('userEmail',e.target.value)}}
                />
            </div>
        </>
    )
}
