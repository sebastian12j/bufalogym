import React from 'react';
import '../styles/RoutineCard.css';

interface RoutineProps {
  rutina: any; // Define el tipo de datos (puedes usar TypeScript para mejorar esto)
}

const RoutineCard: React.FC<RoutineProps> = ({ rutina }) => {
  const biceps = rutina.biceps; // Accede a los datos del grupo muscular

  return (
    <div className="routine-card">
      <h2>Bíceps</h2>
      <p><strong>Descripción:</strong> {biceps.descripcion}</p>
      <p><strong>Duración:</strong> {biceps.duracion}</p>
      <h3>Ejercicios:</h3>
      <ul>
        {Object.entries(biceps.ejercicios).map(([key, ejercicio]: any) => (
          <li key={key}>
            <h4>{ejercicio.nombre}</h4>
            <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
            <p><strong>Tips:</strong> {ejercicio.tips}</p>
          </li>
        ))}
      </ul>
      <p><strong>Explicación:</strong> {biceps.explicacion}</p>
    </div>
  );
};

export default RoutineCard;

