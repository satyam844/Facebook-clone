import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoHNjWuXEWRKG6deAbs5KNyJ0c3XMSTP0",
    authDomain: "facebook-clone-ea3f8.firebaseapp.com",
    projectId: "facebook-clone-ea3f8",
    storageBucket: "facebook-clone-ea3f8.appspot.com",
    messagingSenderId: "614733343243",
    appId: "1:614733343243:web:5ac1ab5b27fdd56941b50e",
    measurementId: "G-VCCWPNY1NK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export default db;
  export {auth,provider};