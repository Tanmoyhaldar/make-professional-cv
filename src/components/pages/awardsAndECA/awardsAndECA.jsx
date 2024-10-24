import { checkBoxTitleUserDetails } from "../../constants/constant"
import AddNewAwardsAndECA from "./addNewAwardsAndECA"
import useAwardsAndECA from "./useAwardsAndECA"

export default function AwardsAndECA({ title }) {
    const {
        showAllAwards,
        awardsListCnt,
        handleShowAllRewards,
        addNewAward,
        removeLastAward
    } = useAwardsAndECA()

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
                <span className='mx-2'>{title}</span>
            </div>
            {awardsListCnt != 0 && [...Array(awardsListCnt)].map((_, index) => (
                <>
                    <AddNewAwardsAndECA
                        index={index}
                    />
                </>
            ))}

            <button
                className="btn btn-primary mx-1"
            onClick={addNewAward}
            >+ Add Course Work</button>
            {awardsListCnt > 1 &&
                <button
                    className="btn btn-danger mx-1"
                onClick={() => removeLastAward()}
                >- Remove</button>
            }
        </>
    )
}
