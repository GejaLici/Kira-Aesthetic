'use client';
import { useEffect } from 'react';
import { errorEmitter } from '../firebase/error-emitter';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: any) => {
      // Throw the error so Next.js can handle it and display the overlay.
      throw error;
    };
    errorEmitter.on('permission-error', handlePermissionError);
    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);
  return null;
}
