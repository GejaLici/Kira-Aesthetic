import type { ServiceContent } from '@/lib/services';

const prpFaceContent: ServiceContent = {
    description: [
        "Platelet-Rich Plasma (PRP) therapy for the face, popularly known as the 'Vampire Facial,' is a revolutionary skin rejuvenation treatment that utilizes the healing power of your own biology. By isolating the concentrated platelets from your blood, which are rich in essential growth factors, this 100% natural procedure triggers deep-tissue repair, stimulates collagen production, and accelerates the skin's renewal process.",
        "Unlike synthetic treatments, PRP works from within to improve the structural integrity of your skin. It is an ideal solution for those seeking to diminish fine lines, smooth out acne scarring, and restore a youthful, healthy glow. By harnessing your body's innate regenerative capabilities, the Vampire Facial delivers long-term improvements in skin quality, texture, and firmness without the risk of allergic reactions."
    ],
    benefits: [
        "Natural Rejuvenation: Uses your own blood components with no synthetic chemicals or additives.",
        "Collagen Synthesis: Boosts the production of Type I collagen for firmer, thicker skin.",
        "Scar & Texture Repair: Highly effective at smoothing acne scars and refined skin irregularities.",
        "Radiant Complexion: Improves blood flow and cellular turnover for a 'lit-from-within' glow.",
        "Safe & Biocompatible: Zero risk of rejection or allergic reaction since it is autologous (from your own body)."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutes',
        anesthesia: 'Strong topical numbing cream',
        recoveryTime: '24 - 48 hours of mild redness (sunburn sensation)',
        results: 'Initial glow in 1 week; structural improvements after 4-6 weeks',
    },
    sections: [
        {
            id: 'science-of-prp',
            title: 'The Science Behind the Glow',
            content: `
                <p>The effectiveness of a Vampire Facial lies in the high concentration of platelets delivered directly to the dermis:</p>
                <ul>
                    <li><strong>The Extraction:</strong> A small sample of blood is drawn and placed in a specialized centrifuge to separate the plasma from red blood cells.</li>
                    <li><strong>Growth Factors:</strong> The resulting PRP contains 5 to 10 times the concentration of growth factors found in normal blood, which act as "messengers" to spark cell growth.</li>
                    <li><strong>Synergy with Microneedling:</strong> We use microneedling to create vertical channels in the skin, allowing the PRP to bypass the surface barrier and reach the regenerative layers of the skin.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'What to Expect During Your Session',
            content: `
                <p>Our clinical protocol is designed for maximum comfort and sterility:</p>
                <ol>
                    <li><strong>Numbing & Draw:</strong> While a potent numbing cream takes effect, our medical team performs a quick, standard blood draw.</li>
                    <li><strong>Processing:</strong> Your blood is processed on-site using a high-precision centrifuge to isolate the "liquid gold" (PRP).</li>
                    <li><strong>Infusion:</strong> The PRP is applied topically while a medical-grade microneedling device glides over the skin, pushing the platelets into the micro-channels.</li>
                    <li><strong>Calming:</strong> We finish with a soothing application of the remaining plasma to act as a natural healing mask.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Recovery and Result Longevity',
            content: `
                <p>Because the treatment triggers a natural healing response, following the correct aftercare is essential:</p>
                <ul>
                    <li><strong>The First 24 Hours:</strong> Avoid washing your face or applying makeup to allow the growth factors to continue working. Expect a "sunburned" appearance.</li>
                    <li><strong>Hydration & Protection:</strong> Use only gentle, approved moisturizers and avoid direct sun exposure for at least one week.</li>
                    <li><strong>Optimal Results:</strong> While one session provides a visible refresh, we typically recommend a series of 3 treatments spaced 4-6 weeks apart for profound skin remodeling.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Premium Care for International Patients',
            content: `
                <p>We ensure a seamless and comfortable journey for our global clientele seeking natural skin rejuvenation:</p>
                <ul>
                    <li><strong>Travel Support:</strong> Assistance with airport transfers and premium accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Follow-up:</strong> You can choose to have your subsequent sessions at any of our clinic locations to fit your travel schedule.</li>
                    <li><strong>Medical Standards:</strong> All PRP procedures are performed by certified medical professionals using sterile, single-use kits and FDA/CE-cleared equipment.</li>
                </ul>
            `
        }
    ]
};

export default prpFaceContent;