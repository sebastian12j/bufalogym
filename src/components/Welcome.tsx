import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/workout'); // Redirige a la ruta de la pantalla "Workout"
  };

  return (
    <div className="welcome-container" onClick={handleClick}>
      <div className="welcome-content">
        <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/bufaloLogo_ltfnqu.png" alt="Buffalo Logo" className="logo" />
        <h1 className="app-name">Buffalo</h1>
      </div>
    </div>
  );
};

export default Welcome;


