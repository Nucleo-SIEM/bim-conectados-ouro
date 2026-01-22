// inject-firebase-config.js - Script para injetar config do Firebase no Vercel
// Este arquivo será executado durante o build no Vercel

const fs = require('fs');
const path = require('path');

function injectFirebaseConfig() {
  const htmlPath = path.join(__dirname, 'bim-conectados-ouro.html');
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Verificar se as variáveis de ambiente estão definidas
  const apiKey = process.env.FIREBASE_API_KEY;
  const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
  const databaseURL = process.env.FIREBASE_DATABASE_URL;
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.FIREBASE_APP_ID;
  const measurementId = process.env.FIREBASE_MEASUREMENT_ID;

  if (!apiKey || apiKey === 'CONFIGURAR_NO_VERCEL') {
    console.error('❌ FIREBASE_API_KEY não configurada no Vercel');
    process.exit(1);
  }

  // Substituir os placeholders
  htmlContent = htmlContent.replace(/__FIREBASE_API_KEY__/g, apiKey || '');
  htmlContent = htmlContent.replace(/__FIREBASE_AUTH_DOMAIN__/g, authDomain || '');
  htmlContent = htmlContent.replace(/__FIREBASE_DATABASE_URL__/g, databaseURL || '');
  htmlContent = htmlContent.replace(/__FIREBASE_PROJECT_ID__/g, projectId || '');
  htmlContent = htmlContent.replace(/__FIREBASE_STORAGE_BUCKET__/g, storageBucket || '');
  htmlContent = htmlContent.replace(/__FIREBASE_MESSAGING_SENDER_ID__/g, messagingSenderId || '');
  htmlContent = htmlContent.replace(/__FIREBASE_APP_ID__/g, appId || '');
  htmlContent = htmlContent.replace(/__FIREBASE_MEASUREMENT_ID__/g, measurementId || '');

  // Escrever arquivo final em public/index.html para o Vercel servir como output
  const outDir = path.join(__dirname, 'public');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'index.html');
  fs.writeFileSync(outPath, htmlContent);
  console.log('✅ Firebase config injetada com sucesso em', outPath);
}

if (require.main === module) {
  injectFirebaseConfig();
}

module.exports = { injectFirebaseConfig };