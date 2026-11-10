import type { ServiceContent } from '@/lib/services';

const labiaplastyContent: ServiceContent = {
    description: [
        "Labiaplasty is a specialized surgical procedure designed to reshape or reduce the size of the labia minora (inner lips) or labia majora (outer lips). Many women seek this treatment to alleviate physical discomfort—such as chafing, irritation, or pain during exercise and intimacy—caused by enlarged or asymmetrical labia. Beyond physical relief, the procedure offers significant aesthetic benefits, helping women regain their self-confidence and feel more comfortable in fitted clothing.",
        "Our approach to intimate surgery is defined by extreme discretion, compassion, and surgical excellence. By utilizing advanced techniques that prioritize the preservation of sensation and natural contours, our board-certified surgeons provide a supportive environment where your functional and aesthetic goals are met with the highest medical standards."
    ],
    benefits: [
        "Eliminates physical discomfort, chafing, and irritation during daily activities.",
        "Reduces self-consciousness and improves confidence in intimate situations.",
        "Allows for greater comfort while wearing tight-fitting clothing or swimwear.",
        "Corrects asymmetry and restores a more proportionate appearance.",
        "Improves hygiene and comfort during menstruation and physical exercise."
    ],
    quickFacts: {
        procedureTime: '1 - 2 hours',
        anesthesia: 'Local anesthesia with sedation or general anesthesia',
        recoveryTime: '1 week for work; 4-6 weeks for exercise and intimacy',
        results: 'Permanent results with dissolvable sutures',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Advanced Surgical Techniques',
            content: `
                <p>We tailor the surgical method to your specific anatomy and desired outcome, ensuring minimal scarring and optimal healing:</p>
                <ul>
                    <li><strong>Trim Technique:</strong> The excess tissue is removed along the outer edge of the labia, providing a very clean and symmetrical finish.</li>
                    <li><strong>Wedge Technique:</strong> A V-shaped wedge is removed from the central portion of the labia. This method is preferred by many as it preserves the natural, corrugated edge and color of the labial border.</li>
                    <li><strong>Dissolvable Sutures:</strong> We use high-grade absorbable threads that dissolve on their own, eliminating the need for suture removal and reducing post-operative stress.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Your Recovery Journey',
            content: `
                <p>Healing from labiaplasty requires careful attention to hygiene and rest during the first few weeks:</p>
                <ol>
                    <li><strong>The First 72 Hours:</strong> Peak swelling and minor discomfort are managed with prescribed pain relief and cold compresses. Rest is essential.</li>
                    <li><strong>Week 1-2:</strong> Most patients return to sedentary work. Swelling begins to subside significantly, though the area remains sensitive.</li>
                    <li><strong>Week 4-6:</strong> Tissues are typically healed enough to resume strenuous exercise, swimming, and sexual activity. Final results appear once all residual swelling has vanished.</li>
                </ol>
            `
        },
        {
            id: 'patient-care-safety',
            title: 'Safety and Privacy',
            content: `
                <p>Your safety and privacy are our absolute priorities. We ensure a confidential experience from the first consultation through to the final follow-up:</p>
                <ul>
                    <li><strong>Discreet Consultation:</strong> A private environment to discuss your symptoms and expectations without judgment.</li>
                    <li><strong>Minimal Scarring:</strong> Incisions are strategically placed to be virtually invisible once fully healed.</li>
                    <li><strong>Sensation Preservation:</strong> Our surgeons use meticulous techniques to protect the nerve endings and maintain natural sensitivity.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Premium Support for Global Clients',
            content: `
                <p>We facilitate a seamless journey for our international patients seeking specialized intimate surgery:</p>
                <ul>
                    <li><strong>Travel & Lodging:</strong> Full assistance with airport transfers and premium, private accommodation to ensure a quiet recovery.</li>
                    <li><strong>Follow-up Flexibility:</strong> You can choose to have your post-operative check-ups at any of our modern facilities in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Remote Assistance:</strong> Direct communication with our medical team before and after your trip for total peace of mind.</li>
                </ul>
            `
        }
    ]
};

export default labiaplastyContent;