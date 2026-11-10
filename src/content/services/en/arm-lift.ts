import type { ServiceContent } from '@/lib/services';

const armLiftContent: ServiceContent = {
    description: [
        "An arm lift, or brachioplasty, is a transformative surgical procedure designed to reshape the upper arms by removing sagging skin and stubborn fat deposits. Often referred to as 'bat wings,' excess tissue in the arms can be a result of significant weight loss, aging, or genetics, and is frequently resistant to diet and exercise alone.",
        "Our approach to brachioplasty focuses on restoring a firm, youthful, and well-proportioned contour to the upper body. By strategically tightening the underlying supportive tissues and redraping the skin, we achieve a smoother and more defined arm profile. This procedure not only enhances your physical appearance but also restores the confidence to wear sleeveless clothing and feel comfortable in your own skin."
    ],
    benefits: [
        "Removal of loose, sagging skin ('bat wings') for a tighter look.",
        "Reduction of stubborn fat deposits, often enhanced with liposuction.",
        "Improved arm definition and a more proportionate body silhouette.",
        "Long-lasting results that significantly improve upper body aesthetics.",
        "Boosted self-confidence and increased comfort in various clothing styles."
    ],
    quickFacts: {
        procedureTime: '2 - 3 hours',
        anesthesia: 'general anesthesia',
        recoveryTime: '4 - 6 weeks for full activity',
        results: 'long-lasting (best maintained with stable weight)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Tailored Surgical Techniques',
            content: `
                <p>We offer different incision patterns depending on the degree of skin laxity and fat distribution:</p>
                <ul>
                    <li><strong>Full Brachioplasty:</strong> The most common method, involving an incision from the armpit to the elbow. This is ideal for significant excess skin.</li>
                    <li><strong>Limited-Incision Arm Lift:</strong> For patients with moderate laxity, incisions may be confined to the armpit area, resulting in less visible scarring.</li>
                    <li><strong>Combined Liposuction:</strong> We frequently utilize liposuction alongside skin excision to refine the arm's shape and ensure a smooth, athletic contour.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Preparation and Patient Safety',
            content: `
                <p>Ensuring an optimal outcome begins with a comprehensive pre-operative phase:</p>
                <ul>
                    <li><strong>Medical Screening:</strong> Includes blood work, ECG, and a detailed physical examination.</li>
                    <li><strong>Lifestyle Adjustments:</strong> Patients are required to stop smoking and avoid blood-thinning medications for several weeks before surgery.</li>
                    <li><strong>Weight Stability:</strong> For best results, it is recommended that patients are at a stable, healthy weight prior to the procedure.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Recovery and Post-Operative Care',
            content: `
                <p>A smooth recovery is essential for achieving the best aesthetic results:</p>
                <ol>
                    <li><strong>Compression:</strong> You will wear specialized compression sleeves for 4–6 weeks to minimize swelling and support the new contours.</li>
                    <li><strong>Activity:</strong> While light walking is encouraged immediately, heavy lifting and overhead arm movements must be avoided for at least a month.</li>
                    <li><strong>Scar Management:</strong> We provide detailed protocols for scar care, including silicone gels and sun protection, to help incisions fade beautifully over time.</li>
                </ol>
            `
        },
        {
            id: 'international-patients',
            title: 'Special Support for our Patients',
            content: `
                <p>We are dedicated to providing a seamless experience regardless of where you call home:</p>
                <ul>
                    <li><strong>International Patients:</strong> We offer full assistance with accommodation and local transport to make your surgical journey stress-free.</li>
                    <li><strong>Follow-up in Italy:</strong> For our Italian patients, we provide the unique convenience of follow-up consultations and check-ups directly in Italy, ensuring continuity of care close to home.</li>
                </ul>
            `
        }
    ]
};

export default armLiftContent;