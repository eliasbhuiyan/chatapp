import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTm09Gdgf70_ANJEHaIscX4C5y5_FdcVI",
  authDomain: "chatapp-a73e9.firebaseapp.com",
  projectId: "chatapp-a73e9",
  storageBucket: "chatapp-a73e9.firebasestorage.app",
  messagingSenderId: "389193740493",
  appId: "1:389193740493:web:4a97b9b424e315bd053984"
};

// Initialize Firebase
export const dbConfig = initializeApp(firebaseConfig);