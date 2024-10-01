"use client";
import { useState, useEffect } from "react";
import { PropertyTypeForm } from "../FormPages/PropertyType/PropertyTypeForm";
import { UserForm } from "../userForm";
import { AddressForm } from "../AddressForm";
import { useMultistepForm } from "../useMultiplestepForm";
import "./SecondSession.css"; // Import the CSS file
import { ZipCodeForm } from "../FormPages/ZipCode.tsx/ZipCodeForm";
import { OpenQuestion } from "../PagesQuestionType/OpenQuestion/OpenQuestion";
import { RadioBtns } from "../PagesQuestionType/RadioBtns/RadioBtns";

type FormData = {
  propertyType: string;
  zipCode: string;
  installPref: string;
  firstName: string;
};

const INITIAL_DATA: FormData = {
  propertyType: "",
  zipCode: "",
  installPref: "",
  firstName: "",
};
export default function SecondSection() {
  console.log("render second section");

  const [data, setData] = useState(INITIAL_DATA);
  const [showBtns, setShowBtns] = useState(false);
  const [steps, setSteps] = useState<React.ReactElement[]>([]);
  // console.log("data from state: ", data);

  function updateFields(fields: Partial<FormData>) {
    // if (fields["propertyType"]) next();
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function btnsDisplay(bool: boolean) {
    setShowBtns(bool);
  }
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(steps);
  useEffect(() => {
    setSteps([
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
        // addedHtml= '<div><input  </div>'
        addQuestion={
          <OpenQuestion
            updateFields={updateFields}
            btnsDisplay={btnsDisplay}
            question="What is your first name?"
            fieldName="firstName"
            value={data.firstName}
            isZipCode={false}
            autoNext={false}
          />
        }
      />,
      <OpenQuestion
        // numOfInput = {}
        // few inputs of different kinds
        updateFields={updateFields}
        btnsDisplay={btnsDisplay}
        question="What is your ZIP code?"
        fieldName="zipCode"
        value={data.zipCode}
        isZipCode={true}
        autoNext={false}
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
            label: "Self-installation",
            value: "Self-installation",
          },
        ]}
        isSquarePanel={false}
      />,
    ]);
  }, [data]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation!"); // fetch can go here
  }
  return (
    <div className="second-section">
      <div className="form-container">
        <form id="form" onSubmit={onSubmit}>
          <div className="step-indicator">
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div className="for_step_actions">
            {showBtns && (
              <div className="button-group">
                <button type="submit" className="next-step">
                  {isLastStep ? "Finish" : "Next"}
                </button>
                {!isFirstStep && (
                  <button type="button" className="prev-step" onClick={back}>
                    Previous
                  </button>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
