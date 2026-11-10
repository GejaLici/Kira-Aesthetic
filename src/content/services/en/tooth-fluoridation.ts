import type { ServiceContent } from '@/lib/services';

const toothFluoridationContent: ServiceContent = {
    description: [
        "Professional tooth fluoridation is a cornerstone of preventive pediatric dentistry, acting as a powerful shield for developing smiles. Fluoride is a naturally occurring mineral that facilitates the remineralization of tooth enamel—the hard, protective outer layer of the teeth. By integrating into the enamel structure, fluoride makes the teeth significantly more resistant to the acid attacks from plaque bacteria and sugars that cause cavities.",
        "For children, professional fluoride treatments are particularly vital as their newly erupted permanent teeth are not yet fully mineralized and are more susceptible to decay. This simple, painless procedure not only prevents future cavities but can also help 'heal' very early-stage decay by redepositing minerals into weakened areas of the enamel before a hole can form."
    ],
    benefits: [
        "Enamel Reinforcement: Significantly hardens tooth enamel against bacterial acid.",
        "Cavity Prevention: Clinically proven to reduce the risk of tooth decay in children and adolescents.",
        "Painless Protection: A fast, non-invasive application that requires no drilling or numbing.",
        "Reverses Early Decay: Can stop and reverse the progression of incipient white-spot lesions.",
        "Cost-Effective: A simple preventive measure that avoids the need for expensive future fillings or extractions."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutes',
        anesthesia: 'None required',
        recoveryTime: 'Immediate; avoid brushing until the following morning',
        results: 'Strengthened enamel and increased resistance to decay',
    },
    sections: [
        {
            id: 'fluoride-application',
            title: 'Advanced Fluoride Varnish Technology',
            content: `
                <p>We utilize the latest generation of fluoride delivery systems to ensure maximum absorption and patient comfort:</p>
                <ul>
                    <li><strong>Fluoride Varnish:</strong> Unlike the older trays or foams, our high-concentration varnish is "painted" onto the teeth. It adheres immediately upon contact with saliva, ensuring the fluoride stays in contact with the enamel for several hours.</li>
                    <li><strong>Pleasant Flavors:</strong> Our varnishes come in child-friendly flavors, making the experience positive for even our youngest patients.</li>
                    <li><strong>Targeted Delivery:</strong> The brush application allows us to focus the fluoride on specific high-risk areas, such as the deep grooves of the molars and the spaces between teeth.</li>
                </ul>
            `
        },
        {
            id: 'why-children-need-it',
            title: 'Why Start Early?',
            content: `
                <p>Pediatric dental health sets the foundation for a lifetime of wellness. Fluoridation is recommended for several key reasons:</p>
                <ol>
                    <li><strong>Immature Enamel:</strong> Newly erupted teeth are softer and more porous than adult teeth, making them "sponges" for fluoride absorption.</li>
                    <li><strong>Dietary Habits:</strong> Children are often more exposed to sugary snacks and juices, requiring extra protection against acid-producing bacteria.</li>
                    <li><strong>Oral Hygiene Learning:</strong> As children refine their brushing skills, fluoride provides a "safety net" for areas they might miss during their daily routine.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Maximizing the Treatment Benefits',
            content: `
                <p>To ensure the fluoride varnish provides the highest level of protection, we recommend the following aftercare:</p>
                <ul>
                    <li><strong>Eating & Drinking:</strong> Your child can drink cool liquids immediately. We suggest waiting 4 to 6 hours before eating crunchy or sticky foods.</li>
                    <li><strong>Brushing & Flossing:</strong> Do not brush or floss your child's teeth for at least 6 to 12 hours (ideally until the next morning). This allows the varnish to remain in contact with the enamel for the optimal duration.</li>
                    <li><strong>Avoid Heat:</strong> Refrain from giving your child very hot drinks or soups for the remainder of the treatment day.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Preventive Care for Traveling Families',
            content: `
                <p>We offer specialized pediatric care packages for families visiting our regional clinics:</p>
                <ul>
                    <li><strong>Comprehensive Check-ups:</strong> Combine fluoridation with dental sealants and a full cleaning for a "Total Protection" visit.</li>
                    <li><strong>Flexible Locations:</strong> Start your child's preventive care in <strong>Albania</strong> and maintain their records across our clinics in <strong>Kosovo</strong> or <strong>Italy</strong>.</li>
                    <li><strong>Travel Assistance:</strong> We provide full support with transportation and family-friendly accommodation to make your dental visit part of a comfortable trip.</li>
                </ul>
            `
        }
    ]
};

export default toothFluoridationContent;