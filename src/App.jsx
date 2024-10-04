import { useState } from 'react';
import './styles/App.scss'
import PersonalInfoForm from './components/PersonalInfoForm'
import PersonalInfoPreview from './components/PersonalInfoPreview';
import EducationInfoForm from './components/EducationInfoForm';
import EducationInfoPreview from './components/EducationInfoPreview';

function App() {
  // const [personalInfo, setPersonalInfo] = useState({
  //   firstName: "Hari",
  //   lastName: "Bauls",
  //   email: "haribauls@owls.co",
  //   phoneNumber: "420691234",
  // }
  // );

  const [data, setData] = useState({
    personalInfo: {
      id: crypto.randomUUID(),
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    education: [
      {
        id: crypto.randomUUID(),
        school: "St. Clair College",
        program: "Mobile Application Development",
        description: "Creating Apps for iOS and Android",
        startDate: "2016",
        endDate: "2020",
      }
    ]
  })

  const handleEducation = (e, id) => {
    setData({
      ...data, education: data.education.map(edu => {
        if (edu.id == id) {
          edu[e.target.name] = e.target.value;
          return edu;
        }
      })
    })
  }

  function handlePersonalInfo(e) {
    setData({
      ...data, personalInfo: { ...data.personalInfo, [e.target.name]: e.target.value }
    });
  };

  const addEducation = () => {
    setData({ ...data, education: [...data.education, { id: crypto.randomUUID(), school: "", program: "", description: "", startDate: "", endDate: "" }] })
  }

  return (
    <>
      <div className="form">
        <PersonalInfoForm personalInfo={data.personalInfo} handlePersonalInfo={handlePersonalInfo} />
      </div>
      <div className="render">
        <PersonalInfoPreview personalInfo={data.personalInfo} />
      </div>
    </>
  )
}

export default App
