import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "Liposuction is one of the most effective and popular cosmetic procedures for removing stubborn, localized fat deposits that are resistant to diet and exercise. By permanently removing fat cells from specific areas—such as the abdomen, hips, thighs, arms, and neck—liposuction allows for precise body sculpting, helping you achieve a slimmer, more proportionate, and aesthetically pleasing silhouette.",
        "It is important to emphasize that liposuction is a body contouring tool rather than a weight-loss method. The best results are achieved by patients who are at or near their ideal weight but seek to eliminate 'problem areas.' With modern, minimally invasive techniques, we can provide smoother results, less bruising, and a faster recovery than ever before."
    ],
    benefits: [
        "Targets stubborn fat: Eliminates localized deposits that do not respond to traditional weight loss.",
        "Permanent results: Once fat cells are removed from a specific area, they do not grow back.",
        "Precision sculpting: Enhances natural body contours and improves overall proportions.",
        "Minimally invasive: Small incisions (a few millimeters) result in nearly invisible scarring.",
        "Versatile application: Can treat various areas including the chin, back, flanks, and legs."
    ],
    quickFacts: {
        procedureTime: '1 - 4 hours (depending on volume)',
        anesthesia: 'Local with sedation or general anesthesia',
        recoveryTime: '3 - 7 days to return to work; 4-6 weeks for exercise',
        results: 'Initial changes in weeks; final results after 3-6 months',
    },
    sections: [
        {
            id: 'liposuction-techniques',
            title: 'Advanced Fat Removal Technologies',
            content: `
                <p>We utilize several state-of-the-art techniques to ensure maximum precision and patient safety:</p>
                <ul>
                    <li><strong>Tumescent Liposuction:</strong> The gold standard technique where a medicated solution is injected to numb the area and shrink blood vessels, making fat removal gentle and efficient.</li>
                    <li><strong>VASER Liposuction:</strong> Uses ultrasound waves to selectively break down fat cells while sparing surrounding tissues like nerves and blood vessels.</li>
                    <li><strong>Power-Assisted Liposuction (PAL):</strong> Features a specialized vibrating cannula that allows for smoother fat extraction with less physical trauma to the body.</li>
                </ul>
            `
        },
        {
            id: 'treatment-areas',
            title: 'Common Treatment Areas',
            content: `
                <p>Liposuction is a highly versatile procedure capable of refining almost any area of the body:</p>
                <ul>
                    <li><strong>Abdomen & Flanks:</strong> Eliminating 'muffin tops' and belly fat for a flatter midsection.</li>
                    <li><strong>Thighs & Hips:</strong> Reshaping the inner and outer thighs for better leg contour.</li>
                    <li><strong>Upper Body:</strong> Treating the back, 'bra fat,' and the upper arms.</li>
                    <li><strong>Face & Neck:</strong> Removing submental fat (double chin) to sharpen the jawline.</li>
                </ul>
            `
        },
        {
            id: 'recovery-guidelines',
            title: 'Post-Operative Care & Recovery',
            content: `
                <p>Adhering to your recovery plan is essential for ensuring smooth skin and optimal contours:</p>
                <ol>
                    <li><strong>Compression Garments:</strong> You must wear a medical-grade compression garment for 4–6 weeks. This controls swelling and helps your skin retract to your new shape.</li>
                    <li><strong>Physical Activity:</strong> While rest is needed initially, light walking is encouraged within 24 hours to prevent blood clots.</li>
                    <li><strong>Managing Swelling:</strong> Bruising and swelling are peak during the first week. We often recommend lymphatic drainage massages to accelerate the healing process.</li>
                </ol>
            `
        },
        {
            id: 'international-support',
            title: 'World-Class Care for International Patients',
            content: `
                <p>We provide a seamless 'medical tourism' experience for our patients traveling from abroad:</p>
                <ul>
                    <li><strong>Logistics Support:</strong> Assistance with airport transfers and premium accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Follow-up Network:</strong> You can choose to complete your post-operative check-ups at any of our clinics in the region.</li>
                    <li><strong>Comprehensive Safety:</strong> All procedures are performed in accredited surgical centers by board-certified plastic surgeons.</li>
                </ul>
            `
        }
    ]
};

export default liposuctionContent;