import type { ServiceContent } from '@/lib/services';

const toothExtractionContent: ServiceContent = {
    description: [
        "A tooth extraction is the clinical removal of a tooth from its socket in the jawbone. While our primary goal is always to preserve your natural dentition, an extraction becomes a necessary and life-quality-improving measure when a tooth is compromised beyond repair. Removing a source of chronic infection or severe pain is often the first step toward restoring your overall oral health and systemic well-being.",
        "Whether you are facing an emergency extraction due to trauma or a planned procedure for wisdom teeth or orthodontic spacing, our clinic provides a sterile, high-tech environment. We focus on 'atraumatic' extraction techniques—methods designed to preserve as much of the surrounding bone and gum tissue as possible, which is crucial if you plan to replace the tooth with a dental implant in the future."
    ],
    benefits: [
        "Pain Elimination: Removes the source of acute or chronic dental pain immediately.",
        "Infection Control: Prevents the spread of bacteria from a dead or abscessed tooth to the rest of the body.",
        "Protection of Adjacent Teeth: Stops the spread of decay and prevents damage from impacted wisdom teeth.",
        "Orthodontic Success: Creates the necessary space for effective teeth alignment in crowded mouths.",
        "Foundation for Restoration: Clears the way for healthy, functional replacements like dental implants."
    ],
    quickFacts: {
        procedureTime: '20 - 60 minutes (depending on complexity)',
        anesthesia: 'Local anesthesia (sedation options available for anxiety)',
        recoveryTime: '2 - 5 days for initial healing; avoid heavy exercise for 48h',
        results: 'Elimination of infection and pain; socket prepared for future restoration',
    },
    sections: [
        {
            id: 'extraction-types',
            title: 'Simple vs. Surgical Extractions',
            content: `
                <p>We categorize extractions based on the complexity of the tooth's position and condition:</p>
                <ul>
                    <li><strong>Simple Extraction:</strong> Performed on teeth that are fully visible above the gumline. Using specialized instruments called elevators and forceps, the tooth is gently loosened and removed under local anesthesia.</li>
                    <li><strong>Surgical Extraction:</strong> Required for teeth that have broken at the gumline or are impacted (like wisdom teeth). This involves a small incision in the gum to safely access the tooth and may involve dividing the tooth into smaller sections for a gentler removal.</li>
                    <li><strong>Wisdom Tooth Removal:</strong> Specialized surgery to remove third molars that are causing pain, cysts, or crowding.</li>
                </ul>
            `
        },
        {
            id: 'comfort-first',
            title: 'A Pain-Free Experience',
            content: `
                <p>Modern dentistry ensures that having a tooth pulled is a manageable and pain-free experience:</p>
                <ol>
                    <li><strong>Profound Anesthesia:</strong> We use advanced local anesthetics to ensure the entire area is completely numb. You will feel pressure, but no sharp pain.</li>
                    <li><strong>Sedation Dentistry:</strong> For patients with dental phobia or for complex surgical cases, we offer sedation options to ensure you remain relaxed and stress-free.</li>
                    <li><strong>Pre-Surgical Imaging:</strong> High-resolution X-rays or 3D CT scans are used to map the exact root structure and proximity to nerves before we begin.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Essential Aftercare & Healing',
            content: `
                <p>Successful healing depends on protecting the blood clot that forms in the socket:</p>
                <ul>
                    <li><strong>The First 24 Hours:</strong> Bite firmly on gauze for 45 minutes. Avoid smoking, drinking through a straw, and vigorous rinsing, as these can cause 'dry socket.'</li>
                    <li><strong>Dietary Choices:</strong> Stick to soft, cool foods like yogurt, smoothies, and lukewarm soups. Avoid crunchy or spicy foods that could irritate the site.</li>
                    <li><strong>Swelling Management:</strong> Use an ice pack on the outside of the cheek in 20-minute intervals during the first day to minimize inflammation.</li>
                    <li><strong>Hygiene:</strong> Brush your other teeth normally, but gently rinse with warm salt water after the first 24 hours to keep the extraction site clean.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Emergency & Surgical Care for Travelers',
            content: `
                <p>We provide rapid-response care for international patients experiencing dental emergencies or requiring planned oral surgery:</p>
                <ul>
                    <li><strong>Immediate Appointments:</strong> We reserve emergency slots for travelers in acute pain who require urgent extractions.</li>
                    <li><strong>Replacement Planning:</strong> If you are traveling for an extraction, we can coordinate a 'socket preservation' graft to prepare you for a dental implant during the same visit.</li>
                    <li><strong>Multi-Location Support:</strong> Receive your procedure in <strong>Albania</strong> and your follow-up check-up in <strong>Italy</strong> or <strong>Kosovo</strong> through our integrated network.</li>
                </ul>
            `
        }
    ]
};

export default toothExtractionContent;