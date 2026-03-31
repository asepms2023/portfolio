import React, { useState, useEffect } from "react";
import { navbarData } from "../data/navbarData";

function Navbar({ language, setLanguage, theme, setTheme }) {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navbar = navbarData;

  // 🔥 HANDLE AUTO CLOSE MENU
  const handleNavClick = () => {
    setIsOpen(false);
  };

  // =========================
  // SCROLL ACTIVE SECTION
  // =========================
  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "techstack",
        "experience",
        "certificates",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      sections.forEach((sectionId) => {

        const element = document.getElementById(sectionId);

        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }

      });

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav>

      {/* LOGO */}
      <div className="logo">
        Portfolio<span>.</span>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* MENU */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>

        <li>
          <a 
            href="#home" 
            className={activeSection === "home" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.home.id : navbar.menu.home.en}
          </a>
        </li>

        <li>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.about.id : navbar.menu.about.en}
          </a>
        </li>

        <li>
          <a 
            href="#techstack" 
            className={activeSection === "techstack" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.skills.id : navbar.menu.skills.en}
          </a>
        </li>

        <li>
          <a 
            href="#experience" 
            className={activeSection === "experience" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.experience.id : navbar.menu.experience.en}
          </a>
        </li>

        <li>
          <a 
            href="#certificates" 
            className={activeSection === "certificates" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.certificates.id : navbar.menu.certificates.en}
          </a>
        </li>

        <li>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.projects.id : navbar.menu.projects.en}
          </a>
        </li>

        <li>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""}
            onClick={handleNavClick}
          >
            {language === "IND" ? navbar.menu.contact.id : navbar.menu.contact.en}
          </a>
        </li>

        {/* SETTINGS */}
        <li className="nav-settings">

          <button
            className="settings-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ⚙
          </button>

          {menuOpen && (

            <div className="settings-dropdown">

              {/* LANGUAGE */}
              <div className="toggle-row">
                <div className="settings-icon">
                  <img src={navbar.images.language} alt="language" />
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={language === "IND"}
                    onChange={(e) =>
                      setLanguage(e.target.checked ? "IND" : "ENG")
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>

              {/* THEME */}
              <div className="toggle-row">
                <div className="settings-icon">
                  <img src={navbar.images.theme} alt="theme" />
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    checked={theme === "light"}
                    onChange={(e) =>
                      setTheme(e.target.checked ? "light" : "dark")
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>

            </div>

          )}

        </li>

      </ul>

    </nav>
  );
}

export default Navbar;