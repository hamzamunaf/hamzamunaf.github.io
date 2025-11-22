import React from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import skillImage from "../../assets/images/skill.svg";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade direction="up" duration={1000} triggerOnce>
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="skills-image">
                    <img alt="Skills" src={skillImage} className="skill-progress-image" />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
