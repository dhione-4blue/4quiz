// ╔══════════════════════════════════════════════════════════════════╗
// ║  4quiz · Firebase Config                                         ║
// ║  Substitua os valores abaixo pelas credenciais do seu projeto    ║
// ╚══════════════════════════════════════════════════════════════════╝

const FIREBASE_CONFIG = {
  apiKey:            "SUA_API_KEY",
  authDomain:        "SEU-PROJECT-ID.firebaseapp.com",
  projectId:         "SEU-PROJECT-ID",
  storageBucket:     "SEU-PROJECT-ID.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId:             "SEU_APP_ID",
  measurementId:     "G-XXXXXXXXXX"
};

// ── URL do Google Apps Script (code.gs publicado como Web App) ─────
const GAS_WEBHOOK_URL = "https://script.google.com/macros/s/SEU_DEPLOYMENT_ID/exec";

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
