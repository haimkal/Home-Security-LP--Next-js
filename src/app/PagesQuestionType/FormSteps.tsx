import { RadioBtns } from "./RadioBtns/RadioBtns";
import { OpenQuestion } from "./OpenQuestion/OpenQuestion";
import { CheckBox } from "./CheckBox/CheckBox";
import { LoaderStep } from "./Loader/LoaderStep";

export const FormSteps = (
  updateFields,
  btnsDisplay,
  data,
  next,
  checkIfInputValid,
  fetchAndRedirect
) => [
  <RadioBtns
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What type of property is this system for?"
    fieldName="propertyType"
    value={data.propertyType}
    options={[
      {
        label: "Owned",
        value: "Owned",
        imgSrc: "/home-security/images/house.webp",
      },
      {
        label: "Rented",
        value: "Rented",
        imgSrc: "/home-security/images/key.webp",
      },
    ]}
    isSquarePanel={true}
    autoNext={true}
    nextStep={next}
  />,
  <OpenQuestion
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What is your ZIP code?"
    fieldName="zipCode"
    isZipCode={true}
    checkIfInputValid={checkIfInputValid}
    openQuestions={[
      {
        type: "text",
        fieldName: "zipCode",
        value: data.zipCode,
        labelInputDirection: "column",
      },
    ]}
  />,
  <RadioBtns
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What is your installation preference?"
    fieldName="installPref"
    value={data.installPref}
    options={[
      {
        label: "Professional Installation",
        value: "Professional Installation",
      },
      {
        label: "Self Installation",
        value: "Self Installation",
      },
      {
        label: "No Preference",
        value: "No Preference",
      },
    ]}
    isSquarePanel={false}
    autoNext={true}
    nextStep={next}
  />,
  <CheckBox
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What home security features would you like to have?"
    fieldName="securityFeatures"
    values={data.securityFeatures}
    options={[
      {
        label: "Cameras",
        value: "Cameras",
      },
      {
        label: "Motion Sensors",
        value: "Motion Sensors",
      },
      {
        label: "Glass Break Sensors",
        value: "Glass Break Sensors",
      },
      {
        label: "Doorbell Cameras",
        value: "Doorbell Cameras",
      },
    ]}
  />,
  <RadioBtns
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What kind of system do you need?"
    fieldName="systemType"
    value={data.systemType}
    options={[
      {
        label: "Only burglar/intrusion",
        value: "Only burglar/intrusion",
      },
      {
        label: "Fire detection",
        value: "Fire detection",
      },
      {
        label: "Both burglar and fire detection",
        value: "Both burglar and fire detection",
      },
    ]}
    isSquarePanel={false}
    autoNext={true}
    nextStep={next}
  />,
  <OpenQuestion
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="What is your address?"
    generalFieldName="address"
    openQuestions={[
      {
        label: "Street Address",
        type: "text",
        fieldName: "address",
        value: data.address,
        labelInputDirection: "column",
      },
      {
        label: "City",
        type: "text",
        fieldName: "city",
        value: data.city,
        labelInputDirection: "column",
      },
    ]}
  />,
  <OpenQuestion
    updateFields={updateFields}
    btnsDisplay={btnsDisplay}
    question="Your details"
    generalFieldName="userDetails"
    tcpa="By clicking the 'Submit' button below, I agree that an ADT specialist may contact me from time to time via text messages or phone calls to the phone number provided by me using automated technology about ADT offers and consent is not required to make a purchase. Your information is collected and used in accordance with our privacy policy."
    openQuestions={[
      {
        label: "First Name",
        type: "text",
        fieldName: "firstName",
        value: data.firstName,
        labelInputDirection: "column",
        group: "sideBySide",
      },
      {
        label: "Last Name",
        type: "text",
        fieldName: "lastName",
        value: data.lastName,
        labelInputDirection: "column",
        group: "sideBySide",
      },
      {
        label: "Email",
        type: "text",
        fieldName: "email",
        value: data.email,
        labelInputDirection: "column",
        group: "stacked",
      },
      {
        label: "Phone",
        type: "text",
        fieldName: "phone",
        value: data.phone,
        labelInputDirection: "column",
        group: "stacked",
      },
    ]}
  />,
  // <OpenQuestion
  //   updateFields={updateFields}
  //   btnsDisplay={btnsDisplay}
  //   question="Your life story"
  //   generalFieldName="life"
  //   openQuestions={[
  //     {
  //       label: "name",
  //       type: "text",
  //       fieldName: "name",
  //       value: data.firstName,
  //       labelInputDirection: "column",
  //       group: "sideBySide",
  //     },
  //     {
  //       label: "last",
  //       type: "text",
  //       fieldName: "last",
  //       value: data.lastName,
  //       labelInputDirection: "column",
  //       group: "sideBySide",
  //     },
  //     {
  //       label: "tell us about your self",
  //       type: "text",
  //       fieldName: "tell-us",
  //       value: data.email,
  //       labelInputDirection: "column",
  //       group: "stacked",
  //     },
  //     {
  //       label: "tell us about your experince with our product",
  //       type: "text",
  //       fieldName: "experience",
  //       value: data.phone,
  //       labelInputDirection: "column",
  //       group: "stacked",
  //     },
  //     {
  //       label: "zip",
  //       type: "text",
  //       fieldName: "zip",
  //       value: data.email,
  //       labelInputDirection: "column",
  //       group: "sideBySide",
  //     },
  //     {
  //       label: "mobile",
  //       type: "text",
  //       fieldName: "6",
  //       value: data.phone,
  //       labelInputDirection: "column",
  //       group: "sideBySide",
  //     },
  //     {
  //       label: "ts",
  //       type: "text",
  //       fieldName: "ts",
  //       value: data.email,
  //       labelInputDirection: "row",
  //       group: "sideBySide",
  //     },
  //     {
  //       label: "snp",
  //       type: "text",
  //       fieldName: "snp",
  //       value: data.phone,
  //       labelInputDirection: "row",
  //       group: "sideBySide",
  //     },
  //   ]}
  // />,
  <LoaderStep btnsDisplay={btnsDisplay} fetchAndRedirect={fetchAndRedirect} />,
];
