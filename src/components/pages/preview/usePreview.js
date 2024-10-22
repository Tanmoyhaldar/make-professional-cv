import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../../redux/userDetailsSlice';

export default function usePreview() {
    const userDetailsValue = useSelector((state) => state.user);
    const dispatch = useDispatch();

  return {
    userDetailsValue,
  }
}
