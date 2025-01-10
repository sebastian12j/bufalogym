import React from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

const Activity: React.FC = () => {
  const location = useLocation();
  const { activity = [] } = location.state || {};

  const data = activity.map((actividad: any) => ({
    name: actividad.nombre,
    ...actividad.ejercicios.reduce((acc: any, ejercicio: any) => {
      acc[ejercicio.nombre] = ejercicio.tiempo;
      return acc;
    }, {}),
  }));

  if (!activity.length) {
    return <p>No hay actividades guardadas.</p>;
  }

  return (
    <div>
      <Navbar/>
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
          {activity[0].ejercicios.map((ejercicio: any, index: number) => (
            <Line type="monotone" dataKey={ejercicio.nombre} stroke="#8884d8" activeDot={{ r: 8 }} key={index} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;










