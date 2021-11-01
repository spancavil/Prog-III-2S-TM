// Import the functions you need from the SDKs you need
import app from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//ACA USEN LA CONFIGURACION QUE LES PROVEE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyALvuIHd6n-6LlJyQ521DGGK7w-SZt0VPc",
  authDomain: "rn-udesa-9fc4c.firebaseapp.com",
  projectId: "rn-udesa-9fc4c",
  storageBucket: "rn-udesa-9fc4c.appspot.com",
  messagingSenderId: "187954354666",
  appId: "1:187954354666:web:3d9b5d9c4948db051afa93"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

export const storage = app.storage();
export const auth = firebase.auth();
export const db = app.firestore();