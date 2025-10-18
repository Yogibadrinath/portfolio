import React from "react";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Advanced Task & Project Management System",
    description: "React + Node.js + SQL Server project to manage tasks, workflows, and team collaboration.",
    link: "https://github.com/YOUR_USERNAME/your-project",
  },
  {
    name: "Portfolio Website",
    description: "This personal portfolio built with React + TypeScript + Bootstrap 5.",
    link: "https://github.com/YOUR_USERNAME/portfolio",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-5">
      <h2 className="h3 mb-3">Projects</h2>
      <div className="row g-3">
        {projects.map((project) => (
          <div key={project.name} className="col-12 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
