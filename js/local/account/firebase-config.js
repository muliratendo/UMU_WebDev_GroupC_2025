  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABhrN0eQtUi5A9zC4XU5cYVgUdexJ7KaY",
    authDomain: "sterlingpavillionauth.firebaseapp.com",
    projectId: "sterlingpavillionauth",
    storageBucket: "sterlingpavillionauth.firebasestorage.app",
    messagingSenderId: "197873571452",
    appId: "1:197873571452:web:cb9198e931ba8bc0d59bf9",
    measurementId: "G-WCBL87XYH5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  export { app, analytics, auth };