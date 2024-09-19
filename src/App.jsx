import { useState } from 'react';
import './App.scss'
import PersonalInfoComponent from './components/PersonalInfoComponent'
import PersonalInfoPreviewComponent from './components/PersonalInfoPreviewComponent';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Adam",
    lastName: "Bazzi",
    email: "adam@admabazzi.ca",
    phoneNumber: "123456789",
  }
  );
  return (
    <>
      <h1>CV Application</h1>
      <PersonalInfoComponent personalInfo={personalInfo} onChangePersonalInfo={setPersonalInfo} />
      <PersonalInfoPreviewComponent personalInfo={personalInfo} />
    </>
  )
}

export default App
