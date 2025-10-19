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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  return (
    <header className="bg-dark text-white shadow-sm sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <h1 className="h4 mb-0">Yogi Badrinath</h1>

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
                <span className="position-absolute start-0 end-0 bottom-0 border-bottom border-3 border-primary" style={{ height: '3px' }}></span>
              )}
            </a>
          ))}
        </nav>

        <div className="d-md-none">
          <button
            className="btn btn-outline-light"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div 
            className="d-md-none position-fixed top-0 start-0 w-100 h-100 bg-black opacity-50"
            style={{ zIndex: 1040 }}
            onClick={() => setMobileOpen(false)}
          ></div>

          <div 
            className="d-md-none bg-dark shadow-lg position-fixed top-0 end-0 h-100 p-3" 
            style={{ 
              width: '75%', 
              maxWidth: '300px',
              zIndex: 1050, 
              overflowY: 'auto' 
            }}
          >
            <div className="text-end mb-3">
                <button
                    className="btn btn-outline-light"
                    onClick={() => setMobileOpen(false)}
                >
                    ✕
                </button>
            </div>

            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="d-block px-4 py-3 text-white text-decoration-none border-bottom border-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;