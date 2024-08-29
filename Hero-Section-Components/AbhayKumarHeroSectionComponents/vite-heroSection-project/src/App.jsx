import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // adjust the path as necessary
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/themeBtn" element={<ThemeBtn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
