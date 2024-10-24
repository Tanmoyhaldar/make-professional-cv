import { checkBoxTitleUserDetails } from "../../constants/constant"
import AddNewAwards from "./addNewAward"
import useAwards from "./useAwards"

export default function Awards() {
    const {
        showAllAwards,
        awardsListCnt,
        handleShowAllRewards,
        addNewAward,
        removeLastAward
    } = useAwards()

    return (
        <>
            <div className="input-group-text my-1">
                <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    checked={showAllAwards?.awardsFlag}
                    title={checkBoxTitleUserDetails}
                    onChange={(e) => { handleShowAllRewards(e.target.checked) }}
                />
                <span className='mx-2'>Awards and Acheivements</span>
            </div>
            {awardsListCnt != 0 && [...Array(awardsListCnt)].map((_, index) => (
                <>
                    <AddNewAwards
                        index={index}
                    />
                </>
            ))}

            <button
                className="btn btn-primary mx-1"
            onClick={addNewAward}
            >+ Add Awards</button>
            {awardsListCnt > 1 &&
                <button
                    className="btn btn-danger mx-1"
                onClick={() => removeLastAward()}
                >- Remove</button>
            }
        </>
    )
}
