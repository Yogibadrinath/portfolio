import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="my-5">
      <h2 className="h3 mb-3">Experience</h2>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">
            Software Engineer - Qube Root Analytics International Pvt Ltd
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Feb 2023 - Present | Bengaluru
          </h6>

          <h6 className="mt-3 fw-bold">Projects:</h6>

          {/* Project 1 */}
          <div className="mb-3">
            <h6 className="fw-bold">Practice Management System (PMS)</h6>
            <p className="mb-1 text-muted">
              <em>Home-Based Treatment Platform</em>
            </p>
            <p>
              A comprehensive web platform designed to assist with home-based
              treatment and reduce the need for out-of-home placements by
              integrating services across child welfare, mental health, and
              juvenile justice systems.
            </p>
            <ul>
              <li>
                Built and maintained a responsive UI using React.js + TypeScript
                with Node.js backend integration.
              </li>
              <li>
                Implemented dynamic form rendering and real-time updates for
                better workflow and user experience.
              </li>
              <li>
                Improved system stability and user engagement through
                performance optimization.
              </li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="mb-3">
            <h6 className="fw-bold">Proconekt – Foster Care Support Platform</h6>
            <p className="mb-1 text-muted">
              <em>Foster and Kinship Family Support Application</em>
            </p>
            <p>
              A modern, fully responsive web application designed to support
              foster and kinship families through accessible tools, training
              resources, and a centralized online community.
            </p>
            <ul>
              <li>
                Developed a user-centric and mobile-friendly UI with React.js +
                TypeScript.
              </li>
              <li>
                Integrated role-based features for caregivers and administrators
                with Node.js RESTful APIs.
              </li>
              <li>
                Enhanced performance, accessibility, and responsiveness across
                devices.
              </li>
            </ul>
          </div>

          {/* Roles & Responsibilities */}
          <h6 className="mt-4 fw-bold">Roles & Responsibilities:</h6>
          <ul>
            <li>
              Designed and developed responsive, user-friendly web applications
              using React.js and TypeScript.
            </li>
            <li>
              Implemented interactive dynamic forms and real-time data features.
            </li>
            <li>
              Developed and integrated RESTful APIs using Node.js and Express.
            </li>
            <li>
              Collaborated with designers and backend teams following Agile
              methodology.
            </li>
            <li>
              Managed version control with Git/GitHub and contributed to CI/CD
              pipelines.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
