// Form.js
import getFirebase from "./firebase";

const firebaseInstance = getFirebase();

export const auth = async (email, password) => {
    try {
        if (firebaseInstance) {
            const user = await firebaseInstance
                .auth()
                .createUserWithEmailAndPassword(email, password);
        }
    } catch (error) {
        console.log("error", error);
    }
};

export const signIn = async (email, password, onSuccess, onFail) => {
    try {
        if (firebaseInstance) {
            const user = await firebaseInstance
                .auth()
                .signInWithEmailAndPassword(email, password);
            onSuccess();
        }
    } catch (error) {
        onFail();
    }
};

export const resetPassword = async (email) => {
    firebaseInstance
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
};
