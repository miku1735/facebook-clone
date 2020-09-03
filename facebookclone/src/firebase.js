import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAafo9mRPVe_F7CQgac_Ax1t-uqgfRm9Ok",
    authDomain: "facebook-clone-308e1.firebaseapp.com",
    databaseURL: "https://facebook-clone-308e1.firebaseio.com",
    projectId: "facebook-clone-308e1",
    storageBucket: "facebook-clone-308e1.appspot.com",
    messagingSenderId: "600868304241",
    appId: "1:600868304241:web:d2e0048c5bc245b5bd32d0",
    measurementId: "G-TXMSQXV89M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;