import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

/**
 * A container for all available Firebase services.
 */
export interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}
