import React, { useContext } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import programmer from "../../assets/images/programmer.svg";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={`${isDark ? "dark-mode " : ""}main skills-section`} id="skills">
      <div className="skills-main-div">
        <Fade direction="up" duration={1000} triggerOnce>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div className="software-skills-wrapper">
              <SoftwareSkill />
            </div>
            <div className="skills-list">
              {skillsSection.skills.map((skill, index) => {
                return (
                  <p
                    key={index}
                    className={
                      isDark
                        ? "dark-mode skills-text-item"
                        : "skills-text-item"
                    }
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade direction="up" duration={1000} triggerOnce>
          <div className="skills-image-div">
            <img
              alt="Programmer"
              src={programmer}
              className="skills-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            ></img>
          </div>
        </Fade>
      </div>
    </div>
  );
}
