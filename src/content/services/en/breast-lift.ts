import type { ServiceContent } from '@/lib/services';

const breastLiftContent: ServiceContent = {
    description: [
        "A breast lift, or mastopexy, is a surgical procedure designed to correct sagging (ptosis) and restore a firmer, more elevated breast contour. Over time, factors like pregnancy, breastfeeding, weight fluctuations, and natural aging can cause the breasts to lose elasticity. This procedure removes excess skin and tightens the surrounding tissue to reshape and support the new breast profile.",
        "Unlike a breast augmentation, a lift focuses on position rather than size. By repositioning the nipple and areola to a more youthful height, our surgeons can create a rejuvenated silhouette that looks natural and harmonious with your body. For patients desiring both lift and increased volume, this procedure can also be combined with breast implants."
    ],
    benefits: [
        "Lifts the breasts to a more youthful, elevated position.",
        "Removes excess, stretched-out skin for a firmer feel.",
        "Repositions the nipple and areola for improved aesthetic symmetry.",
        "Reshapes the breast tissue to enhance projection and contour.",
        "Boosts self-confidence and improves the fit of clothing and swimwear."
    ],
    quickFacts: {
        procedureTime: '2 - 3 hours',
        anesthesia: 'general anesthesia',
        recoveryTime: '4 - 6 weeks for full recovery',
        results: 'immediate improvement; final shape settles in 3-6 months',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Customized Lift Techniques',
            content: `
                <p>The choice of incision pattern depends on the degree of sagging and the amount of skin to be removed:</p>
                <ul>
                    <li><strong>Periareolar (Donut):</strong> A circular incision around the areola, suitable for mild sagging.</li>
                    <li><strong>Vertical (Lollipop):</strong> An incision around the areola and vertically down to the crease; ideal for moderate ptosis.</li>
                    <li><strong>Anchor (Inverted T):</strong> The most comprehensive lift, involving incisions around the areola, down the center, and along the breast fold.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Preparation and Safety Protocols',
            content: `
                <p>Your safety is our priority. The pre-operative phase ensures you are ready for surgery:</p>
                <ul>
                    <li><strong>Breast Health:</strong> A mammogram or ultrasound is typically required to ensure baseline breast health.</li>
                    <li><strong>Medical Clearance:</strong> Includes comprehensive blood tests, an ECG, and a consultation with our anesthesiologist.</li>
                    <li><strong>Pre-Op Care:</strong> Patients must stop smoking and avoid blood-thinning medications (like aspirin) for several weeks prior to the procedure.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Recovery and Aftercare',
            content: `
                <p>A successful outcome relies on diligent post-operative care:</p>
                <ol>
                    <li><strong>Support:</strong> You will wear a specialized surgical bra 24/7 for the first 4–6 weeks to support the healing tissues.</li>
                    <li><strong>Activity:</strong> Light walking is encouraged immediately, but heavy lifting and strenuous exercise must be avoided for at least a month.</li>
                    <li><strong>Scar Care:</strong> We provide specific protocols for wound care and scar management to ensure incisions fade as much as possible over time.</li>
                </ol>
            `
        },
        {
            id: 'global-logistics',
            title: 'Support for International Patients',
            content: `
                <p>We facilitate every aspect of your surgical journey to ensure a worry-free experience:</p>
                <ul>
                    <li><strong>Travel Assistance:</strong> We offer full support with transportation and premium accommodation near our surgical center.</li>
                    <li><strong>Follow-up Flexibility:</strong> Patients have the unique option to complete their post-operative check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Continuous Monitoring:</strong> Our team is available for virtual consultations during your recovery once you return home.</li>
                </ul>
            `
        }
    ]
};

export default breastLiftContent;