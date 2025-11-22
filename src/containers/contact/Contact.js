import React, { useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";
import contactMail from "../../assets/images/contactMail.webp";
import contactMailDark from "../../assets/images/contactMailDark.svg";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a 
                className="contact-linkedin-link"
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                Connect with me on LinkedIn
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img
              alt="Contact"
              src={isDark ? contactMailDark : contactMail}
              className="contact-image"
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
