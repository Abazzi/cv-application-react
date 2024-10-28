export default function EducationInfoPreview({ education }) {

  // guard clause checking if data was passed in
  if (!education) {
    return <h1>Where is the data bruh</h1>
  } else {
    return (
      <>
        {education.map((education, index) =>
          <div key={education.id} className="education-info-preview">
            <h1>Education {index + 1}</h1>
            <h2 name="school">School: {education.school}</h2>
            <h2 name="program">Program: {education.program}</h2>
            <p name="description">Description: {education.description}</p>
            <p name="startDate">Attended: {education.startDate}</p>
          </div>
        )
        }
      </>
    )
  }
}
