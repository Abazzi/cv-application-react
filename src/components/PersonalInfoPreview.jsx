export default function PerosnalInfoPreview({ personalInfo }) {
  return (
    <>
      <div className="personal-info-preview">
        <h1>Name: {personalInfo.firstName} {personalInfo.lastsName}</h1>
        <h2>Email: {personalInfo.email}</h2>
        <h2>Phone Number: {personalInfo.phoneNumber}</h2>
      </div>
    </>
  )
}

