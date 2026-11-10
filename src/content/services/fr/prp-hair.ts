import type { ServiceContent } from '@/lib/services';

const prpHairContent: ServiceContent = {
    description: [
        "La thérapie par Plasma Riche en Plaquettes (PRP) est une solution non chirurgicale révolutionnaire pour la restauration capillaire qui utilise le pouvoir régénérateur de votre propre sang. Cette forme de médecine biologique cible la cause profonde de l'affinement des cheveux en délivrant une haute concentration de facteurs de croissance directement aux follicules pileux dormants ou affaiblis. En « réveillant » ces follicules, le PRP aide à ralentir la chute active et déclenche la pousse de mèches plus épaisses et plus résistantes.",
        "Idéale pour les hommes et les femmes aux stades précoces ou modérés de l'affinement capillaire ou de l'alopécie androgénétique, la thérapie PRP offre une alternative totalement naturelle aux médicaments synthétiques ou à la chirurgie invasive. Puisque le traitement utilise votre propre plasma, il est exceptionnellement sûr et biocompatible, offrant une voie scientifiquement prouvée pour retrouver densité capillaire et santé du cuir chevelu."
    ],
    benefits: [
        "Stimulation naturelle des follicules : Utilise les facteurs de croissance pour prolonger la « phase de croissance » du cycle capillaire.",
        "Densité capillaire accrue : Augmente le diamètre de chaque cheveu pour un aspect plus volumineux.",
        "Ralentit la chute : Réduit efficacement la perte de cheveux active chez les patients souffrant de calvitie héréditaire.",
        "Non chirurgical et pratique : Pas d'incisions, pas de cicatrices et pas d'éviction sociale significative.",
        "Santé du cuir chevelu : Améliore la circulation sanguine, créant un meilleur environnement pour la croissance des cheveux."
    ],
    quickFacts: {
        procedureTime: '45 - 60 minutes',
        anesthesia: 'Anesthésie locale ou refroidissement pour le confort du cuir chevelu',
        recoveryTime: 'Immédiate ; éviter de se laver les cheveux pendant 24 heures',
        results: 'Réduction de la chute en 2-3 mois ; repousse visible en 4-6 mois',
    },
    sections: [
        {
            id: 'biological-mechanism',
            title: 'La science de la régénération capillaire',
            content: `
                <p>Le PRP agit au niveau cellulaire pour inverser la miniaturisation des follicules pileux :</p>
                <ul>
                    <li><strong>Concentration de plaquettes :</strong> Vos plaquettes contiennent des protéines spécialisées qui stimulent la division cellulaire et la réparation tissulaire.</li>
                    <li><strong>Libération des facteurs de croissance :</strong> Une fois injectés, ces facteurs activent la zone du bulbe du follicule, lui signalant de passer d'une phase dormante (télogène) à une phase de croissance active (anagène).</li>
                    <li><strong>Vascularisation :</strong> Le PRP encourage la formation de nouveaux vaisseaux sanguins, garantissant que les follicules reçoivent l'oxygène et les nutriments nécessaires à la production de cheveux sains.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Votre parcours de traitement',
            content: `
                <p>Une séance typique de PRP est optimisée et clinique, garantissant une viabilité maximale des plaquettes :</p>
                <ol>
                    <li><strong>Prélèvement sanguin :</strong> Une petite quantité de sang est prélevée à l'aide d'un kit stérile à usage unique.</li>
                    <li><strong>Séparation :</strong> Nous utilisons une centrifugeuse à haute vitesse pour isoler le Plasma Riche en Plaquettes des globules rouges et blancs.</li>
                    <li><strong>Micro-injection :</strong> Cet « or liquide » concentré est injecté dans le cuir chevelu à la profondeur spécifique où se situent les bulbes capillaires, en se concentrant sur les zones d'affinement.</li>
                </ol>
            `
        },
        {
            id: 'results-maintenance',
            title: 'À quoi s\'attendre et résultats à long terme',
            content: `
                <p>La restauration capillaire est un processus cumulatif. Pour un résultat esthétique optimal, nous recommandons une approche structurée :</p>
                <ul>
                    <li><strong>La phase initiale :</strong> La plupart des patients nécessitent 3 à 4 séances initiales, espacées d'environ 4 semaines, pour « relancer » les follicules.</li>
                    <li><strong>La phase d'entretien :</strong> Pour pérenniser les résultats et contrer la progression génétique de la perte de cheveux, une séance d'entretien tous les 6 à 12 mois est généralement conseillée.</li>
                    <li><strong>Thérapies complémentaires :</strong> Le PRP peut être combiné en toute sécurité avec d'autres traitements, comme le Minoxidil ou après une greffe de cheveux, pour améliorer la densité globale.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Soins mondiaux et logistique',
            content: `
                <p>Nous offrons un soutien complet aux patients internationaux recherchant une restauration capillaire de pointe :</p>
                <ul>
                    <li><strong>Logistique :</strong> Nous aidons pour les transferts aéroport et l'hébergement premium près de nos cliniques en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Continuité régionale :</strong> Vous pouvez choisir d'effectuer votre série initiale dans un pays et vos séances d'entretien dans un autre au sein de notre réseau.</li>
                    <li><strong>Sécurité et expertise :</strong> Toutes les procédures sont réalisées par des professionnels de santé certifiés utilisant des kits PRP homologués CE/FDA pour garantir la plus haute concentration de plaquettes.</li>
                </ul>
            `
        }
    ]
};

export default prpHairContent;