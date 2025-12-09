import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  googleProvider,
} from "./firebase-config.js";

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

      if (
        !this.name ||
        !this.email ||
        !this.password ||
        !this.password_confirmation
      ) {
        this.error = "Please fill in all fields.";
        this.loading = false;
        return;
      }

      if (this.password.length < 6) {
        this.error = "Password must be at least 6 characters long.";
        this.loading = false;
        return;
      }

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
    async registerWithGoogle() {
      try {
        await signInWithPopup(auth, googleProvider);
        window.location.href = "dashboard.html";
      } catch (err) {
        console.error(err);
        this.error = "Google Sign-In failed: " + err.message;
      }
    },
  },
}).mount("#register-app");
