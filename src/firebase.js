import firebase from "firebase";
// import "firebase/compat/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYeMRVNJ_8kMjnYpK-8BMYBlsYInBPVIc",
  authDomain: "disney-plus-clone-e667d.firebaseapp.com",
  projectId: "disney-plus-clone-e667d",
  storageBucket: "disney-plus-clone-e667d.appspot.com",
  messagingSenderId: "244643092179",
  appId: "1:244643092179:web:34e4a4c2abd5a97ef32626",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;
