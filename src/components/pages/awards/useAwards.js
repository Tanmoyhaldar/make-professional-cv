import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCommonFlag } from "../../../redux/userAllCommonSlice";
import {setAwardsDetails, addAward, removeAward} from "../../../redux/userAwardsSlice";

export default function useAwards() {
  const showAllAwards   = useSelector((state) => state.common_flag)
  const awardDetails    = useSelector((state) => state.awards)
  const dispatch        = useDispatch();

  const [awardsListCnt, setAwardsListCnt] = useState(1)

  const handleAwardsDetails = (index, id, value) => {
    dispatch(setAwardsDetails({ index, id, value }));
  };

  const addNewAward = () => {
    setAwardsListCnt((prevCnt) => prevCnt + 1);
    dispatch(addAward());
  };

  const removeLastAward = () => {
    if (awardsListCnt > 1) {
      setAwardsListCnt((prevCnt) => prevCnt - 1);
    }
    const lastIndex = awardsListCnt - 1;
    dispatch(removeAward(lastIndex));
  };

  const handleShowAllRewards = (value) => {
    dispatch(setCommonFlag({id: "awardsFlag", value: value}))
  }

  return {
    showAllAwards,
    awardsListCnt,
    handleShowAllRewards,
    handleAwardsDetails,
    addNewAward,
    removeLastAward,
    awardDetails
  }
}
