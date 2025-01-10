import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Tupeso.css';

const Tupeso: React.FC = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && height !== null) {
      setStep(2); // Pasar al siguiente paso
    } else if (step === 2 && weight !== null) {
      // Guardar la información y redirigir a otra página o realizar otra acción
      console.log('Altura:', height, 'Peso:', weight);
      navigate('/Dashboard'); // Redirigir a un dashboard u otra página después de guardar
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
  };

  const handleWeightChange = (value: number) => {
    setWeight(value);
  };

  return (
    <div className="tupeso-container">
      {step === 1 && (
        <div className="step">
          <h1>Selecciona tu altura</h1>
          <input
            type="range"
            min="100"
            max="250"
            step="1"
            value={height || 175}
            onChange={(e) => handleHeightChange(Number(e.target.value))}
          />
          <p>Altura: {height || 175} cm</p>
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <h1>Selecciona tu peso</h1>
          <input
            type="range"
            min="30"
            max="200"
            step="1"
            value={weight || 70}
            onChange={(e) => handleWeightChange(Number(e.target.value))}
          />
          <p>Peso: {weight || 70} kg</p>
        </div>
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Tupeso;
