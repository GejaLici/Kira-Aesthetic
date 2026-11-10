import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "A beard transplant is a specialized hair restoration procedure designed to increase facial hair density and redefine the masculine aesthetic. Whether you struggle with patchy growth, thin facial hair, or wish to conceal facial scars, this procedure uses your own hair follicles to create a full, natural-looking beard, mustache, or sideburns.",
        "Using the advanced Follicular Unit Extraction (FUE) technique, individual follicles are harvested from the scalp and artistically implanted into the face. This permanent solution allows you to grow a real beard that can be shaved, trimmed, and styled just like natural facial hair, providing a significant boost to self-confidence and facial symmetry."
    ],
    benefits: [
        "Permanent solution for patchy or thin beards and mustaches.",
        "Natural-looking results with hair that grows at the correct angle and direction.",
        "Artistic design tailored to your specific facial structure and aesthetic goals.",
        "Minimally invasive FUE technique with no linear scarring and rapid recovery.",
        "Ability to conceal facial scars, acne marks, or previous injuries."
    ],
    quickFacts: {
        procedureTime: '3 - 8 hours',
        anesthesia: 'local anesthesia',
        recoveryTime: '7 - 10 days for initial healing',
        results: 'visible growth after 3-4 months; full results at 12 months',
    },
    sections: [
        {
            id: 'fue-technique',
            title: 'The Art of FUE Beard Restoration',
            content: `
                <p>Creating a realistic beard requires a blend of surgical precision and artistic vision. We exclusively utilize the FUE (Follicular Unit Extraction) method:</p>
                <ul>
                    <li><strong>Individual Extraction:</strong> Follicles are harvested one by one from the donor area (usually the back of the scalp) using micro-punches, leaving no visible scars.</li>
                    <li><strong>Strategic Placement:</strong> Each graft is meticulously angled to mimic the natural downward flow of facial hair.</li>
                    <li><strong>Natural Integration:</strong> We select single-hair grafts for the edges and denser grafts for the center of the beard to ensure a soft, undetectable transition.</li>
                </ul>
            `
        },
        {
            id: 'treatment-phases',
            title: 'Your Transplant Journey',
            content: `
                <p>The procedure is an outpatient experience designed for your comfort:</p>
                <ol>
                    <li><strong>Design & Mapping:</strong> We draw the new beard outline based on your facial proportions and desired style.</li>
                    <li><strong>Harvesting:</strong> Under local anesthesia, donor follicles are extracted from the scalp.</li>
                    <li><strong>Site Creation:</strong> Micro-channels are created in the beard area, determining the density and direction.</li>
                    <li><strong>Implantation:</strong> The grafts are carefully placed into the recipient sites.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Recovery and Growth Timeline',
            content: `
                <p>Understanding the healing process is key to a successful outcome:</p>
                <ul>
                    <li><strong>First Week:</strong> Tiny crusts will form around the grafts. Redness and slight swelling are normal and subside quickly.</li>
                    <li><strong>Shock Loss:</strong> Between weeks 2 and 4, the transplanted hairs will fall out. This is a normal part of the cycle; the roots remain healthy underground.</li>
                    <li><strong>Regrowth:</strong> New permanent hair begins to emerge around month 3 or 4.</li>
                    <li><strong>Full Density:</strong> The beard will continue to thicken, reaching its final, mature appearance between 10 and 12 months.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'International Support & Follow-up',
            content: `
                <p>We provide a seamless experience for patients traveling from abroad:</p>
                <ul>
                    <li><strong>Travel Logistics:</strong> Comprehensive assistance with transportation and accommodation near our clinic.</li>
                    <li><strong>Multi-Location Follow-up:</strong> For your convenience, you can arrange your follow-up check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Continuous Support:</strong> Our team remains available for digital consultations and post-operative guidance throughout your entire growth journey.</li>
                </ul>
            `
        }
    ]
};

export default beardTransplantContent;