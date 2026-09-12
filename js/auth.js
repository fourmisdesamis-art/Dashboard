// js/auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ⚠️ TA config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSCqSsBTXk9Q8sBX88NgrdDHUAHT0Cq6I",
  authDomain: "lumalia.firebaseapp.com",
  projectId: "lumalia",
  storageBucket: "lumalia.firebasestorage.app",
  messagingSenderId: "189011821397",
  appId: "1:189011821397:web:03c8609d35d488dce2a5dc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
