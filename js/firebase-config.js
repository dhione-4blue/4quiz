// ╔══════════════════════════════════════════════════════════════════╗
// ║  4quiz · Firebase Config                                         ║
// ║  Substitua os valores abaixo pelas credenciais do seu projeto    ║
// ╚══════════════════════════════════════════════════════════════════╝

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCik311Q1qd2x_FrdZrNWZSwuDl89pn3xc",
  authDomain:        "quiz-27b46.firebaseapp.com",
  projectId:         "quiz-27b46",
  storageBucket:     "quiz-27b46.firebasestorage.app",
  messagingSenderId: "952222704671",
  appId:             "1:952222704671:web:e6b280a83fcf43cbc9212a",
  measurementId:     "G-JDR92CMEYW"
};

// ── URL do Google Apps Script (code.gs publicado como Web App) ─────
const GAS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwvykuP51_5WF5Sz43ZFdtGDtEoL3nPsTyD7QDe3Q6avybAdTQqSPzpfArdZfpJNfQ/exec";

// ── E-mail autorizado para acesso ao dashboard ─────────────────────
const ADMIN_EMAIL = "equipemkt@4blue.com.br";

// ── Inicialização Firebase ─────────────────────────────────────────
import { initializeApp }              from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth }                    from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore }               from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics }               from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

export const app       = initializeApp(FIREBASE_CONFIG);
export const auth      = getAuth(app);
export const db        = getFirestore(app);
export const analytics = getAnalytics(app);

export { GAS_WEBHOOK_URL, ADMIN_EMAIL };
