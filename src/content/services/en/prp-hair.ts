import type { ServiceContent } from '@/lib/services';

const prpHairContent: ServiceContent = {
    description: [
        "Platelet-Rich Plasma (PRP) therapy is a groundbreaking, non-surgical solution for hair restoration that utilizes the regenerative power of your own blood. This form of biological medicine targets the root cause of hair thinning by delivering a high concentration of growth factors directly to dormant or weakened hair follicles. By 'reawakening' these follicles, PRP helps to slow down active hair loss and trigger the growth of thicker, more resilient hair strands.",
        "Ideal for both men and women in the early to moderate stages of hair thinning or androgenetic alopecia, PRP therapy offers a completely natural alternative to synthetic drugs or invasive surgery. Because the treatment uses your own plasma, it is exceptionally safe and biocompatible, providing a scientifically-backed path to regaining hair density and scalp health."
    ],
    benefits: [
        "Natural follicle stimulation: Uses growth factors to prolong the 'growth phase' of the hair cycle.",
        "Increased hair density: Promotes the diameter of individual hair shafts for a fuller look.",
        "Slows hair shedding: Effectively reduces active hair loss in patients with pattern baldness.",
        "Non-surgical & convenient: No incisions, no scarring, and no significant downtime.",
        "Scalp health: Improves blood circulation to the scalp, creating a better environment for hair growth."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minutes',
        anesthesia: 'Local anesthetic or cooling for scalp comfort',
        recoveryTime: 'Immediate; avoid hair washing for 24 hours',
        results: 'Reduction in shedding in 2-3 months; visible growth in 4-6 months',
    },
    sections: [
        {
            id: 'biological-mechanism',
            title: 'The Science of Hair Regeneration',
            content: `
                <p>PRP works at a cellular level to reverse the miniaturization of hair follicles:</p>
                <ul>
                    <li><strong>Platelet Concentration:</strong> Your platelets contain specialized proteins that stimulate cell division and tissue repair.</li>
                    <li><strong>Growth Factor Release:</strong> Once injected, these growth factors activate the bulge area of the hair follicle, signaling it to move from a dormant (telogen) phase back into an active (anagen) growth phase.</li>
                    <li><strong>Vascularization:</strong> PRP encourages the formation of new blood vessels, ensuring that follicles receive the oxygen and nutrients they need to produce healthy hair.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Your Treatment Journey',
            content: `
                <p>A typical PRP session is streamlined and clinical, ensuring maximum platelet viability:</p>
                <ol>
                    <li><strong>Blood Collection:</strong> A small amount of blood is drawn using a sterile, single-use kit.</li>
                    <li><strong>Separation:</strong> We use a high-speed centrifuge to isolate the Platelet-Rich Plasma from the red and white blood cells.</li>
                    <li><strong>Micro-Injection:</strong> The concentrated "liquid gold" is injected into the scalp at a specific depth where the hair bulbs are located, focusing on areas of thinning.</li>
                </ol>
            `
        },
        {
            id: 'results-maintenance',
            title: 'What to Expect and Long-Term Results',
            content: `
                <p>Hair restoration is a cumulative process. For the best aesthetic outcome, we recommend a structured approach:</p>
                <ul>
                    <li><strong>The Initial Phase:</strong> Most patients require 3 to 4 initial sessions, spaced approximately 4 weeks apart, to "jumpstart" the follicles.</li>
                    <li><strong>The Maintenance Phase:</strong> To sustain the results and counteract the genetic progression of hair loss, a single maintenance session every 6 to 12 months is usually advised.</li>
                    <li><strong>Complementary Therapy:</strong> PRP can be safely combined with other treatments, such as Minoxidil or following a hair transplant, to enhance overall density.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Global Care & Logistics',
            content: `
                <p>We provide full-service support for international patients seeking advanced hair restoration:</p>
                <ul>
                    <li><strong>Logistics:</strong> We assist with airport transfers and premium accommodation near our clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Continuity:</strong> You can choose to perform your initial series in one country and your maintenance sessions in another within our clinical network.</li>
                    <li><strong>Safety & Expertise:</strong> All procedures are performed by certified medical professionals using FDA/CE-cleared PRP kits to ensure the highest platelet concentration.</li>
                </ul>
            `
        }
    ]
};

export default prpHairContent;