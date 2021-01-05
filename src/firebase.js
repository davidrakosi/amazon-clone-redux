import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA28j5PdWiJllNwy2TV_xKFasb6sPuvSBc",
    authDomain: "amz-clone-bffc6.firebaseapp.com",
    projectId: "amz-clone-bffc6",
    storageBucket: "amz-clone-bffc6.appspot.com",
    messagingSenderId: "1070812673968",
    appId: "1:1070812673968:web:7db44d44223bb9e4c28875",
    measurementId: "G-ZY08F3FLR2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db