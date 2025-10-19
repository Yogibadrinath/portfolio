import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="my-5 px-3 px-md-0">
      <h1 className="display-5 mb-3">Yogi Badrinath Adhimulam</h1>
      <p className="lead">
        Software Engineer with 2.9 years of experience in web application development. Skilled in building interactive UIs using React.js, TypeScript, and Node.js for backend services.
      </p>
      <ul className="list-inline">
        <li className="list-inline-item"><b>Email:</b> <a href="mailto:yogibadrinath001@gmail.com">yogibadrinath001@gmail.com</a></li>
        <li className="list-inline-item ms-3"><b>Phone:</b> +91 9600591834</li>
        <li className="list-inline-item ms-3"><b>Portfolio:</b> <a href="https://yogibadrinath.github.io/portfolio/" target="_blank" rel="noreferrer">View</a></li>
      </ul>
    </section>
  );
};

export default About;
