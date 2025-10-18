import React from 'react';

const Skills: React.FC = () => {
  const frontend = ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS', 'Bootstrap'];
  const backend = ['Node.js', 'Express.js', 'REST APIs'];
  const tools = ['Git', 'GitHub', 'Jenkins', 'VS Code', 'CI/CD'];

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Frontend</h5>
          <ul>{frontend.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="col-md-4">
          <h5>Backend</h5>
          <ul>{backend.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </div>
        <div className="col-md-4">
          <h5>Tools</h5>
          <ul>{tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
