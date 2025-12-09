import {
  auth,
  db,
  doc,
  getDoc,
  onAuthStateChanged,
  signOut,
} from "./firebase-config.js";

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
      async (user) => {
        if (user) {
          // User is signed in
          try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            let userData = {
              name: user.displayName,
              email: user.email,
              created_at: user.metadata.creationTime,
              phone: "N/A", // Default
            };

            if (docSnap.exists()) {
              const data = docSnap.data();
              userData.phone = data.phone || "N/A";
              // Prefer Firestore data if available
              if (data.name) userData.name = data.name;
              // Ensure created_at consistency if needed, but Auth metadata is usually fine
            }

            this.user = userData;
          } catch (err) {
            console.error("Error fetching user data:", err);
            // Fallback to auth data if Firestore fails
            this.user = {
              name: user.displayName,
              email: user.email,
              created_at: user.metadata.creationTime,
              phone: "N/A",
            };
          } finally {
            this.loading = false;
          }
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
