import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./containers/Main";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
