import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import BlogsPage from "./pages/BlogsPage";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide preloader when page is fully loaded
    const handleLoad = () => {
      // Start fade out animation
      setFadeOut(true);
      // Remove from DOM after fade out completes
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // Minimum display time for preloader
    const minDisplayTime = setTimeout(() => {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    }, 1500);

    // Fallback timeout
    const fallbackTimer = setTimeout(() => {
      handleLoad();
    }, 3000);

    return () => {
      clearTimeout(minDisplayTime);
      clearTimeout(fallbackTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="App">
      {loading && <Preloader fadeOut={fadeOut} />}
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
