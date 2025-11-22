import React from "react";
import "./TrailheadMascots.css";

export const Astro = ({ className = "" }) => (
  <div className={`trailhead-mascot astro ${className}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Astronaut helmet */}
      <circle cx="50" cy="45" r="25" fill="#00A1E0" stroke="#1798C1" strokeWidth="2"/>
      <circle cx="50" cy="45" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
      {/* Visor */}
      <ellipse cx="50" cy="50" rx="20" ry="15" fill="#1798C1" opacity="0.6"/>
      {/* Body */}
      <rect x="40" y="65" width="20" height="25" rx="5" fill="#00A1E0"/>
      {/* Arms */}
      <rect x="25" y="70" width="8" height="20" rx="4" fill="#00A1E0"/>
      <rect x="67" y="70" width="8" height="20" rx="4" fill="#00A1E0"/>
      {/* Legs */}
      <rect x="42" y="88" width="6" height="12" rx="3" fill="#00A1E0"/>
      <rect x="52" y="88" width="6" height="12" rx="3" fill="#00A1E0"/>
    </svg>
  </div>
);

export const Codey = ({ className = "" }) => (
  <div className={`trailhead-mascot codey ${className}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Bear head */}
      <circle cx="50" cy="40" r="22" fill="#00A1E0"/>
      {/* Ears */}
      <circle cx="35" cy="25" r="8" fill="#00A1E0"/>
      <circle cx="65" cy="25" r="8" fill="#00A1E0"/>
      <circle cx="35" cy="25" r="5" fill="#1798C1"/>
      <circle cx="65" cy="25" r="5" fill="#1798C1"/>
      {/* Eyes */}
      <circle cx="43" cy="38" r="3" fill="#FFFFFF"/>
      <circle cx="57" cy="38" r="3" fill="#FFFFFF"/>
      <circle cx="43" cy="38" r="1.5" fill="#181818"/>
      <circle cx="57" cy="38" r="1.5" fill="#181818"/>
      {/* Nose */}
      <ellipse cx="50" cy="45" rx="2" ry="3" fill="#181818"/>
      {/* Mouth */}
      <path d="M 50 48 Q 45 52 40 50" stroke="#181818" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M 50 48 Q 55 52 60 50" stroke="#181818" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="50" cy="70" rx="18" ry="20" fill="#00A1E0"/>
      {/* Code symbol */}
      <text x="50" y="75" fontSize="12" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace">{}</text>
    </svg>
  </div>
);

export const Cloudy = ({ className = "" }) => (
  <div className={`trailhead-mascot cloudy ${className}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <path d="M 30 50 Q 20 50 20 40 Q 20 30 30 30 Q 32 20 42 20 Q 50 20 55 25 Q 65 22 70 30 Q 80 30 80 40 Q 80 50 70 50 L 30 50 Z" fill="#00A1E0"/>
      {/* Lightning */}
      <path d="M 50 35 L 45 50 L 52 50 L 48 65 L 55 50 L 50 50 Z" fill="#FFFFFF"/>
    </svg>
  </div>
);

export const Einstein = ({ className = "" }) => (
  <div className={`trailhead-mascot einstein ${className}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="50" cy="40" r="20" fill="#00A1E0"/>
      {/* Hair */}
      <path d="M 30 25 Q 25 15 20 20 Q 25 25 30 30" stroke="#00A1E0" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 50 20 Q 50 10 50 15" stroke="#00A1E0" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 70 25 Q 75 15 80 20 Q 75 25 70 30" stroke="#00A1E0" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Eyes */}
      <circle cx="43" cy="38" r="2" fill="#FFFFFF"/>
      <circle cx="57" cy="38" r="2" fill="#FFFFFF"/>
      {/* Mustache */}
      <path d="M 45 48 Q 50 50 55 48" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Body */}
      <rect x="40" y="58" width="20" height="30" rx="3" fill="#1798C1"/>
      {/* E=mc² symbol */}
      <text x="50" y="75" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontFamily="serif">E=mc²</text>
    </svg>
  </div>
);

export const Blaze = ({ className = "" }) => (
  <div className={`trailhead-mascot blaze ${className}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Flame shape */}
      <path d="M 50 20 Q 40 30 45 40 Q 35 45 40 55 Q 30 60 50 80 Q 70 60 60 55 Q 65 45 55 40 Q 60 30 50 20 Z" fill="#FF6B35"/>
      <path d="M 50 25 Q 43 32 47 40 Q 40 44 44 52 Q 38 56 50 72 Q 62 56 56 52 Q 60 44 53 40 Q 57 32 50 25 Z" fill="#FF8C5A"/>
      {/* Inner flame */}
      <path d="M 50 30 Q 45 35 48 42 Q 43 45 46 50 Q 42 53 50 65 Q 58 53 54 50 Q 57 45 52 42 Q 55 35 50 30 Z" fill="#FFFFFF" opacity="0.6"/>
    </svg>
  </div>
);

