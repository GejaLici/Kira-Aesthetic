import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "A dental bridge is a fixed restorative solution designed to replace one or more missing teeth by literally 'bridging' the gap. It consists of custom-made false teeth (pontics) that are anchored in place by dental crowns (abutments) placed on the natural teeth or implants on either side of the space.",
        "Beyond just restoring your smile’s appearance, a bridge is vital for maintaining dental health. It prevents your remaining teeth from shifting out of alignment, restores your ability to chew and speak properly, and helps maintain the natural shape of your face by providing structural support to your lips and cheeks."
    ],
    benefits: [
        "Instantly restores the aesthetic appearance of a complete, healthy smile.",
        "Improves chewing efficiency and clarifies speech affected by missing teeth.",
        "Prevents 'drifting'—the movement of adjacent teeth into the empty space.",
        "Distributes the force of your bite evenly to protect surrounding teeth.",
        "Offers a stable, fixed alternative to removable partial dentures."
    ],
    quickFacts: {
        procedureTime: '2+ visits (preparation & final fitting)',
        anesthesia: 'local anesthetic',
        recoveryTime: 'Immediate; adjustment period of 2-3 days',
        results: 'Durable and long-lasting; fixed restoration',
    },
    sections: [
        {
            id: 'bridge-types',
            title: 'Customized Bridging Options',
            content: `
                <p>We offer several types of bridges tailored to your specific clinical needs and the location of the missing teeth:</p>
                <ul>
                    <li><strong>Traditional Bridges:</strong> The most common choice, where crowns are placed on the two teeth adjacent to the gap.</li>
                    <li><strong>Cantilever Bridges:</strong> Used when there is an adjacent tooth on only one side of the missing space.</li>
                    <li><strong>Maryland Bridges:</strong> A conservative option often used for front teeth, utilizing a metal or porcelain framework bonded to the back of neighboring teeth.</li>
                    <li><strong>Implant-Supported Bridges:</strong> The most stable solution for multiple missing teeth, anchored by dental implants rather than natural teeth.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'The Restoration Process',
            content: `
                <p>The journey to a restored smile typically involves two key phases:</p>
                <ol>
                    <li><strong>Abutment Preparation:</strong> The anchor teeth are precisely shaped to house the supporting crowns. We then take high-definition impressions to guide the dental laboratory.</li>
                    <li><strong>Temporary Bridge:</strong> We provide a temporary restoration to protect your teeth and maintain aesthetics while your custom bridge is crafted.</li>
                    <li><strong>Final Integration:</strong> Once the permanent bridge is ready, we meticulously check the fit, bite, and color match before securing it with dental cement.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Long-Term Oral Health',
            content: `
                <p>The longevity of a bridge depends on the health of the supporting teeth and gums:</p>
                <ul>
                    <li><strong>Specialized Cleaning:</strong> We will show you how to use floss threaders or interproximal brushes to clean under the pontic (the false tooth).</li>
                    <li><strong>Foundation Health:</strong> Regular brushing and flossing of the anchor teeth are essential to prevent decay and gum disease that could compromise the bridge.</li>
                    <li><strong>Professional Check-ups:</strong> Routine visits allow us to ensure the bridge remains securely cemented and the surrounding tissues stay healthy.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'World-Class Care for Global Patients',
            content: `
                <p>We provide a seamless experience for those traveling to our clinic for restorative dentistry:</p>
                <ul>
                    <li><strong>Coordinated Logistics:</strong> Comprehensive support with local transportation and premium accommodation near the clinic.</li>
                    <li><strong>Multi-Country Follow-up:</strong> You have the unique advantage of attending follow-up care in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Efficient Timelines:</strong> We prioritize your treatment schedule to ensure your permanent restoration is completed comfortably within your travel dates.</li>
                </ul>
            `
        }
    ]
};

export default dentalBridgesContent;