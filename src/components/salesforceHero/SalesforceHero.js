import React from "react";
import "./SalesforceHero.css";
import { Astro, Codey, Cloudy, Einstein, Blaze } from "../trailheadMascots/TrailheadMascots";

export default function SalesforceHero() {
  return (
    <div className="salesforce-hero-container">
      {/* Background cloud elements */}
      <div className="hero-clouds">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Salesforce cloud logo in center */}
      <div className="hero-salesforce-cloud">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="heroCloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00A1E0" />
              <stop offset="50%" stopColor="#1798C1" />
              <stop offset="100%" stopColor="#00A1E0" />
            </linearGradient>
          </defs>
          <path
            d="M50 120 Q30 120 30 100 Q30 80 50 80 Q55 60 75 60 Q85 50 100 50 Q120 50 135 60 Q155 60 160 80 Q180 80 180 100 Q180 120 160 120 Z"
            fill="url(#heroCloudGradient)"
            className="hero-cloud-path"
          />
          <path
            d="M100 70 L90 100 L105 100 L95 130 L110 100 L100 100 Z"
            fill="#FFFFFF"
            className="hero-lightning"
          />
        </svg>
      </div>

      {/* Mascots orbiting around */}
      <div className="hero-mascot hero-astro">
        <Astro />
      </div>
      <div className="hero-mascot hero-codey">
        <Codey />
      </div>
      <div className="hero-mascot hero-cloudy">
        <Cloudy />
      </div>
      <div className="hero-mascot hero-einstein">
        <Einstein />
      </div>
      <div className="hero-mascot hero-blaze">
        <Blaze />
      </div>

      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

