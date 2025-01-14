import React from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';

const Activity: React.FC = () => {
  const location = useLocation();
  // Asegúrate de que la propiedad 'activity' exista en el estado
  const { activity = [] } = location.state || {};

  // Mapea los datos para la gráfica
  const data = activity.map((actividad: any) => ({
    name: actividad.nombre,
    ...actividad.ejercicios.reduce((acc: any, ejercicio: any) => {
      acc[ejercicio.nombre] = ejercicio.tiempo;
      return acc;
    }, {}),
  }));

  // Si no hay actividades, muestra un mensaje
  if (!activity.length) {
    return <p>No hay actividades guardadas.</p>;
  }

  return (
    <div>
      <Navbar />
      <h2>Historial de Actividades</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Mapea los ejercicios dinámicamente */}
          {activity[0].ejercicios.map((ejercicio: any, index: number) => (
            <Line
              type="monotone"
              dataKey={ejercicio.nombre}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              key={index}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;











