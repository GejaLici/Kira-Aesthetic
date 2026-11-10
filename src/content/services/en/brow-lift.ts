import type { ServiceContent } from '@/lib/services';

const browLiftContent: ServiceContent = {
    description: [
        "A brow lift, also known as a forehead lift, is a specialized facial rejuvenation procedure designed to correct sagging skin on the forehead, eyebrows, and upper eyelids. By repositioning the soft tissue and skin of the brow area, this surgery effectively eliminates deep forehead creases, 'frown lines' between the eyes, and the heavy, hooded look that often accompanies aging.",
        "Our approach to forehead rejuvenation focuses on restoring a naturally refreshed and alert appearance. Using advanced, minimally invasive techniques such as endoscopy, we can lift the brow with precision, avoiding the 'surprised' look of traditional methods. This procedure not only smooths the upper face but also opens up the eye area, making you look more rested, approachable, and youthful."
    ],
    benefits: [
        "Corrects sagging eyebrows that contribute to a tired or sad expression.",
        "Smooths deep horizontal forehead wrinkles and vertical frown lines.",
        "Reduces excess skin hooding over the upper eyelids.",
        "Restores a more alert, vibrant, and youthful upper face contour.",
        "Minimally invasive techniques ensure discreet scarring hidden within the hairline."
    ],
    quickFacts: {
        procedureTime: '1 - 2 hours',
        anesthesia: 'general anesthesia or twilight sedation',
        recoveryTime: '7 - 14 days for social activities',
        results: 'long-lasting rejuvenation (5-10 years on average)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Modern Lifting Techniques',
            content: `
                <p>We utilize various methods to address specific degrees of aging and anatomical needs:</p>
                <ul>
                    <li><strong>Endoscopic Brow Lift:</strong> The most advanced method. Using a tiny camera and small incisions hidden in the hair, we lift the entire forehead with minimal trauma and rapid recovery.</li>
                    <li><strong>Temporal (Lateral) Lift:</strong> Ideal for patients primarily concerned with the outer tail of the eyebrow and 'crow’s feet,' providing a subtle 'cat-eye' refresh.</li>
                    <li><strong>Coronal Lift:</strong> A traditional approach reserved for patients with significant skin laxity or deep-set wrinkles requiring more extensive correction.</li>
                </ul>
            `
        },
        {
            id: 'combined-procedures',
            title: 'Total Facial Harmony',
            content: `
                <p>A brow lift is frequently combined with other procedures for a more balanced facial rejuvenation:</p>
                <ul>
                    <li><strong>Blepharoplasty:</strong> Combining a brow lift with eyelid surgery provides the ultimate 'eye-opening' result.</li>
                    <li><strong>Facelift:</strong> Addressing the upper, middle, and lower face simultaneously ensures a cohesive and natural youthfulness.</li>
                    <li><strong>Injectables:</strong> Botox or dermal fillers can be used post-operatively to maintain smoothness and refine fine lines.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Your Recovery & Aftercare',
            content: `
                <p>Recovery from a modern brow lift is generally straightforward:</p>
                <ol>
                    <li><strong>Post-Op Support:</strong> You may have a light wrap around your forehead for 24-48 hours to reduce initial swelling.</li>
                    <li><strong>Elevation:</strong> Sleeping with your head elevated is critical for the first week to minimize bruising and puffiness around the eyes.</li>
                    <li><strong>Return to Work:</strong> Most patients return to their professional and social lives within 10 days, once sutures or clips are removed.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-care',
            title: 'International Concierge Services',
            content: `
                <p>We are dedicated to providing a seamless surgical experience for our global clientele:</p>
                <ul>
                    <li><strong>Travel & Lodging:</strong> Full coordination for local transportation and comfortable accommodation near our clinic.</li>
                    <li><strong>Flexible Follow-up:</strong> Patients have the convenience of attending follow-up check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Expert Monitoring:</strong> Continuous digital support from our medical team throughout your healing process.</li>
                </ul>
            `
        }
    ]
};

export default browLiftContent;