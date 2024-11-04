import AddItemButton from "./AddItemButton"

export default function SkillsInfoForm({ skills, handleSkillsInputChange, addSkill, removeSkill }) {
  if (skills.length === 0) {
    return (
      <>
        <h1>Add Your Skills Below</h1>
        <AddItemButton addFunction={addSkill} />
      </>
    )
  } else {
    const skillsList = skills.map((skill, index) =>
      <div key={skill.id} className="single-skill-form">
        <div className="skill-heading">
          <h1>Skill {index + 1}</h1>
          <button className="delete-btn" onClick={() => removeSkill(skill.id)}>X</button>
        </div>
        <div className="skill">
          <div className="company">
            <input
              type="text"
              placeholder="Skill"
              name="skill"
              maxLength={20}
              value={skill.name}
              onChange={(e) => handleSkillsInputChange(e, skill.id)} />
            <input
              type="text"
              placeholder="Years of Experience"
              name="yearsOfExp"
              maxLength={20}
              value={skill.yearsOfExp}
              onChange={(e) => handleSkillsInputChange(e, skill.id)} />
          </div>
        </div>
      </div>
    )
    return (
      <>
        {skillsList}
        <AddItemButton addFunction={addSkill} />
      </>
    )
  }
}
