export default function EducationInfoForm({ education, setEducation }) {

  return (
    <>
      <div className="education-form">
        <h2 className="heading">
          Education
        </h2>
        <div className="school">
          <input
            type="text"
            placeholder="School"
            maxLength={20}
            value={education.school}
            onChange={(event) => setEducation({ ...education, school: event.target.value })} />
          <input
            type="text"
            placeholder="Program"
            maxLength={20}
            value={education.program}
            onChange={(event) => setEducation({ ...education, program: event.target.value })} />
        </div>
        <textarea
          type="text"
          placeholder="Description"
          value={education.email}
          onChange={(event) => setEducation({ ...education, description: event.target.value })} />
        <div className="dateRange">
          <input
            type="text"
            placeholder="Start Year"
            value={education.startDate}
            onChange={(event) => setEducation({ ...education, startDate: event.target.value })} />
          <input
            type="text"
            placeholder="End Year"
            value={education.endDate}
            onChange={(event) => setEducation({ ...education, endDate: event.target.value })} />
        </div>
      </div>
    </>
  )

}
