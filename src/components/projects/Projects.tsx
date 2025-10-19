import React from "react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    name: "Practice Management System (PMS)",
    description: "A web platform designed for home-based treatment and family support services.",
    tech: ["React", "TypeScript", "Node.js", "Express", "SQL Server"],
  },
  {
    name: "Proconekt - Foster Care Support Platform",
    description: "A responsive web app for foster and kinship family support with role-based dashboards.",
    tech: ["React", "TypeScript", "Node.js", "REST API", "Bootstrap"],
  },
  {
    name: "Personal Portfolio Website",
    description: "A modern, responsive portfolio showcasing my projects and skills.",
    tech: ["React", "TypeScript", "Bootstrap"],
    link: "https://yogibadrinath.github.io/portfolio/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="my-5 px-3 px-md-0">
      <h2 className="h3 mb-3">Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.name} className="col-md-6">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text text-muted">{project.description}</p>
                <p className="small mb-3"><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    View Project
                  </a>
                ) : (
                  <button className="btn btn-outline-secondary btn-sm" disabled>
                    Private Project
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
