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
    this.state = {
      isDark: false,
    };
  }

  componentDidMount() {
    // Title is now handled by SEO component
  }
  changeTheme = () => {
    // Dark mode disabled - always keep light mode
    this.setState({ isDark: false });
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
