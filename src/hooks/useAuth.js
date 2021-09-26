import { createContext, useContext, useEffect, useState } from "react";
import firebase from "firebase/compat";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  /*
      const resetEmail= (email) => {
        return firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then(() => {
            setUser(null);
          });
      };*/

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    isAuthenticating,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext(AuthProvider);

export const useAuth = () => {
  return useContext(AuthContext);
};
