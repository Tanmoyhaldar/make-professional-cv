import usePreview from './usePreview';

export default function UserDetailsPreview() {
    const {
        userDetailsValue,
    } = usePreview()
    return (
        <div>
            {userDetailsValue?.userName.trim() && userDetailsValue?.userNameChecked &&
                <div>
                    Name: {userDetailsValue.userName.trim()}
                </div>
            }
            {userDetailsValue?.userPhone.trim() && userDetailsValue?.userPhoneChecked &&
                <div>
                    Phone: {userDetailsValue.userPhone.trim()}
                </div>
            }
            {userDetailsValue?.userEmail.trim() && userDetailsValue?.userEmailChecked &&
                <div>
                    Email: {userDetailsValue.userEmail.trim()}
                </div>
            }
        </div>
    )
}
