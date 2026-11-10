import type { ServiceContent } from '@/lib/services';

const genioplastyContent: ServiceContent = {
    description: [
        "Chin reshaping, medically known as genioplasty, is a transformative facial procedure designed to enhance the projection, symmetry, and overall contour of the chin. A well-defined chin is fundamental to a balanced profile; genioplasty can strengthen a 'weak' or recessed chin or reduce a prominent one to bring the facial features into harmonious proportion.",
        "Whether through custom-fitted implants or advanced bone-repositioning techniques, genioplasty offers a permanent solution for profile balancing. This procedure is frequently performed alongside rhinoplasty or jaw surgery to achieve total facial harmony, ensuring that the chin complements the nose and jawline for a naturally aesthetic and confident appearance."
    ],
    benefits: [
        "Strengthens a recessed or 'weak' chin for a more assertive profile.",
        "Reduces an overly prominent chin to soften and balance facial features.",
        "Corrects chin asymmetry and improves vertical facial proportions.",
        "Enhances the definition of the jawline and neck area.",
        "Permanent results with no visible external scarring in most cases."
    ],
    quickFacts: {
        procedureTime: '1 - 2 hours',
        anesthesia: 'general anesthesia',
        recoveryTime: '1 - 2 weeks for social activities',
        results: 'permanent improvement in facial profile',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Advanced Reshaping Techniques',
            content: `
                <p>We tailor the surgical method to your specific skeletal anatomy and aesthetic goals:</p>
                <ul>
                    <li><strong>Chin Augmentation (Implants):</strong> A biocompatible silicone implant is placed through a small incision inside the mouth to increase projection. This is ideal for most cases of mild to moderate recession.</li>
                    <li><strong>Sliding Genioplasty:</strong> A sophisticated procedure where the surgeon precisely cuts and repositions the chin bone. This can address complex issues, including height adjustments and significant asymmetries.</li>
                    <li><strong>Chin Reduction:</strong> For those with a prominent chin, we carefully reshape or set back the bone to create a softer, more balanced lower face.</li>
                </ul>
            `
        },
        {
            id: 'profile-harmony',
            title: 'The Art of Profile Balancing',
            content: `
                <p>Genioplasty is often the "missing piece" in facial rejuvenation. Our surgeons focus on the relationship between all facial features:</p>
                <ul>
                    <li><strong>Rhinoplasty Synergy:</strong> Enhancing the chin can make a large nose appear smaller, often achieving better results than nose surgery alone.</li>
                    <li><strong>Jawline Definition:</strong> By projecting the chin, we create tension in the submental (under-chin) area, which helps eliminate the appearance of a 'double chin.'</li>
                    <li><strong>Invisible Incisions:</strong> Most techniques utilize incisions inside the lower lip, ensuring that your results are seen, but the surgery remains your secret.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Recovery and Post-Op Care',
            content: `
                <p>Healing from genioplasty is generally rapid, with most discomfort subsiding within the first week:</p>
                <ol>
                    <li><strong>Soft Food Phase:</strong> You will follow a liquid or soft-food diet for 7–10 days to protect the intra-oral incisions.</li>
                    <li><strong>Oral Hygiene:</strong> Specialized mouth rinses are prescribed to keep the surgical area clean while healing.</li>
                    <li><strong>Swelling Management:</strong> Initial swelling peaks at 48 hours. Most patients return to work within 10 days, though final contours emerge as internal healing completes.</li>
                </ol>
            `
        },
        {
            id: 'international-assistance',
            title: 'Global Care & Follow-up',
            content: `
                <p>We provide comprehensive support for our international patients to ensure a stress-free journey:</p>
                <ul>
                    <li><strong>Logistics:</strong> Full assistance with local transport and comfortable accommodation arrangements near our facility.</li>
                    <li><strong>Regional Continuity:</strong> You can choose to complete your follow-up care and check-ups in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Expert Support:</strong> Direct communication with your surgical team before and after your trip.</li>
                </ul>
            `
        }
    ]
};

export default genioplastyContent;