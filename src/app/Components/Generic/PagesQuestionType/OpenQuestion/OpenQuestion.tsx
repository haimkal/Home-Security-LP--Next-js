"use client";

import { useState, useEffect } from "react";
import ZipIcon from "../ZipIcon";
import LoadingSpinner from "../LoadingSpinner";
import { handleZipCodeChange } from "../utils/zipCodeUtils";
import { loadGoogleMapsApi } from "../utils/GoogleApi";
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
  generalFieldName: string;
  openQuestions?: {
    label?: string;
    type: string;
    fieldName: string;
    value: string;
    labelInputDirection: string;
    group?: string;
  }[];
  checkIfInputValid?: (isValid: boolean) => void;
  tcpa?: string;
};

export function OpenQuestion({
  updateFields,
  btnsDisplay,
  question,
  label,
  fieldName,
  value,
  isZipCode = false,
  autoNext = false,
  labelInputDirection,
  openQuestions = [],
  generalFieldName,
  checkIfInputValid,
  tcpa = "",
}: OpenQuestionProps) {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dynamicValues, setDynamicValues] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
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

    setDynamicValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("dynamic values: ", dynamicValues);
    updateFields({ [name]: value });
  }

  function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
    return arr.reduce(
      (acc, _, i) =>
        i % chunkSize ? acc : [...acc, arr.slice(i, i + chunkSize)],
      [] as T[][]
    );
  }

  if (generalFieldName === "address") {
    var maps_script_load = false;
    loadGoogleMapsApi(maps_script_load);
  }

  const groups = openQuestions.reduce((groups, input) => {
    const group = input.group || "default";
    if (!groups[group]) groups[group] = [];
    groups[group].push(input);
    console.log("groups: ", Object.entries(groups));
    return groups;
  }, {} as Record<string, typeof openQuestions>);

  return (
    <div className="form-section">
      <h4 className="form-title">{question}</h4>
      <div className={`open-question-div ${loading ? "--loading" : ""}`}>
        {Object.entries(groups).map(([groupName, fields], groupIndex) =>
          chunkArray(fields, 2).map((fieldPair, chunkIndex) => (
            <div
              key={`${groupIndex}-${chunkIndex}`}
              className={`field-group ${
                groupName === "sideBySide" ? "side-by-side" : groupName
              }`}
            >
              {fieldPair.map((input, index) => (
                <div key={index} className="input-group">
                  <label
                    htmlFor={input.fieldName}
                    className={`open-question label-input-${input.labelInputDirection}`}
                  >
                    {input.label}
                    <input
                      type={input.type}
                      name={input.fieldName}
                      maxLength={isZipCode ? 5 : 155}
                      value={dynamicValues[input.fieldName] || ""}
                      className="open-question-input"
                      onChange={handleChange}
                      id={input.fieldName}
                    />
                    {isZipCode && <ZipIcon />}
                    {loading && <LoadingSpinner />}
                    {location && (
                      <span className="zip-address">{location}</span>
                    )}
                    {error && <div className="error-div">{error}</div>}
                  </label>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      {tcpa && <p className="tcpa"> {tcpa}</p>}
    </div>
  );
}
