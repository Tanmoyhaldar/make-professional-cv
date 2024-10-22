import React, {useState} from 'react'

export default function useHome() {
    const [educationList, setEducationList] = useState([]); // Initial state with the first index 0

  // Function to add a new index to the education list
  const addMoreEducation = () => {
    setEducationList((prevList) => [...prevList, prevList.length]); // Add next index
  };

  const removeEducation = (id) => {
    setEducationList((prevList) => prevList.filter((entry) => entry.id !== id)); // Remove the entry by ID
  };

  return {
    educationList,
    addMoreEducation,
    removeEducation
  }
}
