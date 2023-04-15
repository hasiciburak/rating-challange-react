import { useEffect } from "react";
import { ReactComponent as ThankYouImg } from "../../assets/illustration-thank-you.svg";
import "./index.scss";

const ThankYou = ({ score, setScore }) => {
  useEffect(() => {
    document.title = "Thank You - Frontend Mentor";
  }, []);
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you-card-container">
        <div className="row illustration-row">
          <ThankYouImg />
        </div>
        <div className="row thank-you-header">
          <h2>Thank You!</h2>
        </div>
        <div className="row given-score">
          <div className="given-score-detail">
            <p>{score} out of 5</p>
          </div>
        </div>
        <div className="row thank-you-description">
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
