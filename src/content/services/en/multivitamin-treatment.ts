import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
    description: [
        "Multivitamin treatment, a specialized form of mesotherapy, is a biological skin-revitalization procedure that delivers a potent 'cocktail' of essential nutrients directly into the dermis. Unlike topical skincare that often struggles to bypass the skin's protective barrier, mesotherapy uses micro-injections to ensure that vitamins, minerals, amino acids, and antioxidants reach the deeper layers where they can effectively stimulate cellular repair and renewal.",
        "This treatment acts as a deep-reaching 'skin food,' providing the building blocks necessary for collagen and elastin production. It is an ideal solution for those looking to combat the first signs of aging, environmental stress, or a dull, tired complexion. The result is a profoundly hydrated, firmer, and more luminous skin that radiates health from the inside out."
    ],
    benefits: [
        "Instant Radiance: Revitalizes dull skin for a visible 'lit-from-within' glow.",
        "Deep Hydration: Plumps the skin from within using hyaluronic acid and minerals.",
        "Antioxidant Protection: Neutralizes free radicals to prevent premature aging and environmental damage.",
        "Improved Elasticity: Stimulates the natural production of collagen and elastin fibers.",
        "Even Tone: Helps to brighten the complexion and smooth out minor texture irregularities."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutes',
        anesthesia: 'Optional topical numbing cream',
        recoveryTime: 'Immediate; mild redness subsides within 24 hours',
        results: 'Immediate hydration; cumulative improvement over 3-6 sessions',
    },
    sections: [
        {
            id: 'bespoke-cocktails',
            title: 'Customized Nutritive Cocktails',
            content: `
                <p>We do not believe in a one-size-fits-all approach. Every treatment is custom-blended to address your specific skin biological needs:</p>
                <ul>
                    <li><strong>Vitamin C & E:</strong> Powerful antioxidants for brightening and protecting the skin barrier.</li>
                    <li><strong>Vitamin A (Retinoids):</strong> To encourage cell turnover and repair fine lines.</li>
                    <li><strong>Hyaluronic Acid:</strong> For intense moisture retention and immediate plumping.</li>
                    <li><strong>Amino Acids & Peptides:</strong> The essential proteins for building new, firm skin tissue.</li>
                    <li><strong>Minerals (Magnesium, Zinc):</strong> To balance skin health and reduce inflammation.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'What to Expect During the Session',
            content: `
                <p>Mesotherapy is a quick, well-tolerated procedure that integrates easily into any schedule:</p>
                <ol>
                    <li><strong>Preparation:</strong> The skin is sanitized and, if desired, a light numbing cream is applied to the target area.</li>
                    <li><strong>Micro-Injections:</strong> Using an ultra-fine needle or a specialized meso-gun, the customized serum is delivered through a series of rapid, superficial injections.</li>
                    <li><strong>Absorption:</strong> A gentle massage is performed to ensure even distribution of the nutrients throughout the dermal layer.</li>
                    <li><strong>Protection:</strong> We finish with a cooling serum and high-factor SPF to protect the skin.</li>
                </ol>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Optimal Results & Maintenance',
            content: `
                <p>While a single session provides an immediate refresh, mesotherapy is designed as a cumulative therapy:</p>
                <ul>
                    <li><strong>Initial Phase:</strong> A series of 3 to 6 sessions, spaced 2 to 4 weeks apart, is recommended to fully saturate the skin with nutrients.</li>
                    <li><strong>Maintenance:</strong> One session every 3 to 6 months is usually sufficient to maintain the glow and continue the anti-aging benefits.</li>
                    <li><strong>Target Areas:</strong> This treatment is highly effective not just for the face, but also for the neck, décolletage, and the backs of the hands.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Seamless Care for International Clients',
            content: `
                <p>We provide a premium experience for patients traveling for our specialized aesthetic protocols:</p>
                <ul>
                    <li><strong>Comprehensive Support:</strong> Full assistance with travel logistics, airport transfers, and lodging in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Follow-up:</strong> You have the flexibility to schedule your maintenance sessions at any of our clinic locations across the region.</li>
                    <li><strong>Expert Staff:</strong> All treatments are performed by medical aestheticians or physicians specialized in injectable skin rejuvenation.</li>
                </ul>
            `
        }
    ]
};

export default multivitaminTreatmentContent;