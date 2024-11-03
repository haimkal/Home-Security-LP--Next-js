import { useState, useEffect } from "react";
import ZipIcon from "../ZipIcon";
import LoadingSpinner from "../LoadingSpinner";
import { handleZipCodeChange } from "../utils/zipCodeUtils";
import "./OpenQuestion.css";

type OpenQuestionProps = {
  updateFields: (fields: Partial<{ [key: string]: string }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  label: string;
  fieldName: string;
  value: string;
  isZipCode?: boolean;
  autoNext?: boolean;
  labelInputDirection: string;
  addInputs?: {
    label: string;
    type: string;
    fieldName: string;
    value: string;
    labelInputDirection: string;
  }[];
  checkIfInputValid?: (isValid: boolean) => void;
};

export function OpenQuestion({
  updateFields,
  btnsDisplay,
  question,
  label,
  fieldName,
  value,
  isZipCode,
  autoNext,
  labelInputDirection,
  addInputs = [],
  checkIfInputValid,
}: OpenQuestionProps) {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dynamicValues, setDynamicValues] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === fieldName) {
      // original fieldName
      updateFields({ [fieldName]: value });

      if (isZipCode) {
        handleZipCodeChange(
          value,
          updateFields,
          setLocation,
          setError,
          setLoading,
          checkIfInputValid
        );
      }
    } else {
      // Added inputs
      setDynamicValues((prev) => ({
        ...prev,
        [name]: value,
      }));
      updateFields({ [name]: value });
    }
  }
  return (
    <div className={`form-section`}>
      <h4 className="form-title">{question}</h4>
      <div className={`open-question-div ${loading ? "--loading" : ""} ${fieldName}-container`}>
        <div>
          <label className={`open-question label-input-${labelInputDirection}`}>
            {label}
            <input
              type="text"
              name={fieldName}
              maxLength={isZipCode ? 5 : 155}
              value={value}
              className="open-question-input"
              onChange={handleChange}
            />
            {isZipCode && <ZipIcon />}
            {loading && <LoadingSpinner />}
            {location && <span className="zip-address">{location}</span>}
            {error && <div className="error-div">{error}</div>}
          </label>
        </div>
        {addInputs.map((input, index) => (
          <div key={index} className={`added-input-${index}`}>
            <label className={`open-question label-input-${input.labelInputDirection}`}>
              {input.label}
              <input
                type={input.type}
                name={input.fieldName}
                maxLength={155}
                value={dynamicValues[input.fieldName] || ""}
                className="open-question-input"
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
