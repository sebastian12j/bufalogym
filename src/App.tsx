import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Workout from './components/Workout';
import Discipline from './components/Discipline';
import Character from './components/Character';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Tupeso from './components/Tupeso';
import Dashboard from './components/Dashboard';
import RutinaLista from './components/RutinaLista';
import InformacionDeportiva from './components/InformacionDeportiva';
import Usuario from './components/Usuario';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';
import Subscription from './components/Subscription';
import Activity from './components/Activity';
import WarmUpCard from './components/WarmUpCard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/character" element={<Character />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tupeso" element={<Tupeso />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rutina" element={<RutinaLista />} />
        <Route path="/informacion-deportiva" element={<InformacionDeportiva />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/warmupcard" element={<WarmUpCard title={''} description={''} imageUrl={''} />} />
      </Routes>
    </Router>
  );
};

export default App;


