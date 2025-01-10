import React from 'react';
import '../styles/Character.css';

const Character: React.FC = () => {
  return (
    <div className="screen-container">
      <div className="content">
        <img src="../public/logoworkout.png" alt="Character" className="image" />
        <h1 className="title">Character</h1>
        <p className="description">Cultivate in you an iron character for training.</p>
        <button className="registration-button" onClick={() => window.location.href = '/signin'}>Registration</button>
      </div>
    </div>
  );
};

export default Character;
