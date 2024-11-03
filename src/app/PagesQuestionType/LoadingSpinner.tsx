import React from "react";

const LoadingSpinner: React.FC = () => (
  <span className="loading-bar-container">
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
  </span>
);

export default LoadingSpinner;
