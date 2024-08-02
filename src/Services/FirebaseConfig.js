import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAuif8isAkvX97wxjubPw_HK0f91XSTk08',
  authDomain: 'projetologin-8389b.firebaseapp.com',
  projectId: 'projetologin-8389b',
  storageBucket: 'projetologin-8389b.appspot.com',
  messagingSenderId: '366374645913',
  appId: '1:366374645913:web:978e303a25ff5e3f9a0808',
  measurementId: 'G-65Z4MTMXTB'
};

// Inicializa o Firebase apenas se ainda não estiver inicializado
const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
