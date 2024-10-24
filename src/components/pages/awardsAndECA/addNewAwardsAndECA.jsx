import { checkBoxTitleUserDetails } from "../../constants/constant"
import useAwardsAndECA from "./useAwardsAndECA"

export default function AddNewAwardsAndECA({ index }) {
  const {
    handleAwardsDetails,
    awardDetails
  } = useAwardsAndECA()
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
