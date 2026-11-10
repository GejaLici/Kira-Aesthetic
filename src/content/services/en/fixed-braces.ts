import type { ServiceContent } from '@/lib/services';

const fixedBracesContent: ServiceContent = {
    description: [
        "Fixed braces remain the most reliable and effective orthodontic solution for achieving a perfectly aligned smile. Comprising small brackets bonded to each tooth and connected by a specialized archwire, they apply gentle, continuous pressure to guide teeth into their ideal positions. This method offers unparalleled precision, allowing orthodontists to correct even the most complex bite and alignment issues.",
        "Whether you are addressing severe crowding, gaps, or significant bite discrepancies like overbites and crossbites, traditional fixed braces provide a versatile and powerful toolset. Modern advancements mean today’s systems are smaller, more comfortable, and more aesthetic than ever, making them a preferred choice for both adolescents and adults seeking a permanent smile transformation."
    ],
    benefits: [
        "Precision control: Capable of correcting complex dental movements and severe misalignments.",
        "Versatility: Effectively treats overbites, underbites, crossbites, and open bites.",
        "Constant correction: Fixed in place, ensuring the treatment is working 24/7 without requiring patient compliance.",
        "Improved oral health: Straightening teeth makes them easier to clean, reducing the risk of decay and gum disease.",
        "Durable results: A time-tested method that provides a lifelong foundation for a healthy smile."
    ],
    quickFacts: {
        procedureTime: '1 - 2 hours for placement',
        anesthesia: 'None required',
        recoveryTime: '3 - 5 days to adjust to the pressure',
        results: 'Complete alignment typically in 18 - 24 months',
    },
    sections: [
        {
            id: 'brace-options',
            title: 'Modern Orthodontic Options',
            content: `
                <p>We provide various brace systems to suit your lifestyle and aesthetic preferences:</p>
                <ul>
                    <li><strong>Metal Braces:</strong> The most durable and traditional option, now featuring smaller, high-grade stainless steel brackets for increased comfort.</li>
                    <li><strong>Ceramic Braces:</strong> A discreet alternative using tooth-colored or clear ceramic brackets that blend in with your natural enamel—ideal for professionals and image-conscious teens.</li>
                    <li><strong>Customized Archwires:</strong> We use heat-activated wires that use your body heat to help teeth move more quickly and less painfully than in the past.</li>
                </ul>
            `
        },
        {
            id: 'treatment-journey',
            title: 'Your Path to a Straight Smile',
            content: `
                <p>Orthodontic treatment is a structured journey focused on gradual, healthy movement:</p>
                <ol>
                    <li><strong>The Setup:</strong> Brackets are precisely bonded to your teeth, and the initial archwire is engaged. This process is completely painless.</li>
                    <li><strong>Periodic Adjustments:</strong> Every 4–8 weeks, you will visit us to have your wires tightened or changed, ensuring your teeth continue moving toward their target.</li>
                    <li><strong>The Reveal:</strong> Once alignment is complete, the braces are removed, and we perform a professional cleaning to reveal your new smile.</li>
                </ol>
            `
        },
        {
            id: 'life-with-braces',
            title: 'Care and Maintenance',
            content: `
                <p>Maintaining your braces is essential for a successful outcome and healthy enamel:</p>
                <ul>
                    <li><strong>Dietary Adjustments:</strong> Avoid hard, sticky, or very crunchy foods (like nuts, gum, or hard crusts) that can break brackets or bend wires.</li>
                    <li><strong>Enhanced Hygiene:</strong> You'll be taught specialized brushing and flossing techniques using interdental brushes to keep the areas around your brackets plaque-free.</li>
                    <li><strong>Retention Phase:</strong> After removal, wearing a custom retainer is vital to ensure your teeth stay in their new, beautiful positions for years to come.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Global Care for Orthodontic Patients',
            content: `
                <p>For patients traveling from abroad, we ensure your orthodontic experience is efficient and well-supported:</p>
                <ul>
                    <li><strong>Coordinated Appointments:</strong> We schedule your adjustment visits to maximize your time, offering full support for local travel and lodging.</li>
                    <li><strong>Continuity of Care:</strong> Our clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, and <strong>Italy</strong> allow you to choose the most convenient location for your regular check-ups and adjustments.</li>
                    <li><strong>Emergency Support:</strong> We provide guidance and local contacts in your home country for minor adjustments if needed between visits.</li>
                </ul>
            `
        }
    ]
};

export default fixedBracesContent;