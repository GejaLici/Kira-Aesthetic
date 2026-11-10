import type { ServiceContent } from '@/lib/services';

const faceliftContent: ServiceContent = {
    description: [
        "A facelift, or rhytidectomy, is a premier surgical procedure designed to reverse the most visible signs of facial aging. Over time, factors like gravity, sun exposure, and loss of skin elasticity lead to sagging tissues, deep creases, and a loss of jawline definition. A facelift meticulously addresses these concerns by tightening underlying muscles, repositioning facial fat, and removing excess skin to restore a firmer, more youthful contour.",
        "Modern facelift surgery has evolved beyond simple skin tightening. Our approach focuses on deep-layer structural rejuvenation to ensure results that are elegant, long-lasting, and—most importantly—natural-looking. By restoring the foundation of the face, we help you achieve a refreshed version of yourself, avoiding the 'pulled' appearance associated with older techniques."
    ],
    benefits: [
        "Eliminates sagging skin and reduces the appearance of 'jowls' along the jawline.",
        "Smooths deep creases, such as the nasolabial folds between the nose and mouth.",
        "Tightens underlying facial muscles (SMAS) for a durable, internal lift.",
        "Restores youthful volume and definition to the mid-face and cheeks.",
        "Provides comprehensive rejuvenation that can make you look 10–15 years younger."
    ],
    quickFacts: {
        procedureTime: '3 - 6 hours',
        anesthesia: 'general anesthesia or deep sedation',
        recoveryTime: '2 - 3 weeks for social activities; several months for final refinement',
        results: 'Long-lasting rejuvenation (typically 10+ years)',
    },
    sections: [
        {
            id: 'advanced-techniques',
            title: 'Our Sophisticated Surgical Techniques',
            content: `
                <p>We specialize in multi-layered facial surgery that treats the face as a dynamic three-dimensional structure:</p>
                <ul>
                    <li><strong>SMAS Facelift:</strong> By lifting the Superficial Musculoaponeurotic System, we provide a structural lift that lasts longer and looks more natural than skin-only procedures.</li>
                    <li><strong>Deep Plane Facelift:</strong> An advanced technique that repositions the entire complex of skin and muscle as a single unit, ideal for significant mid-face rejuvenation.</li>
                    <li><strong>Mini Facelift:</strong> A targeted, less invasive option for patients with early signs of aging, focusing on the lower face and jawline.</li>
                    <li><strong>Neck Lift Integration:</strong> Often combined with a facelift to eliminate "turkey neck" and muscle banding for a seamless transition between the face and profile.</li>
                </ul>
            `
        },
        {
            id: 'surgical-journey',
            title: 'Understanding the Procedure',
            content: `
                <p>A facelift is a highly personalized journey involving meticulous surgical planning:</p>
                <ol>
                    <li><strong>Inconspicuous Incisions:</strong> Incisions are strategically hidden within the natural contours of the ear and along the hairline to ensure they are virtually invisible once healed.</li>
                    <li><strong>Structural Repositioning:</strong> The deeper tissues are lifted and secured in a more youthful, vertical position.</li>
                    <li><strong>Skin Redraping:</strong> Excess skin is trimmed, and the remaining skin is gently redraped without tension to prevent a distorted look.</li>
                    <li><strong>Immediate Post-Op:</strong> An overnight stay is usually required to ensure your comfort and safety under professional medical observation.</li>
                </ol>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Your Recovery and Aftercare',
            content: `
                <p>Patience is key to achieving the best results during the healing phase:</p>
                <ul>
                    <li><strong>The First Week:</strong> Focus on rest with your head elevated. Bandages and any temporary drains are typically removed within the first few days.</li>
                    <li><strong>Weeks 2-3:</strong> Bruising and major swelling subside significantly. Most patients feel confident returning to social settings and non-strenuous work.</li>
                    <li><strong>Long-term Healing:</strong> While you will look refreshed quickly, final refinements in facial contour and incision softening continue for 6 to 12 months.</li>
                </ul>
            `
        },
        {
            id: 'international-assistance',
            title: 'Global Care & Support',
            content: `
                <p>We provide a world-class experience for our international clientele traveling for facial rejuvenation:</p>
                <ul>
                    <li><strong>Full Concierge:</strong> Comprehensive assistance with airport transfers, local transportation, and premium accommodation.</li>
                    <li><strong>Multi-Country Continuity:</strong> We offer the unique flexibility of follow-up care and suture removal in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Expert Supervision:</strong> Direct access to our medical team throughout your stay and during your remote recovery phase.</li>
                </ul>
            `
        }
    ]
};

export default faceliftContent;