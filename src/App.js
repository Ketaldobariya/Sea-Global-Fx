import React, { useState, useEffect } from "react";
import './App.css';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Header from './components/header';
import Whatsapp from './components/whatsapp';
import Routways from "./components/routways";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "container-dark" : "container-light"}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routways />
      <Whatsapp />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
