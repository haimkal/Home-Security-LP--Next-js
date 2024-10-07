import { RadioBtns } from "./RadioBtns/RadioBtns";
import { OpenQuestion } from "./OpenQuestion/OpenQuestion";
import { CheckBox } from "./CheckBox/CheckBox";

export const FormSteps = (updateFields, btnsDisplay, data, next, checkIfInputValid) => [
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
        imgSrc: "https://top10us.com/static/home-security-quote-long/assets/images/house.webp",
      },
      {
        label: "Rented",
        value: "Rented",
        imgSrc: "https://top10us.com/static/home-security-quote-long/assets/images/key.webp",
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
    value={data.zipCode}
    isZipCode={true}
    autoNext={false}
    nextStep={next}
    checkIfInputValid={checkIfInputValid}
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
    question="Where is your home located?"
    label="Street Address"
    fieldName="streetAddress"
    value={data.streetAddress}
    isZipCode={false}
    autoNext={false}
    nextStep={next}
    addInputs={[{ label: "City", type: "text", fieldName: "city", value: data.city }]}
  />,
];
