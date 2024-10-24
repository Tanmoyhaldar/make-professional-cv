import useExtraCurricular from "../extraCurricular/useExtraCurricular"
import usePreview from "./usePreview"

export default function UserExtraCurricularPreview() {
    const {
      ecaDetails
    } = usePreview()

    const {
      showAllECA
    } = useExtraCurricular()
  return (
    <>
    {showAllECA?.ecaFlag && ecaDetails?.some(eca => eca.flag) &&
    <>
    <div>Extra Curricular Activities</div>
      <div className='d-flex'>
        <ul>
        {ecaDetails?.map((eca, index) => (
          <>
                <li>
                    <div key={index}>{eca.flag && eca.extraCurricular.trim()}</div>
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
