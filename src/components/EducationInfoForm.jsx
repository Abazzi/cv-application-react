import AddEducationButton from "./AddEducationButton";

function EducationInfoForm({ education, handleEducationInputChange, addEducation }) {
  // guard clause checking if data was passed in
  if (!education) {
    return <h1>Where is the data bruh?</h1>
  } else {
    const eduList = education.map(edu =>
      <div key={edu.id} className="single-education-form">
        <div className="school">
          <input
            type="text"
            placeholder="School"
            name="school"
            maxLength={20}
            value={edu.school}
            onChange={(e) => handleEducationInputChange(e, edu.id)} />
          <input
            type="text"
            placeholder="Program"
            name="program"
            maxLength={20}
            value={edu.program}
            onChange={(e) => handleEducationInputChange(e, edu.id)} />
        </div>
        <textarea
          type="text"
          name="description"
          placeholder="Description of program"
          value={edu.description}
          onChange={(e) => handleEducationInputChange(e, edu.id)} />
        <div className="dateRange">
          <input
            type="text"
            name="startDate"
            placeholder="Start Year"
            value={edu.startDate}
            onChange={(e) => handleEducationInputChange(e, edu.id)} />
          <input
            type="text"
            name="endDate"
            placeholder="End Year"
            value={edu.endDate}
            onChange={(e) => handleEducationInputChange(e, edu.id)} />
        </div>
      </div >
    )
    return (
      <div className="education-form" >
        {eduList}
        <AddEducationButton addEducation={addEducation} />
      </div>
    )
  }
}
export default EducationInfoForm;
