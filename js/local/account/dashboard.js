import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      user: null,
      loading: true,
      error: null,
    };
  },
  mounted() {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in
          this.user = {
            name: user.displayName,
            email: user.email,
            created_at: user.metadata.creationTime,
          };
          this.loading = false;
        } else {
          // User is signed out
          window.location.href = "login.html";
        }
      },
      (error) => {
        console.error(error);
        this.error =
          "Failed to load user profile. Please try refreshing the page.";
        this.loading = false;
      }
    );
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        window.location.href = "login.html";
      } catch (err) {
        console.error("Logout error", err);
      }
    },
  },
}).mount("#dashboard-app");
