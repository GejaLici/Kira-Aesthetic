import type { ServiceContent } from '@/lib/services';

const rootCanalContent: ServiceContent = {
    description: [
        "Root canal treatment, or endodontic therapy, is a specialized procedure designed to save a natural tooth that has become severely decayed, damaged, or infected. At the center of every tooth is the 'pulp'—a collection of nerves and blood vessels. When this area becomes compromised by bacteria, it can cause intense pain or lead to an abscess. A root canal removes the diseased tissue, eliminates the infection, and seals the tooth to prevent further issues.",
        "Modern endodontics has transformed this procedure into a comfortable, routine experience similar to receiving a standard filling. By choosing root canal therapy, you are opting to preserve your natural tooth structure, which is always the best way to maintain your jawbone health, biting force, and the natural alignment of your smile."
    ],
    benefits: [
        "Pain relief: Immediately eliminates the source of acute dental pain and pressure.",
        "Tooth preservation: Saves your natural tooth, preventing the need for extraction and implants.",
        "Infection control: Removes bacteria to prevent the spread of infection to the jaw and surrounding tissues.",
        "Natural functionality: Restores your ability to chew and speak normally with your original tooth.",
        "Cost-effective: Preserving a tooth is significantly more affordable than replacing one with a bridge or implant."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutes per visit (usually 1-2 visits)',
        anesthesia: 'Local anesthesia (painless procedure)',
        recoveryTime: '2 - 3 days for sensitivity to subside',
        results: 'Permanent removal of infection; tooth protected by a crown',
    },
    sections: [
        {
            id: 'advanced-endodontics',
            title: 'Our Advanced Endodontic Approach',
            content: `
                <p>We combine clinical expertise with state-of-the-art technology to ensure the highest success rates for root canal therapy:</p>
                <ul>
                    <li><strong>Digital Apex Locators:</strong> We use electronic sensors to precisely measure the length of your root canals, ensuring thorough cleaning.</li>
                    <li><strong>Rotary Endodontics:</strong> Advanced, flexible nickel-titanium tools allow us to clean and shape canals more efficiently and comfortably than traditional hand files.</li>
                    <li><strong>Biocompatible Sealing:</strong> We use premium gutta-percha and antimicrobial sealers to hermetically seal the canals against future bacterial entry.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Understanding the Procedure',
            content: `
                <ol>
                    <li><strong>Diagnosis & Numbing:</strong> We use digital X-rays to map the infection and ensure the tooth is completely numb.</li>
                    <li><strong>Cleaning:</strong> The infected pulp is removed, and the canals are meticulously disinfected and shaped.</li>
                    <li><strong>Sealing:</strong> The hollow canals are filled with a rubber-like material to provide structural support and prevent reinfection.</li>
                    <li><strong>Final Restoration:</strong> Because the tooth is more brittle after treatment, we almost always recommend a <strong>dental crown</strong> to restore its full strength and appearance.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Aftercare and Sensitivity',
            content: `
                <p>Post-treatment recovery is typically very straightforward:</p>
                <ul>
                    <li><strong>Managing Sensitivity:</strong> It is normal for the area to feel slightly tender for a few days. This is usually easily managed with standard over-the-counter pain relief.</li>
                    <li><strong>Chewing Habits:</strong> Avoid biting down on hard foods with the treated tooth until your permanent crown has been placed.</li>
                    <li><strong>Oral Hygiene:</strong> Continue to brush and floss as normal. A tooth that has had a root canal is still susceptible to gum disease, so regular hygiene remains critical.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-experience',
            title: 'Support for International Patients',
            content: `
                <p>We offer a streamlined experience for our guests traveling from abroad for dental care:</p>
                <ul>
                    <li><strong>Priority Scheduling:</strong> We coordinate your root canal and crown placement to fit within your travel itinerary.</li>
                    <li><strong>Travel Concierge:</strong> Assistance with premium accommodation and local transport in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Integrated Care:</strong> Access your treatment records and follow-up support across our regional locations.</li>
                </ul>
            `
        }
    ]
};

export default rootCanalContent;