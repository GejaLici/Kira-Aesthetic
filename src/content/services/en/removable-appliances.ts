import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
    description: [
        "Removable orthodontic appliances are custom-engineered devices that can be easily taken in and out of the mouth by the patient. Unlike traditional fixed braces, these appliances offer a high degree of flexibility and are primarily used for minor tooth movements, jaw growth guidance in children, and the critical retention phase following comprehensive orthodontic treatment.",
        "While they are not a substitute for fixed braces in complex cases, removable appliances are indispensable tools for achieving specific functional goals and maintaining the results of a perfectly aligned smile. Whether it is a clear retainer or a functional plate, the success of these treatments relies heavily on patient compliance and a personalized treatment plan designed by an expert orthodontist."
    ],
    benefits: [
        "Enhanced Hygiene: Appliances are removed for brushing and flossing, making it easier to maintain oral health.",
        "Discreet Treatment: Many modern removable options, such as clear retainers, are virtually invisible.",
        "Comfort & Convenience: Can be removed for eating, sports, and special occasions.",
        "Growth Guidance: Highly effective in pediatric orthodontics for guiding developing jaw structures.",
        "Vital Retention: Ensures that teeth do not shift back to their original positions after braces are removed."
    ],
    quickFacts: {
        procedureTime: '30-minute fitting session',
        anesthesia: 'None required',
        recoveryTime: '1-3 days to adjust speech and comfort',
        results: 'Long-term stability of tooth alignment',
    },
    sections: [
        {
            id: 'types-of-appliances',
            title: 'Types of Removable Orthodontic Devices',
            content: `
                <p>We utilize various specialized appliances depending on the patient's age and clinical objectives:</p>
                <ul>
                    <li><strong>Hawley Retainers:</strong> The classic durable retainer made of a metal wire and a plastic base, used to maintain alignment post-braces.</li>
                    <li><strong>Clear Aligners/Retainers:</strong> Transparent plastic trays that are nearly invisible and highly aesthetic for teenagers and adults.</li>
                    <li><strong>Functional Appliances:</strong> Devices like Twin Blocks or Activators that utilize jaw muscle forces to correct bite discrepancies in growing children.</li>
                    <li><strong>Orthodontic Plates:</strong> Often equipped with expansion screws or springs to gently widen a narrow arch or tip a specific tooth into place.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'The Custom Fabrication Process',
            content: `
                <p>Achieving a perfect fit is essential for both comfort and clinical effectiveness:</p>
                <ol>
                    <li><strong>Digital Impressions:</strong> We use high-precision scans or traditional molds to create an exact 3D replica of your teeth.</li>
                    <li><strong>Laboratory Design:</strong> Your custom appliance is fabricated in a specialized dental lab to meet the orthodontist's exact specifications.</li>
                    <li><strong>Fitting & Adjustment:</strong> During your appointment, we ensure the device sits comfortably and provide instructions on how to insert and remove it safely.</li>
                </ol>
            `
        },
        {
            id: 'patient-compliance',
            title: 'Life with a Removable Appliance',
            content: `
                <p>Because these devices are removable, your commitment is the most important factor in the success of the treatment:</p>
                <ul>
                    <li><strong>Prescribed Wear Time:</strong> Most appliances must be worn 22 hours a day (including during sleep) to be effective, unless they are specifically for nighttime use.</li>
                    <li><strong>Cleaning Protocol:</strong> Appliances should be cleaned daily with a soft toothbrush and cool water or specialized cleaning tablets to prevent bacteria buildup.</li>
                    <li><strong>Safe Storage:</strong> Whenever the appliance is not in your mouth, it should be kept in its protective case to avoid damage or loss.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Care for International Patients',
            content: `
                <p>We provide a seamless experience for families and individuals traveling for orthodontic care:</p>
                <ul>
                    <li><strong>Efficient Scheduling:</strong> We coordinate digital scans and fittings to minimize the number of visits required for international clients.</li>
                    <li><strong>Regional Continuity:</strong> Follow-up adjustments can be managed across our clinic network in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Logistics Assistance:</strong> Full support for transportation and accommodation to ensure your stay is comfortable and stress-free.</li>
                </ul>
            `
        }
    ]
};

export default removableOrthodonticsContent;