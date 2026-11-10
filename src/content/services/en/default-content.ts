import type { ServiceContent } from '@/lib/services';

const defaultContent: ServiceContent = {
    description: [
        "This is a state-of-the-art treatment designed to address your specific needs and enhance your natural beauty. Our team of experienced specialists uses the latest techniques and technology to ensure the highest standards of safety and efficacy.",
        "We take a personalized approach, ensuring that the final result aligns perfectly with your desired outcome. The journey begins with a comprehensive consultation where we map out the procedure and answer all your questions."
    ],
    benefits: [
        "Enhances your natural features and proportions.",
        "Boosts self-confidence and self-esteem.",
        "Provides long-lasting, natural-looking results.",
        "Corrects functional issues where applicable."
    ],
    quickFacts: {
        procedureTime: 'Varies',
        anesthesia: 'Local or General',
        recoveryTime: '1-2 Weeks',
        results: 'Long-lasting',
    }
};

export default defaultContent;
