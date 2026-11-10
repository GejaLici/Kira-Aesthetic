import type { ServiceContent } from '@/lib/services';

const compositeVeneersContent: ServiceContent = {
    description: [
        "Composite veneers, often referred to as dental bonding or direct veneers, are a versatile and cost-effective cosmetic solution designed to instantly enhance the appearance of your teeth. Unlike traditional porcelain veneers that are fabricated in a lab, composite veneers are hand-sculpted by our expert dentists directly onto your teeth using a high-quality, tooth-colored resin.",
        "This minimally invasive procedure is ideal for correcting minor dental imperfections such as chips, gaps, and stubborn discoloration in as little as a single visit. Because the treatment requires little to no removal of your natural tooth enamel, it is one of the most conservative ways to achieve a significant smile transformation with immediate, natural-looking results."
    ],
    benefits: [
        "Single-visit transformation: Achieve a brand-new smile in just one dental appointment.",
        "Minimally invasive: Preserves your natural tooth structure with little to no enamel removal.",
        "Versatile correction: Effectively fixes chips, cracks, gaps, and uneven tooth shapes.",
        "Cost-effective: A more affordable alternative to porcelain veneers with high-quality aesthetic results.",
        "Easily repairable: Unlike porcelain, composite resin can be easily touched up or repaired if chipped."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes per tooth',
        anesthesia: 'Usually not required',
        recoveryTime: 'Immediate; no downtime',
        results: 'Lasts 5 - 7 years with proper maintenance',
    },
    sections: [
        {
            id: 'smile-design',
            title: 'Artistry in Every Layer',
            content: `
                <p>Creating composite veneers is as much an art as it is a science. Our cosmetic dentists utilize a meticulous layering technique to ensure your new smile looks completely natural:</p>
                <ul>
                    <li><strong>Custom Color Matching:</strong> We use multiple shades of resin to mimic the natural translucency and gradient of real tooth enamel.</li>
                    <li><strong>Anatomic Sculpting:</strong> The resin is hand-molded to improve the length, width, and surface texture of each tooth.</li>
                    <li><strong>High-Luster Polishing:</strong> A multi-step polishing process ensures the veneers have the same light-reflecting sheen as your surrounding natural teeth.</li>
                </ul>
            `
        },
        {
            id: 'the-process',
            title: 'What to Expect During Treatment',
            content: `
                <p>The process is straightforward and comfortable for the patient:</p>
                <ol>
                    <li><strong>Preparation:</strong> The tooth surface is cleaned and lightly conditioned to create a strong bond with the resin.</li>
                    <li><strong>Application:</strong> The putty-like composite is applied and sculpted into the ideal shape by the dentist.</li>
                    <li><strong>Curing:</strong> A high-intensity blue light is used to instantly harden the resin.</li>
                    <li><strong>Refinement:</strong> Final adjustments are made to your bite, followed by detailed polishing.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Maintaining Your New Smile',
            content: `
                <p>While composite veneers are durable, they require mindful care to stay bright and intact:</p>
                <ul>
                    <li><strong>Stain Prevention:</strong> Composite resin can absorb stains over time. We recommend rinsing after consuming coffee, tea, or red wine.</li>
                    <li><strong>Avoid Hard Impacts:</strong> Refrain from biting fingernails, ice, or pens, as these can chip the composite material.</li>
                    <li><strong>Regular Hygiene:</strong> Standard brushing and flossing are essential, along with professional cleanings to maintain the polish of the resin.</li>
                </ul>
            `
        },
        {
            id: 'why-choose-us',
            title: 'Convenience for International Patients',
            content: `
                <p>For our global clients, composite veneers offer the ultimate "Same-Day" solution. You can arrive with dental concerns and leave the same afternoon with a fully restored smile. We provide full logistical support, including:</p>
                <ul>
                    <li><strong>Transport & Stay:</strong> Assistance with travel arrangements and comfortable lodging near our clinic.</li>
                    <li><strong>Regional Follow-ups:</strong> Access to our partner clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong> for any future maintenance or touch-ups.</li>
                </ul>
            `
        }
    ]
};

export default compositeVeneersContent; 