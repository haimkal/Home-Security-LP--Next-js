"use client";
import { useState, useEffect } from "react";
import { useMultistepForm } from "../../useMultiplestepForm";
import { FormSteps } from "../../PagesQuestionType/FormSteps"; // Import the formSteps

import "./FormSession.css"; // Import the CSS file

type FormData = {
  propertyType: string;
  zipCode: string;
  installPref: string;
  firstName: string;
  securityFeatures: string[];
  systemType: string;
  address: string;
  city: string;
};

const INITIAL_DATA: FormData = {
  propertyType: "",
  zipCode: "",
  installPref: "",
  firstName: "",
  securityFeatures: [],
  systemType: "",
  address: "",
  city: "",
};
export default function FormSection() {
  const [data, setData] = useState(INITIAL_DATA);
  const [showBtns, setShowBtns] = useState(false);
  const [steps, setSteps] = useState<React.ReactElement[]>([]);
  const [isInputValid, setIsInputValid] = useState(false);
  console.log("data from state: ", data);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function checkIfInputValid(isValid: boolean) {
    setIsInputValid(isValid);
  }

  function btnsDisplay(bool: boolean) {
    setShowBtns(bool);
  }
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm(steps);
  useEffect(() => {
    setSteps(FormSteps(updateFields, btnsDisplay, data, next, checkIfInputValid, fetchAndRedirect));
  }, [data]);

  function fetchAndRedirect() {
    alert("Successful Account Creation!");
    props.history.replace("/home-security-thankyou/");
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep && isInputValid) {
      return next();
    } else if (isLastStep) {
      fetchAndRedirect(); // fetch can go here
    } else return;
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
            <div className="button-group">
              {showBtns && (
                <button type="submit" className="next-step">
                  {isLastStep ? "Finish" : "Next"}
                </button>
              )}
              {!isFirstStep && !isLastStep && (
                <button type="button" className="prev-step" onClick={back}>
                  Previous
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
