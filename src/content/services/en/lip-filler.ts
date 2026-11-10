import type { ServiceContent } from '@/lib/services';

const lipReshapingContent: ServiceContent = {
    description: [
        "Lip reshaping, often referred to as lip augmentation or lip fillers, is a highly popular non-surgical treatment designed to enhance the volume, shape, and definition of the lips. Using premium hyaluronic acid (HA) fillers, this procedure allows for precise customization—whether you are looking to restore lost volume due to aging, correct natural asymmetries, or simply achieve a more hydrated and plump appearance.",
        "Our approach centers on the philosophy of 'The Natural Pout.' We believe that the best results are those that harmonize with your unique facial proportions. Hyaluronic acid is a substance naturally found in the body, ensuring that the treatment is not only effective but also safe and reversible, providing a soft, subtle, and beautiful enhancement."
    ],
    benefits: [
        "Customized volume: From subtle hydration to a more dramatic plumpness.",
        "Refined definition: Enhances the Cupid's bow and the vermillion border for a sharper look.",
        "Improved symmetry: Balances the upper and lower lips or corrects uneven sides.",
        "Immediate results: Walk out of the clinic with a visible transformation in under an hour.",
        "Hydration boost: Hyaluronic acid naturally attracts moisture, making lips look smoother and healthier."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes',
        anesthesia: 'Topical numbing cream + lidocaine-infused fillers',
        recoveryTime: '24 - 48 hours for peak swelling; 1 week for full settling',
        results: 'Visible immediately; lasts 6 - 12 months',
    },
    sections: [
        {
            id: 'art-of-lip-design',
            title: 'The Art of Lip Design',
            content: `
                <p>Successful lip augmentation requires a balance of medical science and artistic vision. We focus on several key areas of the lip to ensure a natural look:</p>
                <ul>
                    <li><strong>The Cupid's Bow:</strong> Defining the 'V' shape of the upper lip for a more youthful and feminine profile.</li>
                    <li><strong>The Philtrum Columns:</strong> Enhancing the two lines leading from the nose to the lip to provide structural support and projection.</li>
                    <li><strong>Oral Commissures:</strong> Addressing the corners of the mouth to create a more neutral or 'upturned' expression.</li>
                    <li><strong>Ratio Balancing:</strong> Ensuring the classic 1:1.6 ratio between the upper and lower lip for ideal facial harmony.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'What to Expect During Your Visit',
            content: `
                <p>Your comfort and safety are our highest priorities throughout the procedure:</p>
                <ol>
                    <li><strong>Preparation:</strong> A high-strength topical anesthetic is applied to ensure the treatment is virtually painless.</li>
                    <li><strong>Precision Injections:</strong> Using ultra-fine needles or blunt-tip cannulas, the physician strategically places the filler to sculpt the desired shape.</li>
                    <li><strong>Immediate Review:</strong> We work interactively with you, allowing you to view the progress in a mirror and provide feedback on the volume.</li>
                    <li><strong>Post-Injection Care:</strong> We apply a soothing balm and provide cold compresses to immediately manage any initial swelling.</li>
                </ol>
            `
        },
        {
            id: 'recovery-results',
            title: 'Recovery and Longevity',
            content: `
                <p>Lip tissue is highly vascular, so a short recovery period is expected:</p>
                <ul>
                    <li><strong>Swelling:</strong> It is normal for lips to appear significantly larger for the first 24–48 hours. This is an inflammatory response and is not the final result.</li>
                    <li><strong>Settling Period:</strong> The filler integrates with your natural tissue over 1–2 weeks, becoming softer and more natural to the touch.</li>
                    <li><strong>Maintenance:</strong> To keep your results fresh, we recommend a 'top-up' appointment every 6 to 9 months, though many patients find their results last up to a full year.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Concierge Support for Global Clients',
            content: `
                <p>We provide a premium, stress-free experience for patients traveling from across Europe and beyond:</p>
                <ul>
                    <li><strong>Travel Coordination:</strong> Full assistance with airport transfers and accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Follow-up Flexibility:</strong> Should you require a touch-up or check-up, you can visit any of our regional clinics at your convenience.</li>
                    <li><strong>Certified Expertise:</strong> All lip procedures are performed exclusively by board-certified physicians specializing in aesthetic medicine.</li>
                </ul>
            `
        }
    ]
};

export default lipReshapingContent;