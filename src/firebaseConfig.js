import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5M7nqoKoS0HBHlq6ZNId0AuSuVR5JQnY",
  authDomain: "chatapp-38c78.firebaseapp.com",
  projectId: "chatapp-38c78",
  storageBucket: "chatapp-38c78.appspot.com",
  messagingSenderId: "987454302760",
  appId: "1:987454302760:web:5b95f5495f43f9f590231d",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export default auth;
