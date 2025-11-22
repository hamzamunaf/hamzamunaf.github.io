import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Blogs from "../containers/blogs/Blogs";
import Top from "../containers/topbutton/Top";
import SEO from "../components/SEO";
import { StyleProvider } from "../contexts/StyleContext";

export default function BlogsPage() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(false);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <SEO
        title="Projects - Hamza Munaf Portfolio"
        description="View my portfolio of projects including ASP.NET MVC applications, React projects, chat bots, and more. Explore my work in software development and Salesforce integration."
        keywords="Hamza Munaf projects, portfolio projects, ASP.NET MVC, React projects, software development, Salesforce integration"
      />
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Blogs />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
}

