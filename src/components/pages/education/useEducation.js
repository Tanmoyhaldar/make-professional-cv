import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEducationDetails, removeEducationDetails } from '../../../redux/userEducationSlice';

export default function useEducation() {

    const educationDetails = useSelector((state) => state.education);
    const dispatch = useDispatch();

    const [educationListCnt, setEducationListCnt] = useState(1)

    const handleEducationDetails = (index, id, value) => {
        dispatch(setEducationDetails({index, id, value}))
    }

    const handleEducationDetailsCheckBox = (index, id, value) => {
        dispatch(setEducationDetails({index, id, value}))
    }

    const removeEducation = () => {
      if (educationListCnt > 1) {
          setEducationListCnt(prevCnt => prevCnt - 1);
      }
      const lastIndex = educationListCnt - 1;
      dispatch(removeEducationDetails(lastIndex));
  };

  return {
    educationDetails,
    handleEducationDetails,
    handleEducationDetailsCheckBox,
    educationListCnt,
    setEducationListCnt,
    removeEducation
  }
}
