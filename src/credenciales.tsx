import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCo4tTtMV3POqGZm2i8nqIG22YNluyrT3s",
  authDomain: "bufaloappgym.firebaseapp.com",
  projectId: "bufaloappgym",
  storageBucket: "bufaloappgym.firebasestorage.app",
  messagingSenderId: "435261356422",
  appId: "1:435261356422:web:a4913b7bfcee8595fad407"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };

