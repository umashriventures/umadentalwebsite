import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADR_d5M5VWaH_-u82J26HuvK9ixQ9RLFI",
  authDomain: "umadentalclinic-41f8e.firebaseapp.com",
  projectId: "umadentalclinic-41f8e",
  storageBucket: "umadentalclinic-41f8e.firebasestorage.app",
  messagingSenderId: "702968471121",
  appId: "1:702968471121:web:d7f3fcf59cb0edb00be270",
  measurementId: "G-0KGYHZ1ZH4"
};

const app = initializeApp(firebaseConfig);

// Use initializeFirestore instead of getFirestore to set experimental settings
// setting forceLongPolling to true often fixes the 'unavailable' connection error
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
