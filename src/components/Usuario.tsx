import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setUser } from '../slices/userSlice';
import '../styles/Usuario.css';
import Navbar from './Navbar';


const Usuario: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [newName, setNewName] = useState(user.displayName);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const saveNewName = () => {
    dispatch(setUser({ ...user, displayName: newName }));
    setIsEditing(false);
  };

  const goToActivity = () => {
    // Aquí podrías necesitar obtener el estado de actividad de algún lugar si no es `[]`.
    // Ejemplo: const activity = useSelector((state: RootState) => state.activity);
    navigate('/Activity', { state: { activity: [] } });
  };

  const goToSubscription = () => {
    navigate('/subscription');
  };

  const goToFAQ = () => {
    navigate('/faq');
  };

  return (
    <div className="usuario-container">
      <div className="usuario-header">
        <Navbar />
      </div>

      <ul className="usuario-menu">
        <li>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
              />
              <button onClick={saveNewName}>Save</button>
            </div>
          ) : (
            <span onClick={() => setIsEditing(true)}>Settings</span>
          )}
        </li>
        <li>Notification <input type="checkbox" /></li>
        <li onClick={goToActivity} className="clickable">Activity</li>
        <li onClick={goToSubscription} className="clickable">Subscription type</li>
        <li onClick={goToFAQ} className="clickable">FAQ</li>
      </ul>
    </div>
  );
};

export default Usuario;




