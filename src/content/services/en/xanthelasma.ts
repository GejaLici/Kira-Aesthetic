import type { ServiceContent } from '@/lib/services';

const xanthelasmaRemovalContent: ServiceContent = {
    description: [
        "Xanthelasma are yellowish, flat plaques of cholesterol deposits that develop on or around the eyelids. While medically benign, they can be visually distracting and often affect a person's self-confidence. At our clinic, we utilize Plasma Arc (Fibroblast) therapy—a cutting-edge, non-surgical solution that effectively eliminates these deposits without the need for scalpels, stitches, or traditional surgery.",
        "The Plasma Arc technique uses a specialized device to create a microscopic electrical discharge that sublimates the superficial tissue of the xanthelasma. This process vaporizes the cholesterol deposit instantly, leaving the surrounding healthy skin intact. This precision-focused approach significantly reduces the risk of scarring and provides a smoother, clearer eyelid contour with a much faster recovery time than surgical excision."
    ],
    benefits: [
        "Non-Surgical Precision: No incisions or sutures are required, preserving the delicate skin of the eyelid.",
        "Minimal Downtime: Patients can return to most daily activities immediately after the procedure.",
        "High Efficacy: Effectively removes even persistent cholesterol plaques in a single or dual session.",
        "Safe for Eyelids: The controlled plasma arc only affects the targeted superficial layer of the skin.",
        "Natural Healing: Stimulates the skin's natural regenerative processes for a smooth final result."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutes',
        anesthesia: 'Strong topical numbing cream',
        recoveryTime: '5 - 10 days for carbon crusts to shed',
        results: 'Visible clearing once healing is complete (approx. 2-3 weeks)',
    },
    sections: [
        {
            id: 'plasma-arc-technology',
            title: 'How Plasma Sublimation Works',
            content: `
                <p>Unlike lasers or cautery, Plasma Arc technology works through the principle of sublimation—converting a solid directly into a gas:</p>
                <ul>
                    <li><strong>Ionized Gas:</strong> The device creates a tiny "arc" of plasma between the tip of the pen and the skin.</li>
                    <li><strong>Localized Vaporization:</strong> The thermal energy vaporizes the cholesterol plaque without transferring excess heat to the deeper dermis.</li>
                    <li><strong>Tissue Contraction:</strong> The process also triggers an immediate contraction of the skin fibers, providing a slight lifting effect to the eyelid area.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure-experience',
            title: 'Your Treatment Journey',
            content: `
                <p>We prioritize patient comfort and clinical safety in every session:</p>
                <ol>
                    <li><strong>Clinical Diagnosis:</strong> We confirm the lesions are xanthelasma and assess their depth and distribution.</li>
                    <li><strong>Numbing:</strong> A high-potency topical anesthetic is applied for 20–30 minutes to ensure you feel minimal to no discomfort.</li>
                    <li><strong>Precise Removal:</strong> The practitioner systematically treats the yellow plaques, moving the plasma pen with high precision across the deposit.</li>
                    <li><strong>Protective Aftercare:</strong> A specialized healing balm is applied to the treated area to begin the recovery phase.</li>
                </ol>
            `
        },
        {
            id: 'recovery-aftercare',
            title: 'Post-Treatment Healing & Care',
            content: `
                <p>The success of the removal depends heavily on following the post-treatment protocol:</p>
                <ul>
                    <li><strong>Carbon Crusts:</strong> Small, brown protective scabs will form. It is vital <strong>not to pick or scratch</strong> these; they must fall off naturally to prevent scarring.</li>
                    <li><strong>Eyelid Swelling:</strong> Mild to moderate swelling is normal for the first 48–72 hours. Cold compresses (without direct water contact) can help.</li>
                    <li><strong>Sun Protection:</strong> The "new" skin underneath is highly sensitive. You must apply SPF 50+ daily for several months to avoid hyperpigmentation.</li>
                    <li><strong>Systemic Maintenance:</strong> Since xanthelasma is linked to cholesterol, we recommend monitoring your lipid levels with your physician to prevent new deposits.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Elite Service for International Patients',
            content: `
                <p>We welcome patients from across the globe seeking non-invasive eyelid treatments:</p>
                <ul>
                    <li><strong>Express Recovery Support:</strong> We provide all necessary aftercare products in a travel kit for your journey home.</li>
                    <li><strong>Integrated Care Locations:</strong> Start your treatment in <strong>Albania</strong> and receive follow-up support in our <strong>Kosovo</strong> or <strong>Italy</strong> clinics.</li>
                    <li><strong>Full Concierge:</strong> We assist with airport transfers and accommodation near our facilities to ensure a stress-free experience.</li>
                </ul>
            `
        }
    ]
};

export default xanthelasmaRemovalContent;