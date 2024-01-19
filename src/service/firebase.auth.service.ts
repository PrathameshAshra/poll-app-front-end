import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClt0tD6ZaZdvmzs26owbRimFYCKVdcyko",
  authDomain: "poll-app-e1f8f.firebaseapp.com",
  projectId: "poll-app-e1f8f",
  storageBucket: "poll-app-e1f8f.appspot.com",
  messagingSenderId: "1072110979516",
  appId: "1:1072110979516:web:e26b11bd990457d83dc3b9",
  measurementId: "G-15K2N7NKV8",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
