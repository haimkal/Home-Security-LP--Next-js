"use client";
import { RadioBtns } from "../../../Generic/PagesQuestionType/RadioBtns/RadioBtns";
import { FormData } from "../../../../../types/Home-Security-Types/quoteLongFormData";
import { OpenQuestion } from "../../../Generic/PagesQuestionType/OpenQuestion/OpenQuestion";
import { CheckBox } from "../../../Generic/PagesQuestionType/CheckBox/CheckBox";
import { LoaderStep } from "../../../Generic/PagesQuestionType/Loader/LoaderStep";

type FormStepsType = (
  updateFields: (fields: Partial<FormData>) => void,
  btnsDisplay: (bool: boolean) => void,
  data: FormData,
  next: () => void,
  checkIfInputValid: (isValid: boolean) => void,
  fetchAndRedirect: () => void
) => JSX.Element[];

export const FormSteps: FormStepsType = (
  updateFields,
  btnsDisplay,
  data,
  next,
  checkIfInputValid,
  fetchAndRedirect
) => [
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

  <LoaderStep btnsDisplay={btnsDisplay} fetchAndRedirect={fetchAndRedirect} />,
];
