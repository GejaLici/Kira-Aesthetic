import type { ServiceContent } from '@/lib/services';

const dentalSealantsContent: ServiceContent = {
    description: [
        "A dental sealant is a high-performance, thin protective coating applied to the chewing surfaces of the back teeth (molars and premolars). These teeth naturally contain deep pits and fissures—microscopic grooves that are often narrower than a single toothbrush bristle. By filling these vulnerable areas, sealants create a smooth, impermeable shield that prevents food particles and acid-producing bacteria from settling into the enamel.",
        "Sealants are considered one of the most effective preventive measures in modern pediatric dentistry. This painless, non-invasive treatment acts as a physical barrier against decay, significantly reducing the likelihood of cavities during a child’s most cavity-prone years. It is a proactive investment that protects the structural integrity of permanent teeth before decay has a chance to start."
    ],
    benefits: [
        "Targeted Protection: Shields the deep grooves of molars where 80% of cavities in children occur.",
        "Painless & Non-Invasive: No drilling, no injections, and no removal of tooth structure required.",
        "Rapid Application: Each tooth can be sealed and protected in just a few minutes.",
        "Long-Term Durability: Can withstand the pressure of normal chewing for several years.",
        "Cost-Effective Prevention: Significantly less expensive than the fillings or crowns required to treat decay."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutes per tooth',
        anesthesia: 'None required',
        recoveryTime: 'Immediate; patients can eat and drink right away',
        results: 'Instant protection against food and plaque buildup',
    },
    sections: [
        {
            id: 'how-sealants-work',
            title: 'Creating a Physical Barrier',
            content: `
                <p>To understand the value of sealants, it helps to look at the anatomy of a molar:</p>
                <ul>
                    <li><strong>The Problem:</strong> The "pits and fissures" on the top of molars are deep enough to trap plaque but too small to be cleaned by a toothbrush.</li>
                    <li><strong>The Solution:</strong> The liquid sealant flows into these deep grooves, filling them completely and hardening into a tough, plastic-like shield.</li>
                    <li><strong>The Result:</strong> A smooth surface that is easy to brush clean, leaving no room for bacteria to hide and produce the acids that cause cavities.</li>
                </ul>
            `
        },
        {
            id: 'application-steps',
            title: 'A Simple, Multi-Step Process',
            content: `
                <p>The application of a sealant is a straightforward clinical procedure performed during a routine visit:</p>
                
                <ol>
                    <li><strong>Decontamination:</strong> The tooth is meticulously cleaned to remove any surface plaque or debris.</li>
                    <li><strong>Conditioning:</strong> A mild etching gel is applied to the enamel for a few seconds to create a microscopic texture, ensuring a permanent bond.</li>
                    <li><strong>Bonding:</strong> The tooth is rinsed and dried, and the liquid sealant is "painted" onto the grooves of the tooth.</li>
                    <li><strong>Light-Curing:</strong> A specialized blue LED light is used to instantly harden the material, bonding it securely to the enamel.</li>
                </ol>
            `
        },
        {
            id: 'optimal-timing',
            title: 'When is the Best Time for Sealants?',
            content: `
                <p>Timing is critical to ensure the teeth are protected as soon as they are most vulnerable:</p>
                <ul>
                    <li><strong>First Molars:</strong> These usually erupt around age 6. Sealing them early protects them through the transition into permanent dentition.</li>
                    <li><strong>Second Molars:</strong> These typically appear around age 12. Sealing these "12-year molars" provides protection through the teenage years.</li>
                    <li><strong>Adult Patients:</strong> While most common in children, adults with deep grooves and no existing fillings can also benefit from the preventive power of sealants.</li>
                </ul>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Maintenance and Longevity',
            content: `
                <p>While sealants are incredibly durable, they are not permanent and require minimal oversight:</p>
                <ul>
                    <li><strong>Routine Checks:</strong> During every 6-month check-up, our team inspects the sealants for any signs of wear, chipping, or lifting.</li>
                    <li><strong>Easy Repairs:</strong> If a sealant is worn down by heavy chewing, it can be easily touched up or reapplied without any discomfort.</li>
                    <li><strong>Home Care:</strong> Sealants protect the chewing surfaces, but daily brushing and flossing are still essential to protect the sides and spaces between the teeth.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Pediatric Excellence for Traveling Families',
            content: `
                <p>For families visiting our clinics from abroad, we coordinate preventive care to maximize efficiency:</p>
                <ul>
                    <li><strong>Combined Sessions:</strong> We can perform cleanings, fluoridation, and sealants in a single session to respect your travel schedule.</li>
                    <li><strong>Regional Records:</strong> Your child’s preventive dental history is accessible across our clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, and <strong>Italy</strong>.</li>
                    <li><strong>Full Support:</strong> Our team assists with child-friendly accommodation and local transportation to ensure a stress-free medical trip.</li>
                </ul>
            `
        }
    ]
};

export default dentalSealantsContent;