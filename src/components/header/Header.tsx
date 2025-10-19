import React, { useState, useEffect } from "react";

const sections = ["about", "skills", "projects", "certifications", "experience", "contact"];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
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
    <header className="bg-dark text-white shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 className="h4 mb-0">Yogi Badrinath</h1>

        {/* Desktop Menu */}
        <nav className="d-none d-md-flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`mx-3 text-white text-decoration-none position-relative ${
                activeSection === section ? "fw-bold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <span className="position-absolute start-0 end-0 bottom-0 border-bottom border-primary"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="d-md-none position-relative">
          <button
            className="btn btn-outline-light"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>

          {/* Overlay Mobile Menu */}
          {mobileOpen && (
            <div className="position-absolute top-100 start-0 bg-dark shadow-sm rounded mt-1 zindex-tooltip" style={{width: '200px'}}>
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="d-block px-4 py-2 text-white text-decoration-none"
                  onClick={() => setMobileOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
