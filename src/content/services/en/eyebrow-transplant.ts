import type { ServiceContent } from '@/lib/services';

const eyebrowTransplantContent: ServiceContent = {
    description: [
        "An eyebrow transplant is a highly specialized hair restoration procedure designed to permanently restore or enhance the density, shape, and definition of the eyebrows. It is an ideal solution for individuals who have lost eyebrow hair due to genetics, over-plucking, scarring, or medical conditions. By using your own natural hair, this procedure provides a permanent, three-dimensional alternative to temporary solutions like microblading or makeup.",
        "Using the advanced Follicular Unit Extraction (FUE) technique, individual hair follicles are meticulously harvested and transplanted to the brow area. Our focus is on the artistic recreation of the brow, ensuring that every hair is placed at the correct angle and direction to mimic natural growth patterns, resulting in beautifully sculpted eyebrows that perfectly frame your face."
    ],
    benefits: [
        "Permanent results: Provides a lifelong solution using your own living hair follicles.",
        "Natural appearance: Individual follicle placement mimics the natural direction of eyebrow hair.",
        "Custom design: Fully personalized eyebrow shape and density tailored to your facial features.",
        "Minimal downtime: Minimally invasive FUE technique allows for rapid healing and no linear scarring.",
        "Eliminates daily maintenance: Reduces or removes the need for eyebrow pencils, gels, or powders."
    ],
    quickFacts: {
        procedureTime: '3 - 5 hours',
        anesthesia: 'local anesthesia',
        recoveryTime: '7 - 10 days for initial healing',
        results: 'Growth begins at 3-4 months; full results at 12 months',
    },
    sections: [
        {
            id: 'art-of-restoration',
            title: 'The Art and Precision of Brow Design',
            content: `
                <p>Eyebrow restoration is as much an art form as it is a medical procedure. We focus on four critical elements to ensure a flawless result:</p>
                <ul>
                    <li><strong>Follicle Selection:</strong> We carefully harvest the finest hairs from the back of the scalp that most closely match the natural texture of eyebrow hair.</li>
                    <li><strong>Anatomic Mapping:</strong> We design the brow shape based on your unique bone structure and facial proportions.</li>
                    <li><strong>Angulation:</strong> Each hair is implanted at a very shallow angle to ensure it lies flat against the skin, just like natural brow hair.</li>
                    <li><strong>Directional Flow:</strong> We replicate the complex, multi-directional growth pattern of the natural eyebrow, from the vertical 'sprouts' at the head to the horizontal 'tail.'</li>
                </ul>
            `
        },
        {
            id: 'the-fue-technique',
            title: 'The FUE Method for Eyebrows',
            content: `
                <p>We exclusively use the Follicular Unit Extraction (FUE) method for its superior results and patient comfort:</p>
                <ol>
                    <li><strong>Donor Harvest:</strong> Individual follicles are extracted using a specialized micro-punch tool, leaving no visible scars.</li>
                    <li><strong>Micro-Incisions:</strong> Tiny, needle-sized sites are created in the brow area to receive the grafts.</li>
                    <li><strong>Implantation:</strong> Grafts are placed one by one under high-magnification to ensure absolute precision.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'What to Expect During Recovery',
            content: `
                <p>Understanding the healing cycle is essential for a stress-free experience:</p>
                <ul>
                    <li><strong>Initial Phase:</strong> Minor redness and tiny crusting around the grafts will resolve within 5–7 days.</li>
                    <li><strong>The 'Shedding' Phase:</strong> It is normal for the transplanted hairs to fall out after 2–4 weeks. The roots remain healthy and dormant beneath the skin.</li>
                    <li><strong>New Growth:</strong> Fine new hairs will begin to emerge after 3–4 months and will continue to thicken over the first year.</li>
                    <li><strong>Trimming:</strong> Because these hairs come from the scalp, they will grow longer than natural brow hairs and require trimming every 1–2 weeks.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Seamless Care for International Clients',
            content: `
                <p>We provide comprehensive support for patients traveling from abroad to our specialized centers:</p>
                <ul>
                    <li><strong>Logistics Support:</strong> Full assistance with local transportation and premium accommodation near our clinic.</li>
                    <li><strong>Regional Continuity:</strong> You can choose to complete your follow-up care or post-op check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Remote Assessment:</strong> Send us clear photos of your brows and donor area for an initial virtual evaluation before you travel.</li>
                </ul>
            `
        }
    ]
};

export default eyebrowTransplantContent;