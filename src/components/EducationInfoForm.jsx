import AddItemButton from "./AddItemButton";

function EducationInfoForm({ education, handleEducationInputChange, addEducation, removeEducation }) {
  // guard clause checking if data was passed in
  if (!education) {
    return (
      <>
        <h1>Enter Education Info Below</h1>
        <AddItemButton addFunction={addEducation} />
      </>
    )
  } else {
    const eduList = education.map((edu, index) =>
      <div key={edu.id} className="single-education-form">
        <div className="education-heading">
          <h1>Education {index + 1}</h1>
          <button className="deleteEdu" onClick={() => removeEducation(edu.id)}>X</button>
        </div>
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
            type="number"
            size={4}
            name="startDate"
            placeholder="Start Year"
            value={edu.startDate}
            onChange={(e) => handleEducationInputChange(e, edu.id)} />
          <input
            type="number"
            size={4}
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
        <AddItemButton addFunction={addEducation} />
      </div>
    )
  }
}
export default EducationInfoForm;
