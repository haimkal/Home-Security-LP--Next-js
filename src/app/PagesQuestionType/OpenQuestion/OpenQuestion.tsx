import { useState, useEffect } from "react";
import "./OpenQuestion.css";

type OpenQuestionProps = {
  updateFields: (fields: Partial<{ [key: string]: string }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  label: string;
  fieldName: string;
  value: string;
  isZipCode?: boolean;
  addInputs?: { label: string; type: string; fieldName: string; value: string }[];
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
  addInputs = [],
  checkIfInputValid,
}: OpenQuestionProps) {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dynamicValues, setDynamicValues] = useState<{ [key: string]: string }>({});

  function validateZipCode(zipCode: string) {
    return zipCode.length === 5 && /^\d+$/.test(zipCode);
  }

  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay]);

  async function handleZipCodeChange(zipCode: string) {
    setLocation(null);
    setError(null);

    if (validateZipCode(zipCode)) {
      setLoading(true);
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
        if (!response.ok) {
          throw new Error("Invalid Zip Code");
        }
        checkIfInputValid(true);
        const res = await response.json();
        if (res.places && res.places.length > 0) {
          const state = res.places[0]["state"];
          const stateAbbreviation = res.places[0]["state abbreviation"];
          setLocation(`${state}, ${stateAbbreviation}`);
          updateFields({ [fieldName]: zipCode });
          updateFields({ state: state, stateAbbreviation: stateAbbreviation });
        }
      } catch (error) {
        setError("Invalid Zip Code");
        checkIfInputValid(false);
      } finally {
        setLoading(false);
      }
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === fieldName) {
      updateFields({ [fieldName]: value });

      if (isZipCode) {
        handleZipCodeChange(value);
      }
    } else {
      setDynamicValues((prev) => ({
        ...prev,
        [name]: value,
      }));
      updateFields({ [name]: value });
    }
  }
  return (
    <div className="form-section">
      <h4 className="form-title">{question}</h4>
      <div className={`open-question-div ${loading ? "--loading" : ""}`}>
        <div>
          <label className="open-question">
            {label}
            <input
              type="text"
              name={fieldName}
              maxLength={isZipCode ? 5 : 155}
              value={value}
              className="open-question-input"
              onChange={handleChange}
            />
            {isZipCode && (
              <span className="zip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#37aaaf"
                  height="25px"
                  width="25px"
                  viewBox="0 0 297 297"
                  className="location-icon"
                >
                  <g>
                    <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"></path>
                    <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104C179.265,127.948,165.464,141.901,148.5,141.901z"></path>
                  </g>
                </svg>
              </span>
            )}
            <span className="loading-bar-container">
              {loading && (
                <svg
                  id="loading_bar"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#517D7B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="spinner">
                    <circle cx="12" cy="2.5" r="1.5" opacity=".14"></circle>
                    <circle cx="16.75" cy="3.77" r="1.5" opacity=".29"></circle>
                    <circle cx="20.23" cy="7.25" r="1.5" opacity=".43"></circle>
                    <circle cx="21.50" cy="12.00" r="1.5" opacity=".57"></circle>
                    <circle cx="20.23" cy="16.75" r="1.5" opacity=".71"></circle>
                    <circle cx="16.75" cy="20.23" r="1.5" opacity=".86"></circle>
                    <circle cx="12" cy="21.5" r="1.5"></circle>
                  </g>
                </svg>
              )}
            </span>
            {location && <span className="zip-address">{location}</span>}
            {error && <div className="error-div">{error}</div>}
          </label>
        </div>
        {addInputs.map((input, index) => (
          <div key={index} className={`added-input-${index}`}>
            <label>{input.label}</label>
            <input
              type={input.type}
              name={input.fieldName}
              maxLength={155}
              value={dynamicValues[input.fieldName] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
