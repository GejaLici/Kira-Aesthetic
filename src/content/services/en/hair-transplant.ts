import type { ServiceContent } from '@/lib/services';

const hairTransplantContent: ServiceContent = {
    description: [
        "A hair transplant is a highly effective surgical solution designed to permanently restore hair growth in areas affected by thinning or balding. The procedure involves redistributing healthy, balding-resistant hair follicles from a donor area—typically the back or sides of the scalp—to the recipient sites. This results in a natural-looking, permanent restoration of hair density and a redefined hairline.",
        "Modern hair restoration has evolved into a sophisticated blend of medical science and artistry. By utilizing your own natural hair, the results are virtually undetectable, allowing the transplanted hair to grow, be cut, and styled exactly like the rest of your hair. Our goal is to provide a long-lasting boost to your appearance and self-confidence through precision-focused techniques."
    ],
    benefits: [
        "Permanent growth: Transplanted follicles are genetically resistant to the hormones that cause balding.",
        "Natural-looking results: Meticulous placement ensures the hairline and density match your facial features.",
        "Undetectable scarring: Advanced FUE techniques leave only microscopic dots, while FUT scars are easily hidden.",
        "High success rate: Specialized handling of grafts ensures a high survival rate for transplanted hair.",
        "Versatile restoration: Effective for male pattern baldness, thinning crowns, and receding hairlines."
    ],
    quickFacts: {
        procedureTime: '4 - 8 hours (depending on graft count)',
        anesthesia: 'Local anesthesia with optional light sedation',
        recoveryTime: '7 - 10 days for scabbing to clear; 2 weeks for normal activity',
        results: 'Growth begins at 3-4 months; full results visible at 12-18 months',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'FUE vs. FUT: Advanced Restoration Methods',
            content: `
                <p>We offer the two most effective hair restoration techniques, tailoring the choice to your specific hair type and density goals:</p>
                <ul>
                    <li><strong>FUE (Follicular Unit Extraction):</strong> Individual follicles are extracted one-by-one using a micro-punch tool. This is a stitch-less technique that leaves no linear scar and allows for a shorter recovery time.</li>
                    <li><strong>FUT (Follicular Unit Transplantation):</strong> Also known as the 'strip' method, a narrow strip of hair-bearing skin is removed and dissected under high-powered microscopes. This is often ideal for patients requiring a large volume of grafts in a single session.</li>
                </ul>
            `
        },
        {
            id: 'artistic-design',
            title: 'The Art of the Natural Hairline',
            content: `
                <p>A successful transplant is defined by its invisibility. Our surgeons focus on the finer details of hair design:</p>
                <ul>
                    <li><strong>Macro & Micro-Irregularity:</strong> We replicate the natural, non-linear pattern of a real hairline to ensure it doesn't look 'pluggy' or artificial.</li>
                    <li><strong>Angulation:</strong> Grafts are placed at precise angles to match the natural flow and exit-angle of your original hair.</li>
                    <li><strong>Strategic Density:</strong> We prioritize graft placement where it will provide the most significant visual impact and natural coverage.</li>
                </ul>
            `
        },
        {
            id: 'recovery-cycle',
            title: 'Your Growth Timeline',
            content: `
                <p>Patience is key as the hair follicles transition through their natural growth cycles:</p>
                <ol>
                    <li><strong>The First 10 Days:</strong> Initial healing where small scabs form and fall off. Gentle washing is required during this period.</li>
                    <li><strong>The Shedding Phase (Shock Loss):</strong> Within 2–4 weeks, the transplanted hair shafts will fall out. This is normal; the living root remains healthy beneath the skin.</li>
                    <li><strong>New Growth:</strong> Fine new hairs begin to emerge around month 3 or 4.</li>
                    <li><strong>Final Maturation:</strong> The hair continues to thicken and darken, with final density achieved between 12 and 18 months.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Global Care & Support',
            content: `
                <p>We provide a premium experience for international patients traveling for hair restoration:</p>
                <ul>
                    <li><strong>Comprehensive Concierge:</strong> Full assistance with airport transfers, local transportation, and high-end accommodation.</li>
                    <li><strong>Multi-Region Follow-up:</strong> Patients have the unique flexibility to attend follow-up check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Direct Support:</strong> 24/7 access to our medical team for post-operative questions during your initial healing phase abroad.</li>
                </ul>
            `
        }
    ]
};

export default hairTransplantContent;