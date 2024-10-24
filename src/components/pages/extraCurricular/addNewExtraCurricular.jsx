import { checkBoxTitleUserDetails } from "../../constants/constant"
import useExtraCurricular from "./useExtraCurricular"

export default function AddNewExtraCurricular({index}) {
  const {
    handleExtraCurricularDetails,
    ecaDetails
  } = useExtraCurricular()
  return (
    <>
      <div className="input-group mb-1" key={`${index}_eca`}>
        <div className="input-group-text">
          <span className='mx-2'>ECA-{index + 1}</span>
          <input
            className="form-check-input mt-0"
            type="checkbox"
            checked={ecaDetails[index]?.flag}
            title={checkBoxTitleUserDetails}
            onChange={(e) => { handleExtraCurricularDetails(index, 'flag', e.target.checked) }}
          />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder={`Enter Extra Curricular Activities`}
          value={ecaDetails[index]?.extraCurricular}
          id="award"
          onChange={(e) => { handleExtraCurricularDetails(index, 'extraCurricular', e.target.value) }}
        />
      </div>
    </>
  )
}
