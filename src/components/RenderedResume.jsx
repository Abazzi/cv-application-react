export default function ResumeRender({ personalInfo, education, experience }) {
  return (
    <section className="resume-render">
      <section className="personal-info-render">
        <h1>Personal Info</h1>
        <h2>{personalInfo.firstName} + {personalInfo.lastName}</h2>
        <h2>{personalInfo.phoneNumber}</h2>
        <h2>{personalInfo.email}</h2>
      </section>
      <section className="education-render">
        <h1 className="section-header">Education</h1>
        <div className="education">
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
        </div>
      </section>
      <section className="experience-render">
        <h1 className="section-header">Experience</h1>
        <div className="experience">
          {experience.map((exp, index) =>
            <div key={exp.id} className="experience-info-preview">
              <h1>Experience {index + 1}</h1>
              <h2 name="company">Company: {exp.company}</h2>
              <h2 name="positiion">Position: {exp.position}</h2>
              <p name="description">Description: {exp.description}</p>
              <p name="startDate">Attended: {exp.startDate} - {exp.endDate}</p>
            </div>
          )
          }
        </div>
      </section>
    </section>
  )
}
