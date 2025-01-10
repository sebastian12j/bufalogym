import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InformacionDeportiva: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return <p>No hay información disponible.</p>;
  }

  const { nombre, descripcion, duracion, completedSets, exerciseTimers, ejercicios } = data;

  const handleSave = () => {
    const actividad = {
      nombre,
      descripcion,
      duracion,
      ejercicios: ejercicios.map((ejercicio: any) => ({
        nombre: ejercicio.nombre,
        tiempo: exerciseTimers[ejercicio.nombre] || 0,
        setsCompletados: completedSets[ejercicio.nombre]?.filter(Boolean).length || 0,
      })),
    };

    console.log("Actividad a guardar:", actividad); // Debug

    // Redirige directamente a "Activity" y pasa la actividad
    navigate('/activity', { state: { activity: [actividad] } });
  };

  return (
    <div>
      <h2>Resumen de la Rutina: {nombre}</h2>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Duración Estimada:</strong> {duracion}</p>
      <h3>Ejercicios Completados:</h3>
      <ul>
        {ejercicios.map((ejercicio: any) => (
          <li key={ejercicio.id}>
            <strong>{ejercicio.nombre}</strong><br />
            Tiempo: {exerciseTimers[ejercicio.nombre] || 0}s<br />
            Sets completados: {completedSets[ejercicio.nombre]?.filter(Boolean).length || 0}/3
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>SAVE</button>
    </div>
  );
};

export default InformacionDeportiva;




