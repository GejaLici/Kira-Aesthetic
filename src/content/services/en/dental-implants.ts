import type { ServiceContent } from '@/lib/services';

const dentalImplantsContent: ServiceContent = {
    description: [
        "Dental implants are widely considered the gold standard for tooth replacement, offering a permanent, highly durable solution for missing teeth. Unlike traditional dentures or bridges, implants utilize a titanium post that acts as an artificial tooth root, surgically placed into the jawbone. This post fuses with your natural bone, providing an incredibly stable foundation that prevents bone loss and preserves facial structure.",
        "A complete implant restoration consists of the implant post, a connecting abutment, and a custom-crafted porcelain crown. This three-part system mimics the entire structure of a natural tooth, restoring 100% of your chewing power and providing a seamless aesthetic that is virtually indistinguishable from your original teeth."
    ],
    benefits: [
        "Permanent solution: Designed to last a lifetime with proper oral hygiene.",
        "Bone preservation: Stimulates the jawbone to prevent the 'sunken' look associated with tooth loss.",
        "Natural functionality: Eat, speak, and smile with the same strength and confidence as natural teeth.",
        "Protects adjacent teeth: Unlike bridges, implants do not require the grinding down of neighboring healthy teeth.",
        "High success rate: Boasts a clinical success rate of up to 98% when performed by specialists."
    ],
    quickFacts: {
        procedureTime: '1 - 2 hours per implant (multiple stages)',
        anesthesia: 'local anesthesia or sedation',
        recoveryTime: '3 - 6 months for osseointegration; 3-5 days for initial healing',
        results: 'Lifetime durability for the implant post; 10-15 years for the crown',
    },
    sections: [
        {
            id: 'advanced-planning',
            title: 'Precision Digital Planning',
            content: `
                <p>Successful implantation depends on accuracy. We utilize state-of-the-art diagnostic tools to ensure every implant is placed perfectly:</p>
                <ul>
                    <li><strong>3D CBCT Scanning:</strong> We use high-definition 3D imaging to assess bone density and map out nerves and sinuses with sub-millimeter precision.</li>
                    <li><strong>Computer-Guided Surgery:</strong> For complex or full-mouth restorations, we use digital surgical guides to place implants at the exact angle and depth required.</li>
                    <li><strong>Premium Biocompatible Titanium:</strong> We only use top-tier implant brands known for their rapid integration with human bone.</li>
                </ul>
            `
        },
        {
            id: 'the-journey',
            title: 'Your Implant Journey',
            content: `
                <p>The dental implant process is a transformative multi-step journey designed for longevity:</p>
                <ol>
                    <li><strong>Placement:</strong> The titanium post is gently placed into the jawbone under local anesthesia.</li>
                    <li><strong>Osseointegration:</strong> Over 3–6 months, the bone grows around the implant, locking it in place. A temporary aesthetic restoration is often provided during this time.</li>
                    <li><strong>Abutment & Impression:</strong> Once the implant is stable, a small connector is attached, and digital scans are taken of your mouth.</li>
                    <li><strong>Final Crown:</strong> Your custom-designed porcelain crown is securely attached, completing your new smile.</li>
                </ol>
            `
        },
        {
            id: 'long-term-care',
            title: 'Care and Maintenance',
            content: `
                <p>Maintaining your dental implant is nearly identical to caring for natural teeth:</p>
                <ul>
                    <li><strong>Daily Hygiene:</strong> Brushing twice a day and flossing daily is essential to keep the surrounding gums healthy.</li>
                    <li><strong>Regular Exams:</strong> Professional cleanings and routine check-ups allow us to monitor the health of the bone and soft tissue around the implant.</li>
                    <li><strong>Protective Habits:</strong> Avoid using your teeth as tools or chewing on extremely hard objects to prevent chipping the porcelain crown.</li>
                </ul>
            `
        },
        {
            id: 'global-logistics',
            title: 'Support for International Patients',
            content: `
                <p>Traveling for dental implants requires careful scheduling. We provide a seamless experience for our international guests:</p>
                <ul>
                    <li><strong>Coordinated Visits:</strong> We optimize your travel schedule, ensuring major surgical steps are handled efficiently within your stay.</li>
                    <li><strong>Accommodation & Transport:</strong> Our team assists with local lodging and transfers between the airport and the clinic.</li>
                    <li><strong>Regional Follow-up:</strong> You can choose to complete your final crown fitting or follow-up check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                </ul>
            `
        }
    ]
};

export default dentalImplantsContent;