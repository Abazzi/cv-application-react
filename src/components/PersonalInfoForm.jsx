export default function PersonalInfoForm({ personalInfo, handlePersonalInfo }) {
  return (
    <>
      <div className="personal-info-form">
        <h2 className="heading">
          Personal Data
        </h2>
        <div className="fullname">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            maxLength={50}
            value={personalInfo.firstName}
            onChange={handlePersonalInfo} />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            maxLength={50}
            value={personalInfo.lastName}
            onChange={handlePersonalInfo} />
        </div>
        <input
          type="text"
          placeholder="email"
          name="email"
          maxLength={50}
          value={personalInfo.email}
          onChange={handlePersonalInfo} />
        <input
          type="text"
          placeholder="phoneNumber"
          name="phoneNumber"
          maxLength={50}
          value={personalInfo.phoneNumber}
          onChange={handlePersonalInfo} />
      </div>
    </>
  )
}
