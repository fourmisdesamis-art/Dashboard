// js/guard.js
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from "./auth.js";

/**
 * Vérifie si l'utilisateur possède le grade HA dans Firestore.
 * @param {string} uid - UID Firebase de l'utilisateur
 * @returns {Promise<boolean>}
 */
export async function hasHAGrade(uid) {
  try {
    const snap = await getDoc(doc(db, "users", uid));
    if (!snap.exists()) return false;
    return snap.data().grade === "HA";
  } catch (err) {
    console.error("Erreur vérification grade :", err);
    return false;
  }
}
