import React from 'react';
import '../styles/Character.css';
import { useNavigate } from 'react-router-dom';

const Character: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="content">
        <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/logocharacter_srkark.png" alt="Character" className="image" />
        <h1 className="title">Character</h1>
        <p className="description">Cultivate in you an iron character for training.</p>
        <button className="registration-button" onClick={() => navigate('/signin')}>Registration</button>
      </div>
    </div>
  );
};

export default Character;

