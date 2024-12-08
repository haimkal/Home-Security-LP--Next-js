"use client";

import { useEffect, useRef } from "react";
import "./RadioBtns.css";

type Option = {
  label: string;
  value: string;
  imgSrc?: string;
};

type RadioBtnsProps = {
  updateFields: (fields: Partial<{ [key: string]: string }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  fieldName: string;
  value: string;
  options: Option[];
  isSquarePanel?: boolean;
  autoNext?: boolean;
  nextStep?: () => void;
  addQuestion?: React.ReactNode;
};

export function RadioBtns({
  updateFields,
  btnsDisplay,
  question,
  fieldName,
  value,
  options,
  isSquarePanel,
  autoNext,
  nextStep,
  addQuestion, // Optional prop
}: RadioBtnsProps) {
  const previousValueRef = useRef<string | null>(null);

  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay, autoNext]);

  useEffect(() => {
    if (autoNext && value !== previousValueRef.current && previousValueRef.current !== null) {
      nextStep();
    }

    previousValueRef.current = value;
  }, [value, autoNext, nextStep]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateFields({ [fieldName]: e.target.value });
  }

  return (
    <div className="form-section step1">
      {/* <h5>Quick and easy. Get matched with the best Home Security company in your area</h5> */}
      <h4 className="form-title">{question}</h4>
      <div className={`options-div ${isSquarePanel ? "square-panel" : ""}`}>
        {options.map((option, index) => (
          <label key={index} className={`radio-btn ${isSquarePanel ? "square" : ""}`}>
            <input
              type="radio"
              name={fieldName}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              onClick={nextStep} // what do you think of that?
              className="hidden-radio"
            />
            {isSquarePanel ? (
              <div className="img_box">
                {option.imgSrc && (
                  <img src={option.imgSrc} alt={option.label} height="35" width="35" />
                )}
                <p>{option.label}</p>
              </div>
            ) : (
              <p>{option.label}</p>
            )}
          </label>
        ))}
      </div>
      {addQuestion && <div className="additional-question">{addQuestion}</div>}
    </div>
  );
}
