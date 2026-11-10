import type { ServiceContent } from '@/lib/services';

const blepharoplastyContent: ServiceContent = {
    description: [],
    benefits: [],
    quickFacts: {
        procedureTime: '1 - 2 hours',
        anesthesia: 'local anesthesia with sedation or general anesthesia',
        recoveryTime: '7 - 10 days for social activities',
        results: 'progressively visible as swelling subsides; final results after 1 - 2 months'
    },
    sections: [
        {
            id: 'what-is-blepharoplasty',
            title: 'What is Blepharoplasty?',
            content: `
                <p><strong>Blepharoplasty</strong>, commonly known as eyelid surgery, is a precise surgical procedure designed to rejuvenate the eye area. The surgery addresses drooping upper eyelids, under-eye bags, excess skin, and weakened muscles, restoring a more youthful, alert, and refreshed appearance without altering your natural facial expression.</p>
                <p>Because the periorbital skin is very thin and delicate, it often shows the first signs of aging. Our approach emphasizes subtle, natural results, using hidden incisions in the eyelid crease or inside the lower lid to restore the vibrant contours of your eyes.</p>
            `
        },
        {
            id: 'upper-vs-lower',
            title: 'Upper and Lower Blepharoplasty',
            content: `
                <p>Blepharoplasty can treat the upper eyelids, lower eyelids, or both simultaneously, depending on your individual needs.</p>
                <ul>
                    <li><strong>Upper Blepharoplasty:</strong> Removes excess skin and fat from the upper lids to correct drooping ('hooding') that may affect vision or create a tired appearance. The incision is hidden in the natural eyelid crease.</li>
                    <li><strong>Lower Blepharoplasty:</strong> Targets puffiness, under-eye bags, and loose skin. The transconjunctival approach allows the incision to be placed inside the eyelid, leaving no external scar.</li>
                    <li><strong>Combined Treatment:</strong> Both upper and lower lids can be treated at once for balanced rejuvenation and harmonious results.</li>
                </ul>
                <p><strong>Benefits:</strong> 
                Elimination of eyelid hooding, reduction of puffiness, smoother contours, long-lasting rejuvenation, and virtually invisible scarring.</p>
            `
        },
        {
            id: 'precision-approach',
            title: 'Our Precision Surgical Approach',
            content: `
                <p>Blepharoplasty is a millimeter-level surgery. Our surgeons use advanced techniques for safe, natural-looking outcomes.</p>
                <ul>
                    <li><strong>Anatomical Expertise:</strong> Deep understanding of eyelid muscles and fat compartments to prevent an over-operated or hollow look.</li>
                    <li><strong>Ultra-fine Suturing:</strong> Sutures are removed within a week, minimizing any visible markings.</li>
                    <li><strong>Fat Repositioning:</strong> Instead of removing fat entirely, it is often repositioned to fill hollows and ensure a smooth transition to the cheek.</li>
                </ul>
                <p><strong>Benefits:</strong> Preservation of natural eye contours, smoother transitions, minimal visible scarring, and prevention of a hollowed appearance.</p>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Recovery Timeline and Healing Milestones',
            content: `
                <p>The recovery from blepharoplasty is generally quick when post-operative instructions are followed.</p>
                <ol>
                    <li><strong>First 48 Hours:</strong> Use cold compresses and keep your head elevated to reduce swelling and bruising.</li>
                    <li><strong>Days 5–7:</strong> Sutures are removed; bruising fades and can be concealed with makeup.</li>
                    <li><strong>Week 2:</strong> Most patients return to work and social activities; avoid strenuous exercise for another 1–2 weeks.</li>
                    <li><strong>Final Result:</strong> While the eyes look refreshed early, the final contours settle over 4–6 weeks.</li>
                </ol>
                <p><strong>Benefits:</strong> Faster social reintegration, gradual resolution of swelling, improved eyelid definition, and long-lasting rejuvenation.</p>
            `
        },
        {
            id: 'global-patient-care',
            title: 'Comprehensive Care for International Patients',
            content: `
                <p>We provide a stress-free experience for patients traveling internationally for blepharoplasty.</p>
                <ul>
                    <li><strong>Logistical Support:</strong> Assistance with premium accommodations and transportation.</li>
                    <li><strong>Flexible Follow-up:</strong> Post-operative check-ups can be done in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Remote Monitoring:</strong> Access to our medical team digitally for early-stage recovery support.</li>
                </ul>
                <p><strong>Benefits:</strong> Peace of mind, seamless continuity of care, and confidence in recovery anywhere you are.</p>
            `
        }
    ]
};

export default blepharoplastyContent;
