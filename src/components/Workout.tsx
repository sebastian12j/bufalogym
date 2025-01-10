import React from 'react';
import '../styles/Workout.css';

const Workout: React.FC = () => {
  return (
    <div className="screen-container">
      <div className="content">
        <img src="../public/logoworkout.png" alt="Workout" className="image" />
        <h1 className="title">Workout</h1>
        <p className="description">Start training with us and build muscles or lose weight.</p>
        <button className="next-button" onClick={() => window.location.href = '/discipline'}>Next</button>
      </div>
    </div>
  );
};

export default Workout;
