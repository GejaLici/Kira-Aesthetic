import type { ServiceContent } from '@/lib/services';

const teethWhiteningContent: ServiceContent = {
    description: [
        "Professional teeth whitening is a fast, safe, and non-invasive cosmetic dental procedure designed to erase years of staining and discoloration. Over time, factors like the natural aging process and the consumption of coffee, tea, red wine, or tobacco can dull the brilliance of your smile. Professional whitening uses medical-grade bleaching agents to break down deep-set pigments within the enamel, revealing a smile that is significantly brighter and more youthful.",
        "While over-the-counter products often provide inconsistent results and can cause gum irritation, our clinic-led treatments are customized to your specific dental profile. By using high-concentration gels and advanced light-activation technology, we ensure a uniform result that protects your sensitive soft tissues while achieving a dramatic transformation in a single session."
    ],
    benefits: [
        "Instant Transformation: Achieve a smile several shades whiter in just one hour.",
        "Precision & Safety: Custom-fitted trays and protective barriers prevent gum irritation.",
        "Long-Lasting Results: Professional-grade formulas provide more durable results than drugstore alternatives.",
        "Confidence Boost: A brighter smile is often associated with health, vitality, and improved self-esteem.",
        "Tailored Solutions: Choose between a rapid in-office procedure or a convenient professional home kit."
    ],
    quickFacts: {
        procedureTime: '60 minutes (In-office) or 10-14 days (Take-home)',
        anesthesia: 'None required',
        recoveryTime: 'None; temporary sensitivity may last 24-48 hours',
        results: 'Vibrant, whitened smile visible immediately after treatment',
    },
    sections: [
        {
            id: 'whitening-options',
            title: 'Our Advanced Whitening Technologies',
            content: `
                <p>We offer the world's leading whitening protocols to ensure maximum efficacy with minimal sensitivity:</p>
                <ul>
                    <li><strong>Laser-Activated In-Office Whitening:</strong> The gold standard for speed. A powerful peroxide gel is applied and activated by a specialized light source to accelerate the bleaching process, perfect for special events.</li>
                    <li><strong>Custom Take-Home Kits:</strong> We create laboratory-grade, custom-molded trays that fit your teeth perfectly. When used with our professional whitening gel for 30–60 minutes a day, you achieve professional results with total flexibility.</li>
                    <li><strong>Internal Whitening:</strong> For individual teeth that have darkened due to trauma or root canal therapy, we offer specialized internal bleaching to match the tooth to its neighbors.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Your Whitening Journey',
            content: `
                <p>To ensure the best outcome, we follow a strict clinical protocol:</p>
                <ol>
                    <li><strong>Examination:</strong> We check for cavities or gum recession, as whitening agents should only be applied to healthy teeth.</li>
                    <li><strong>Prophylaxis (Cleaning):</strong> We recommend a professional cleaning before whitening to remove plaque and tartar, ensuring the gel has direct contact with the enamel.</li>
                    <li><strong>Shade Selection:</strong> We record your current tooth shade to track the progress and help you choose a natural-looking target shade.</li>
                    <li><strong>Protection:</strong> Your gums and lips are isolated with a protective barrier to prevent contact with the whitening gel.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Maintaining Your Results',
            content: `
                <p>While teeth whitening is not permanent, you can extend the life of your results with these simple habits:</p>
                <ul>
                    <li><strong>The "White Diet":</strong> Avoid highly pigmented foods (berries, soy sauce) and drinks (coffee, red wine) for the first 48 hours after treatment.</li>
                    <li><strong>Oral Hygiene:</strong> Continue brushing and flossing twice daily to prevent new surface stains from settling.</li>
                    <li><strong>Touch-Ups:</strong> Use your custom home trays for a 1-night touch-up every 6 months to maintain the peak brightness of your smile.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Concierge Care for Global Smiles',
            content: `
                <p>We provide a premium experience for patients traveling for cosmetic dentistry:</p>
                <ul>
                    <li><strong>Express Service:</strong> We prioritize in-office whitening for international travelers so you can enjoy your new smile for the rest of your trip.</li>
                    <li><strong>Home Kit Preparation:</strong> We can take your impressions on day one and have your custom trays ready within 24 hours.</li>
                    <li><strong>Logistics Support:</strong> Assistance with airport transfers and luxury accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                </ul>
            `
        }
    ]
};

export default teethWhiteningContent;