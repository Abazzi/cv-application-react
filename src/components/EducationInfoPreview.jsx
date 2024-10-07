export default function EducationInfoPreview({ education }) {

  const eduPreview = education.map((edu, index) =>
    <div key={index} id={edu.id} className="education-info-preview">
      <h1>Education {index + 1}</h1>
      <h2>School: {edu.school}</h2>
      <h2>Program: {edu.program}</h2>
      <p>Description: {edu.description}</p>
      <p>Graduated: {edu.endDate}</p>
    </div>
  )
  return eduPreview;
}
