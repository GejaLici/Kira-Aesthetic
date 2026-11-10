import type { ServiceContent } from '@/lib/services';

const injectionLipolysisContent: ServiceContent = {
    description: [
        "Injection lipolysis, commonly referred to as fat-dissolving injections, is a minimally invasive treatment designed to eliminate stubborn, localized fat deposits that resist diet and exercise. This procedure utilizes specialized compounds, such as deoxycholic acid, to break down the membranes of fat cells. Once the fat cells are disrupted, the body naturally metabolizes and eliminates the released fatty acids through the lymphatic system.",
        "This treatment is an ideal non-surgical solution for precision body contouring. It is specifically intended for 'spot reduction' in areas like the chin, abdomen, and thighs. While not a weight-loss substitute, it provides a powerful way to refine your silhouette and achieve a more sculpted appearance with minimal downtime."
    ],
    benefits: [
        "Non-surgical: Achieves fat reduction without incisions, scars, or general anesthesia.",
        "Targeted contouring: Precisely treats difficult areas like the double chin or bra fat.",
        "Permanent results: Once fat cells are destroyed, they do not return to the treated area.",
        "Minimal downtime: Most patients return to daily activities immediately after the session.",
        "Natural elimination: Works with the body's own metabolic processes to clear fat."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutes',
        anesthesia: 'None (solution contains numbing agents)',
        recoveryTime: 'Swelling for 3 - 7 days; no downtime from work',
        results: 'Visible after 6 - 8 weeks; typically requires 2-4 sessions',
    },
    sections: [
        {
            id: 'treatment-areas',
            title: 'Common Treatment Areas',
            content: `
                <p>Injection lipolysis is highly effective for small pockets of fat that distort the body's natural lines:</p>
                <ul>
                    <li><strong>Submental Fat:</strong> Eliminating a 'double chin' to sharpen the jawline.</li>
                    <li><strong>Body Contouring:</strong> Targeting love handles, lower abdominal pouches, and 'saddlebags' on the thighs.</li>
                    <li><strong>Specific Fat Pockets:</strong> Reducing bra fat rolls, inner knee fat, and back fat.</li>
                    <li><strong>Post-Surgical Refinement:</strong> Smoothing out minor irregularities following liposuction.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'What to Expect During Treatment',
            content: `
                <p>The process is quick and clinical, focused on safety and even distribution:</p>
                <ol>
                    <li><strong>Mapping:</strong> The practitioner marks the treatment area in a grid-like pattern to ensure precise injection intervals.</li>
                    <li><strong>Injections:</strong> A series of small, shallow injections are made into the fat layer. You may feel a brief stinging or warm sensation.</li>
                    <li><strong>Inflammatory Response:</strong> Immediately after, the area will become red and swollen. This is a positive sign that the lipolysis process has been triggered.</li>
                </ol>
            `
        },
        {
            id: 'recovery-timeline',
            title: 'Recovery and Result Maturation',
            content: `
                <p>Unlike surgical procedures, the results of lipolysis appear gradually as the body processes the fat:</p>
                <ul>
                    <li><strong>Days 1-5:</strong> Significant swelling and tenderness are expected, particularly when treating the chin area.</li>
                    <li><strong>Week 2-4:</strong> The initial inflammation subsides, and the body begins the gradual process of lymphatic drainage.</li>
                    <li><strong>Week 6-8:</strong> The contouring effect becomes visible. This is the optimal time to evaluate if a follow-up session is needed.</li>
                    <li><strong>Maintenance:</strong> To preserve results, it is important to maintain a stable weight through healthy lifestyle habits.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Concierge Care for Global Patients',
            content: `
                <p>We ensure a seamless experience for patients traveling for non-surgical body contouring:</p>
                <ul>
                    <li><strong>Coordinated Sessions:</strong> For patients visiting from abroad, we can plan treatment cycles that fit your travel schedule.</li>
                    <li><strong>Travel Support:</strong> Assistance with transportation and premium lodging in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Follow-up:</strong> You can choose any of our clinic locations for your subsequent sessions or check-ups, ensuring continuity of care across borders.</li>
                </ul>
            `
        }
    ]
};

export default injectionLipolysisContent;