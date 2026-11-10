import type { ServiceContent } from '@/lib/services';

const breastReductionContent: ServiceContent = {
    description: [
        "Breast reduction, or reduction mammoplasty, is a life-changing procedure designed to alleviate the physical and emotional burdens of overly large breasts (macromastia). By removing excess breast tissue, fat, and skin, this surgery creates a breast size that is more in harmony with your body frame, providing immediate relief from chronic pain and functional limitations.",
        "Beyond the physical benefits, breast reduction restores a youthful, lifted contour and improves overall body proportions. Our approach focuses on achieving aesthetic harmony and long-term comfort, allowing patients to lead more active lifestyles and feel more confident in their clothing and their bodies."
    ],
    benefits: [
        "Relief from chronic back, neck, and shoulder pain caused by excessive weight.",
        "Elimination of skin irritation and rashes underneath the breast fold.",
        "Improved posture and the ability to participate comfortably in physical activities.",
        "Achievement of a breast size that is proportionate to your overall physique.",
        "Firmer, more lifted breast shape with repositioned nipples for a youthful look."
    ],
    quickFacts: {
        procedureTime: '2 - 4 hours',
        anesthesia: 'general anesthesia',
        recoveryTime: '4 - 6 weeks for full activity',
        results: 'permanent (subject to significant weight changes or aging)',
    },
    sections: [
        {
            id: 'medical-benefits',
            title: 'Why Consider Breast Reduction?',
            content: `
                <p>For many women, breast reduction is a medical necessity as much as an aesthetic choice. It effectively treats several conditions:</p>
                <ul>
                    <li><strong>Physical Relief:</strong> Reduction of the heavy load on the spine and supporting muscles.</li>
                    <li><strong>Shoulder Grooving:</strong> Alleviates the painful indentations caused by bra straps.</li>
                    <li><strong>Activity Restoration:</strong> Enables running, sports, and exercise that were previously difficult or painful.</li>
                    <li><strong>Confidence:</strong> Resolves self-consciousness regarding breast size and improves the fit of standard clothing.</li>
                </ul>
            `
        },
        {
            id: 'surgical-approach',
            title: 'Precision Reshaping Techniques',
            content: `
                <p>We utilize advanced surgical patterns to ensure the best aesthetic outcome with minimal scarring:</p>
                <ul>
                    <li><strong>Vertical (Lollipop) Technique:</strong> Ideal for moderate reductions, involving an incision around the areola and down to the crease.</li>
                    <li><strong>Inverted-T (Anchor) Technique:</strong> The gold standard for significant reductions, allowing for maximum reshaping and lifting.</li>
                    <li><strong>Nipple Repositioning:</strong> The nipple and areola are moved to a higher, more natural position while maintaining blood supply and sensation whenever possible.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Recovery and Post-Operative Support',
            content: `
                <p>Healing properly is essential for maintaining the new shape and ensuring comfort:</p>
                <ol>
                    <li><strong>Support:</strong> A specialized surgical bra must be worn for 4–6 weeks to support the breasts as they heal.</li>
                    <li><strong>Monitoring:</strong> Temporary drains may be used for a few days to prevent fluid buildup.</li>
                    <li><strong>Lifestyle:</strong> Most patients return to desk work within 2 weeks, while heavy lifting and intense upper-body exercise are restricted for 6 weeks.</li>
                    <li><strong>Scar Management:</strong> We provide comprehensive instructions on topical treatments and sun protection to help incisions fade beautifully.</li>
                </ol>
            `
        },
        {
            id: 'patient-concierge',
            title: 'International Patient Care',
            content: `
                <p>We ensure a smooth, professional journey for our patients traveling from abroad:</p>
                <ul>
                    <li><strong>Seamless Travel:</strong> Full coordination for local transportation and comfortable accommodation near our clinic.</li>
                    <li><strong>Follow-up Network:</strong> For your convenience, you can choose to have your post-operative check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Expert Team:</strong> Our board-certified surgeons provide ongoing support, ensuring continuity of care from your first flight to your final result.</li>
                </ul>
            `
        }
    ]
};

export default breastReductionContent;