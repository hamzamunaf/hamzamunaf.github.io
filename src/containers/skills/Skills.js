import React, { useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import programmer from "../../assets/images/programmer.svg";
import { Codey, Einstein } from "../../components/trailheadMascots/TrailheadMascots";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className={`${isDark ? "dark-mode " : ""}main skills-section`} id="skills">
        <Codey className="mascot-decoration top-right" />
        <Einstein className="mascot-decoration bottom-left" />
        <div className="skills-main-div">
          <div className="skills-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading skills-heading"
                  : "heading skills-heading"
              }
            >
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-subtitle"
                  : "subTitle skills-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
          </div>
          
          <div className="skills-content-wrapper">
            <Fade direction="up" duration={1000} triggerOnce>
              <div className="software-skills-section">
                <h3 className={isDark ? "dark-mode skills-section-title" : "skills-section-title"}>
                  Technologies & Tools
                </h3>
                <SoftwareSkill />
              </div>
            </Fade>
            
            <Fade direction="up" duration={1000} triggerOnce>
              <div className="skills-description-section">
                <h3 className={isDark ? "dark-mode skills-section-title" : "skills-section-title"}>
                  Core Competencies
                </h3>
                <div className="skills-list">
                  {skillsSection.skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          isDark
                            ? "dark-mode skills-item-card"
                            : "skills-item-card"
                        }
                      >
                        <span className="skills-item-icon">✓</span>
                        <span className="skills-item-text">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
