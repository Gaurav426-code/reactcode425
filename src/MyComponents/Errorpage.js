import React from "react";
import "./Errorpage.css";

const HighTechErrorPage = () => {
  return (
    <div className="high-tech-error">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you're looking for doesn't exist. Please check the URL or go back to the homepage.
        </p>
        <button
          className="error-button"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
      <div className="glow-circle"></div>
      <div className="glow-line"></div>
    </div>
  );
};

export default HighTechErrorPage;
