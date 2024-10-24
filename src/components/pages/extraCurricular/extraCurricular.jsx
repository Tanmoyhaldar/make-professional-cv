import { checkBoxTitleUserDetails } from '../../constants/constant'
import AddNewExtraCurricular from './addNewExtraCurricular'
import useExtraCurricular from './useExtraCurricular'

export default function ExtraCurricular() {
  const {
    showAllECA,
    ecaListCnt,
    addNewExtraCurricular,
    removeLastExtraCurricular,
    handleShowAllExtraCurricular
  } = useExtraCurricular()
  return (
    <>
      <div className="input-group-text my-1">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          checked={showAllECA?.ecaFlag}
          title={checkBoxTitleUserDetails}
          onChange={(e) => { handleShowAllExtraCurricular(e.target.checked) }}
        />
        <span className='mx-2'>Awards and Acheivements</span>
      </div>
      {ecaListCnt != 0 && [...Array(ecaListCnt)].map((_, index) => (
        <>
          <AddNewExtraCurricular
            index={index}
          />
        </>
      ))}

      <button
        className="btn btn-primary mx-1"
        onClick={addNewExtraCurricular}
      >+ Add ECA</button>
      {ecaListCnt > 1 &&
        <button
          className="btn btn-danger mx-1"
          onClick={() => removeLastExtraCurricular()}
        >- Remove</button>
      }
    </>
  )
}
