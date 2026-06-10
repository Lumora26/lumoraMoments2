/**
 * ==========================================================================
 * CONFIGURAÇÃO DO FIREBASE (config.js)
 * Inicializa a comunicação nativa e segura com o Firebase Firestore.
 * ==========================================================================
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Substitua com as credenciais reais do seu console do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "lumora-projeto.firebaseapp.com",
    projectId: "lumora-projeto",
    storageBucket: "lumora-projeto.appspot.com",
    messagingSenderId: "12345678",
    appId: "1:1234:web:1234"
};

// Inicializa a aplicação na nuvem
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados ativo para ser consumido pelos outros módulos do JS
export const db = getFirestore(app);