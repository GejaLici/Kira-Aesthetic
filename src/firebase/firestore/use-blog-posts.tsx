'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { collection, query, onSnapshot, orderBy, where, Query } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { BlogPost } from '@/lib/data';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useMemoized } from '../use-memoized';

interface UseBlogPostsOptions {
  language?: string;
}

export function useBlogPosts(options?: UseBlogPostsOptions) {
  const firestore = useFirestore();
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);

  const postsQuery = useMemo(() => {
    if (!firestore) return null;
    
    const postsCollection = collection(firestore, 'blog');
    
    if (options?.language) {
      // Temporarily removing orderBy to avoid composite index requirement.
      // For proper sorting, an index should be created in Firestore.
      return query(
        postsCollection,
        where('language', '==', options.language)
      );
    }
    
    return query(postsCollection, orderBy('createdAt', 'desc'));
  }, [firestore, options?.language]);
  
  const memoizedQuery = useMemoized(postsQuery);


  const fetchData = useCallback(() => {
    if (memoizedQuery) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        memoizedQuery,
        (snapshot) => {
          const docs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as BlogPost));
          setData(docs);
          setLoading(false);
        },
        (err) => {
          console.error("Error fetching blog posts:", err);
          const permissionError = new FirestorePermissionError({
            path: (memoizedQuery as any)._query.path.segments.join('/'),
            operation: 'list',
          });
          errorEmitter.emit('permission-error', permissionError);
          setLoading(false);
        }
      );
      return unsubscribe;
    } else {
      setData([]);
      setLoading(false);
    }
  }, [memoizedQuery]);

  useEffect(() => {
    const unsubscribe = fetchData();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [fetchData]);

  return { data, loading, mutate: fetchData };
}
