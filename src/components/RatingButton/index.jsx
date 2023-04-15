import React from "react";
import "./index.scss";

const RatingButton = ({ score, setScore, value, classes }) => {
  return (
    <button
      onClick={() => {
        setScore(value);
      }}
      className={`rating-btn ${classes}`}
    >
      {value}
    </button>
  );
};

export default RatingButton;
