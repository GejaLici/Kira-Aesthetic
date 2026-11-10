import type { ServiceContent } from '@/lib/services';

const tummyTuckContent: ServiceContent = {
    description: [
        "A tummy tuck, or abdominoplasty, is a transformative surgical procedure designed to create a flatter, firmer, and more toned abdominal profile. This surgery addresses structural concerns that diet and exercise alone often cannot reach, such as significant skin laxity following weight loss or pregnancy, and the repair of separated abdominal muscles (diastasis recti). By removing excess tissue and tightening the internal 'corset' of the abdominal wall, this procedure restores a smooth and youthful contour to the midsection.",
        "Our approach to abdominoplasty focuses on comprehensive body contouring. We don't just remove skin; we sculpt the abdomen to ensure the new proportions harmonize with your natural physique. Whether you are looking to restore your pre-pregnancy figure or finalize a significant weight loss journey, our board-certified surgeons utilize advanced techniques to minimize scarring and maximize the definition of your abdominal area."
    ],
    benefits: [
        "Muscle Repair: Surgically tightens weakened or separated abdominal muscles for a firmer core.",
        "Skin Elimination: Removes the 'apron' of excess skin that can cause discomfort and hygiene issues.",
        "Stubborn Fat Removal: Eliminates localized fat deposits that are resistant to traditional weight loss.",
        "Improved Posture: Strengthening the abdominal wall can often alleviate back pain and improve spinal support.",
        "Enhanced Confidence: Provides a significant boost in self-esteem and comfort in form-fitting clothing."
    ],
    quickFacts: {
        procedureTime: '2 - 5 hours',
        anesthesia: 'General anesthesia',
        recoveryTime: '2 - 4 weeks (desk work); 6 - 8 weeks for strenuous activity',
        results: 'Dramatically flatter abdomen; final results visible after swelling subsides (6-12 months)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Tailored Abdominoplasty Techniques',
            content: `
                <p>We offer several variations of the tummy tuck to match your specific anatomical needs:</p>
                <ul>
                    <li><strong>Full Tummy Tuck:</strong> The standard approach for patients with excess skin and muscle laxity both above and below the navel. Includes navel repositioning.</li>
                    <li><strong>Mini Tummy Tuck:</strong> Ideal for patients with concerns limited to the area below the navel. Requires a shorter incision and no navel repositioning.</li>
                    <li><strong>Extended Tummy Tuck:</strong> Targets the abdomen and the "love handles" (flanks), often necessary after massive weight loss.</li>
                    <li><strong>High-Lateral Tension Tuck:</strong> A specialized technique that focuses on lifting the thighs and smoothing the waistline while flattening the stomach.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Preparation and Patient Safety',
            content: `
                <p>Because abdominoplasty is a major surgery, we adhere to rigorous safety protocols:</p>
                <ol>
                    <li><strong>Clinical Screening:</strong> Comprehensive blood panels, ECG, and a cardiology consultation ensure you are fit for general anesthesia.</li>
                    <li><strong>Nicotine Cessation:</strong> Smoking significantly increases the risk of skin necrosis and poor healing. Patients must stop smoking at least 4-6 weeks before and after surgery.</li>
                    <li><strong>Weight Stability:</strong> We recommend patients be at or near their goal weight for at least three months to ensure long-lasting results.</li>
                </ol>
            `
        },
        {
            id: 'recovery-protocol',
            title: 'Your Recovery Journey',
            content: `
                <p>A successful outcome depends heavily on post-operative compliance:</p>
                <ul>
                    <li><strong>Hospital Stay:</strong> Expect to spend 1–3 nights in our clinic for professional monitoring and pain management.</li>
                    <li><strong>Compression Therapy:</strong> A specialized abdominal binder must be worn for 4–8 weeks to support the muscles and reduce fluid buildup.</li>
                    <li><strong>Postural Care:</strong> For the first week, you will likely walk slightly bent forward to prevent tension on the incision line.</li>
                    <li><strong>Scar Management:</strong> While the incision is placed discreetly below the bikini line, we provide advanced scar-care protocols to ensure it fades optimally over time.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Global Care for International Clients',
            content: `
                <p>We provide a seamless experience for patients traveling for body contouring surgery:</p>
                <ul>
                    <li><strong>Logistics Management:</strong> We arrange airport transfers and high-quality accommodation in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Regional Follow-ups:</strong> If you reside in the region, you can choose to have your post-operative check-ups at any of our affiliated clinic locations.</li>
                    <li><strong>Direct Communication:</strong> You will have a dedicated coordinator to assist with virtual consultations and pre-travel planning.</li>
                </ul>
            `
        }
    ]
};

export default tummyTuckContent;