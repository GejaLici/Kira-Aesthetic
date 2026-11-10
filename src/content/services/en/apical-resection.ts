import type { ServiceContent } from '@/lib/services';

const apicoectomyContent: ServiceContent = {
    description: [
        "An apicoectomy, also known as root-end surgery, is a specialized endodontic microsurgical procedure designed to save a natural tooth when standard root canal treatments have failed or are not feasible. By addressing the infection directly at the root tip (the apex), we can eliminate persistent inflammation and promote bone healing without extracting the tooth.",
        "Using advanced microsurgical techniques, our specialists remove the infected tissue and the very tip of the root, sealing the canal from the bottom up. This procedure is often the last line of defense to preserve your natural smile, preventing the need for dental implants or bridges by resolving deep-seated infections that traditional methods cannot reach."
    ],
    benefits: [
        "Saves the natural tooth from extraction and replacement.",
        "Resolves persistent infections and chronic dental pain.",
        "Highly precise treatment using surgical microscopes.",
        "Promotes rapid healing of the surrounding jawbone.",
        "Effective solution for complex root structures and hidden canals."
    ],
    quickFacts: {
        procedureTime: '30 - 90 minutes',
        anesthesia: 'local anesthesia (sedation available)',
        recoveryTime: '2 - 7 days for full tissue healing',
        results: 'permanent resolution of root-end infection',
    },
    sections: [
        {
            id: 'why-apicoectomy',
            title: 'When is an Apicoectomy Necessary?',
            content: `
                <p>While most root canals are successful, certain conditions require a surgical approach to save the tooth:</p>
                <ul>
                    <li><strong>Persistent Infection:</strong> When bacteria remain in tiny branching canals at the root tip after a standard root canal.</li>
                    <li><strong>Complex Anatomy:</strong> Curved roots or calcium deposits that block traditional endodontic instruments.</li>
                    <li><strong>Failed Retreatment:</strong> If a second root canal has already been attempted but the infection persists.</li>
                    <li><strong>Diagnostic Precision:</strong> To inspect the root for tiny fractures or abnormalities that are not visible on standard X-rays.</li>
                </ul>
            `
        },
        {
            id: 'microsurgical-approach',
            title: 'The Microsurgical Advantage',
            content: `
                <p>We utilize state-of-the-art technology to ensure the highest success rates for root-end surgery:</p>
                <ul>
                    <li><strong>Surgical Microscope:</strong> Provides extreme magnification, allowing the surgeon to see microscopic details and hidden canals.</li>
                    <li><strong>Ultrasonic Cleaning:</strong> We use high-frequency vibration tools to clean the root end more effectively and conservatively than traditional drills.</li>
                    <li><strong>Biocompatible Sealing:</strong> Advanced materials (like MTA or bioceramics) are used to create a bacteria-proof seal at the root tip.</li>
                    <li><strong>3D Imaging (CBCT):</strong> Pre-operative digital scans allow us to map the infection in three dimensions before we begin.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'What to Expect During the Procedure',
            content: `
                <p>The process is straightforward and performed in a comfortable outpatient setting:</p>
                <ol>
                    <li><strong>Numbing:</strong> Local anesthesia is applied to ensure the area is completely insensitive to pain.</li>
                    <li><strong>Access:</strong> A small incision is made in the gum tissue to reach the infected root tip.</li>
                    <li><strong>Removal:</strong> The infected tissue and the last few millimeters of the root tip are removed.</li>
                    <li><strong>Retro-fill:</strong> The end of the canal is cleaned with ultrasonics and sealed with a biocompatible filling.</li>
                    <li><strong>Suturing:</strong> A few small stitches are placed to help the gum tissue heal in its original position.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Recovery and Aftercare',
            content: `
                <p>Recovery from an apicoectomy is generally faster than from a tooth extraction:</p>
                <ul>
                    <li><strong>Post-Op Comfort:</strong> Most patients manage minor swelling or discomfort with over-the-counter anti-inflammatories.</li>
                    <li><strong>Healing:</strong> Stitches are typically removed or dissolve within 7 days.</li>
                    <li><strong>Diet:</strong> We recommend soft foods for the first 48 hours and avoiding direct pressure on the surgical site.</li>
                    <li><strong>Long-term Success:</strong> Follow-up X-rays will be scheduled to monitor the bone as it regenerates around the sealed root.</li>
                </ul>
            `
        }
    ]
};

export default apicoectomyContent;