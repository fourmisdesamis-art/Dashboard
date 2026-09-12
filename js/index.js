// js/index.js
import {
  auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "./auth.js";
import { hasHAGrade } from "./guard.js";

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const submitBtn = document.getElementById("submit-btn");

// Redirection auto si déjà connecté + grade HA
onAuthStateChanged(auth, async (user) => {
  if (user && (await hasHAGrade(user.uid))) {
    window.location.href = "dashboard/";
  }
});

// Soumission du formulaire
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMsg.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "Connexion…";

  const email = form.email.value.trim();
  const password = form.password.value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    if (await hasHAGrade(cred.user.uid)) {
      window.location.href = "dashboard/";
    } else {
      errorMsg.textContent = "Accès refusé : grade HA requis.";
      await signOut(auth);
      submitBtn.disabled = false;
      submitBtn.textContent = "Se connecter";
    }
  } catch (err) {
    errorMsg.textContent = "Identifiants invalides ou erreur de connexion.";
    console.error(err);
    submitBtn.disabled = false;
    submitBtn.textContent = "Se connecter";
  }
});
