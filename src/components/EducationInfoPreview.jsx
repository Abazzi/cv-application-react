export default function EducationInfoPreview({ education }) {

  // guard clause checking if data was passed in
  if (!education) {
    return <h1>Where is the data bruh</h1>
  } else {
    return (
      <>
        {education.map((edu, index) =>
          <div key={edu.id} className="education-info-preview">
            <h1>Education {index + 1}</h1>
            <h2 name="school">School: {edu.school}</h2>
            <h2 name="program">Program: {edu.program}</h2>
            <p name="description">Description: {edu.description}</p>
            <p name="startDate">Attended: {edu.startDate}</p>
          </div>
        )
        }
      </>
    )
  }
}
