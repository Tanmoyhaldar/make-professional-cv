import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCourseWorkDetails, addCourseWork, removeCourseWork} from "../../../redux/userCourseWorkSlice";
import { setCourseFlag } from "../../../redux/userAllCourseWorkSlice";

export default function useCourseWork() {
  const courseDetails = useSelector((state) => state.course);
  const showAllCourseWork = useSelector((state) => state.course_flag)
  const dispatch = useDispatch();

  const [courseWorkListCnt, setCourseWorkListCnt] = useState(1);

  const handleCourseWorkDetails = (index, id, value) => {
    dispatch(setCourseWorkDetails({ index, id, value }));
  };

  const addNewCourseWork = () => {
    setCourseWorkListCnt((prevCnt) => prevCnt + 1);
    dispatch(addCourseWork());
  };

  const handleShowAllCourseWork = (value) => {
    dispatch(setCourseFlag({value : value}))
  }

  const removeLastCourseWork = () => {
    if (courseWorkListCnt > 1) {
      setCourseWorkListCnt((prevCnt) => prevCnt - 1);
    }
    const lastIndex = courseWorkListCnt - 1;
    dispatch(removeCourseWork(lastIndex));
  };

  return {
    courseDetails,
    showAllCourseWork,
    courseWorkListCnt,
    handleCourseWorkDetails,
    addNewCourseWork,
    removeLastCourseWork,
    handleShowAllCourseWork
  };
}
