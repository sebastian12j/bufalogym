import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../credenciales';
import { setUser } from '../slices/userSlice'; // Importa la acción de Redux
import '../styles/SignIn.css';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Para despachar acciones a Redux

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);

      // Despacha la acción para actualizar el estado en Redux
      dispatch(setUser({ email: user.email!, displayName: user.displayName || '', photoURL: user.photoURL || '' }));

      navigate('/tupeso'); // Redirigir a la página Tupeso después de iniciar sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);

      // Despacha la acción para actualizar el estado en Redux
      dispatch(setUser({ email: user.email!, displayName: user.displayName || '', photoURL: user.photoURL || '' }));

      navigate('/tupeso'); // Redirigir a la página Tupeso después de un inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log(user);

      // Despacha la acción para actualizar el estado en Redux
      dispatch(setUser({ email: user.email!, displayName: user.displayName || '', photoURL: user.photoURL || '' }));

      navigate('/tupeso'); // Redirigir a la página Tupeso después de un inicio de sesión exitoso
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img src="../public/bufaloLogo.png" alt="Buffalo Logo" />
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
        <div className="social-login">
          <button className="social-button" onClick={handleGoogleSignIn}>
            <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/google_xmwd1g.png" alt="Google Sign In" className="social-icon" />
          </button>
          <button className="social-button" onClick={handleFacebookSignIn}>
            <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/facebook_b1v41t.png" alt="Facebook Sign In" className="social-icon" />
          </button>
        </div>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;





