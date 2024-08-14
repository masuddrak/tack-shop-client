import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logOut: () => Promise<void>;
} | null>(null);

const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const createUser = ({ email }: { email: string }, { password }: { password: string }) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = ({ email }: { email: string }, { password }: { password: string }) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = ({ email }: { email: string }) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = async () => {
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;