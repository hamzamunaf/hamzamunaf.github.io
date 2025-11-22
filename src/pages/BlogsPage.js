import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Blogs from "../containers/blogs/Blogs";
import Top from "../containers/topbutton/Top";
import SEO from "../components/SEO";
import { StyleProvider } from "../contexts/StyleContext";

export default function BlogsPage() {
  // Load theme preference from localStorage, default to light mode
  const savedTheme = localStorage.getItem('theme');
  const initialIsDark = savedTheme === 'dark'; // Only use dark if explicitly set
  
  const [isDark, setIsDark] = useState(initialIsDark);

  useEffect(() => {
    // Apply theme to body
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      // Save theme preference to localStorage
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      return newIsDark;
    });
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

