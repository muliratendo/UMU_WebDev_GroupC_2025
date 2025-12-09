import {
  auth,
  db,
  doc,
  setDoc,
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
      phone: "",
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
        !this.phone ||
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

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: this.name,
          email: this.email,
          phone: this.phone,
          created_at: new Date().toISOString(),
          last_login: new Date().toISOString(),
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
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Save user data to Firestore (merge: true to avoid overwriting existing data if they login again)
        await setDoc(
          doc(db, "users", user.uid),
          {
            name: user.displayName,
            email: user.email,
            last_login: new Date().toISOString(),
            // Only set created_at if it's new (handled by check or just set it, but standardized approach is merge)
            // For simplicity, we'll just update fields that we know
          },
          { merge: true }
        );

        window.location.href = "dashboard.html";
      } catch (err) {
        console.error(err);
        this.error = "Google Sign-In failed: " + err.message;
      }
    },
  },
}).mount("#register-app");
