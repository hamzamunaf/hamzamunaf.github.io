import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { Cloudy } from "../../components/trailheadMascots/TrailheadMascots";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const currentYear = new Date().getFullYear();
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="footer-div" style={{ position: 'relative' }}>
        <Cloudy className="mascot-decoration center" style={{ opacity: 0.4, transform: 'translate(-50%, -50%) scale(0.8)' }} />
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {currentYear} Hamza Munaf. All rights reserved.
        </p>
      </div>
    </Fade>
  );
}
