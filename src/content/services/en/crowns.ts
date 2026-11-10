import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "A dental crown is a custom-fabricated 'cap' designed to fully encase a damaged, weakened, or aesthetically compromised tooth. By covering the entire visible portion of the tooth above the gum line, a crown restores its original shape, size, and strength while providing a protective barrier against further decay or fracture.",
        "Modern dental crowns are engineered to blend seamlessly with your natural smile. Whether you need to reinforce a tooth after a root canal, support a large filling, or cover a dental implant, our crowns utilize advanced biocompatible materials that offer the perfect balance of structural durability and life-like translucency."
    ],
    benefits: [
        "Restores the structural integrity of broken, cracked, or severely worn teeth.",
        "Provides essential protection for weak teeth to prevent future fractures.",
        "Enhances aesthetics by correcting the shape, size, and color of misshapen teeth.",
        "Acts as a durable anchor for dental bridges and a secure cover for dental implants.",
        "Long-term functionality, with results that can last 10–15 years or more with proper care."
    ],
    quickFacts: {
        procedureTime: '2 visits (preparation & placement)',
        anesthesia: 'local anesthetic',
        recoveryTime: 'Immediate; mild sensitivity for 24-48 hours',
        results: 'Durable restoration; final crown placed in the second visit',
    },
    sections: [
        {
            id: 'material-options',
            title: 'High-Performance Materials',
            content: `
                <p>We offer a variety of materials tailored to the location and function of the tooth being restored:</p>
                <ul>
                    <li><strong>Zirconia:</strong> Renowned for its extreme strength and biocompatibility, making it the ideal choice for molars that endure heavy chewing pressure.</li>
                    <li><strong>All-Ceramic / Porcelain:</strong> Offers the most natural color match and light reflection, making it the gold standard for front-facing teeth in the "smile zone."</li>
                    <li><strong>Porcelain-Fused-to-Metal (PFM):</strong> Combines a strong metal interior for durability with a porcelain exterior for a natural appearance.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'The Procedure: Restoring Your Smile',
            content: `
                <p>Restoring a tooth with a crown is a precise two-stage process:</p>
                <ol>
                    <li><strong>Preparation:</strong> The tooth is carefully reshaped to accommodate the crown. We take digital impressions or traditional molds to ensure a perfect fit.</li>
                    <li><strong>Temporary Protection:</strong> While your permanent crown is custom-crafted in the lab, we place a temporary crown to protect your tooth and maintain your bite.</li>
                    <li><strong>Final Fitting:</strong> Once your custom crown is ready, we check the fit and color meticulously before permanently cementing it into place.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Maintenance and Longevity',
            content: `
                <p>A crowned tooth requires the same diligent care as a natural tooth to ensure its longevity:</p>
                <ul>
                    <li><strong>Oral Hygiene:</strong> Brush twice daily and floss carefully around the base of the crown to prevent gum disease and decay under the margin.</li>
                    <li><strong>Avoid Hard Objects:</strong> Refrain from chewing on ice, hard candies, or non-food items to prevent chipping the porcelain.</li>
                    <li><strong>Routine Check-ups:</strong> Regular dental visits allow us to monitor the integrity of the crown and the health of the supporting tissues.</li>
                </ul>
            `
        },
        {
            id: 'international-service',
            title: 'Convenience for International Patients',
            content: `
                <p>We specialize in efficient, high-quality restorative care for patients traveling from abroad:</p>
                <ul>
                    <li><strong>Efficient Scheduling:</strong> We coordinate with our dental labs to ensure your permanent restoration is ready within your travel timeframe.</li>
                    <li><strong>Logistics Support:</strong> Full assistance with local transport and comfortable accommodation near our modern clinic.</li>
                    <li><strong>Multi-Location Follow-up:</strong> You can choose to complete your follow-up care or routine maintenance in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                </ul>
            `
        }
    ]
};

export default dentalCrownsContent;