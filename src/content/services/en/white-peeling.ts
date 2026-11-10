import type { ServiceContent } from '@/lib/services';

const whitePeelingContent: ServiceContent = {
    description: [
        "A white peel is a specialized medical-grade chemical treatment specifically engineered to target hyperpigmentation and uneven skin tone. Unlike standard chemical peels that focus on general texture or acne, a white peel utilizes a potent blend of depigmenting agents designed to inhibit melanocytes—the cells responsible for pigment production. This dual-action approach lifts existing dark spots while suppressing the biological triggers that cause new discoloration to form.",
        "This advanced treatment is the ideal solution for patients struggling with melasma, sun damage, and post-inflammatory hyperpigmentation (PIH). By accelerating cellular turnover and gently exfoliating the pigmented layers of the epidermis, the white peel reveals a luminous, more uniform complexion, significantly brightening the skin's overall appearance with professional-grade precision."
    ],
    benefits: [
        "Pigment Correction: Effectively fades sun spots, age spots, and stubborn hormonal melasma.",
        "Melanin Suppression: Inhibits tyrosinase activity to prevent the formation of new dark patches.",
        "Radiant Complexion: Eliminates dullness by removing dead skin cells and stimulating fresh cell growth.",
        "Even Skin Tone: Harmonizes the skin's color palette, reducing redness and brown spots.",
        "Post-Acne Healing: Targets and fades the dark marks often left behind after acne breakouts."
    ],
    quickFacts: {
        procedureTime: '30 minutes',
        anesthesia: 'None required (mild tingling sensation)',
        recoveryTime: '3 - 7 days of mild redness and flaking',
        results: 'Optimal results after a series of 3-6 sessions',
    },
    sections: [
        {
            id: 'targeted-pigment-science',
            title: 'The Science of Depigmentation',
            content: `
                <p>Our white peeling system works through three distinct biological pathways to ensure long-term skin clarity:</p>
                <ul>
                    <li><strong>Tyrosinase Inhibition:</strong> Active ingredients reach the deeper layers of the epidermis to "switch off" the enzyme that triggers melanin production.</li>
                    <li><strong>Accelerated Exfoliation:</strong> The chemical solution dissolves the bonds between pigmented skin cells, allowing them to shed more rapidly.</li>
                    <li><strong>Brightening Synergy:</strong> By clearing the path for new, healthy cells, the peel allows light to reflect more evenly off the skin’s surface for a "glass skin" effect.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'What to Expect During the Procedure',
            content: `
                <p>A white peeling session is a focused clinical procedure performed by our aesthetic specialists:</p>
                <ol>
                    <li><strong>Skin Analysis:</strong> We assess your Fitzpatrick skin type and the depth of your pigmentation to calibrate the peel's intensity.</li>
                    <li><strong>Preparation:</strong> The skin is thoroughly cleansed and degreased to ensure the peeling agents penetrate evenly.</li>
                    <li><strong>Application:</strong> The solution is applied in precise layers. You may experience a brief warming or stinging sensation as the active ingredients engage with the skin.</li>
                    <li><strong>Neutralization:</strong> Once the desired clinical endpoint is reached, the peel is neutralized, and a cooling, soothing balm is applied.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-importance',
            title: 'Post-Peel Care & Sun Safety',
            content: `
                <p>The success of a white peel is 50% treatment and 50% aftercare. Protecting your "new" skin is critical:</p>
                <ul>
                    <li><strong>SPF is Mandatory:</strong> You must apply broad-spectrum SPF 50+ every day. Unprotected sun exposure can cause the pigment to return darker than before.</li>
                    <li><strong>Gentle Routine:</strong> Use only mild, hydrating cleansers and ceramide-rich moisturizers for at least 7 days following the treatment.</li>
                    <li><strong>Hands Off:</strong> Allow the skin to flake naturally. Picking at peeling skin can lead to scarring or secondary hyperpigmentation.</li>
                    <li><strong>Skincare Pause:</strong> Avoid retinoids, AHAs, and Vitamin C serums for one week post-treatment unless otherwise directed.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Elite Support for International Clients',
            content: `
                <p>We provide a seamless experience for patients traveling for advanced aesthetic dermatology:</p>
                <ul>
                    <li><strong>Coordinated Travel:</strong> Complete assistance with airport transfers and lodging in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Treatment Continuity:</strong> For patients requiring a series of peels, sessions can be scheduled across our different regional locations to fit your itinerary.</li>
                    <li><strong>Virtual Consultations:</strong> Discuss your skin concerns with our specialists via video call before your trip to ensure the white peel is the best choice for you.</li>
                </ul>
            `
        }
    ]
};

export default whitePeelingContent;