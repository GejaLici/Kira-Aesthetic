import Image from 'next/image';
import ContactSection from '@/components/home/ContactSection';
import ResultsCarousel from '@/components/shared/ResultsCarousel';
import type { Dictionary } from '@/lib/dictionary';
import { MDXRemoteProps } from 'next-mdx-remote';
import { Callout } from './Callout';
import { cn } from '@/lib/utils';
import { ContactDialog } from './ContactDialog';
import { Button } from '../ui/button';

// Define the components that can be used in MDX
const MdxComponents = (dictionary: Dictionary): MDXRemoteProps['components'] => ({
    Image: ({ alt, src, ...props }: { alt: string, src: string }) => (
        <div className="my-8 flex justify-center">
            <figure className="inline-block">
                <Image
                    alt={alt}
                    src={src}
                    width={400} // Default width, can be overridden by props
                    height={400} // Default height, can be overridden by props
                    {...props}
                    className="rounded-lg shadow-xl"
                    unoptimized
                />
                {alt && <figcaption className="mt-2 text-center text-sm text-muted-foreground">{alt}</figcaption>}
            </figure>
        </div>
    ),
    Contact: () => <ContactSection dictionary={dictionary} />,
    ResultsCarousel: (props: { title: string; imageUrls?: string[]; imageIds?: string[] }) => {
        // The imageUrls prop is already an array if passed from MDX like imageUrls={['url1', 'url2']}
        // No need to split a string.
        return <ResultsCarousel title={props.title} imageUrls={props.imageUrls} imageIds={props.imageIds} />;
    },
    Callout: (props: any) => <Callout {...props} />,
    ContactButton: ({ label = "Book a Free Consultation" }: { label?: string }) => (
        <div className="my-6 text-center">
            <ContactDialog 
                dictionary={dictionary}
                trigger={<Button size="lg">{label}</Button>}
            />
        </div>
    )
});


export default MdxComponents;
