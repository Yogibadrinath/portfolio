import React, { useState, useEffect } from "react";

const sections = ["about", "skills", "projects", "experience", "contact"];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + 200;
    let currentSection = sections[0];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && scrollPos >= element.offsetTop) {
        currentSection = section;
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      currentSection = sections[sections.length - 1];
    }

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className="bg-dark text-white py-3 shadow sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Yogi Badrinath</h1>
        <nav>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`mx-2 text-white text-decoration-none ${
                activeSection === section ? "fw-bold border-bottom border-light" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
