export default function ResumeRender({ personalInfo, education, experience, skills }) {
  return (
    <section className="resume-render">
      <section id="rendered-resume">
        <section id="header-render" className="personal-info-render">
          <h1 className="rendered-name">{personalInfo.firstName} + {personalInfo.lastName}</h1>
          <h2>Software Developer</h2>
        </section>
        <section id="contact-render">
          <h1 className="section-header">Contact Info</h1>
          <h2>Phone Number: <a href={`tel:${personalInfo.phoneNumber}`}> {personalInfo.phoneNumber}</a></h2>
          <h2>Email: <a href={`mailto:${personalInfo.email}`} >{personalInfo.email}</a></h2>
        </section>
        <section id="education-render" className="education-render">
          <h1 className="section-header">Education</h1>
          <div className="education">
            {education.map(edu =>
              <div key={edu.id} className="education">
                <h2 name="school">School: {edu.school}</h2>
                <h2 name="program">Program: {edu.program}</h2>
                <p name="description">Description: {edu.description}</p>
                <p name="startDate">Attended: {edu.startDate} - {edu.endDate}</p>
              </div>
            )
            }
          </div>
        </section>
        <section id="experience-render" className="experience-render">
          <h1 className="section-header">Experience</h1>
          <div className="experience">
            {experience.map(exp =>
              <div key={exp.id} className="experience">
                <h2 name="company">Company: {exp.company}</h2>
                <h2 name="positiion">Position: {exp.position}</h2>
                <p name="description">Description: {exp.description}</p>
                <p name="startDate">Attended: {exp.startDate} - {exp.endDate}</p>
              </div>
            )
            }
          </div>
        </section>
        <section id="skills-render" className="skills-render">
          <h1 className="section-header">Skills</h1>
          <div className="skills">
            {skills.map(skill =>
              <div className="skill" key={skill.id}>
                <h2 name="name">{skill.skillName}</h2>
                <h3 name="yearsOfExp">Years of Experience: {skill.yearsOfExp}</h3>
              </div>
            )
            }
          </div>
        </section>
      </section>
    </section >
  )
}
