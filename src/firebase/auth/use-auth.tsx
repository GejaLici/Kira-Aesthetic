'use client';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  signInAnonymously as firebaseSignInAnonymously
} from 'firebase/auth';
import { useAuth as useFirebaseAuth } from '@/firebase/provider';

export type AuthCredentials = {
  email: string;
  password?: string;
};

export function useAuth() {
  const auth = useFirebaseAuth() as Auth;

  const signIn = async ({ email, password }: AuthCredentials) => {
    if (!password) {
      throw new Error('Password is required for email/password sign-in.');
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    return firebaseSignOut(auth);
  };
  
  const signInAnonymously = async () => {
    return firebaseSignInAnonymously(auth);
  };

  return {
    signIn,
    signOut,
    signInAnonymously
  };
}
