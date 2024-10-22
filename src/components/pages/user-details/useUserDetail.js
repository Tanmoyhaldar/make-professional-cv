import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../../redux/userDetailsSlice';

export default function useUserDetail() {

    const userDetailsValue = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onTextFieldChange = (id, value) => {
        // console.log("onTextFieldChange--->", id, value);
        dispatch(setUserDetails({ id, value }));
    };

    const checkBoxChange = (id, value) => {
        // console.log("checkBoxChange--->", id, value);
        dispatch(setUserDetails({id, value}))
    }

  return {
    userDetailsValue,
    onTextFieldChange,
    checkBoxChange
  };
};
