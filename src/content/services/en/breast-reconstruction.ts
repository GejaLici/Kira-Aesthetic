import type { ServiceContent } from '@/lib/services';

const breastReconstructionContent: ServiceContent = {
    description: [
        "Breast reconstruction is a vital surgical process designed to restore the shape, volume, and appearance of the breast following a mastectomy or lumpectomy. This procedure goes beyond physical restoration; it is a fundamental step in a patient's emotional and psychological recovery, helping to regain body confidence and a sense of wholeness after facing breast cancer or other medical conditions.",
        "Our specialized reconstructive team utilizes advanced microsurgical and implant-based techniques to recreate a breast that looks and feels as natural as possible. We work in close coordination with your oncology team to provide a seamless transition from treatment to restoration, offering both immediate (at the time of mastectomy) and delayed reconstruction options tailored to your specific health journey."
    ],
    benefits: [
        "Restores bodily symmetry and the natural contour of the breast profile.",
        "Significantly improves psychological well-being and self-esteem post-mastectomy.",
        "Eliminates the need for external breast prostheses.",
        "Offers permanent results using either advanced implants or your own tissue.",
        "Customizable approach to match the size and shape of the natural breast."
    ],
    quickFacts: {
        procedureTime: '2 - 12 hours (varies by technique)',
        anesthesia: 'general anesthesia',
        recoveryTime: '4 - 8 weeks for full recovery',
        results: 'permanent restoration (may require nipple refinement later)',
    },
    sections: [
        {
            id: 'reconstruction-options',
            title: 'Reconstruction Methodologies',
            content: `
                <p>We provide several pathways for reconstruction, depending on your physical health and aesthetic preferences:</p>
                <ul>
                    <li><strong>Implant-Based Reconstruction:</strong> The most common approach, often involving a tissue expander followed by a permanent silicone or saline implant. This typically requires a shorter recovery time.</li>
                    <li><strong>Autologous (Flap) Reconstruction:</strong> A sophisticated technique where the surgeon uses your own tissue from the abdomen (DIEP or TRAM flap), back (Latissimus Dorsi), or thighs. This results in the most natural-feeling breast.</li>
                    <li><strong>Oncoplastic Surgery:</strong> For patients undergoing partial mastectomies, we use plastic surgery techniques to reshape the remaining breast tissue, preventing defects or asymmetry.</li>
                </ul>
            `
        },
        {
            id: 'surgical-process',
            title: 'The Reconstructive Journey',
            content: `
                <p>Reconstruction often involves a multi-stage approach to achieve optimal symmetry:</p>
                <ol>
                    <li><strong>Phase 1 (Restoration):</strong> Creation of the breast mound using an implant or tissue flap.</li>
                    <li><strong>Phase 2 (Symmetry):</strong> A secondary procedure may be performed on the opposite breast (lift or reduction) to ensure a perfect match.</li>
                    <li><strong>Phase 3 (Refinement):</strong> Optional reconstruction of the nipple and areola, often using local tissue flaps or medical tattooing.</li>
                </ol>
            `
        },
        {
            id: 'safety-recovery',
            title: 'Recovery and Long-Term Care',
            content: `
                <p>Recovery depends on the complexity of the procedure, with flap-based surgeries requiring more intensive aftercare:</p>
                <ul>
                    <li><strong>Hospital Stay:</strong> Ranges from 1-2 days for implants to 3-7 days for autologous flap transfers.</li>
                    <li><strong>Drainage:</strong> Temporary surgical drains are used to manage fluid and are typically removed within 1-2 weeks.</li>
                    <li><strong>Activity:</strong> Strenuous movements and heavy lifting must be avoided for at least 6 weeks to ensure tissue survival and proper healing.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Global Patient Coordination',
            content: `
                <p>We provide a compassionate and comprehensive environment for patients traveling for reconstructive care:</p>
                <ul>
                    <li><strong>Concierge Logistics:</strong> Assistance with transportation and safe, comfortable accommodation during your initial recovery phase.</li>
                    <li><strong>Continuity of Care:</strong> Our unique network allows you to attend follow-up consultations in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Collaborative Medicine:</strong> We coordinate directly with your home oncologist to ensure your surgical plan aligns with your overall cancer treatment schedule.</li>
                </ul>
            `
        }
    ]
};

export default breastReconstructionContent;