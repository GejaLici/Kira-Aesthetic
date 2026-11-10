import type { ServiceContent } from '@/lib/services';

const thighLiftContent: ServiceContent = {
    description: [
        "A thigh lift, or thighplasty, is a transformative surgical procedure designed to reshape the legs by removing excess, sagging skin and stubborn fat deposits. This procedure is particularly effective for individuals who have experienced significant weight loss, the natural effects of aging, or genetic predispositions that result in loose skin. By tightening the underlying tissues and redraping the skin, a thigh lift creates a firmer, smoother, and more athletic leg profile.",
        "At our clinic, we prioritize body harmony and functional comfort. Beyond the aesthetic benefits of a more toned appearance, a thigh lift can alleviate physical discomforts such as skin irritation and chafing. Our board-certified plastic surgeons combine advanced surgical techniques with an artistic eye to ensure that scars are discreetly placed and that the final contours complement your overall body proportions."
    ],
    benefits: [
        "Skin Tightening: Eliminates the 'crepey' or sagging skin that often remains after weight loss.",
        "Refined Contours: Reshapes both the inner and outer thighs for a more proportionate look.",
        "Physical Comfort: Reduces skin-on-skin friction and irritation caused by excess tissue.",
        "Clothing Fit: Allows for a better fit in swimwear, athletic gear, and tailored clothing.",
        "Long-term Results: Provides permanent removal of excess skin with results that last for years."
    ],
    quickFacts: {
        procedureTime: '2 - 4 hours',
        anesthesia: 'General anesthesia',
        recoveryTime: '2 - 3 weeks (back to light work); 6 weeks for full activity',
        results: 'Visible immediately; final refinement after 6-12 months',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Customized Surgical Approaches',
            content: `
                <p>We tailor the incision pattern to the specific distribution of your excess tissue:</p>
                <ul>
                    <li><strong>Inner (Medial) Thigh Lift:</strong> The most common approach, focusing on the upper portion of the inner thigh. Incisions are usually hidden in the groin crease.</li>
                    <li><strong>Vertical Thighplasty:</strong> For patients with extensive loose skin extending toward the knee, a vertical incision along the inner thigh may be necessary for maximum correction.</li>
                    <li><strong>Outer (Lateral) Thigh Lift:</strong> Addresses the front and outer aspects of the thighs, often combined with a buttock lift or lower body lift.</li>
                    <li><strong>Lipo-Thighplasty:</strong> We frequently integrate liposuction to remove deep fat layers before tightening the skin, ensuring the smoothest possible transition.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Safety and Pre-Operative Care',
            content: `
                <p>Your safety is our absolute priority. The journey begins with a comprehensive medical screening:</p>
                <ol>
                    <li><strong>Medical Evaluation:</strong> Includes a full history review, physical exam, and detailed blood work.</li>
                    <li><strong>Pre-Surgical Planning:</strong> We use high-resolution photography to map out incision placements that will be most easily concealed.</li>
                    <li><strong>Anesthesiology:</strong> A dedicated consultation to ensure the safest delivery of general anesthesia tailored to your health profile.</li>
                </ol>
            `
        },
        {
            id: 'recovery-process',
            title: 'The Path to Recovery',
            content: `
                <p>Healing from a thigh lift requires patience and adherence to a specific post-operative protocol:</p>
                <ul>
                    <li><strong>Compression:</strong> You will wear a specialized medical garment for 4–6 weeks to support the new contours and minimize swelling.</li>
                    <li><strong>Initial Downtime:</strong> Most patients require an overnight stay at our clinic for professional monitoring. We recommend resting for at least 10–14 days before returning to desk work.</li>
                    <li><strong>Activity Graduation:</strong> While light walking is encouraged within 24 hours to prevent blood clots, strenuous exercise and heavy lifting must be avoided for at least 6 weeks.</li>
                    <li><strong>Scar Management:</strong> We provide advanced silicone-based treatments and laser therapy options to ensure scars fade as much as possible over time.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Full Support for International Patients',
            content: `
                <p>We specialize in providing high-end surgical care for patients traveling from the UK, EU, and beyond:</p>
                <ul>
                    <li><strong>Concierge Logistics:</strong> Complete management of airport transfers and luxury accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Extended Monitoring:</strong> We ensure you are safe to fly before discharge and provide 24/7 digital access to your surgical team.</li>
                    <li><strong>Regional Follow-ups:</strong> If you reside within the region, you can choose to have your post-operative check-ups at any of our affiliated clinic locations.</li>
                </ul>
            `
        }
    ]
};

export default thighLiftContent;