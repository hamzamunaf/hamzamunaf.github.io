import React, { useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const styleContext = useContext(StyleContext);
  const isDark = styleContext?.isDark || false;

  const handleToggle = () => {
    if (styleContext?.changeTheme) {
      styleContext.changeTheme();
    }
  };

  return (
    <div className="theme-toggle-container">
      <label className="switch" title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleToggle}
          aria-label="Toggle dark mode"
        />
        <span className="slider round">
          <span className="slider-icon sun-icon">☀️</span>
          <span className="slider-icon moon-icon">🌙</span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
