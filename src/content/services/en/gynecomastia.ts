import type { ServiceContent } from '@/lib/services';

const gynecomastiaContent: ServiceContent = {
    description: [
        "Gynecomastia, the overdevelopment of male breast tissue, is a common condition that can affect men of all ages, often leading to significant self-consciousness and physical discomfort. Male breast reduction surgery is a highly effective procedure designed to correct 'puffy nipples' or excess chest volume by removing glandular tissue and localized fat to create a flatter, firmer, and more masculine chest contour.",
        "This procedure specifically targets tissue that is resistant to diet and exercise. By combining advanced liposuction with precise surgical excision, our board-certified surgeons can resculpt the chest area, restoring a more athletic profile and significantly boosting a patient's self-confidence and quality of life."
    ],
    benefits: [
        "Restores a flatter, firmer, and more traditionally masculine chest contour.",
        "Removes glandular tissue and stubborn fat that does not respond to exercise.",
        "Corrects 'puffy nipples' and chest asymmetry for a more athletic look.",
        "Boosts self-esteem and confidence in social and intimate situations.",
        "Provides permanent results, provided a stable weight is maintained."
    ],
    quickFacts: {
        procedureTime: '1 - 3 hours',
        anesthesia: 'General anesthesia',
        recoveryTime: '1 week for work; 4-6 weeks for strenuous exercise',
        results: 'Final contour visible after 3-6 months',
    },
    sections: [
        {
            id: 'customized-techniques',
            title: 'Precision Sculpting Techniques',
            content: `
                <p>Because every case of gynecomastia is unique, we tailor our surgical approach to the specific tissue composition of the patient:</p>
                <ul>
                    <li><strong>Liposuction:</strong> Used primarily when the excess volume consists of fatty tissue. This is performed through tiny, inconspicuous incisions.</li>
                    <li><strong>Surgical Excision:</strong> Necessary when there is a significant amount of glandular tissue. The incision is typically placed along the lower half of the areola to hide any resulting scar.</li>
                    <li><strong>Combination Approach:</strong> Most patients benefit from a hybrid technique that uses liposuction for overall contouring and excision for the firm glandular tissue directly under the nipple.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'The Path to Recovery',
            content: `
                <p>Post-operative care is vital for ensuring the best aesthetic outcome and a smooth healing process:</p>
                <ol>
                    <li><strong>Compression Garment:</strong> You will wear a specialized medical vest for 4–6 weeks to minimize swelling and help the skin conform to the new chest shape.</li>
                    <li><strong>Initial Healing:</strong> Most patients can return to sedentary work within 5–7 days. Minor bruising and swelling are normal and will peak within the first 72 hours.</li>
                    <li><strong>Exercise Restrictions:</strong> While walking is encouraged immediately, heavy lifting and upper-body workouts must be avoided for at least one month.</li>
                </ol>
            `
        },
        {
            id: 'results-longevity',
            title: 'Long-Term Results',
            content: `
                <p>The results of gynecomastia surgery are generally permanent. The removed glandular tissue does not grow back. However, to maintain your new contour, it is important to:</p>
                <ul>
                    <li><strong>Maintain a Stable Weight:</strong> Significant weight gain can lead to new fat deposits in the chest area.</li>
                    <li><strong>Healthy Lifestyle:</strong> Avoid certain medications or substances that can cause hormonal imbalances and potentially stimulate remaining tissue.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-support',
            title: 'International Patient Concierge',
            content: `
                <p>We provide a comprehensive and discreet experience for our international clients:</p>
                <ul>
                    <li><strong>All-Inclusive Logistics:</strong> Assistance with premium accommodation and private transportation between the airport and the clinic.</li>
                    <li><strong>Strategic Follow-ups:</strong> Patients have the unique option to conduct their follow-up examinations in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Remote Consultation:</strong> Initial surgical assessments can be performed via high-quality photo review to plan your trip effectively.</li>
                </ul>
            `
        }
    ]
};

export default gynecomastiaContent;