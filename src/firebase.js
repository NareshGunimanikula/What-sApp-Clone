// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdjIcvx9jgQkyQXuPnxTCya5zVc6DHZeQ",
  authDomain: "whatsapp-clone-fe423.firebaseapp.com",
  projectId: "whatsapp-clone-fe423",
  storageBucket: "whatsapp-clone-fe423.appspot.com",
  messagingSenderId: "1013922169486",
  appId: "1:1013922169486:web:dfa5cfdb42b5182b8bbfdf",
  measurementId: "G-1DPZSQY1LM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
