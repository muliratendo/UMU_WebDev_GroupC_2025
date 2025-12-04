import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      loading: false,
      error: null,
    };
  },
  methods: {
    async register() {
      this.loading = true;
      this.error = null;

      if (this.password !== this.password_confirmation) {
        this.error = "Passwords do not match.";
        this.loading = false;
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        // Update user profile with name
        await updateProfile(user, {
          displayName: this.name,
        });

        // Redirect to dashboard
        window.location.href = "dashboard.html";
      } catch (err) {
        console.error(err);
        if (err.code === "auth/email-already-in-use") {
          this.error = "Email is already in use.";
        } else if (err.code === "auth/weak-password") {
          this.error = "Password is too weak.";
        } else {
          this.error = "An error occurred during registration: " + err.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
}).mount("#register-app");
