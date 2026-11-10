import type { ServiceContent } from '@/lib/services';

const breastReconstructionContent: ServiceContent = {
    description: [
        "La reconstruction mammaire est un processus chirurgical essentiel conçu pour restaurer la forme, le volume et l'apparence du sein après une mastectomie ou une tumorectomie. Cette procédure va au-delà de la simple restauration physique ; elle constitue une étape fondamentale du rétablissement émotionnel et psychologique, aidant les patientes à retrouver confiance en leur corps et un sentiment de plénitude après avoir affronté un cancer du sein ou d'autres conditions médicales.",
        "Notre équipe spécialisée utilise des techniques avancées de microchirurgie et de reconstruction par implants pour recréer un sein dont l'aspect et la sensation sont aussi naturels que possible. Nous travaillons en étroite coordination avec votre équipe d'oncologie pour assurer une transition fluide du traitement à la restauration, en proposant des options de reconstruction immédiate (au moment de la mastectomie) ou différée, adaptées à votre parcours de santé spécifique."
    ],
    benefits: [
        "Restaure la symétrie corporelle et le contour naturel du profil mammaire.",
        "Améliore significativement le bien-être psychologique et l'estime de soi post-mastectomie.",
        "Élimine le besoin de porter des prothèses mammaires externes.",
        "Offre des résultats permanents grâce à des implants de pointe ou à vos propres tissus.",
        "Approche personnalisable pour correspondre à la taille et à la forme du sein naturel."
    ],
    quickFacts: {
        procedureTime: '2 - 12 heures (selon la technique)',
        anesthesia: 'anesthésie générale',
        recoveryTime: '4 - 8 semaines pour une récupération complète',
        results: 'restauration permanente (peut nécessiter une finition du mamelon ultérieure)',
    },
    sections: [
        {
            id: 'reconstruction-options',
            title: 'Méthodes de reconstruction',
            content: `
                <p>Nous proposons plusieurs voies de reconstruction, selon votre état de santé physique et vos préférences esthétiques :</p>
                <ul>
                    <li><strong>Reconstruction par implants :</strong> L'approche la plus courante, impliquant souvent un expanseur tissulaire suivi d'un implant permanent en silicone ou en solution saline. Cette méthode nécessite généralement un temps de récupération plus court.</li>
                    <li><strong>Reconstruction autologue (par lambeau) :</strong> Une technique sophistiquée où le chirurgien utilise vos propres tissus provenant de l'abdomen (lambeau DIEP ou TRAM), du dos (Grand Dorsal) ou des cuisses. Cela permet d'obtenir le sein au toucher le plus naturel.</li>
                    <li><strong>Chirurgie oncoplastique :</strong> Pour les patientes subissant une mastectomie partielle, nous utilisons des techniques de chirurgie plastique pour remodeler le tissu mammaire restant, évitant ainsi les défauts ou l'asymétrie.</li>
                </ul>
            `
        },
        {
            id: 'surgical-process',
            title: 'Le parcours de reconstruction',
            content: `
                <p>La reconstruction implique souvent une approche en plusieurs étapes pour obtenir une symétrie optimale :</p>
                <ol>
                    <li><strong>Phase 1 (Restauration) :</strong> Création du monticule mammaire à l'aide d'un implant ou d'un lambeau tissulaire.</li>
                    <li><strong>Phase 2 (Symétrie) :</strong> Une procédure secondaire peut être réalisée sur le sein opposé (lifting ou réduction) pour garantir une harmonie parfaite.</li>
                    <li><strong>Phase 3 (Finition) :</strong> Reconstruction optionnelle du mamelon et de l'aréole, souvent par lambeaux locaux ou dermopigmentation médicale (tatouage).</li>
                </ol>
            `
        },
        {
            id: 'safety-recovery',
            title: 'Récupération et soins à long terme',
            content: `
                <p>La récupération dépend de la complexité de l'intervention, les chirurgies par lambeaux nécessitant des soins postopératoires plus intensifs :</p>
                <ul>
                    <li><strong>Séjour hospitalier :</strong> Varie de 1 à 2 jours pour les implants à 3 à 7 jours pour les transferts de lambeaux autologues.</li>
                    <li><strong>Drainage :</strong> Des drains chirurgicaux temporaires sont utilisés pour gérer les fluides et sont généralement retirés sous 1 à 2 semaines.</li>
                    <li><strong>Activité :</strong> Les mouvements brusques et le soulèvement de charges lourdes doivent être évités pendant au moins 6 semaines pour assurer la survie des tissus et une bonne cicatrisation.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Coordination des patients internationaux',
            content: `
                <p>Nous offrons un environnement bienveillant et complet pour les patients voyageant pour des soins reconstructeurs :</p>
                <ul>
                    <li><strong>Logistique dédiée :</strong> Assistance pour le transport et un hébergement sûr et confortable pendant votre phase de récupération initiale.</li>
                    <li><strong>Continuité des soins :</strong> Notre réseau unique vous permet d'effectuer vos consultations de suivi en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Médecine collaborative :</strong> Nous coordonnons directement avec votre oncologue habituel pour nous assurer que votre plan chirurgical s'aligne avec votre protocole global de traitement du cancer.</li>
                </ul>
            `
        }
    ]
};

export default breastReconstructionContent;