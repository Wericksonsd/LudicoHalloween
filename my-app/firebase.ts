// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUh8ZbZJJ6bSBZwdTb6Q86pg0R4wnSV7I",
  authDomain: "halloweenescape-57fe9.firebaseapp.com",
  projectId: "halloweenescape-57fe9",
  storageBucket: "halloweenescape-57fe9.firebasestorage.app",
  messagingSenderId: "813445604073",
  appId: "1:813445604073:web:2be7dd9e84066a67134678",
  measurementId: "G-TC1XYVE6ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);