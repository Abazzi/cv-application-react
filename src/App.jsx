import { useState } from 'react';
import PersonalInfoForm from './components/PersonalInfoForm'
import PersonalInfoPreview from './components/PersonalInfoPreview';
import EducationInfoForm from './components/EducationInfoForm';
import EducationInfoPreview from './components/EducationInfoPreview'

function App() {

  const [personalInfo, setPersonalInfo] = useState({
    personalInfo: {
      id: crypto.randomUUID(),
      firstName: "Harry",
      lastName: "Bauls",
      email: "harrybauls@owls.co",
      phoneNumber: "420691234",
    }
  });

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "st. clair college",
      program: "mobile application development",
      description: "creating apps for ios and android",
      startDate: "2016",
      endDate: "2020",
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

  const handlePersonalInfo = (e) => {
    setPersonalInfo({
      ...personalInfo, [e.target.name]: e.target.value
    });
  };

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

  return (
    <>
      <div className="form">
        <PersonalInfoForm personalInfo={personalInfo} handlePersonalInfo={handlePersonalInfo} />
        <EducationInfoForm education={education} handleEducationInputChange={handleEducationInputChange} addEducation={addEducation} />
      </div>
      <div className="render">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationInfoPreview education={education} />
      </div>
    </>
  )
}


export default App
