import { useEffect } from "react";
import "./OpenQuestion.css";

type OpenQuestionProps = {
  updateFields: (fields: Partial<{ [key: string]: string }>) => void;
  btnsDisplay: (show: boolean) => void;
  question: string;
  fieldName: string;
  value: string;
  isZipCode?: boolean;
};

export function OpenQuestion({
  updateFields,
  btnsDisplay,
  question,
  fieldName,
  value,
  isZipCode,
  autoNext,
}: OpenQuestionProps) {
  useEffect(() => {
    btnsDisplay(!autoNext);
  }, [btnsDisplay]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateFields({ [fieldName]: e.target.value });
  }
  return (
    <div className="form-section">
      <h4 className="form-title">{question}</h4>
      <div className="open-question-div">
        <label className="open-question">
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
        </label>
      </div>
    </div>
  );
}
