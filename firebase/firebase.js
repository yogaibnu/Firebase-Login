import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    //your config values
};

export const myFirebase = firebase.intializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;