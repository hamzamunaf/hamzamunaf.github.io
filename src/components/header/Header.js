import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
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
    // For HashRouter, check hash first
    const hash = window.location.hash;
    if (hash) {
      const hashPath = hash.replace('#', '');
      // If it's a route (starts with /), return it
      if (hashPath.startsWith('/')) {
        return hashPath;
      }
      // Otherwise it might be a section anchor, return '/'
      return '/';
    }
    // Fallback to location.pathname
    if (location.pathname) return location.pathname;
    return '/';
  };
  
  // Helper function to scroll to element
  const scrollToElement = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  // Handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    const currentPath = getPathname();
    if (currentPath !== "/" && currentPath !== "" && currentPath !== "#/") {
      // Navigate to home first
      window.location.hash = "#/";
      // Wait a bit for navigation, then scroll
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    } else {
      // We're already on home page, just scroll
      scrollToElement(sectionId);
    }
  };
  
  const pathname = getPathname();
  const isHomePage = pathname === "/" || pathname === "" || pathname === "#/";
  const isBlogsPage = pathname === "/blogs" || pathname === "#/blogs";
  
  return (
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
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
              </li>
              {exp === true && (
                <li>
                  <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Work Experiences</a>
                </li>
              )}
              <li>
                <a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</a>
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
  );
}
export default Header;
