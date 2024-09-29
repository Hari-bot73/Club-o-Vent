// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFdxwpOqTKwE-Nsm9QzPLoReE2W3UHBkU",
  authDomain: "clubs-and-events-4005f.firebaseapp.com",
  projectId: "clubs-and-events-4005f",
  storageBucket: "clubs-and-events-4005f.appspot.com",
  messagingSenderId: "147386914232",
  appId: "1:147386914232:web:4285ea82667e10a02feb4d",
  measurementId: "G-8HV03LE1L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);