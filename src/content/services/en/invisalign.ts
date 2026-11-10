import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign is a revolutionary orthodontic system that straightens teeth using a series of custom-made, virtually invisible clear aligners. This modern approach offers a discreet, comfortable, and flexible alternative to traditional metal braces, making it the premier choice for adults and teenagers who want to enhance their smile without the 'braces' look. The aligners are crafted from smooth, BPA-free plastic and fit snugly over your teeth, applying controlled force to guide them into the perfect position.",
        "Beyond aesthetics, Invisalign provides a highly predictable and hygienic experience. Because the aligners are removable, you can maintain your regular diet and oral care routine with ease. Using advanced 3D digital modeling, we can map out your entire journey from the first aligner to your final, confident smile, allowing you to see your projected results before the treatment even begins."
    ],
    benefits: [
        "Nearly Invisible: The clear SmartTrack™ material makes your treatment virtually unnoticeable.",
        "Removable: Easily take out your aligners to eat, drink, and attend special social events.",
        "Superior Comfort: No metal brackets or wires to cause mouth irritation or emergencies.",
        "Better Hygiene: Brushing and flossing remain simple, reducing the risk of plaque buildup during treatment.",
        "Digital Precision: 3D mapping ensures more accurate movements and often shorter treatment times."
    ],
    quickFacts: {
        procedureTime: 'Initial scan: 30 mins; Check-ups: Every 6-8 weeks',
        anesthesia: 'None required',
        recoveryTime: 'None; 1-2 days of minor pressure with each new tray',
        results: 'Straightened teeth typically in 12 - 18 months',
    },
    sections: [
        {
            id: 'digital-precision',
            title: 'Advanced 3D Planning Technology',
            content: `
                <p>The core of Invisalign's success is our state-of-the-art digital workflow, ensuring a perfect fit and predictable results:</p>
                <ul>
                    <li><strong>iTero® Digital Scanning:</strong> We capture a high-resolution 3D image of your teeth in minutes, replacing the uncomfortable, messy putty impressions used in the past.</li>
                    <li><strong>ClinCheck® Software:</strong> This allows us to fine-tune every tooth movement. You will be able to view a virtual 3D animation of your smile's transformation before we order your custom trays.</li>
                    <li><strong>SmartStage® Technology:</strong> This optimizes the progression of your movements to ensure each tooth moves in the correct order for maximum efficiency.</li>
                </ul>
            `
        },
        {
            id: 'the-invisalign-journey',
            title: 'Your Path to a New Smile',
            content: `
                <p>Treatment is straightforward and designed to fit seamlessly into a busy lifestyle:</p>
                <ol>
                    <li><strong>Consultation:</strong> We evaluate your dental structure and discuss your aesthetic goals to ensure Invisalign is the right fit.</li>
                    <li><strong>Custom Fabrication:</strong> Your 3D scans are sent to the lab, where a complete series of custom-made aligners is manufactured just for you.</li>
                    <li><strong>The Routine:</strong> You wear each set of trays for about 20–22 hours a day, switching to the next set every 1–2 weeks.</li>
                    <li><strong>Monitoring:</strong> Brief check-ups every few months ensure your teeth are tracking perfectly according to the plan.</li>
                </ol>
            `
        },
        {
            id: 'lifestyle-maintenance',
            title: 'Life with Clear Aligners',
            content: `
                <p>Invisalign requires discipline but offers unmatched freedom compared to fixed appliances:</p>
                <ul>
                    <li><strong>Dietary Freedom:</strong> Since you remove trays to eat, there are no restrictions on hard, sticky, or crunchy foods.</li>
                    <li><strong>Cleaning:</strong> Simply rinse your aligners and brush them gently with a soft toothbrush to keep them clear and odor-free.</li>
                    <li><strong>Vivera® Retainers:</strong> After your treatment is complete, we provide custom-fit Vivera retainers—made with the same high-quality technology—to keep your new smile perfectly in place.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Global Orthodontic Excellence',
            content: `
                <p>We specialize in coordinating Invisalign treatment for our international patients:</p>
                <ul>
                    <li><strong>Compressed Appointments:</strong> We can provide multiple sets of aligners at once to minimize the number of required clinic visits.</li>
                    <li><strong>Regional Support:</strong> Access progress checks and dental care at any of our partner clinics in <strong>Albania</strong>, <strong>Kosovo</strong>, or <strong>Italy</strong>.</li>
                    <li><strong>Concierge Services:</strong> We assist with travel arrangements and local accommodation to make your 'dental vacation' smooth and stress-free.</li>
                </ul>
            `
        }
    ]
};

export default invisalignContent;