import {
    collection,
    addDoc,
    serverTimestamp,
    type Firestore,
    doc,
    deleteDoc,
    updateDoc,
    writeBatch,
  } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { BlogPost, sampleBlogPosts } from './data';

function sanitizeSlug(slug: string): string {
    return slug.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}
  
  export function saveContactSubmission(
    db: Firestore,
    submission: { name: string; email: string; phone?: string; message: string, source?: string }
  ) {
    const contactCollection = collection(db, 'contacts');
    
    const docData = {
      ...submission,
      submittedAt: serverTimestamp(),
    };
    
    addDoc(contactCollection, docData)
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: contactCollection.path,
          operation: 'create',
          requestResourceData: docData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });
  }

  export function saveBlogPost(
    db: Firestore,
    post: Omit<BlogPost, 'id'>
  ) {
    const blogCollection = collection(db, 'blog');
    
    const docData = {
      ...post,
      slug: sanitizeSlug(post.slug),
      createdAt: serverTimestamp(),
    };

    return addDoc(blogCollection, docData)
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: blogCollection.path,
          operation: 'create',
          requestResourceData: docData,
        });
        errorEmitter.emit('permission-error', permissionError);
        throw permissionError;
      });
  }

  export function updateBlogPost(
    db: Firestore,
    postId: string,
    post: Omit<BlogPost, 'id' | 'createdAt'>
  ) {
    const postRef = doc(db, 'blog', postId);
    
    const docData = {
      ...post,
      slug: sanitizeSlug(post.slug),
    };

    return updateDoc(postRef, docData)
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: postRef.path,
          operation: 'update',
          requestResourceData: docData,
        });
        errorEmitter.emit('permission-error', permissionError);
        throw permissionError;
      });
  }

  export function deleteBlogPost(db: Firestore, postId: string) {
    const postRef = doc(db, 'blog', postId);
    return deleteDoc(postRef)
      .catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: postRef.path,
          operation: 'delete',
        });
        errorEmitter.emit('permission-error', permissionError);
        throw permissionError;
      });
  }

  export async function seedBlogPosts(db: Firestore) {
    const batch = writeBatch(db);
    const blogCollection = collection(db, 'blog');

    sampleBlogPosts.forEach((post) => {
        const newDocRef = doc(blogCollection);
        batch.set(newDocRef, {
            ...post,
            slug: sanitizeSlug(post.slug),
            createdAt: serverTimestamp(),
        });
    });

    return batch.commit();
  }
