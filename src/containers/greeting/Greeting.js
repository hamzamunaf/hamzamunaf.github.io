import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import SalesforceHero from "../../components/salesforceHero/SalesforceHero";
import { Astro, Codey } from "../../components/trailheadMascots/TrailheadMascots";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="greet-main" id="greeting">
        <Astro className="mascot-decoration top-left" />
        <Codey className="mascot-decoration top-right" />
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
                <Link to="/blogs" className="main-button" style={{ textDecoration: 'none' }}>
                  View Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <SalesforceHero />
          </div>
        </div>
      </div>
    </Fade>
  );
}
