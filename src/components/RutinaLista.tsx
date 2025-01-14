import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/RutinaLista.css';

interface Ejercicio {
  id: string;
  musculo: string;
  nombre: string;
  repeticiones: string;
  tips: string;
}

interface Rutina {
  nombre?: string;
  descripcion?: string;
  duracion?: string;
  explicacion?: string;
  videoURL?: string;
  imagen?: string;
  ejercicios?: Ejercicio[] | { [key: string]: Ejercicio };
}

// Configuración para React Modal
Modal.setAppElement('#root');

const RutinaLista: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rutina = location.state as Rutina;

  const [modalOpen, setModalOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);
  const [currentSet, setCurrentSet] = useState<number | null>(null);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [completedSets, setCompletedSets] = useState<{ [key: string]: boolean[] }>({});
  const [exerciseTimers, setExerciseTimers] = useState<{ [key: string]: number[] }>({});

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId as NodeJS.Timeout); // Limpiar el intervalo al desmontar el componente
    };
  }, [intervalId]);

  const handleSetCheck = (ejercicio: string, setIndex: number) => {
    setModalOpen(true);
    setCurrentExercise(ejercicio);
    setCurrentSet(setIndex);
    setTimerSeconds(0);

    const newInterval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);
    setIntervalId(newInterval);
  };

  const handleFinishSet = () => {
    if (intervalId) clearInterval(intervalId as NodeJS.Timeout);

    setCompletedSets(prev => {
      const updated = { ...prev };
      if (!updated[currentExercise!]) {
        updated[currentExercise!] = [];
      }
      updated[currentExercise!][currentSet!] = true;
      return updated;
    });

    setExerciseTimers(prev => {
      const updated = { ...prev };
      if (!updated[currentExercise!]) {
        updated[currentExercise!] = [];
      }
      updated[currentExercise!][currentSet!] = timerSeconds;
      return updated;
    });

    setModalOpen(false);
    setTimerSeconds(0);
    setCurrentExercise(null);
    setCurrentSet(null);
  };

  const handleFinishRoutine = () => {
    const rutinaData = {
      ...rutina,
      completedSets,
      exerciseTimers,
    };
    navigate('/informacion-deportiva', { state: rutinaData });
  };

  if (!rutina) {
    return <p>Rutina no encontrada</p>;
  }

  return (
    <div className="rutina-detalle">
      <h2>{rutina.nombre}</h2>
      {rutina.imagen && <img src={rutina.imagen} alt={rutina.nombre} className="rutina-imagen" />}
      <p><strong>Descripción:</strong> {rutina.descripcion}</p>
      <p><strong>Duración:</strong> {rutina.duracion}</p>
      <p><strong>Explicación:</strong> {rutina.explicacion}</p>
      <a href={rutina.videoURL} target="_blank" rel="noopener noreferrer">Ver Video</a>

      <h3>Ejercicios:</h3>
      <ul>
        {rutina.ejercicios && Array.isArray(rutina.ejercicios) ? (
          rutina.ejercicios.map((ejercicio, index) => (
            <li key={index}>
              <strong>{ejercicio.nombre}</strong> - {ejercicio.repeticiones}<br />
              <em>{ejercicio.tips}</em>
              <ul className="sets-list">
                {Array.from({ length: 3 }).map((_, setIndex) => (
                  <li key={setIndex}>
                    <label>
                      <input
                        type="checkbox"
                        checked={completedSets[ejercicio.nombre]?.[setIndex] || false}
                        onChange={() => handleSetCheck(ejercicio.nombre, setIndex)}
                        disabled={completedSets[ejercicio.nombre]?.[setIndex] || false}
                      />
                      Set {setIndex + 1} - {ejercicio.repeticiones}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <p>No hay ejercicios para esta rutina.</p>
        )}
      </ul>
      <button onClick={handleFinishRoutine} className="finish-routine-button">Finalizar Rutina</button>

      {/* Modal para el cronómetro */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Cronómetro"
        className="timer-modal"
        overlayClassName="modal-overlay"
      >
        <div className="timer-container">
          <CircularProgressbar
            value={timerSeconds}
            maxValue={180}
            text={`${Math.floor(timerSeconds / 60)}:${(timerSeconds % 60).toString().padStart(2, '0')}`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: '#00ffff',
              trailColor: '#444',
            })}
          />
          <button onClick={handleFinishSet}>Finalizar Set</button>
        </div>
      </Modal>
    </div>
  );
};

export default RutinaLista;





