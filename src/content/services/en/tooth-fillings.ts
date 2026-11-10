import type { ServiceContent } from '@/lib/services';

const toothFillingsContent: ServiceContent = {
    description: [
        "A dental filling is a fundamental restorative procedure used to treat tooth decay, commonly known as a cavity. When bacteria erode the tooth enamel, they create a hole that, if left untreated, can reach the sensitive inner pulp, leading to severe pain and infection. A filling stops this progression by removing the decayed tissue and sealing the space with a durable, biocompatible material.",
        "Modern restorative dentistry has evolved beyond traditional metals. At our clinic, we focus on high-quality composite resins that not only restore the structural integrity of your tooth but also mimic its natural translucency and color. This ensures that your dental work is both functionally robust and aesthetically indistinguishable from your natural smile."
    ],
    benefits: [
        "Halts Decay: Stops the spread of bacteria into the deeper layers of the tooth.",
        "Structural Reinforcement: Restores the tooth's strength, allowing for normal chewing and biting.",
        "Natural Aesthetics: Tooth-colored composite materials blend seamlessly with your enamel.",
        "Prevents Complications: Avoiding a simple filling often leads to more invasive treatments like root canals.",
        "Enamel Preservation: Modern bonding techniques require less removal of healthy tooth structure."
    ],
    quickFacts: {
        procedureTime: '20 - 45 minutes per tooth',
        anesthesia: 'Local anesthesia for a pain-free experience',
        recoveryTime: 'Immediate; wait for numbness to wear off before eating',
        results: 'Long-lasting restoration of tooth function and shape',
    },
    sections: [
        {
            id: 'material-excellence',
            title: 'Advanced Composite Resin Technology',
            content: `
                <p>We primarily utilize "white" or tooth-colored composite fillings for several clinical reasons:</p>
                <ul>
                    <li><strong>Aesthetic Matching:</strong> We use a comprehensive shade guide to match the resin to your specific tooth color.</li>
                    <li><strong>Chemical Bonding:</strong> Unlike silver fillings that sit in the tooth, composites bond directly to the tooth structure, providing extra support.</li>
                    <li><strong>Versatility:</strong> Composites can be used to repair chipped or broken teeth as well as filling cavities.</li>
                    <li><strong>Safety:</strong> Composite resins are mercury-free and do not expand or contract significantly with temperature changes.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'The Restoration Process',
            content: `
                <p>A filling is a routine procedure performed with precision and care:</p>
                <ol>
                    <li><strong>Numbing:</strong> A local anesthetic is applied so you feel no discomfort during the process.</li>
                    <li><strong>Cavity Preparation:</strong> All decayed and weakened tooth structure is carefully removed using specialized instruments.</li>
                    <li><strong>Decontamination:</strong> The empty space is thoroughly cleaned and disinfected to remove any remaining bacteria.</li>
                    <li><strong>Layering:</strong> The composite material is applied in thin layers, with each layer being hardened (cured) using a specialized blue light.</li>
                    <li><strong>Bite Adjustment:</strong> We check your bite to ensure the filling feels natural and polish the surface to a smooth finish.</li>
                </ol>
            `
        },
        {
            id: 'longevity-care',
            title: 'Caring for Your Fillings',
            content: `
                <p>While modern fillings are incredibly durable, their lifespan depends on your oral hygiene habits:</p>
                <ul>
                    <li><strong>Initial Sensitivity:</strong> It is normal to feel minor sensitivity to temperature for 24–48 hours after the procedure.</li>
                    <li><strong>Hygiene:</strong> Brush twice daily and floss around the filling to prevent "secondary decay" at the margins of the restoration.</li>
                    <li><strong>Dietary Habits:</strong> Limit sugary snacks and acidic drinks that can weaken the interface between the filling and the tooth.</li>
                    <li><strong>Regular Checks:</strong> During your 6-month check-ups, we monitor the integrity of your fillings to ensure they remain sealed and functional.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Restorative Care for International Travelers',
            content: `
                <p>For patients visiting from abroad, we offer efficient restorative care as part of a comprehensive dental plan:</p>
                <ul>
                    <li><strong>Same-Day Treatment:</strong> We can often identify and fill multiple cavities in a single appointment to save you time.</li>
                    <li><strong>Full Smile Audit:</strong> We use digital X-rays to detect hidden decay between teeth that may not be visible to the naked eye.</li>
                    <li><strong>Network Convenience:</strong> Should you require future dental work, your records are available across our clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, and <strong>Italy</strong>.</li>
                </ul>
            `
        }
    ]
};

export default toothFillingsContent;