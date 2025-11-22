import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import Top from "./topbutton/Top";
import SEO from "../components/SEO";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";
import Profile from "./profile/Profile";
import { educationInfo } from "../portfolio";

export default class Main extends Component {
  constructor(props) {
    super(props);
    // Load theme preference from localStorage, default to light mode
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark'; // Only use dark if explicitly set
    
    this.state = {
      isDark: isDark,
    };
  }

  componentDidMount() {
    // Apply theme to body
    if (this.state.isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  componentDidUpdate() {
    // Update body class when theme changes
    if (this.state.isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  changeTheme = () => {
    this.setState((prevState) => {
      const newIsDark = !prevState.isDark;
      // Save theme preference to localStorage
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return { isDark: newIsDark };
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <SEO
          title="Hamza Munaf - Salesforce Integration & IAM Architect Portfolio"
          description="Salesforce Integration and IAM Architect with 3 years of consulting experience at Deloitte. Specializing in designing and implementing secure, scalable integrations between Salesforce and enterprise systems."
          keywords="Hamza Munaf, Salesforce, Integration Architect, IAM Architect, Deloitte, Computer Science, Oregon State University, Portfolio"
        />
        <StyleProvider
          value={{ isDark: this.state.isDark, changeTheme: this.changeTheme }}
        >
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
           <StartupProject />
          <Achievement />
          <Profile />
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
