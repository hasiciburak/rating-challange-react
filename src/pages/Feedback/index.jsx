import React, { useEffect, useState } from "react";
import "./index.scss";
import RatingButton from "../../components/RatingButton";
import SubmitButton from "../../components/SubmitButton";

const Feedback = ({ score, setScore }) => {
  useEffect(() => {
    document.title = "Feedback - Frontend Mentor";
  }, []);

  // FOR HOVERING EFFECT

  const [hovered, setHovered] = useState(null);
  return (
    <div className="feedback-page-wrapper">
      <div className="feedback-card-container">
        <div className="star-row">
          <div className="star-circle"></div>
        </div>
        <div className="row feeeback-header">
          <h1>How did we do?</h1>
        </div>
        <div className="row feedback-descipriton">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="feedback-page-header-row"></div>
        <div className="row ratings">
          <RatingButton
            score={score}
            setScore={setScore}
            value={1}
            classes={`${score === 1 && "selected"}`}
          />
          <RatingButton
            score={score}
            setScore={setScore}
            value={2}
            classes={`${score === 2 && "selected"}`}
          />
          <RatingButton
            score={score}
            setScore={setScore}
            value={3}
            classes={`${score === 3 && "selected"}`}
          />
          <RatingButton
            score={score}
            setScore={setScore}
            value={4}
            classes={`${score === 4 && "selected"}`}
          />
          <RatingButton
            score={score}
            setScore={setScore}
            value={5}
            classes={`${score === 5 && "selected"}`}
          />
        </div>
        <div className="submit-row">
          <SubmitButton score={score} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
