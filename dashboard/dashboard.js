// dashboard/dashboard.js
import { auth, onAuthStateChanged, signOut } from "../js/auth.js";
import { hasHAGrade } from "../js/guard.js";

const loading = document.getElementById("loading");
const app = document.getElementById("app");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "/";
    return;
  }

  const ok = await hasHAGrade(user.uid);
  if (!ok) {
    window.location.href = "/";
    return;
  }

  // Accès autorisé
  userEmail.textContent = user.email || "";
  loading.style.display = "none";
  app.style.display = "block";
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "/";
});
