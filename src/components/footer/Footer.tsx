import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        &copy; {new Date().getFullYear()} Yogi Badrinath.
      </div>
    </footer>
  );
};

export default Footer;
