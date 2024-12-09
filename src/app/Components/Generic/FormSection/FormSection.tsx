"use client";

import React, { useState, useEffect, ReactElement, FormEvent, ReactNode } from "react";
import { useMultistepForm } from "../../../useMultiplestepForm";
import "./FormSession.css";

type FormStepsType<T> = (
  updateFields: (fields: Partial<T>) => void,
  btnsDisplay: (bool: boolean) => void,
  data: T,
  next: () => void,
  checkIfInputValid: (isValid: boolean) => void,
  fetchAndRedirect: () => void
) => JSX.Element[];

export default function FormSection<T>({
  FormSteps,
  initialData,
  optionalComponent = null,
  isOffsetUp = false,
  hasWhiteBackground = false,
}: {
  FormSteps: FormStepsType<T>;
  initialData: T;
  optionalComponent?: ReactNode;
  isOffsetUp?: boolean;
  hasWhiteBackground?: boolean;
}) {
  const [data, setData] = useState(initialData);
  const [showBtns, setShowBtns] = useState(false);
  const [steps, setSteps] = useState<React.ReactElement[]>([]);
  const [isInputValid, setIsInputValid] = useState(false);
  console.log("data from state: ", data);

  function updateFields(fields: Partial<T>) {
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
    // props.history.replace("/home-security-thankyou/");
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
      <div className={`form-container ${hasWhiteBackground ? "white-background" : ""} `}>
        <form id="form" className={`${isOffsetUp ? "offset-up" : ""}`} onSubmit={onSubmit}>
          {/* <div className="step-indicator">
            {currentStepIndex + 1}/{steps.length}
          </div> */}
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
        {optionalComponent}
      </div>
    </div>
  );
}
