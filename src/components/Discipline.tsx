import React from 'react';
import '../styles/Discipline.css';

const Discipline: React.FC = () => {
  return (
    <div className="screen-container">
      <div className="content">
        
        <h1 className="title">Discipline</h1>
        <p className="description">Develop discipline in yourself, train every day.</p>
        <button className="next-button" onClick={() => window.location.href = '/character'}>Next</button>
      </div>
    </div>
  );
};

export default Discipline;
