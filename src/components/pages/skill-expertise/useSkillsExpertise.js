import { useSelector, useDispatch } from 'react-redux';
import { setSkillsExpertise, addSkillsExpertise, removeSkillsExpertise } from '../../../redux/userSkillsExpertiseSlice';
import { useState } from 'react';

export default function useSkillsExpertise() {

  const [skillsExpertiseCnt, setSkillsExpertiseCnt] = useState(1)

  const skillsExpertiseList  = useSelector((state) => state.skills);
  const dispatch             = useDispatch();


  const handleSkillsExpertiseDetails = (index, id, value) => {
    dispatch(setSkillsExpertise({ index, id, value }))
  }

  const addNewSkill = () => {
    setSkillsExpertiseCnt(prevCnt => prevCnt + 1);
    dispatch(addSkillsExpertise());
  };

  const removeSkill = () => {
    if (skillsExpertiseCnt > 1) {
      setSkillsExpertiseCnt(prevCnt => prevCnt - 1);
    }
    const lastIndex = skillsExpertiseCnt - 1;
    dispatch(removeSkillsExpertise(lastIndex));
  };

  return {
    skillsExpertiseList,
    skillsExpertiseCnt,
    handleSkillsExpertiseDetails,
    addNewSkill,
    removeSkill
  }
}
