import type { ServiceContent } from '@/lib/services';

const brazilianButtLiftContent: ServiceContent = {
    description: [
        "A Brazilian Butt Lift (BBL) is a sophisticated body contouring procedure that enhances the volume, shape, and lift of the buttocks using your own natural fat. Unlike implants, the BBL utilizes fat harvested via liposuction from donor areas—such as the abdomen, flanks, or thighs—to create a more curvaceous and balanced silhouette while simultaneously slimming the areas you want to refine.",
        "The beauty of the BBL lies in its dual-benefit: it offers high-definition body sculpting in one area and natural augmentation in another. Because it uses your body's own tissue, the results look and feel incredibly natural. Our approach focuses on creating a harmonious 'hourglass' figure, prioritizing patient safety and long-term fat cell survival for a result that complements your unique proportions."
    ],
    benefits: [
        "Natural-looking enhancement using your own body fat instead of implants.",
        "Dual-action body contouring: slims donor areas while augmenting the buttocks.",
        "Improved body proportions and a more defined 'hourglass' figure.",
        "Long-lasting results as the transferred fat cells integrate permanently.",
        "Minimal scarring due to the use of tiny liposuction and injection cannulas."
    ],
    quickFacts: {
        procedureTime: '2 - 5 hours',
        anesthesia: 'general anesthesia',
        recoveryTime: '2 - 3 weeks (initial); 6-8 weeks (full activity)',
        results: 'visible after swelling subsides; final at 3-6 months',
    },
    sections: [
        {
            id: 'bbl-technique',
            title: 'Precision Fat Grafting & Sculpting',
            content: `
                <p>A successful BBL is an art form that requires meticulous technique at every stage:</p>
                <ul>
                    <li><strong>Gentle Harvesting:</strong> We use advanced liposuction to carefully extract fat cells while preserving their integrity.</li>
                    <li><strong>Purification:</strong> The harvested fat is processed to isolate the purest, healthiest cells for transplantation.</li>
                    <li><strong>Strategic Injection:</strong> Our surgeons inject the fat into the subcutaneous layers (above the muscle) to ensure the highest safety standards and the smoothest possible contour.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Safety Protocols & Preparation',
            content: `
                <p>Safety is our absolute priority. The BBL is a complex surgery that demands rigorous pre-operative planning:</p>
                <ul>
                    <li><strong>Comprehensive Screening:</strong> Full blood panels, ECG, and physical exams to ensure you are a fit candidate.</li>
                    <li><strong>Stable Weight:</strong> Candidates should be at a stable weight, as significant fluctuations can alter the final shape.</li>
                    <li><strong>Smoking Cessation:</strong> Smoking is strictly prohibited for 4-6 weeks before and after surgery, as it significantly reduces fat survival.</li>
                </ul>
            `
        },
        {
            id: 'recovery-rules',
            title: 'Critical Recovery Guidelines',
            content: `
                <p>The success of your BBL depends heavily on post-operative care, specifically protecting the new fat cells:</p>
                <ol>
                    <li><strong>The No-Sitting Rule:</strong> You must avoid sitting or lying directly on your buttocks for at least 2-3 weeks. A 'BBL pillow' is required for necessary sitting.</li>
                    <li><strong>Compression:</strong> A specialized garment must be worn on the donor areas to reduce swelling and support skin retraction.</li>
                    <li><strong>Sleeping Position:</strong> You must sleep on your stomach or side during the initial healing phase.</li>
                    <li><strong>Walking:</strong> Early, gentle walking is encouraged to promote circulation.</li>
                </ol>
            `
        },
        {
            id: 'international-logistics',
            title: 'International Patient Support',
            content: `
                <p>We provide a comprehensive ecosystem for our global clients:</p>
                <ul>
                    <li><strong>Travel & Stay:</strong> Full assistance with transportation and premium accommodation near our surgical center.</li>
                    <li><strong>Flexible Follow-up:</strong> You can choose to complete your post-operative check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Long-term Care:</strong> Direct access to your surgical team for monitoring your results as the fat 'settles' over the first 6 months.</li>
                </ul>
            `
        }
    ]
};

export default brazilianButtLiftContent;