// Form.js
import getFirebase from "./firebase";
import { useEffect, useState } from "react";

const firebaseInstance = getFirebase();

export const auth = async (email, password) => {
  try {
    if (firebaseInstance) {
      const user = await firebaseInstance
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("user", user);
      alert(`Welcome ${email.value}!`);
    }
  } catch (error) {
    console.log("error", error);
    alert(error.message);
  }
};

export const signIn = async (email, password, onSuccess) => {
  try {
    if (firebaseInstance) {
      const user = await firebaseInstance
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("user", user);
      alert("Welcome back!");
      onSuccess();
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const resetPassword = async (email) => {
  firebaseInstance
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {})
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};

export const usePrincipal = () => {
  const [currentUser, setCurrentUser] = useState(null);

  // Listen to onAuthStateChanged
  useEffect(() => {
    const firebase = getFirebase();
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  return { currentUser };
};
