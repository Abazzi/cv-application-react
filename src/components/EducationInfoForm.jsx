export default function EducationInfoForm({ education, handleEduInputChange, addEducation }) {

  const educationForm = education.map((edu, index) =>
    <div key={index} id={edu.id} className="education-form">
      <h2 className="heading">
        Education {index + 1}
      </h2>
      <div className="school"> <input
        type="text"
        placeholder="School"
        name="school"
        id="school"
        maxLength={20}
        value={edu.school}
        onChange={(e) => handleEduInputChange(e, edu.id)} />
        <input
          type="text"
          placeholder="Program"
          name="program"
          id="program"
          maxLength={20}
          value={edu.program}
          onChange={(e) => handleEduInputChange(e, edu.id)} />
      </div>
      <textarea
        type="text"
        name="description"
        id="description"
        placeholder="Description of program"
        value={edu.description}
        onChange={(e) => handleEduInputChange(e, edu.id)} />
      <div className="dateRange">
        <input
          type="text"
          id="startDate"
          name="startDate"
          placeholder="Start Year"
          value={edu.startDate}
          onChange={(e) => handleEduInputChange(e, edu.id)} />
        <input
          type="text"
          id="endDate"
          name="endDate"
          placeholder="End Year"
          value={edu.endDate}
          onChange={(e) => handleEduInputChange(e, edu.id)} />
      </div>
    </div >
  );

  return (
    <>
      <div>{educationForm}</div>
      <button className="add-button" onClick={addEducation} >+</button>
    </>
  )
}
