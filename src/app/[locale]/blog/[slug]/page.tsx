
'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { useFirestore } from '@/firebase';
import { doc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { BlogPost } from '@/lib/data';
import BlogPostContent from './BlogPostContent';
import { Skeleton } from '@/components/ui/skeleton';

export default function BlogPostPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const slug = params.slug as string;
  
  const firestore = useFirestore();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      if (!firestore || !slug || !locale) {
        if (!firestore) setLoading(false);
        return;
      }

      setLoading(true);

      try {
        // Fetch dictionary
        const dict = await getDictionary(locale);
        setDictionary(dict);

        // Fetch post
        const postQuery = query(
          collection(firestore, 'blog'),
          where('slug', '==', slug),
          where('language', '==', locale),
          limit(1)
        );

        const snapshot = await getDocs(postQuery);
        
        if (snapshot.empty) {
          setPost(null);
        } else {
          const postData = snapshot.docs[0].data() as Omit<BlogPost, 'id'>;
          const postId = snapshot.docs[0].id;
          const fullPost = { ...postData, id: postId };
          setPost(fullPost);
        }
      } catch (error) {
        console.error("Error fetching post data:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [firestore, slug, locale]);

  if (loading) {
    return (
        <div className="bg-background">
            <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
                    <Skeleton className="h-5 w-1/2 mx-auto" />
                </div>
                <Skeleton className="relative mt-8 h-96 w-full rounded-lg" />
                <div className="mx-auto mt-12 space-y-4">
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-6 w-5/6" />
                </div>
            </div>
        </div>
    );
  }

  if (!post || !dictionary) {
    notFound();
  }

  return (
    <BlogPostContent post={post} locale={locale} dictionary={dictionary} />
  );
}
