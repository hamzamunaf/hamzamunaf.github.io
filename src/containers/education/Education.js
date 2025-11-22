import React, { useContext } from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Einstein, Astro } from "../../components/trailheadMascots/TrailheadMascots";

export default function Education() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="main" id="education">
        <Einstein className="mascot-decoration top-right" />
        <Astro className="mascot-decoration bottom-left" />
        <div className="education-main-div">
          <div className="education-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading education-heading"
                  : "heading education-heading"
              }
            >
              Education
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle education-subtitle"
                  : "subTitle education-subtitle"
              }
            >
              Academic Background and Qualifications
            </p>
          </div>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
