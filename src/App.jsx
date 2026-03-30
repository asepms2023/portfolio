import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [language, setLanguage] = useState("ENG");
  const [theme, setTheme] = useState("dark");
  const [fading, setFading] = useState(false);

  const savedSectionRef = useRef(null);

  // HANDLE LANGUAGE CHANGE (SMOOTH + TETAP DI SECTION)
  const handleLanguageChange = (lang) => {

    const sections = [
      "home",
      "about",
      "techstack",
      "experience",
      "certificates",
      "projects",
      "contact",
    ];

    let currentSection = "home";

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) {
        currentSection = id;
      }
    }

    savedSectionRef.current = currentSection;

    setFading(true);
    setLanguage(lang);
  };

  // SCROLL BALIK KE SECTION SETELAH GANTI BAHASA
  useEffect(() => {

    if (!savedSectionRef.current) return;

    const sectionId = savedSectionRef.current;

    const timer = setTimeout(() => {

      const el = document.getElementById(sectionId);

      if (el) {
        const navHeight = 80;

        window.scrollTo({
          top: el.offsetTop - navHeight,
          behavior: "instant",
        });
      }

      savedSectionRef.current = null;
      setFading(false);

    }, 120);

    return () => clearTimeout(timer);

  }, [language]);

  return (
    <div
      className={`
        ${theme === "light" ? "light-mode" : ""}
        ${fading ? "lang-fade" : ""}
      `}
    >

      <Navbar
        language={language}
        setLanguage={handleLanguageChange}
        theme={theme}
        setTheme={setTheme}
      />

      <Hero language={language} />
      <About language={language} />
      <TechStack language={language} />

      <Experience language={language} />
      <Certificates language={language} />

      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />

    </div>
  );
}

export default App;