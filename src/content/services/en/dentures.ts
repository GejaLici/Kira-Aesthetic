import type { ServiceContent } from '@/lib/services';

const denturesContent: ServiceContent = {
    description: [
        "Dentures are custom-made, removable prosthetic devices designed to replace missing teeth and restore the function of your smile. Beyond just aesthetics, losing teeth can significantly impact your ability to speak clearly, chew effectively, and maintain your facial structure. Modern dentures provide a time-tested and reliable solution to these challenges, giving you back a full and confident smile.",
        "Today’s dentures are far more advanced than the 'false teeth' of the past. Utilizing high-quality acrylics and advanced prosthodontic techniques, we create dentures that are lightweight, durable, and meticulously designed to match the natural contours of your mouth. Whether you need a full set or just a few teeth replaced, our goal is to provide a restoration that feels comfortable and looks completely natural."
    ],
    benefits: [
        "Restores a complete smile, boosting self-confidence and appearance.",
        "Provides vital support for facial muscles, preventing a 'sunken' look.",
        "Improves speech and phonetic clarity often hindered by missing teeth.",
        "Enhances chewing ability, allowing for a more diverse and healthy diet.",
        "Available in versatile options, including full, partial, and implant-supported versions."
    ],
    quickFacts: {
        procedureTime: 'Multiple appointments over 3 - 5 weeks',
        anesthesia: 'None required (unless paired with extractions)',
        recoveryTime: '2 - 4 weeks adjustment period',
        results: 'Functional restoration; dentures usually replaced every 5-7 years',
    },
    sections: [
        {
            id: 'denture-types',
            title: 'Types of Dentures We Provide',
            content: `
                <p>We offer specialized solutions depending on the number of teeth missing and your jaw health:</p>
                <ul>
                    <li><strong>Complete Dentures:</strong> Used when all teeth in the upper or lower arch are missing. They feature a gum-colored acrylic base for a snug fit.</li>
                    <li><strong>Partial Dentures:</strong> Ideal when some natural teeth remain. These are often secured with a discreet framework to prevent existing teeth from shifting.</li>
                    <li><strong>Implant-Supported Dentures:</strong> For maximum stability, dentures can be anchored to dental implants. This eliminates the need for adhesives and prevents slipping during eating or speaking.</li>
                </ul>
            `
        },
        {
            id: 'custom-crafting',
            title: 'The Art of Custom Fitting',
            content: `
                <p>The success of a denture lies in its precision. Our multi-step fitting process ensures optimal comfort:</p>
                <ol>
                    <li><strong>Detailed Impressions:</strong> We take accurate molds of your ridges and palate to ensure the most stable base possible.</li>
                    <li><strong>Bite Registration:</strong> We measure how your jaws meet to ensure your new teeth function harmoniously without causing jaw pain.</li>
                    <li><strong>Wax Try-In:</strong> You will try a wax version of your dentures to approve the aesthetics—size, shape, and shade—before the final set is fabricated.</li>
                </ol>
            `
        },
        {
            id: 'adjustment-period',
            title: 'Life with New Dentures',
            content: `
                <p>Adapting to new dentures is a gradual process. Here is what to expect during the first few weeks:</p>
                <ul>
                    <li><strong>Muscular Adaptation:</strong> Your tongue and cheek muscles will naturally learn to hold the appliance in place over time.</li>
                    <li><strong>Speech & Diet:</strong> We recommend practicing reading aloud and starting with soft foods cut into small pieces to build confidence.</li>
                    <li><strong>Daily Care:</strong> Dentures should be cleaned daily with specialized brushes and soaked overnight to keep the material hydrated and your gums healthy.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Global Patient Support',
            content: `
                <p>We provide a seamless experience for international patients seeking high-quality, affordable prosthodontics:</p>
                <ul>
                    <li><strong>Optimized Timelines:</strong> We prioritize your lab work to ensure your fitting appointments are completed efficiently during your visit.</li>
                    <li><strong>Travel Concierge:</strong> Assistance with local transportation and comfortable accommodation near our clinic.</li>
                    <li><strong>Convenient Aftercare:</strong> Follow-up adjustments or relining can be arranged at our partner locations in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                </ul>
            `
        }
    ]
};

export default denturesContent;