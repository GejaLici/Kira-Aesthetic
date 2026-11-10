import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
    description: [
        "Microdermabrasion is a non-invasive skin resurfacing treatment designed to revitalize and polish the skin. By utilizing a specialized diamond-tipped applicator or fine abrasive crystals, this procedure gently removes the thick, outer layer of dead skin cells (the stratum corneum). This mechanical exfoliation reveals the fresher, more radiant skin underneath and triggers the body's natural healing response to produce more collagen.",
        "Known as the 'lunchtime facial,' microdermabrasion is a quick and painless way to address a variety of surface-level skin imperfections. Whether you are dealing with dullness, fine lines, or uneven texture, this treatment provides an instant glow and smoother feel with absolutely no downtime, making it a perfect maintenance procedure for a busy lifestyle."
    ],
    benefits: [
        "Instant radiance: Removes dull, dead skin cells for an immediate healthy glow.",
        "Refines texture: Smooths out rough patches and softens the appearance of fine lines.",
        "Unclogs pores: Effectively clears surface debris to reduce the risk of breakouts.",
        "Enhances product absorption: Allows your skincare serums and moisturizers to penetrate more deeply.",
        "Evens skin tone: Helps fade mild hyperpigmentation, sun spots, and age spots over time."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutes',
        anesthesia: 'None required (painless)',
        recoveryTime: 'None; slight redness may last 1-2 hours',
        results: 'Immediate brightness; cumulative results after a series of sessions',
    },
    sections: [
        {
            id: 'clinical-approach',
            title: 'Our Customized Exfoliation Approach',
            content: `
                <p>We treat microdermabrasion as a clinical skincare step, ensuring the intensity is perfectly matched to your skin's sensitivity:</p>
                <ul>
                    <li><strong>Professional Grade Equipment:</strong> We use high-end systems that offer adjustable suction and abrasion levels for a consistent and safe result.</li>
                    <li><strong>Skin Analysis:</strong> Before beginning, our aestheticians evaluate your skin type to ensure microdermabrasion is the most effective choice for your concerns.</li>
                    <li><strong>Nutrient Infusion:</strong> Post-exfoliation, the skin is primed to absorb nutrients. We apply specialized serums rich in antioxidants and hyaluronic acid to calm and hydrate the skin.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'What to Expect During the Session',
            content: `
                <p>The experience is often described as feeling like a gentle 'sanding' or a rough lick from a cat's tongue:</p>
                <ol>
                    <li><strong>Cleansing:</strong> The skin is thoroughly cleansed of all makeup and oils.</li>
                    <li><strong>Exfoliation:</strong> The aesthetician moves the handpiece over the target areas, using vacuum suction to lift away the debris.</li>
                    <li><strong>Hydration & Protection:</strong> A soothing mask or cooling serum is applied, followed by a high-SPF sunscreen to protect the newly exposed skin layers.</li>
                </ol>
            `
        },
        {
            id: 'optimal-results',
            title: 'Maintaining Your Glow',
            content: `
                <p>While one session provides a visible refresh, long-term skin health is achieved through consistency:</p>
                <ul>
                    <li><strong>Recommended Series:</strong> For concerns like fine lines or mild scarring, we typically suggest a series of 5 to 10 treatments.</li>
                    <li><strong>Spacing:</strong> Sessions are ideally spaced 2 to 4 weeks apart to align with your skin's natural 28-day regeneration cycle.</li>
                    <li><strong>Sun Safety:</strong> Because the protective outer layer is removed, your skin will be more sensitive to UV rays. Daily sunscreen use is mandatory following treatment.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'International Patient Experience',
            content: `
                <p>For our clients traveling from abroad, we ensure your visit is productive and stress-free:</p>
                <ul>
                    <li><strong>Treatment Integration:</strong> Microdermabrasion is often combined with other procedures like chemical peels or laser treatments for a total skin overhaul.</li>
                    <li><strong>Travel Support:</strong> We offer assistance with transportation and premium accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Cross-Border Care:</strong> You can begin your treatment series in one location and continue follow-ups in any of our other regional clinics.</li>
                </ul>
            `
        }
    ]
};

export default microdermabrasionContent;