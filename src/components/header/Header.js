import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const location = useLocation();
  const exp = workExperiences.viewExperiences;
  // Handle HashRouter - get pathname from hash or location
  const getPathname = () => {
    if (location.pathname) return location.pathname;
    const hash = window.location.hash;
    if (hash) return hash.replace('#', '') || '/';
    return '/';
  };
  const pathname = getPathname();
  const isHomePage = pathname === "/" || pathname === "";
  const isBlogsPage = pathname === "/blogs";
  
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <Link to="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {isHomePage && (
            <>
              <li>
                <a href="#skills">Skills</a>
              </li>
              {exp === true && (
                <li>
                  <a href="#experience">Work Experiences</a>
                </li>
              )}
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </>
          )}
          {isBlogsPage && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          <li>
            <Link to="/blogs" className={isBlogsPage ? "active" : ""}>Projects</Link>
          </li>
          {isHomePage && (
            <li>
              <a>
                <ToggleSwitch />
              </a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
