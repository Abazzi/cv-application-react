
import AddExperienceButton from "./AddExperienceButton";
import AddExperienceButtonfrom from "./AddExperienceButton";

export default function ExperienceInfoForm({ experience, handleExperienceInputChange, addExperience, removeExperience }) {
  // guard clause checking if data was passed in
  if (experience.length === 0) {
    return (
      <>
        <h1>Where is the data bruh?</h1>
        <AddExperienceButton addExperience={AddExperienceButton} />
      </>
    )

  } else {
    const expList = experience.map((exp, index) =>
      <div key={exp.id} className="single-experience-form">
        <div className="experience-heading">
          <h1>Experience {index + 1}</h1>
          <button className="deleteExp" onClick={() => removeExperience(exp.id)}>X</button>
        </div>
        <div className="company">
          <input
            type="text"
            placeholder="Company"
            name="company"
            maxLength={20}
            value={exp.company}
            onChange={(e) => handleExperienceInputChange(e, exp.id)} />
          <input
            type="text"
            placeholder="Position"
            name="position"
            maxLength={20}
            value={exp.position}
            onChange={(e) => handleExperienceInputChange(e, exp.id)} />
        </div>
        <textarea
          type="text"
          name="description"
          placeholder="Description of your last job"
          value={exp.description}
          onChange={(e) => handleExperienceInputChange(e, exp.id)} />
        <div className="dateRange">
          <input
            type="number"
            size={4}
            name="startDate"
            placeholder="Start Year"
            value={exp.startDate}
            onChange={(e) => handleExperienceInputChange(e, exp.id)} />
          <input
            type="number"
            size={4}
            name="endDate"
            placeholder="End Year"
            value={exp.endDate}
            onChange={(e) => handleExperienceInputChange(e, exp.id)} />
        </div>
      </div >
    )
    return (
      <div className="experience-form" >
        {expList}
        <AddExperienceButtonfrom addExperience={addExperience} />
      </div>
    )
  }
}
