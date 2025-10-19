import React from 'react';

const Skills: React.FC = () => {
  const frontend = ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS', 'Bootstrap'];
  const backend = ['Node.js', 'Express.js', 'REST APIs'];
  const tools = ['Git', 'GitHub', 'VS Code', 'CI/CD'];

  return (
    <section id="skills" className="my-5 px-3 px-md-0">
      <h2 className="h3 mb-3">Technical Skills</h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Frontend</h5>
          <ul className="list-group list-group-flush">
            {frontend.map(skill => <li key={skill} className="list-group-item">{skill}</li>)}
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Backend</h5>
          <ul className="list-group list-group-flush">
            {backend.map(skill => <li key={skill} className="list-group-item">{skill}</li>)}
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Tools</h5>
          <ul className="list-group list-group-flush">
            {tools.map(tool => <li key={tool} className="list-group-item">{tool}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
