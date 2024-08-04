// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApxFhLDz881swQEOUYFxmrrO7h_H7a9rA",
    authDomain: "pantry-tracker-8faab.firebaseapp.com",
    projectId: "pantry-tracker-8faab",
    storageBucket: "pantry-tracker-8faab.appspot.com",
    messagingSenderId: "286564753808",
    appId: "1:286564753808:web:8430885b39471b75b8d315",
    measurementId: "G-M84865B39R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}