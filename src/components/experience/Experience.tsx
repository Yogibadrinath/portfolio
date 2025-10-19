import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="my-5 px-3 px-md-0">
      <h2 className="h3 mb-3">Experience</h2>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <h5 className="card-title">Software Engineer - Qube Root Analytics International Pvt Ltd</h5>
          <h6 className="card-subtitle mb-2 text-muted">Feb 2023 - Present | Bengaluru</h6>
          
          <h6 className="mt-3 fw-bold">Projects:</h6>
          <ul>
            <li><b>Practice Management System:</b> React + TS frontend, Node.js backend, dynamic forms, real-time updates.</li>
            <li><b>Proconekt:</b> Modern responsive web app, role-based features, accessibility, performance improvements.</li>
          </ul>

          <h6 className="mt-4 fw-bold">Roles & Responsibilities:</h6>
          <ul>
            <li>Design and develop responsive, user-friendly web apps with React + TypeScript.</li>
            <li>Implement dynamic forms and real-time data features.</li>
            <li>Develop RESTful APIs with Node.js & Express.</li>
            <li>Collaborate with UI/UX designers and backend teams in Agile.</li>
            <li>Version control with Git/GitHub; CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
