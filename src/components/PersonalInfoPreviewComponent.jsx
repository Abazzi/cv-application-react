export default function PerosnalInfoPreviewComponent({ personalInfo }) {
  return (
    <>
      <h1>{personalInfo.firstName} {personalInfo.lastsName}</h1>
      <h2>{personalInfo.email}</h2>
      <h2>{personalInfo.phoneNumber}</h2>
    </>
  )
}

