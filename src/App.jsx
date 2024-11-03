import { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationInfoForm from './components/EducationInfoForm';
import ResumeRender from './components/RenderedResume';
import ExperienceInfoForm from './components/ExperienceInfoForm';

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    id: crypto.randomUUID(),
    firstName: "Harry",
    lastName: "Bauls",
    email: "harrybauls@owls.co",
    phoneNumber: "420691234",
  });

  const handlePersonalInfo = (e) => {
    setPersonalInfo({
      ...personalInfo, [e.target.name]: e.target.value
    });
  };

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "St. Clair College",
      program: "Mobile Application Development",
      description: "Creating Apps for Android and iOS",
      startDate: "2016",
      endDate: "2020",
    },
    {
      id: crypto.randomUUID(),
      school: "University of Windsor",
      program: "Computer Science",
      description: "Making computers do stuff",
      startDate: "2020",
      endDate: "2024",
    },
  ]
  );

  const handleEducationInputChange = (e, id) => {
    setEducation(education.map(edu => {
      if (edu.id === id) {
        edu[e.target.name] = e.target.value;
        return edu;
      } else {
        return edu;
      }
    }))
  }

  const removeEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id))
  }

  const addEducation = () => {
    setEducation([
      ...education, {
        id: crypto.randomUUID(),
        school: "",
        program: "",
        description: "",
        startDate: "",
        endDate: "",
      }
    ])
  }

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      company: "Meta",
      position: "Mobile Application Development",
      description: "Creating Apps for Android and iOS",
      startDate: "2016",
      endDate: "2020",
    },
    {
      id: crypto.randomUUID(),
      company: "Twitter",
      position: "Mobile Application Development",
      description: "Creating Apps for Android and iOS",
      startDate: "2016",
      endDate: "2020",
    },
  ]
  );

  const handleExperienceInputChange = (e, id) => {
    setExperience(experience.map(exp => {
      if (exp.id === id) {
        exp[e.target.name] = e.target.value;
        return exp;
      } else {
        return exp;
      }
    }))
  }

  const removeExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id))
  }

  const addExperience = () => {
    setExperience([
      ...experience, {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        description: "",
        startDate: "",
        endDate: "",
      }
    ])
  }

  return (
    <>
      <div className="form">
        <PersonalInfoForm
          personalInfo={personalInfo}
          handlePersonalInfo={handlePersonalInfo}
        />
        <EducationInfoForm education={education}
          handleEducationInputChange={handleEducationInputChange}
          removeEducation={removeEducation}
          addEducation={addEducation} />
        <ExperienceInfoForm
          experience={experience}
          addExperience={addExperience}
          handleExperienceInputChange={handleExperienceInputChange}
          removeExperience={removeExperience}
        />
      </div>
      <ResumeRender
        personalInfo={personalInfo}
        education={education}
        experience={experience} />
    </>
  )
}


export default App
