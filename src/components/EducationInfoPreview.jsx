export default function EducationInfoPreview({ education }) {
  return (
    <>
      <div className="education-info-preview">
        <h1>School: {education.school}</h1>
        <h2>Program: {education.program}</h2>
        <p>Description: {education.description}</p>
        <p>Graduated: {education.endDate}</p>
      </div>
    </>
  )
}
