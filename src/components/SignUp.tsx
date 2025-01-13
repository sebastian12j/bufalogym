import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../credenciales';
import '../styles/SignUp.css';

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      navigate('/tupeso'); // Redirigir a la página Tupeso después de registrar
    } catch (error) {
      console.error('Error al registrarse:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate('/tupeso'); // Redirigir a la página Tupeso después de un inicio de sesión exitoso
    } catch (error) {
      console.error('Error al registrarse con Google:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result.user);
      navigate('/tupeso'); // Redirigir a la página Tupeso después de un inicio de sesión exitoso
    } catch (error) {
      console.error('Error al registrarse con Facebook:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/bufaloLogo_ltfnqu.png" alt="Buffalo Logo" />
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input type="checkbox" id="policy" />
          <label htmlFor="policy">Accept the security policy</label>
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        <div className="social-login">
          <button className="social-button" onClick={handleGoogleSignIn}>
            <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/google_xmwd1g.png" alt="Google Sign Up" className="social-icon" />
          </button>
          <button className="social-button" onClick={handleFacebookSignIn}>
            <img src="https://res.cloudinary.com/dzubhlegp/image/upload/v1736810929/facebook_b1v41t.png" alt="Facebook Sign Up" className="social-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;



