import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9Zq7oW-f-aZuV-ilu9g-jiDcSurbcPmk",
  authDomain: "authentication-a56f5.firebaseapp.com",
  projectId: "authentication-a56f5",
  storageBucket: "authentication-a56f5.appspot.com",
  messagingSenderId: "493120834744",
  appId: "1:493120834744:web:e1b46fe5721271e432f84d",
  measurementId: "G-96543NX706",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCDL3U26Kvu16VxUcpsRtpL07dEIDwIgpQ",
//   authDomain: "fir-project-a7458.firebaseapp.com",
//   projectId: "fir-project-a7458",
//   storageBucket: "fir-project-a7458.appspot.com",
//   messagingSenderId: "575906290952",
//   appId: "1:575906290952:web:0f2f7421abffc0db1420bd",
//   measurementId: "G-6EF9ND3KRX",
// };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password, displayName) {
  return createUserWithEmailAndPassword(auth, email, password, displayName);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
