// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMÍNIO_DE_AUTENTICAÇÃO",
    projectId: "SEU_ID_DE_PROJETO",
    storageBucket: "SEU_BUCKET_DE_ARMAZENAMENTO",
    messagingSenderId: "SEU_ID_DE_REMETENTE",
    appId: "SEU_ID_DE_APLICATIVO",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
