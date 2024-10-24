import { checkBoxTitleUserDetails } from "../../constants/constant"
import useAwards from "./useAwards"

export default function AddNewAward({ index }) {
  const {
    handleAwardsDetails,
    awardDetails
  } = useAwards()
  return (
    <>
      <div className="input-group mb-1" key={`${index}_award`}>
        <div className="input-group-text">
          <span className='mx-2'>Award-{index + 1}</span>
          <input
            className="form-check-input mt-0"
            type="checkbox"
            checked={awardDetails[index]?.flag}
            title={checkBoxTitleUserDetails}
            onChange={(e) => { handleAwardsDetails(index, 'flag', e.target.checked) }}
          />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder={`Enter Award Details`}
          value={awardDetails[index]?.awardName}
          id="award"
          onChange={(e) => { handleAwardsDetails(index, 'awardName', e.target.value) }}
        />
      </div>
    </>
  )
}
