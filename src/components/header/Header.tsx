import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white py-3 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Yogi Badrinath</h1>
        <nav>
          <a href="#about" className="text-white mx-2">About</a>
          <a href="#skills" className="text-white mx-2">Skills</a>
          <a href="#projects" className="text-white mx-2">Projects</a>
          <a href="#experience" className="text-white mx-2">Experience</a>
          <a href="#contact" className="text-white mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
