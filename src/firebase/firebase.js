// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw3X1iZh7Xtx-L9xcufupYwesSjVFiR-U",
  authDomain: "react-clothing-api.firebaseapp.com",
  projectId: "react-clothing-api",
  storageBucket: "reaxct-clothing-api.appspot.com",
  messagingSenderId: "1018870353131",
  appId: "1:1018870353131:web:6dabe2c172186c99b742ae",
  measurementId: "G-26NSMY7PWQ",
  userProfile: "users", // where profiles are stored in database
  useFirestoreForProfile: true, // use Firestore for profile instead of RTDB
  profileParamsToPopulate: [
    { child: "role", root: "roles" }, // populates user's role with matching role object from roles
  ],
  profileFactory: (user) => {
    const profile = {
      email: user.email || user.providerData[0].email,
      role: "user",
    };
    if (user.providerData && user.providerData.length) {
      profile.providerData = user.providerData;
    }
    return profile;
  },
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
