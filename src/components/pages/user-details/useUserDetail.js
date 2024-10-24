import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../../redux/userDetailsSlice';

export default function useUserDetail() {

    const userDetailsValue = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleUserDetails = (id, value) => {
        dispatch(setUserDetails({ id, value }));
    };

  return {
    userDetailsValue,
    handleUserDetails,
  };
};
