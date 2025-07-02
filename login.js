import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// 🔧 Konfiguracja Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnGKAkzW9w2Y1NBeyasBTY29YYYzFok_A",
  authDomain: "greentube-b93d1.firebaseapp.com",
  projectId: "greentube-b93d1",
  storageBucket: "greentube-b93d1.appspot.com",
  messagingSenderId: "818380659407",
  appId: "1:818380659407:web:7ee71139590488d78e75ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔐 Obsługa logowania
const form = document.getElementById("loginForm");
const errorEl = document.getElementById("error");
const registerLink = document.getElementById("registerLink");

let isRegistering = false;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  errorEl.textContent = "";

  try {
    if (isRegistering) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
    // ✅ Przekierowanie po zalogowaniu
    window.location.href = "https://greenblox-creator.github.io/greentube/";
  } catch (err) {
    errorEl.textContent = err.message;
  }
});

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  isRegistering = true;
  form.querySelector("button").textContent = "Zarejestruj się";
  registerLink.style.display = "none";
});
