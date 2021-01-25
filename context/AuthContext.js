import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('user: ', user);
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  });

  const createUser = async (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  const loginUser = async (email, password) => {
    console.log('calling log in ');
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('logging in');
    } catch (error) {
      console.log('Encountered error: ', error);
    }
  };

  const signOut = async () => {
    try {
      console.log("Signing out")
      await auth.signOut();
    } catch (error) {
      console.log('Encountered error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoading, user, loginUser, signOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
}