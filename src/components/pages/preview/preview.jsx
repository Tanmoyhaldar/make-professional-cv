import UserCourseWorkPreview from './userCourseWorkPreview';
import UserDetailsPreview from './userDetailsPreview';
import UserEducationPreview from './userEducationPreview';
import UserSkillsExpertisePreview from './userSkillsExpertisePreview';

export default function Preview() {
  return (
    <>
      <div className='border border-dark p-2 rounded my-1'>
          <UserDetailsPreview />
          <UserEducationPreview />
          <UserSkillsExpertisePreview />
          <UserCourseWorkPreview />
      </div>
    </>
  )
}
