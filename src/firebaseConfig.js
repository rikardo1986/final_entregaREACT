import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFgcndLLkLmESVdxaN8YugSjCJOG7-PNI",
  authDomain: "compuenter-b75f5.firebaseapp.com",
  projectId: "compuenter-b75f5",
  storageBucket: "compuenter-b75f5.firebasestorage.app",
  messagingSenderId: "622898382050",
  appId: "1:622898382050:web:dc80d20f7f520bf3bc4abb",
  measurementId: "G-33QCSZK7P4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
