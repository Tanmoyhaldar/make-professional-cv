import usePreview from "./usePreview"

export default function UserSelfMadeProjectsPreview() {

    const {
        projectDetails
    } = usePreview()

    console.log("projectDetails",projectDetails)
  return (
    <div>{projectDetails}</div>
  )
}
