import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCommonFlag } from "../../../redux/userAllCommonSlice";
import {setExtraCurricularDetails, addExtraCurricular, removeExtraCurricular} from "../../../redux/userExtraCurricularSlice";

export default function useExtraCurricular() {
  const showAllECA = useSelector((state) => state.common_flag)
  const ecaDetails = useSelector((state) => state.eca)
  const dispatch = useDispatch();

  const [ecaListCnt, setExtraCurricularListCnt] = useState(1)

  const handleExtraCurricularDetails = (index, id, value) => {
    dispatch(setExtraCurricularDetails({ index, id, value }));
  };

  const addNewExtraCurricular = () => {
    setExtraCurricularListCnt((prevCnt) => prevCnt + 1);
    dispatch(addExtraCurricular());
  };

  const removeLastExtraCurricular = () => {
    if (ecaListCnt > 1) {
      setExtraCurricularListCnt((prevCnt) => prevCnt - 1);
    }
    const lastIndex = ecaListCnt - 1;
    dispatch(removeExtraCurricular(lastIndex));
  };

  const handleShowAllExtraCurricular = (value) => {
    dispatch(setCommonFlag({id: "ecaFlag", value: value}))
  }

  return {
    showAllECA,
    ecaDetails,
    ecaListCnt,
    handleExtraCurricularDetails,
    addNewExtraCurricular,
    removeLastExtraCurricular,
    handleShowAllExtraCurricular
  }
}
