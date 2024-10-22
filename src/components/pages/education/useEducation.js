import { useSelector, useDispatch } from 'react-redux';
import { setEducationDetails } from '../../../redux/userEducationSlice';

export default function useEducation() {

    const educationDetails = useSelector((state) => state.education);
    const dispatch = useDispatch();

    const handleEducationDetails = (index, id, value) => {
        dispatch(setEducationDetails({index, id, value}))
    }

  return {
    educationDetails,
    handleEducationDetails,
  }
}
