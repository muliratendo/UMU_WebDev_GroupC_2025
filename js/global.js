import { auth, onAuthStateChanged } from "./local/account/firebase-config.js";

const { createApp } = Vue;

const globalAuthApp = createApp({
  data() {
    return {
      user: null,
      loading: true,
      dashboardLink:
        "https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/account/dashboard.html",
      loginLink:
        "https://muliratendo.github.io/UMU_WebDev_GroupC_2025/pages/account/login.html",
    };
  },
  mounted() {
    // Check if we are on the dashboard page to highlight active state or prevent redirect loops if needed
    // But here we just handle the navbar button

    // Determine correct relative paths based on current location if strictly needed,
    // but using absolute/hosted paths as per existing patterns is safer for this user's setup.
    // However, to support local dev, we might want to be smarter.
    // For now, I'll stick to the logic requested: Login -> Account Icon.

    onAuthStateChanged(auth, (user) => {
      this.user = user;
      this.loading = false;
    });
  },
  methods: {
    handleLoginClick() {
      window.location.href = this.loginLink;
    },
  },
});

// Only mount if the element exists
if (document.getElementById("nav-auth-section")) {
  globalAuthApp.mount("#nav-auth-section");
}