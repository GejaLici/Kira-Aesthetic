import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
    description: [
        "Microneedling, also known as Collagen Induction Therapy (CIT), is a transformative non-surgical procedure that harnesses the skin's innate ability to repair itself. By using a medical-grade device to create thousands of microscopic, controlled 'injuries' in the skin's surface, the treatment triggers a powerful healing response. This cascade of repair leads to the rapid production of new collagen and elastin, the essential building blocks of firm, smooth, and youthful-looking skin.",
        "This treatment is exceptionally versatile, making it a gold-standard solution for addressing deep-seated skin concerns such as acne scarring, fine lines, and enlarged pores. Whether used as a preventative anti-aging measure or a corrective treatment for texture irregularities, microneedling delivers long-term structural improvements that go far beyond the surface, resulting in a complexion that is visibly denser, smoother, and more resilient."
    ],
    benefits: [
        "Scar reduction: Significantly fades acne, surgical, and trauma scars by breaking up old scar tissue.",
        "Anti-aging: Smooths fine lines and deep wrinkles through natural collagen synthesis.",
        "Pore refinement: Tightens and minimizes the appearance of enlarged pores.",
        "Texture & Tone: Corrects rough skin texture and evens out hyperpigmentation and sun damage.",
        "Enhanced absorption: Creates micro-channels that allow skincare active ingredients to penetrate up to 80% deeper."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes (including numbing)',
        anesthesia: 'Strong topical numbing cream',
        recoveryTime: '24 - 48 hours of mild redness',
        results: 'Initial glow in 1 week; full collagen remodeling after 3-6 months',
    },
    sections: [
        {
            id: 'prp-vampire-facial',
            title: 'Advanced Enhancement: Microneedling with PRP',
            content: `
                <p>To achieve the ultimate level of rejuvenation, we offer the "Vampire Facial"—a combination of microneedling and Platelet-Rich Plasma (PRP) therapy:</p>
                <ul>
                    <li><strong>Natural Growth Factors:</strong> We extract a small amount of your own blood and concentrate the platelets, which are packed with restorative growth factors.</li>
                    <li><strong>Deep Delivery:</strong> The microneedling process creates the perfect pathways for your PRP to reach the deeper layers of the dermis.</li>
                    <li><strong>Accelerated Healing:</strong> PRP dramatically speeds up the recovery process and multiplies the collagen-building effects, making it ideal for deep scars and advanced aging.</li>
                </ul>
            `
        },
        {
            id: 'treatment-process',
            title: 'What to Expect During the Procedure',
            content: `
                <p>Our clinical approach ensures a comfortable and sterile experience:</p>
                <ol>
                    <li><strong>Preparation:</strong> The skin is thoroughly cleansed, and a medical-grade topical anesthetic is applied for 30–45 minutes.</li>
                    <li><strong>The Treatment:</strong> A sterile, single-use needle cartridge is used with an automated pen device. We adjust the needle depth precisely based on the area (e.g., deeper for scars, shallower for the forehead).</li>
                    <li><strong>Soothing:</strong> After the microneedling, we apply a calming hyaluronic acid serum or your PRP to lock in moisture and begin the repair process.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-results',
            title: 'Recovery and Optimal Results',
            content: `
                <p>Post-treatment care is vital for protecting your "open" skin and maximizing the collagen boost:</p>
                <ul>
                    <li><strong>The First 24 Hours:</strong> Your skin will look and feel like a mild sunburn. Avoid makeup, sweating, and direct sun exposure.</li>
                    <li><strong>The "Pink" Phase:</strong> Minor redness usually subsides within 48 hours. Some light flaking may occur as old skin cells are shed.</li>
                    <li><strong>Cumulative Benefits:</strong> While one treatment provides a refresh, we recommend a series of 3 to 6 sessions spaced 4 weeks apart for significant structural changes.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Bespoke Care for International Patients',
            content: `
                <p>We facilitate high-end skin rejuvenation for our global clientele with a focus on convenience:</p>
                <ul>
                    <li><strong>Logistics & Stay:</strong> Complete assistance with airport transfers and premium lodging in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Continuity:</strong> You can begin your microneedling series at one of our clinics and complete follow-ups at another, ensuring seamless care across our network.</li>
                    <li><strong>Safety Standards:</strong> We utilize only FDA-cleared or CE-marked medical devices and strict sterile protocols.</li>
                </ul>
            `
        }
    ]
};

export default microneedlingContent;