import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyClB9aD7jsr5hAjx_Cmi-w_5tLDvYelomg",
  authDomain: "chatapp-71b42.firebaseapp.com",
  databaseURL: "https://chatapp-71b42-default-rtdb.firebaseio.com",
  projectId: "chatapp-71b42",
  storageBucket: "chatapp-71b42.appspot.com",
  messagingSenderId: "177200919499",
  appId: "1:177200919499:web:ca20c8b66f318d0e91fc4e",
};

const app = initializeApp(firebaseConfig);

export default firebaseConfig;
