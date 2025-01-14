import React from 'react';
import '../styles/Workout.css';
import { useNavigate } from 'react-router-dom';

const Workout: React.FC = () => {const navigate = useNavigate();
  return (
    <div className="screen-container">
      <div className="content">
        <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/logoworkout_dwad6h.png" alt="Workout" className="image" />
        <h1 className="title">Workout</h1>
        <p className="description">Start training with us and build muscles or lose weight.</p>
        <button className="next-button" onClick={() => navigate('/discipline')}>Next</button>
      </div>
    </div>
  );
};

export default Workout;
