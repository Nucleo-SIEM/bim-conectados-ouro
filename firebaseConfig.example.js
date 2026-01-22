// firebaseConfig.example.js - ARQUIVO DE EXEMPLO PARA VERCEL
// COPIE ESTE CONTEÚDO PARA firebaseConfig.js NO VERCEL
// Substitua os valores pelas suas credenciais reais do Firebase

const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
  measurementId: "SEU_MEASUREMENT_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);