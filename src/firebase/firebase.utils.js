import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDJt93V9Uy7vYbfyj3pEsnYzPAGtEUyDmk",
  authDomain: "crwn-db-ed5d7.firebaseapp.com",
  projectId: "crwn-db-ed5d7",
  storageBucket: "crwn-db-ed5d7.appspot.com",
  messagingSenderId: "440728700197",
  appId: "1:440728700197:web:c6240489c33739eeefc6cc",
  measurementId: "G-WL7QC6WHKF",
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
