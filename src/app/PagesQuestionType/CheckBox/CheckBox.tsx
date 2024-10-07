import { useEffect } from "react";
import "./CheckBox.css";

type Option = {
  label: string;
  value: string;
};

type CheckBoxProps = {
  updateFields: (fields: Partial<{ [key: string]: string[] }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  fieldName: string;
  values: string[];
  options: Option[];
  addQuestion?: React.ReactNode;
};

export function CheckBox({
  updateFields,
  btnsDisplay,
  question,
  fieldName,
  values,
  options,
}: CheckBoxProps) {
  useEffect(() => {
    btnsDisplay(true);
  }, [btnsDisplay]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const updatedValues = e.target.checked ? [...values, value] : values.filter((v) => v !== value);
    updateFields({ [fieldName]: updatedValues });
  }

  return (
    <div className="form-section">
      {/* <h5>Quick and easy. Get matched with the best Home Security company in your area</h5> */}
      <h4 className="form-title">{question}</h4>
      <div className="options-div">
        {options.map((option, index) => (
          <label key={index} className="checkbox-btn">
            <input
              type="checkbox"
              name={fieldName}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={handleChange}
              className="hidden-checkbox"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
