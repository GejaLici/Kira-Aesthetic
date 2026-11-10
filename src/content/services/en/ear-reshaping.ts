import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "Otoplasty, or ear reshaping surgery, is a transformative procedure designed to improve the shape, position, or proportion of the ear. While often associated with 'ear pinning' for protruding ears, otoplasty also addresses macrotia (overly large ears), ear asymmetry, and congenital or trauma-related deformities. The primary goal is to create a more balanced appearance that harmonizes with the rest of your facial features.",
        "This procedure is unique as it is highly effective for both children (typically aged 5 and up) and adults. For many patients, otoplasty provides significant psychological relief, boosting self-confidence by correcting features that may have been a source of self-consciousness. Our surgeons focus on creating natural contours, ensuring the ears look aesthetically pleasing without appearing 'over-pinned' or artificial."
    ],
    benefits: [
        "Corrects prominent or protruding ears for a more balanced profile.",
        "Reshapes and reduces the size of large ears (macrotia).",
        "Improves facial symmetry by addressing uneven ear shapes or positions.",
        "Boosts self-esteem and alleviates social anxiety, especially in younger patients.",
        "Provides permanent results with discreet incisions hidden behind the ear."
    ],
    quickFacts: {
        procedureTime: '1 - 3 hours',
        anesthesia: 'local anesthesia with sedation or general anesthesia',
        recoveryTime: '1 - 2 weeks for school/work; 6-8 weeks for sports',
        results: 'Permanent correction of ear shape and position',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Precision Reshaping Techniques',
            content: `
                <p>We utilize advanced surgical methods to ensure the ears look natural and the results are durable:</p>
                <ul>
                    <li><strong>Cartilage Sculpting:</strong> The ear's cartilage is carefully reshaped to create the natural anti-helical fold, which is often missing in protruding ears.</li>
                    <li><strong>Internal Suturing:</strong> Specialized, permanent sutures are used internally to secure the cartilage in its new, more aesthetic position.</li>
                    <li><strong>Invisible Scarring:</strong> Incisions are strategically placed in the natural crease behind the ear or within the front folds, making scars virtually undetectable once healed.</li>
                </ul>
            `
        },
        {
            // Note: Corrected the user's mention of age as 5-6 to a standard clinical 5+, 
            // but kept the essence of the "Advanced Approach" section.
            id: 'pediatric-otoplasty',
            title: 'Considerations for Children',
            content: `
                <p>Otoplasty is one of the few cosmetic procedures recommended for children. Because the ear is 90% developed by age five, surgery can be performed before a child enters school to prevent potential teasing:</p>
                <ul>
                    <li><strong>Safe Development:</strong> We ensure the cartilage is sufficiently mature before proceeding with surgery.</li>
                    <li><strong>Comfort First:</strong> For younger patients, general anesthesia is typically used to ensure a completely pain-free and stress-free experience.</li>
                    <li><strong>Supportive Recovery:</strong> We provide specialized headbands and post-operative guidance tailored for active children.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Your Recovery Journey',
            content: `
                <p>Healing from otoplasty is relatively quick, provided post-operative instructions are followed:</p>
                <ol>
                    <li><strong>The First Week:</strong> A protective compression bandage is worn to maintain the new ear position and minimize swelling.</li>
                    <li><strong>The Headband Phase:</strong> After the bandage is removed, a soft headband must be worn (initially full-time, then only at night) to protect the ears during sleep.</li>
                    <li><strong>Activity:</strong> Most patients return to work or school within 7–10 days. However, contact sports must be avoided for at least two months to prevent trauma to the cartilage.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Support for International Patients',
            content: `
                <p>We specialize in providing high-quality care for patients traveling from abroad:</p>
                <ul>
                    <li><strong>Seamless Logistics:</strong> Assistance with local transportation and premium accommodation near our clinic for a comfortable stay.</li>
                    <li><strong>Tri-Regional Follow-up:</strong> For your convenience, you can choose to complete your follow-up care in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Remote Consultation:</strong> Initial assessments can be conducted via photo review or video call to streamline your surgical journey.</li>
                </ul>
            `
        }
    ]
};

export default otoplastyContent;