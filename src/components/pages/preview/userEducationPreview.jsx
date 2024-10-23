import usePreview from './usePreview';

export default function UserEducationPreview() {
    const {
        educationDetails
    } = usePreview()
    return (
        <div>
            <table>
                <tr>
                    <th>Qualification</th>
                    <th>Institute</th>
                    <th>Stream</th>
                    <th>Passing Year</th>
                    <th>Grades</th>
                </tr>
                {educationDetails?.map((edu, index) => (
                    edu.flag ?
                        (<tr key={index}>
                            <td>{edu.qualificationChecked && edu.qualification.trim() ? edu.qualification.trim() : "-"}</td>
                            <td>{edu.instituteChecked && edu.institute.trim() ? edu.institute.trim() : "-"}</td>
                            <td>{edu.streamChecked && edu.stream.trim() ? edu.stream.trim() : "-"}</td>
                            <td>{edu.passingYearChecked && edu.passingYear.trim() ? edu.passingYear.trim() : "-"}</td>
                            <td>{edu.gradesChecked && edu.grades.trim() ? edu.grades.trim() : "-"}</td>
                        </tr>) : (
                            <></>
                        )
                ))}
            </table>
        </div>
    )
}
