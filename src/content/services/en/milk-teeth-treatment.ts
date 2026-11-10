import type { ServiceContent } from '@/lib/services';

const milkTeethTreatmentContent: ServiceContent = {
    description: [
        "The health of a child's primary teeth—commonly known as milk teeth—is the foundation for their future adult smile. These first teeth are much more than temporary; they are essential for proper nutrition through chewing, the development of clear speech, and most importantly, acting as natural space maintainers. They guide permanent teeth into their correct positions, preventing future crowding and complex orthodontic issues.",
        "Treating cavities and infections in milk teeth is vital to prevent pain and ensure that the developing permanent teeth underneath are not damaged by spreading bacteria. Our pediatric dentistry focus is on saving these primary teeth whenever possible, ensuring your child grows up with a healthy, functional mouth and a positive attitude toward dental care."
    ],
    benefits: [
        "Proper Development: Ensures permanent teeth have the correct space to emerge.",
        "Pain Prevention: Stops toothaches and sensitivity that can affect a child's sleep and learning.",
        "Clear Speech: Supports the correct placement of the tongue for clear pronunciation.",
        "Nutritional Health: Allows children to chew a wide variety of healthy, crunchy foods comfortably.",
        "Psychological Confidence: Helps children feel proud of their smile from an early age."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes per session',
        anesthesia: 'Local anesthesia or mild sedation if needed',
        recoveryTime: 'Immediate; avoid eating until numbness wears off',
        results: 'Restored function and infection-free primary teeth',
    },
    sections: [
        {
            id: 'pediatric-specialties',
            title: 'Specialized Treatments for Children',
            content: `
                <p>Children require a different clinical approach than adults. We offer specialized pediatric procedures tailored to smaller mouths:</p>
                <ul>
                    <li><strong>Composite Fillings:</strong> We use safe, tooth-colored materials to discreetly repair cavities and restore the tooth's structure.</li>
                    <li><strong>Pulpotomy ("Baby Root Canal"):</strong> When decay reaches the nerve, we perform a gentle pulp therapy to remove only the affected part, saving the tooth and stopping the pain.</li>
                    <li><strong>Pediatric Crowns:</strong> For teeth with extensive decay, we use durable zirconia or stainless steel crowns to protect the tooth until it falls out naturally.</li>
                    <li><strong>Space Maintainers:</strong> If a milk tooth is lost too early, we place a custom appliance to keep the gap open for the future adult tooth.</li>
                </ul>
            `
        },
        {
            id: 'fear-free-dentistry',
            title: 'A Fear-Free Experience',
            content: `
                <p>We know that a child's first few dental visits can define their lifelong relationship with oral health. Our clinic is designed to be a welcoming space:</p>
                <ol>
                    <li><strong>Tell-Show-Do:</strong> We explain every tool and step in child-friendly language before we begin.</li>
                    <li><strong>Gentle Technique:</strong> Our pediatric specialists are trained in behavioral management to keep children calm and cooperative.</li>
                    <li><strong>Positive Reinforcement:</strong> We focus on making the experience rewarding, ensuring your child leaves with a smile and a sense of accomplishment.</li>
                </ol>
            `
        },
        {
            id: 'preventive-shield',
            title: 'The Preventive Shield',
            content: `
                <p>The best treatment is prevention. We provide high-level protection to stop cavities before they start:</p>
                <ul>
                    <li><strong>Fissure Sealants:</strong> A thin, protective coating applied to the chewing surfaces of back molars to "seal out" food and bacteria.</li>
                    <li><strong>Fluoride Therapy:</strong> Professional-grade fluoride applications to strengthen the enamel and make it more resistant to acid attacks.</li>
                    <li><strong>Home Care Education:</strong> Hands-on demonstrations for parents and kids on the best brushing and flossing techniques for little hands.</li>
                </ul>
            `
        },
        {
            id: 'international-families',
            title: 'Support for International Families',
            content: `
                <p>We welcome families from across the globe, providing a seamless experience for children's dental care:</p>
                <ul>
                    <li><strong>Family-Friendly Logistics:</strong> Assistance with child-friendly accommodation and transport in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Multilingual Care:</strong> Our team communicates clearly in several languages to ensure both parents and children feel understood.</li>
                    <li><strong>Continuity:</strong> Follow-up appointments and preventive check-ups can be coordinated across any of our regional clinic locations.</li>
                </ul>
            `
        }
    ]
};

export default milkTeethTreatmentContent;