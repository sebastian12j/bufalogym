import React from 'react';
import '../styles/Discipline.css';
import { useNavigate } from 'react-router-dom';

const Discipline: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="content">
        <h1 className="title">Discipline</h1>
        <p className="description">Develop discipline in yourself, train every day.</p>
        <button className="next-button" onClick={() => navigate('/character')}>Next</button>
      </div>
    </div>
  );
};

export default Discipline;

