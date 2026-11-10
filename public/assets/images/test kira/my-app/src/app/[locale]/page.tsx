
import { unstable_setRequestLocale } from 'next-intl/server';
import { getBlogPosts } from '@/data/blog';
import HomePageContent from '@/components/home/HomePageContent';
import type { BlogPost } from '@/data/blog';

type Props = {
  params: {locale: string};
};

export default async function HomePage({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  const latestPosts: BlogPost[] = (await getBlogPosts(params.locale)).slice(0, 3);
  
  return (
    <HomePageContent latestPosts={latestPosts} />
  );
}