import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="container py-4">
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
