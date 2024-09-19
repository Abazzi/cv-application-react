export default function PersonalInfoComponent({ personalInfo, onChangePersonalInfo }) {

  return (
    <>
      <div className="personal-data-form">
        <h2 className="heading">
          Personal Data
        </h2>
        <div className="fullname">
          <input
            type="text"
            placeholder="First Name"
            maxLength={15}
            value={personalInfo.firstName}
            onChange={(event) => onChangePersonalInfo({ ...personalInfo, firstName: event.target.value })} />
          <input
            type="text"
            placeholder="Last Name"
            maxLength={13}
            value={personalInfo.lastName}
            onChange={(event) => onChangePersonalInfo({ ...personalInfo, lastName: event.target.value })} />
        </div>
        <input
          type="text"
          placeholder="email"
          value={personalInfo.email}
          onChange={(event) => onChangePersonalInfo({ ...personalInfo, email: event.target.value })} />
        <input
          type="text"
          placeholder="phoneNumber"
          value={personalInfo.phoneNumber}
          onChange={(event) => onChangePersonalInfo({ ...personalInfo, phoneNumber: event.target.value })} />
      </div>
    </>
  )
}
