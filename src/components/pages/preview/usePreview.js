import { useSelector, useDispatch } from 'react-redux';

export default function usePreview() {
    const userDetailsValue = useSelector((state) => state.user);
    const educationDetails = useSelector((state) => state.education)
    const skillsExpertiseDetails = useSelector((state) => state.skills)
    const courseDetails = useSelector((state) => state.course)
    const awardsDetails = useSelector((state) => state.awards)
    const ecaDetails = useSelector((state) => state.eca)
    const dispatch = useDispatch();

  return {
    userDetailsValue,
    educationDetails,
    skillsExpertiseDetails,
    courseDetails,
    awardsDetails,
    ecaDetails,
  }
}
