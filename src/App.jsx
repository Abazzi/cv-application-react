import { useState } from 'react';
import './styles/App.scss'
import PersonalInfoForm from './components/PersonalInfoForm'
import PersonalInfoPreview from './components/PersonalInfoPreview';
import EducationInfoForm from './components/EducationInfoForm';
import EducationInfoPreview from './components/EducationInfoPreview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Adam",
    lastName: "Bazzi",
    email: "adam@admabazzi.ca",
    phoneNumber: "123456789",
  }
  );
  const [education, setEductation] = useState({
    school: "St. Clair College",
    program: "Mobile Application Development",
    description: "Developing Mobile Apps for Android and iPhone",
    startDate: "2017",
    endDate: "2020",
  }
  );

  return (
    <>
      <div className="form">
        <PersonalInfoForm personalInfo={personalInfo} onChangePersonalInfo={setPersonalInfo} />
        <EducationInfoForm education={education} setEducation={setEductation} />
      </div>
      <div className="render">
        <PersonalInfoPreview personalInfo={personalInfo} />
        <EducationInfoPreview education={education} />
      </div>
    </>
  )
}

export default App
