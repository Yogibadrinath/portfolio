import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="my-5">
      <h2 className="h3 mb-3">Experience</h2>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">Software Engineer - Qube Root Analytics International Pvt Ltd</h5>
          <h6 className="card-subtitle mb-2 text-muted">Feb 2023 - Present | Bengaluru</h6>
          <p><b>Projects:</b></p>
          <ul>
            <li><b>Practice Management System:</b> Built responsive UI with React + TS; Node.js backend; real-time updates; improved user engagement.</li>
            <li><b>Proconekt:</b> Developed modern web app; integrated role-based features; improved accessibility and performance.</li>
          </ul>
          <p><b>Roles & Responsibilities:</b></p>
          <ul>
            <li>Develop responsive, user-friendly web applications with React + TypeScript.</li>
            <li>Implemented dynamic forms enhancing UX.</li>
            <li>Developed and integrated RESTful APIs using Node.js.</li>
            <li>Worked in Agile methodology; Git/GitHub; CI/CD.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
