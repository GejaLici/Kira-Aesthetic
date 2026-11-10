
'use client';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Calendar, User } from 'lucide-react';
import { useBlogPosts } from '@/firebase';
import { BlogPost } from '@/lib/data';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function BlogCard({ post, locale, dictionary, isFeatured = false }: { post: BlogPost; locale: Locale; dictionary: any; isFeatured?: boolean }) {
  if (isFeatured) {
    return (
      <div className="group relative overflow-hidden bg-white border border-neutral-100 shadow-xl transition-all duration-500 hover:shadow-2xl mb-16 animate-fade-in-up">
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <div className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C2A58F]">
            <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> {post.author}</span>
            <span className="h-1 w-1 rounded-full bg-[#C2A58F]/30" />
            <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-light leading-tight text-neutral-900 mb-8 max-w-4xl">
            <Link href={`/${locale}/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h2>
          <p className="text-neutral-500 text-lg font-light leading-relaxed mb-10 max-w-3xl">
            {post.excerpt}
          </p>
          <div>
            <Button asChild className="rounded-none border border-primary bg-white px-12 py-8 text-[11px] font-bold uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:bg-primary hover:text-white shadow-md">
              <Link href={`/${locale}/blog/${post.slug}`}>
                {dictionary.blogPage.readMore}
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card className="group flex flex-col overflow-hidden rounded-none border border-neutral-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex flex-1 flex-col p-10">
        <div className="mb-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-neutral-200" />
          <span>{new Date(post.date).toLocaleDateString(locale)}</span>
        </div>
        <h3 className="font-headline text-2xl font-medium leading-snug text-neutral-900 mb-6 group-hover:text-primary transition-colors">
          <Link href={`/${locale}/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm font-light leading-relaxed text-neutral-500 mb-10 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-6 border-t border-neutral-50">
          <Link 
            href={`/${locale}/blog/${post.slug}`}
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-primary group/link"
          >
            {dictionary.blogPage.readMore}
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-2" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

function BlogCardSkeleton() {
  return (
    <Card className="flex flex-col overflow-hidden rounded-none border-none shadow-sm">
      <CardContent className="p-10">
        <Skeleton className="h-4 w-1/3 mb-6" />
        <Skeleton className="h-8 w-3/4 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
}

export default function BlogPage() {
  const params = useParams();
  const locale = params.locale as Locale;

  const [dictionary, setDictionary] = useState<any>(null);
  const { data: posts, loading } = useBlogPosts({ language: locale });
  
  useEffect(() => {
    if (locale) {
        async function fetchDictionary() {
          const dict = await getDictionary(locale);
          setDictionary(dict);
        }
        fetchDictionary();
    }
  }, [locale]);
  
  if (!dictionary || loading) {
      return (
         <div className="bg-neutral-50 min-h-screen">
            <div className="container mx-auto max-w-6xl px-4 pt-40 pb-16 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <Skeleton className="h-10 w-48 mx-auto mb-6" />
                    <Skeleton className="h-5 w-2/3 mx-auto" />
                </div>
                 <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => <BlogCardSkeleton key={i} />)}
                </div>
            </div>
         </div>
      );
  }

  const featuredPost = posts && posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts ? posts.slice(1) : [];

  return (
    <div className="bg-neutral-50/50 min-h-screen pb-24">
      {/* Header Section */}
      <div className="bg-white border-b border-neutral-100">
        <div className="container mx-auto max-w-6xl px-4 pt-40 pb-20 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
                <h1 className="font-headline text-4xl font-light uppercase tracking-[0.25em] text-neutral-900 sm:text-5xl lg:text-6xl mb-8">
                    {dictionary.blogPage.title}
                </h1>
                <div className="mx-auto h-px w-24 bg-primary/20 mb-8" />
                <p className="mx-auto max-w-2xl text-lg font-light tracking-wide text-neutral-500 leading-relaxed">
                    {dictionary.blogPage.subtitle}
                </p>
            </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 mt-20 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <BlogCard post={featuredPost} locale={locale} dictionary={dictionary} isFeatured={true} />
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
             <BlogCard key={post.id} post={post} locale={locale} dictionary={dictionary} />
          ))}
        </div>

        {/* Empty State */}
        {!loading && (!posts || posts.length === 0) && (
            <div className="mt-16 text-center text-neutral-400 py-32 border border-dashed border-neutral-200 bg-white">
                <FileText className="h-16 w-16 mb-6 mx-auto opacity-20" />
                <h3 className="text-2xl font-light uppercase tracking-widest mb-2">The Archive is Empty</h3>
                <p className="font-light italic">No editorial pieces have been published in this language yet.</p>
            </div>
        )}
      </div>
    </div>
  );
}
