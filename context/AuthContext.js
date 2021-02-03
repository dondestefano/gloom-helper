import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  });

  const createUser = async (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //Open for eventual save user data
        var user = userCredential.user;
      })
      .catch((error) => {
        //Open for eventual error handling
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const loginUser = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Encountered error: ', error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log('Encountered error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, user, loginUser, signOut, createUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
