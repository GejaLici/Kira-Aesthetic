import type { ServiceContent } from '@/lib/services';

const teethCleaningContent: ServiceContent = {
    description: [
        "Professional dental cleaning, medically known as prophylaxis, is the most essential preventive treatment in modern dentistry. Even with meticulous brushing and flossing at home, plaque—a sticky film of bacteria—can accumulate in hard-to-reach areas and mineralize into tartar (calculus). Once tartar forms, it cannot be removed by a toothbrush and requires professional intervention to prevent it from causing tooth decay and gum disease.",
        "Our deep cleaning protocol goes beyond the surface to eliminate bacterial colonies and hardened deposits that compromise your oral health. By combining advanced ultrasonic scaling with high-precision polishing, we restore the smooth surface of your enamel, making it harder for new plaque to attach and leaving your mouth feeling remarkably fresh and clean."
    ],
    benefits: [
        "Cavity Prevention: Removes the acidic bacterial buildup that erodes tooth enamel.",
        "Gum Disease Defense: Stops gingivitis in its tracks before it progresses to permanent bone loss (periodontitis).",
        "Stain Removal: Gently polishes away external stains from coffee, tea, red wine, and tobacco.",
        "Fresh Breath: Eliminates the sulfur-producing bacteria that are the primary cause of halitosis.",
        "Systemic Health: Reduces oral inflammation, which is clinically linked to heart disease and diabetes."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes',
        anesthesia: 'None required (topical numbing gel available for sensitive gums)',
        recoveryTime: 'Immediate; avoid highly pigmented food for 2-3 hours',
        results: 'Instant freshness and cleaner appearance',
    },
    sections: [
        {
            id: 'cleaning-process',
            title: 'Our Comprehensive Cleaning Protocol',
            content: `
                <p>We utilize a multi-step process to ensure every tooth surface is meticulously decontaminated:</p>
                <ul>
                    <li><strong>Ultrasonic Scaling:</strong> We use state-of-the-art ultrasonic devices that emit high-frequency vibrations to gently "shake" tartar loose without damaging the enamel.</li>
                    <li><strong>Manual Fine-Scaling:</strong> Our hygienists use precision hand instruments to remove any remaining stubborn deposits from tight spaces and under the gumline.</li>
                    <li><strong>Air-Flow or Prophy-Jet:</strong> For advanced stain removal, we may use a pressurized stream of air, water, and fine powder to clean deep into the pits and fissures of the teeth.</li>
                    <li><strong>Professional Polishing:</strong> A specialized rotating cup and prophylactic paste are used to smooth the tooth surface, creating a high-gloss finish.</li>
                </ul>
            `
        },
        {
            id: 'preventive-care',
            title: 'The Foundation of Long-Term Health',
            content: `
                <p>A cleaning session is also an opportunity for a detailed health check:</p>
                <ol>
                    <li><strong>Periodontal Screening:</strong> We measure the "pockets" between your teeth and gums to detect early signs of gum recession or bone loss.</li>
                    <li><strong>Oral Cancer Screening:</strong> A visual inspection of the soft tissues to ensure everything looks healthy.</li>
                    <li><strong>Personalized Hygiene Coaching:</strong> We provide tailored advice on the best tools (electric brushes, interdental cleaners) for your specific dental anatomy.</li>
                </ol>
            `
        },
        {
            id: 'frequency-recommendations',
            title: 'How Often Should You Visit?',
            content: `
                <p>While the standard recommendation is every <strong>six months</strong>, we customize the frequency based on your "biological risk":</p>
                <ul>
                    <li><strong>Low Risk:</strong> Twice a year is sufficient for patients with excellent home care and healthy gums.</li>
                    <li><strong>High Risk:</strong> Patients with a history of gum disease, smokers, or those with braces may require cleanings every 3–4 months.</li>
                    <li><strong>Diabetes & Pregnancy:</strong> These conditions increase the risk of gum inflammation, making regular professional cleanings even more critical.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Concierge Services for Global Patients',
            content: `
                <p>For our international clients, we treat a professional cleaning as part of a comprehensive "Smile Check-up" visit:</p>
                <ul>
                    <li><strong>Easy Scheduling:</strong> We coordinate your cleaning alongside other treatments to maximize your time in our clinics.</li>
                    <li><strong>Regional Access:</strong> Maintain your oral health across our network in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Travel Support:</strong> Assistance with transportation and premium accommodation to make your dental holiday stress-free.</li>
                </ul>
            `
        }
    ]
};

export default teethCleaningContent;