import usePreview from './usePreview';

export default function Preview() {
  const {
    userDetailsValue,
  } = usePreview()
  return (
    <>
    {/* user Details */}
      <div>
        {userDetailsValue.userNameChecked &&
          <div>
            Name: {userDetailsValue.userName}
          </div>
        }
        {userDetailsValue.userPhoneChecked &&
          <div>
            Phone: {userDetailsValue.userPhone}
          </div>
        }
        {userDetailsValue.userEmailChecked &&
          <div>
            Email: {userDetailsValue.userEmail}
          </div>
        }
      </div>

      {/* User Education */}

    </>
  )
}
