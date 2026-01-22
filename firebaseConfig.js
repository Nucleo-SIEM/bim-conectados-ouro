// firebaseConfig.js - CONFIGURAÇÃO PARA DESENVOLVIMENTO LOCAL
// Para produção no Vercel, configure as credenciais diretamente no painel do Vercel
// Este arquivo é ignorado pelo Git e contém apenas placeholders

const firebaseConfig = {
  apiKey: "AIzaSyBEmQ1QbWiE_ikIGg66vaw7Sev6QLmb2-E",
  authDomain: "bim-conectados-ouro.firebaseapp.com",
  databaseURL: "https://bim-conectados-ouro-default-rtdb.firebaseio.com",
  projectId: "bim-conectados-ouro",
  storageBucket: "bim-conectados-ouro.firebasestorage.app",
  messagingSenderId: "1079293409808",
  appId: "1:1079293409808:web:f3aae3e70c6c90f8d2a895",
  measurementId: "G-54HSRFZGBG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);