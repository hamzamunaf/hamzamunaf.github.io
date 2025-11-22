import React, { useContext } from "react";
import "./Progress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import skillImage from "../../assets/images/skill.svg";
import StyleContext from "../../contexts/StyleContext";
import { Codey, Blaze } from "../../components/trailheadMascots/TrailheadMascots";

export default function StackProgress() {
    const { isDark } = useContext(StyleContext);
    if(techStack.viewSkillBars){
        return (
            <Fade direction="up" duration={1000} triggerOnce>
            <div className="main" id="proficiency">
                <Codey className="mascot-decoration top-left" />
                <Blaze className="mascot-decoration bottom-right" />
                <div className="proficiency-main-div">
                    <div className="proficiency-header">
                        <h1
                            className={
                                isDark
                                    ? "dark-mode heading proficiency-heading"
                                    : "heading proficiency-heading"
                            }
                        >
                            Proficiency
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle proficiency-subtitle"
                                    : "subTitle proficiency-subtitle"
                            }
                        >
                            Technical Skills and Expertise Levels
                        </p>
                    </div>
                    <div className="skills-container">
                        <div className="skills-bar">
                            {techStack.experience.map((exp, index) => {
                                const progressStyle = {
                                    width: exp.progressPercentage
                                };
                                return (
                                <div key={index} className="skill">
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
                </div>
            </div>
            </Fade>
        );
    }
    return null;
}
