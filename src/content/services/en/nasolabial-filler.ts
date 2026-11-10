import type { ServiceContent } from '@/lib/services';

const liquidRhinoplastyContent: ServiceContent = {
    description: [
        "Non-surgical nose reshaping, widely known as 'Liquid Rhinoplasty,' is a sophisticated non-invasive procedure that uses injectable dermal fillers to transform the nasal profile instantly. By strategically placing hyaluronic acid fillers at precise anatomical points, we can camouflage dorsal humps, lift a drooping tip, and correct minor asymmetries without the need for surgery, general anesthesia, or a lengthy recovery period.",
        "This treatment is ideal for individuals seeking cosmetic refinement rather than structural or functional changes. Often called the '15-minute nose job,' it offers a safe and reversible way to harmonize the nose with the rest of the facial features. Because the nose is an anatomically complex area, our clinic ensures this procedure is performed exclusively by our most senior board-certified physicians to prioritize both artistic precision and patient safety."
    ],
    benefits: [
        "Instant Transformation: See your refined profile immediately after the 15-minute session.",
        "No Downtime: Return to work and daily activities right away without surgical bandages.",
        "Profile Balancing: Smooths out bumps and humps for a straighter, more elegant nasal bridge.",
        "Tip Refinement: Effectively lifts a 'drooping' tip for a more youthful and alert appearance.",
        "Reversible & Safe: Uses hyaluronic acid fillers that can be adjusted or dissolved if desired."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutes',
        anesthesia: 'Topical numbing cream + lidocaine-infused filler',
        recoveryTime: 'Immediate; minor swelling for 2-3 days',
        results: 'Visible instantly; lasts 9 - 18 months',
    },
    sections: [
        {
            id: 'clinical-precision',
            title: 'Precision Sculpting & Anatomical Safety',
            content: `
                <p>The nose is one of the most vascular areas of the face, making physician expertise the most critical factor in a successful liquid rhinoplasty:</p>
                <ul>
                    <li><strong>Strategic Placement:</strong> We don't just add volume; we use filler to manipulate light and shadow, making the nose appear smaller and more symmetrical.</li>
                    <li><strong>Premium Structural Fillers:</strong> We select high-G-prime fillers that offer the necessary 'lift' and structural integrity to maintain the new shape against the tension of the skin.</li>
                    <li><strong>Safety First:</strong> Our physicians utilize advanced injection techniques (including the use of cannulas where appropriate) to protect the complex network of blood vessels in the nasal region.</li>
                </ul>
            `
        },
        {
            id: 'ideal-candidates',
            title: 'Is Liquid Rhinoplasty Right for You?',
            content: `
                <p>While powerful, the liquid approach is best suited for specific aesthetic corrections:</p>
                <ul>
                    <li><strong>Dorsal Humps:</strong> Filling the area above and below a bump to create the illusion of a perfectly straight bridge.</li>
                    <li><strong>Nasal Tip Projection:</strong> Adding support to the base or tip to rotate the nose upward.</li>
                    <li><strong>Symmetry Correction:</strong> Filling 'dents' or deviations to make the nose appear centered and straight.</li>
                    <li><strong>Post-Surgical Refinement:</strong> Addressing minor irregularities that may persist after a traditional surgical rhinoplasty.</li>
                </ul>
            `
        },
        {
            id: 'aftercare-longevity',
            title: 'Aftercare and Result Maintenance',
            content: `
                <p>To ensure the filler settles perfectly and stays in place, follow these post-treatment guidelines:</p>
                <ol>
                    <li><strong>Pressure Avoidance:</strong> Do not wear heavy glasses or sunglasses for the first 1–2 weeks, as they can indent the soft filler.</li>
                    <li><strong>Gentle Care:</strong> Avoid touching, massaging, or applying firm pressure to the nose for at least 48 hours.</li>
                    <li><strong>Activity:</strong> Refrain from strenuous exercise and high-heat environments (saunas, steam rooms) for the first 2 days to minimize swelling.</li>
                    <li><strong>Longevity:</strong> Because the nose is a low-movement area of the face, results typically last longer than lip or cheek fillers, often exceeding one year.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Seamless Care for Global Clients',
            content: `
                <p>We provide a comprehensive experience for our international patients seeking world-class facial contouring:</p>
                <ul>
                    <li><strong>Coordinated Travel:</strong> Assistance with airport transfers and premium accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Continuity:</strong> Since results are temporary, you can schedule your maintenance 'top-up' sessions at any of our regional clinic locations.</li>
                    <li><strong>Expert Assurance:</strong> All liquid rhinoplasty procedures are performed by board-certified physicians with specialized training in advanced nasal aesthetics.</li>
                </ul>
            `
        }
    ]
};

export default liquidRhinoplastyContent;