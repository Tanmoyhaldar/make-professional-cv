import useAwardsAndECA from "../awardsAndECA/useAwardsAndECA"
import usePreview from "./usePreview"

export default function UserAwardsPreview() {
    const {
        awardsDetails
    } = usePreview()

    const {
        showAllAwards
    } = useAwardsAndECA()

  return (
    <>
    {showAllAwards?.awardsFlag && awardsDetails?.some(award => award.flag) &&
    <>
    <div>Awards & Acheivements</div>
      <div className='d-flex'>
        <ul>
        {awardsDetails?.map((award, index) => (
          <>
                <li>
                    <div key={index}>{award.flag && award.awardName.trim()}</div>
                </li>
          </>
        ))}
            </ul>
      </div>
      </>
      }
    </>
  )
}
