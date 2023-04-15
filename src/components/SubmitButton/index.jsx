import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const SubmitButton = ({ score }) => {
  const navigate = useNavigate();
  return (
    <button
      className="submit-btn"
      onClick={() => {
        score ??
          alert(
            "You did not select any score, please select adn click submit button!"
          );
        score !== null && navigate("/thank-you");
      }}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
