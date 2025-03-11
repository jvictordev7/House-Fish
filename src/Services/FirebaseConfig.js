import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuração do Firebase (house-fish)
const firebaseConfig = {
  apiKey: 'AIzaSyAQOlwhRpEFLNlZZl-9UeZtkiFUIa_o6SY',
  authDomain: 'house-fish.firebaseapp.com',
  projectId: 'house-fish',
  storageBucket: 'house-fish.firebasestorage.app',
  messagingSenderId: '1086487489033',
  appId: '1:1086487489033:web:865e3478bed9c3b67766d8'
};

// Inicializa o Firebase apenas se ainda não estiver inicializado
const app = initializeApp(firebaseConfig);

// Inicializa o Auth com persistência (AsyncStorage)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
