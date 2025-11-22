import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  
  // Don't render if there are no projects
  if (!bigProjects.projects || bigProjects.projects.length === 0) {
    return null;
  }
  
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project, index) => {
                return (
                  <div
                    key={index}
                    className="saaya-health-div"
                    onClick={() => openProjectInNewWindow(project.link)}
                  >
                    <img alt="Hamza Working" src={project.image} class="imgSection"></img>
                  </div>
                );
              })}
            </div>
            <div className="startup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
