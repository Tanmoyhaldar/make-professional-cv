import { useSelector, useDispatch } from 'react-redux';

export default function usePreview() {
    const userDetailsValue = useSelector((state) => state.user);
    const educationDetails = useSelector((state) => state.education)
    const dispatch = useDispatch();

    console.log("usePreview---",educationDetails)

  return {
    userDetailsValue,
  }
}
