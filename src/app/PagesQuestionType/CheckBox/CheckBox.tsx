import { useEffect, useRef } from "react";
import "./RadioBtns.css";

type Option = {
  label: string;
  value: string;
};

type CheckBoxProps = {
  updateFields: (fields: Partial<{ [key: string]: string }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  fieldName: string;
  value: string;
  options: Option[];
  autoNext?: boolean;
  nextStep?: () => void;
  addQuestion?: React.ReactNode;
};

export function CheckBox({
  updateFields,
  btnsDisplay,
  question,
  fieldName,
  value,
  options,
  addQuestion, // Optional prop
}: CheckBoxProps) {
  useEffect(() => {
    btnsDisplay(true);
  }, [btnsDisplay]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateFields({ [fieldName]: e.target.value });
  }

  return (
    <div className="form-section step1">
      {/* <h5>Quick and easy. Get matched with the best Home Security company in your area</h5> */}
      <h4 className="form-title">{question}</h4>
      <div className="options-div">
        {options.map((option, index) => (
          <label key={index} className="check-box">
            <input
              type="checkbox"
              name={fieldName}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              className="hidden-radio"
            />
          </label>
        ))}
      </div>
      {addQuestion && <div className="additional-question">{addQuestion}</div>}
    </div>
  );
}
