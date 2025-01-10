import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Usuario from './Usuario';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [showUsuario, setShowUsuario] = useState(false);
  const navigate = useNavigate();

  const toggleUsuario = () => {
    setShowUsuario(!showUsuario);
  };

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={user.photoURL || 'https://via.placeholder.com/50'}
          alt="User Avatar"
          className="user-avatar"
          onClick={toggleUsuario}
        />
        <span className="user-name">{user.displayName}</span>
      </div>
      <div className="navbar-right">
        <img
          src="../public/Bell.png"
          alt="Notifications"
          className="notification-bell"
          onClick={goToDashboard}
        />
      </div>
      {showUsuario && <Usuario />}
    </nav>
  );
};

export default Navbar;

