'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance);
}

/** 
 * Initiate email/password sign-up (non-blocking). 
 * Now includes profile creation logic.
 */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string, fullName: string): void {
  createUserWithEmailAndPassword(authInstance, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const db = getFirestore();
      const profileRef = doc(db, 'users', user.uid);
      
      // Create the user profile document in Firestore
      setDoc(profileRef, {
        id: user.uid,
        fullName: fullName,
        email: email,
        registrationDate: new Date().toISOString(),
        role: 'student'
      }).catch(error => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: profileRef.path,
          operation: 'create',
          requestResourceData: { fullName, email }
        }));
      });
    });
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): void {
  signInWithEmailAndPassword(authInstance, email, password);
}
