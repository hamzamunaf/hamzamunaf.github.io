import React from "react";
import "./Preloader.css";

export default function Preloader({ fadeOut = false }) {
  return (
    <div className={`preloader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Salesforce Cloud Icon */}
        <div className="salesforce-cloud">
          <svg
            viewBox="0 0 200 200"
            className="cloud-svg"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cloud shape */}
            <path
              d="M50 120 Q30 120 30 100 Q30 80 50 80 Q55 60 75 60 Q85 50 100 50 Q120 50 135 60 Q155 60 160 80 Q180 80 180 100 Q180 120 160 120 Z"
              className="cloud-path"
              fill="url(#cloudGradient)"
            />
            {/* Lightning bolt */}
            <path
              d="M100 70 L90 100 L105 100 L95 130 L110 100 L100 100 Z"
              className="lightning-bolt"
              fill="url(#lightningGradient)"
            />
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A1E0" />
                <stop offset="50%" stopColor="#1798C1" />
                <stop offset="100%" stopColor="#00A1E0" />
              </linearGradient>
              <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00A1E0" />
                <stop offset="100%" stopColor="#1798C1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Loading text */}
        <div className="preloader-text">
          <span className="loading-text">Loading</span>
          <span className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

