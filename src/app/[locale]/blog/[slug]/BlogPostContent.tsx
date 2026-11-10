
'use client';

import { useEffect, useState } from 'react';
import { BlogPost } from '@/lib/data';
import { Locale } from '@/i18n-config';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import MdxComponents from '@/components/mdx/MdxComponents';
import { Calendar, User, Tag, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPostContent({ post, locale, dictionary }: { post: BlogPost, locale: Locale, dictionary: any }) {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);
  const [isSerializing, setIsSerializing] = useState(true);

  useEffect(() => {
    async function serializeContent() {
      if (post.content) {
        try {
          const source = await serialize(post.content, {
            mdxOptions: { development: process.env.NODE_ENV === 'development' }
          });
          setMdxSource(source);
        } catch (error) {
          console.error("Error serializing MDX:", error);
          setMdxSource(null);
        }
      }
      setIsSerializing(false);
    }

    serializeContent();
  }, [post.content]);

  const keywords = post.keywords ? post.keywords.split(',').map(k => k.trim()) : [];

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <div className="container mx-auto max-w-4xl px-4 pt-44 pb-16 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
            <div className="mb-8 flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C2A58F]">
                <span className="flex items-center gap-2"><User className="h-3.5 w-3.5" /> {post.author}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#C2A58F]/30" />
                <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            
            <h1 className="font-headline text-4xl font-light leading-tight tracking-tight text-neutral-900 sm:text-6xl mb-12">
                {post.title}
            </h1>
            
            <div className="mx-auto h-px w-32 bg-primary/20 mb-20" />
        </div>

        {/* Article Body */}
        <div className="relative max-w-3xl mx-auto">
          {/* Action Bar */}
          <div className="hidden lg:flex flex-col items-center gap-6 absolute -left-24 top-0 py-4 animate-fade-in-up [animation-delay:600ms]">
             <div className="h-10 w-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary transition-all cursor-pointer">
                <Share2 className="h-4 w-4" />
             </div>
             <div className="h-px w-6 bg-neutral-100" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 vertical-rl rotate-180">Clinical Article</span>
          </div>

          <div className="prose prose-lg lg:prose-xl mx-auto dark:prose-invert animate-fade-in-up [animation-delay:400ms]">
            <p className="text-xl lg:text-2xl font-light text-neutral-500 leading-relaxed italic border-l-4 border-primary/20 pl-8 mb-16">
              {post.excerpt}
            </p>
            
            <div className="mt-12 font-light leading-loose text-neutral-700">
              {!isSerializing && mdxSource && dictionary && (
                <MDXRemote {...mdxSource} components={MdxComponents(dictionary)} />
              )}
            </div>

            {keywords.length > 0 && (
                <div className="mt-20 pt-12 border-t border-neutral-50 flex flex-wrap gap-2 items-center">
                    <Tag className="h-4 w-4 text-primary mr-2" />
                    {keywords.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="rounded-none bg-neutral-50 hover:bg-primary/10 hover:text-primary transition-colors py-2 px-5 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="max-w-3xl mx-auto mt-24 pt-12 border-t border-neutral-100 animate-fade-in-up [animation-delay:600ms]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold">
                      {post.author.charAt(0)}
                   </div>
                   <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">Written By</p>
                      <p className="text-sm font-medium text-neutral-900">{post.author}</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-300">Published in {post.language.toUpperCase()}</span>
                </div>
            </div>
        </div>

      </div>
    </article>
  );
}
