import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCh8-tioEw7ILJUVD5UTBSSH6m-GqHuIfQ",
    authDomain: "library-book-inventory.firebaseapp.com",
    projectId: "library-book-inventory",
    storageBucket: "library-book-inventory.appspot.com",
    messagingSenderId: "564474003681",
    appId: "1:564474003681:web:625644d128d7c534ad77a0",
    measurementId: "G-0W37TE2GY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

