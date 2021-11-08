// Import the functions you need from the SDKs you need
import app from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//ACA USEN LA CONFIGURACION QUE LES PROVEE FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAH0pEbOfmYEuYLv3-OwCBltPA9_E8Hky0",
  authDomain: "udesa-temp.firebaseapp.com",
  projectId: "udesa-temp",
  storageBucket: "udesa-temp.appspot.com",
  messagingSenderId: "571539426227",
  appId: "1:571539426227:web:0e109094b63a3a7d04d9c6"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

export const storage = app.storage();
export const auth = firebase.auth();
export const db = app.firestore();