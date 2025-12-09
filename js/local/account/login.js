import {
  auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
} from "./firebase-config.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = null;

      if (!this.email || !this.password) {
        this.error = "Please fill in all fields.";
        this.loading = false;
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        // Firebase automatically handles session persistence
        window.location.href = "dashboard.html";
      } catch (err) {
        console.error(err);
        if (
          err.code === "auth/invalid-credential" ||
          err.code === "auth/user-not-found" ||
          err.code === "auth/wrong-password"
        ) {
          this.error = "Invalid email or password.";
        } else if (err.code === "auth/too-many-requests") {
          this.error =
            "Too many failed login attempts. Please try again later.";
        } else {
          this.error = "An error occurred during login: " + err.message;
        }
      } finally {
        this.loading = false;
      }
    },
    async loginWithGoogle() {
      try {
        await signInWithPopup(auth, googleProvider);
        window.location.href = "dashboard.html";
      } catch (err) {
        console.error(err);
        this.error = "Google Sign-In failed: " + err.message;
      }
    },
  },
}).mount("#login-app");
