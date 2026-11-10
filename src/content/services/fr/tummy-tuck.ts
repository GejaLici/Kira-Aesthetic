import type { ServiceContent } from '@/lib/services';

const tummyTuckContent: ServiceContent = {
    description: [
        "L'abdominoplastie, ou lifting du ventre, est une procédure chirurgicale transformative conçue pour créer un profil abdominal plus plat, plus ferme et plus tonique. Cette chirurgie traite des problèmes structurels que le régime alimentaire et l'exercice ne peuvent souvent pas corriger, tels qu'un relâchement cutané important après une perte de poids ou une grossesse, et la réparation des muscles abdominaux séparés (diastasis des grands droits). En retirant l'excès de tissu et en resserrant le « corset » interne de la paroi abdominale, cette procédure restaure un contour lisse et jeune à la zone abdominale.",
        "Notre approche de l'abdominoplastie se concentre sur le remodelage complet du corps. Nous ne nous contentons pas de retirer de la peau ; nous sculptons l'abdomen pour garantir que les nouvelles proportions s'harmonisent avec votre physique naturel. Que vous souhaitiez retrouver votre silhouette d'avant la grossesse ou finaliser un parcours de perte de poids important, nos chirurgiens certifiés utilisent des techniques avancées pour minimiser les cicatrices et maximiser la définition de votre sangle abdominale."
    ],
    benefits: [
        "Réparation musculaire : Resserre chirurgicalement les muscles abdominaux affaiblis ou séparés pour une sangle abdominale plus ferme.",
        "Élimination de la peau : Retire le « tablier » de peau excédentaire qui peut causer de l'inconfort et des problèmes d'hygiène.",
        "Élimination des graisses tenaces : Élimine les dépôts graisseux localisés qui résistent aux méthodes traditionnelles de perte de poids.",
        "Amélioration de la posture : Le renforcement de la paroi abdominale peut souvent soulager les maux de dos et améliorer le soutien de la colonne vertébrale.",
        "Confiance accrue : Offre un regain significatif de l'estime de soi et un meilleur confort dans les vêtements ajustés."
    ],
    quickFacts: {
        procedureTime: '2 - 5 heures',
        anesthesia: 'Anesthésie générale',
        recoveryTime: '2 - 4 semaines (travail de bureau) ; 6 - 8 semaines pour les activités intenses',
        results: 'Abdomen radicalement plus plat ; résultats finaux visibles après la disparition de l\'oedème (6-12 mois)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques d\'abdominoplastie sur mesure',
            content: `
                <p>Nous proposons plusieurs variantes du lifting abdominal pour répondre à vos besoins anatomiques spécifiques :</p>
                <ul>
                    <li><strong>Abdominoplastie complète :</strong> L'approche standard pour les patients présentant un excès de peau et un relâchement musculaire au-dessus et en dessous du nombril. Inclut le repositionnement du nombril.</li>
                    <li><strong>Mini-abdominoplastie :</strong> Idéale pour les patients dont les préoccupations sont limitées à la zone située sous le nombril. Nécessite une incision plus courte et aucun repositionnement du nombril.</li>
                    <li><strong>Abdominoplastie étendue :</strong> Cible l'abdomen et les « poignées d'amour » (flancs), souvent nécessaire après une perte de poids massive.</li>
                    <li><strong>Lifting à haute tension latérale :</strong> Une technique spécialisée qui se concentre sur le lifting des cuisses et le lissage de la taille tout en aplatissant le ventre.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Préparation et sécurité du patient',
            content: `
                <p>L'abdominoplastie étant une chirurgie majeure, nous respectons des protocoles de sécurité rigoureux :</p>
                <ol>
                    <li><strong>Bilan clinique :</strong> Des analyses de sang complètes, un ECG et une consultation en cardiologie garantissent que vous êtes apte à l'anesthésie générale.</li>
                    <li><strong>Sevrage tabagique :</strong> Le tabagisme augmente considérablement le risque de nécrose cutanée et de mauvaise cicatrisation. Les patients doivent arrêter de fumer au moins 4 à 6 semaines avant et après l'intervention.</li>
                    <li><strong>Stabilité du poids :</strong> Nous recommandons aux patients d'être à leur poids de forme (ou proche de celui-ci) depuis au moins trois mois pour garantir des résultats durables.</li>
                </ol>
            `
        },
        {
            id: 'recovery-protocol',
            title: 'Votre parcours de récupération',
            content: `
                <p>La réussite du résultat dépend fortement du respect des consignes postopératoires :</p>
                <ul>
                    <li><strong>Séjour hospitalier :</strong> Prévoyez de passer 1 à 3 nuits dans notre clinique pour un suivi professionnel et la gestion de la douleur.</li>
                    <li><strong>Thérapie de compression :</strong> Une gaine abdominale spécialisée doit être portée pendant 4 à 8 semaines pour soutenir les muscles et réduire l'accumulation de fluides.</li>
                    <li><strong>Soins posturaux :</strong> Pendant la première semaine, vous marcherez probablement légèrement courbé vers l'avant pour éviter toute tension sur la ligne d'incision.</li>
                    <li><strong>Gestion des cicatrices :</strong> Bien que l'incision soit placée discrètement sous la ligne du maillot, nous fournissons des protocoles de soins avancés pour garantir qu'elle s'estompe de manière optimale avec le temps.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Soins globaux pour les clients internationaux',
            content: `
                <p>Nous offrons une expérience fluide pour les patients voyageant pour une chirurgie de remodelage corporel :</p>
                <ul>
                    <li><strong>Gestion logistique :</strong> Nous organisons les transferts aéroport et un hébergement de haute qualité en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivis régionaux :</strong> Si vous résidez dans la région, vous pouvez choisir d'effectuer vos visites de contrôle postopératoires dans l'une de nos cliniques affiliées.</li>
                    <li><strong>Communication directe :</strong> Vous disposerez d'un coordinateur dédié pour vous aider lors des consultations virtuelles et de la planification avant le voyage.</li>
                </ul>
            `
        }
    ]
};

export default tummyTuckContent;