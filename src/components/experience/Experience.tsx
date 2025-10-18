import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">Software Engineer - Qube Root Analytics International Pvt Ltd</h5>
          <h6 className="card-subtitle mb-2 text-muted">Feb 2023 - Present | Bengaluru</h6>
          <p className="card-text"><b>Projects:</b></p>
          <ul>
            <li><b>Practice Management System:</b> Built responsive UI using React + TypeScript; Node.js backend; real-time updates; improved performance and user engagement.</li>
            <li><b>Proconekt - Foster Care Support Platform:</b> Developed modern responsive web app; integrated role-based features; improved accessibility and cross-device performance.</li>
          </ul>
          <p><b>Roles & Responsibilities:</b></p>
          <ul>
            <li>Design and develop responsive, user-friendly web applications using React.js and TypeScript.</li>
            <li>Implemented dynamic forms enhancing UX.</li>
            <li>Developed and integrated RESTful APIs using Node.js.</li>
            <li>Collaborated with UI/UX designers to translate wireframes into functional interfaces.</li>
            <li>Worked in Agile environment; Git, GitHub, CI/CD.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
