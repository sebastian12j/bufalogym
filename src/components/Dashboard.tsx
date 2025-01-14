import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import '../styles/Dashboard.css';
import Navbar from "./Navbar";

import WarmUpCard from './WarmUpCard';

// Importa las imágenes locales
import bicepsImg from '../images/biceps.png';
import tricepsImg from '../images/triceps.png';
import espaldaImg from '../images/espalda.png';
import pechoImg from '../images/pecho.png';
import piernasImg from '../images/piernas.png';

// Define la interfaz para los datos de ejercicio
interface Ejercicio {
  id: string;
  musculo: string;
  nombre: string;
  repeticiones: string;
  tips: string;
}

// Define la interfaz para los datos de rutina
interface Rutina {
  nombre?: string;
  descripcion?: string;
  duracion?: string;
  explicacion?: string;
  videoURL?: string;
  imagen?: string;
  ejercicios?: Ejercicio[] | { [key: string]: Ejercicio };
}

const Dashboard: React.FC = () => {
  const [rutinas, setRutinas] = useState<Rutina[]>([]);
  const [ejercicios, setEjercicios] = useState<Ejercicio[]>([]);
  const [selectedEjercicios, setSelectedEjercicios] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'discover' | 'myworkouts'>('discover');
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [showRoutine, setShowRoutine] = useState(false);
  const [] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gruposSnapshot = await getDocs(collection(db, "gruposmusculares"));
        const fetchedRutinas: Rutina[] = [];

        gruposSnapshot.forEach((doc) => {
          const data = doc.data() as Rutina;
          if (data.nombre) {
            const nombreLower = data.nombre.toLowerCase();
            if (nombreLower.includes("bíceps") || nombreLower.includes("biceps")) {
              data.imagen = bicepsImg;
            } else if (nombreLower.includes("tríceps") || nombreLower.includes("triceps")) {
              data.imagen = tricepsImg;
            } else if (nombreLower.includes("espalda")) {
              data.imagen = espaldaImg;
            } else if (nombreLower.includes("pecho")) {
              data.imagen = pechoImg;
            } else if (nombreLower.includes("piernas")) {
              data.imagen = piernasImg;
            }
            fetchedRutinas.push(data);
          }
        });

        const uniqueRutinas = Array.from(new Set(fetchedRutinas.map(r => r.nombre)))
          .map(name => fetchedRutinas.find(r => r.nombre === name)!);
        setRutinas(uniqueRutinas);

        const ejerciciosSnapshot = await getDocs(collection(db, "ejercicios"));
        const fetchedEjercicios: Ejercicio[] = [];
        const ejercicioIds = new Set();

        ejerciciosSnapshot.forEach((doc) => {
          const ejercicio = doc.data() as Ejercicio;
          if (ejercicio.musculo && !ejercicioIds.has(ejercicio.id)) {
            fetchedEjercicios.push(ejercicio);
            ejercicioIds.add(ejercicio.id);
          } else if (!ejercicio.musculo) {
            console.warn(`El ejercicio ${ejercicio.nombre} no tiene la propiedad 'musculo' definida.`);
          }
        });

        setEjercicios(fetchedEjercicios);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleViewChange = (view: 'discover' | 'myworkouts') => {
    setActiveView(view);
    setSelectedMuscle(null);
  };

  const handleMuscleSelect = (muscle: string) => {
    setSelectedMuscle(selectedMuscle === muscle ? null : muscle);
  };

  const handleCardClick = (rutina: Rutina) => {
    navigate('/rutina', { state: rutina });
  };

  const handleExerciseSelect = (id: string) => {
    setSelectedEjercicios(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleCreateRoutine = () => {
    setShowRoutine(true);
  };

  if (loading) {
    return <p>Cargando información...</p>;
  }

  const selectedExercises = ejercicios.filter(ejercicio => selectedEjercicios.has(ejercicio.id));

  return (
    <div>
      <Navbar />
      <div style={{ padding: '10px', backgroundColor: '#1A237E', height: '27vh' }}>
        <WarmUpCard
          title="Warm up"
          description="Before training, be sure to warm up, give it 5 - 10 minutes"
          imageUrl="https://res.cloudinary.com/dzubhlegp/image/upload/v1732569099/123_w63z97.png"
        />
      </div>
      <div className="subtitle-container">
        <h2 className={activeView === 'discover' ? 'active' : ''} onClick={() => handleViewChange('discover')}>Discover</h2>
        <h2 className={activeView === 'myworkouts' ? 'active' : ''} onClick={() => handleViewChange('myworkouts')}>My Workouts</h2>
      </div>

      {activeView === 'discover' && (
        <div className="card-container">
          {rutinas.map((rutina, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(rutina)}
            >
              {rutina.imagen && <img src={rutina.imagen} alt={rutina.nombre} className="card-image" />}
              <h3>{rutina.nombre}</h3>
              <p>{rutina.descripcion}</p>
              {rutina.duracion && <span className="duration">{rutina.duracion}</span>}
            </div>
          ))}
        </div>
      )}

      {activeView === 'myworkouts' && (
        <div>
          <div className="chip-container">
            {['Biceps', 'Triceps', 'Espalda', 'Pecho', 'Piernas'].map(muscle => (
              <div
                key={muscle}
                className={`chip ${selectedMuscle === muscle ? 'selected' : ''}`}
                onClick={() => handleMuscleSelect(muscle)}
              >
                {muscle}
              </div>
            ))}
          </div>
          <div className="card-container">
            {ejercicios
              .filter(ejercicio => selectedMuscle === null || ejercicio.musculo?.toLowerCase() === selectedMuscle?.toLowerCase())
              .map((ejercicio) => (
                <div key={ejercicio.id} className="card">
                  <input
                    type="checkbox"
                    checked={selectedEjercicios.has(ejercicio.id)}
                    onChange={() => handleExerciseSelect(ejercicio.id)}
                  />
                  <h4>{ejercicio.nombre}</h4>
                  <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
                  <p><strong>Tips:</strong> {ejercicio.tips}</p>
                </div>
              ))}
          </div>
          <button onClick={handleCreateRoutine}>Create Routine</button>
          {showRoutine && (
            <div className="routine-dropdown">
              <h3>Rutina Creada</h3>
              <ul>
                {selectedExercises.map(ejercicio => (
                  <li key={ejercicio.id}>
                    <h4>{ejercicio.nombre}</h4>
                    <p><strong>Repeticiones:</strong> {ejercicio.repeticiones}</p>
                    <p><strong>Tips:</strong> {ejercicio.tips}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;










  









