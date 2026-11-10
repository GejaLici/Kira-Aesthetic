import type { ServiceContent } from '@/lib/services';

const toothExtractionContent: ServiceContent = {
    description: [
        "L'extraction dentaire est l'acte clinique consistant à retirer une dent de son alvéole dans l'os de la mâchoire. Bien que notre objectif principal soit toujours de préserver votre dentition naturelle, une extraction devient une mesure nécessaire et bénéfique pour votre qualité de vie lorsqu'une dent est trop endommagée pour être réparée. Éliminer une source d'infection chronique ou de douleur intense est souvent la première étape vers la restauration de votre santé bucco-dentaire et de votre bien-être général.",
        "Que vous fassiez face à une extraction d'urgence due à un traumatisme ou à une procédure planifiée pour des dents de sagesse ou un alignement orthodontique, notre clinique offre un environnement stérile et de haute technologie. Nous nous concentrons sur les techniques d'extraction « atraumatiques » — des méthodes conçues pour préserver au maximum l'os et les tissus gingivaux environnants, ce qui est crucial si vous envisagez de remplacer la dent par un implant dentaire à l'avenir."
    ],
    benefits: [
        "Élimination de la douleur : Supprime immédiatement la source de douleur dentaire aiguë ou chronique.",
        "Contrôle de l'infection : Empêche la propagation des bactéries d'une dent nécrosée ou d'un abcès vers le reste du corps.",
        "Protection des dents adjacentes : Arrête la propagation de la carie et prévient les dommages causés par les dents de sagesse incluses.",
        "Succès orthodontique : Crée l'espace nécessaire pour un alignement efficace des dents en cas d'encombrement dentaire.",
        "Base pour la restauration : Prépare le terrain pour des remplacements sains et fonctionnels comme les implants dentaires."
    ],
    quickFacts: {
        procedureTime: '20 - 60 minutes (selon la complexité)',
        anesthesia: 'Anesthésie locale (options de sédation disponibles pour l\'anxiété)',
        recoveryTime: '2 - 5 jours pour la guérison initiale ; éviter le sport intense pendant 48h',
        results: 'Élimination de l\'infection et de la douleur ; alvéole préparée pour une future restauration',
    },
    sections: [
        {
            id: 'extraction-types',
            title: 'Extractions Simples vs Chirurgicales',
            content: `
                <p>Nous classons les extractions en fonction de la complexité de la position et de l'état de la dent :</p>
                <ul>
                    <li><strong>Extraction Simple :</strong> Réalisée sur des dents entièrement visibles au-dessus de la gencive. À l'aide d'instruments spécialisés appelés élévateurs et daviers, la dent est doucement mobilisée puis retirée sous anesthésie locale.</li>
                    <li><strong>Extraction Chirurgicale :</strong> Requise pour les dents cassées au ras de la gencive ou incluses (comme les dents de sagesse). Cela implique une petite incision dans la gencive pour accéder à la dent en toute sécurité et peut nécessiter de diviser la dent en sections pour un retrait plus doux.</li>
                    <li><strong>Extraction des dents de sagesse :</strong> Chirurgie spécialisée pour retirer les troisièmes molaires provoquant des douleurs, des kystes ou un chevauchement dentaire.</li>
                </ul>
            `
        },
        {
            id: 'comfort-first',
            title: 'Une expérience sans douleur',
            content: `
                <p>La dentisterie moderne garantit que l'extraction d'une dent soit une expérience gérable et sans douleur :</p>
                <ol>
                    <li><strong>Anesthésie profonde :</strong> Nous utilisons des anesthésiques locaux avancés pour garantir que toute la zone soit complètement endormie. Vous ressentirez une pression, mais aucune douleur aiguë.</li>
                    <li><strong>Sédation consciente :</strong> Pour les patients souffrant de phobie dentaire ou pour les cas chirurgicaux complexes, nous proposons des options de sédation pour garantir que vous restiez détendu et sans stress.</li>
                    <li><strong>Imagerie pré-chirurgicale :</strong> Des radiographies haute résolution ou des scanners 3D (Cone Beam) sont utilisés pour cartographier la structure exacte des racines et la proximité des nerfs avant de commencer.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Soins post-opératoires et guérison',
            content: `
                <p>Une guérison réussie dépend de la protection du caillot sanguin qui se forme dans l'alvéole :</p>
                <ul>
                    <li><strong>Les premières 24 heures :</strong> Mordez fermement sur la compresse pendant 45 minutes. Évitez de fumer, de boire à la paille et de vous rincer la bouche vigoureusement, car cela peut provoquer une « alvéolite sèche ».</li>
                    <li><strong>Choix alimentaires :</strong> Privilégiez les aliments mous et froids comme le yaourt, les smoothies et les soupes tièdes. Évitez les aliments croquants ou épicés qui pourraient irriter le site.</li>
                    <li><strong>Gestion du gonflement :</strong> Appliquez une poche de glace sur l'extérieur de la joue par intervalles de 20 minutes durant le premier jour pour minimiser l'inflammation.</li>
                    <li><strong>Hygiène :</strong> Brossez vos autres dents normalement, mais rincez doucement avec de l'eau tiède salée après les premières 24 heures pour garder le site d'extraction propre.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Soins d\'urgence et chirurgicaux pour les voyageurs',
            content: `
                <p>Nous offrons une prise en charge rapide pour les patients internationaux confrontés à des urgences dentaires ou nécessitant une chirurgie orale planifiée :</p>
                <ul>
                    <li><strong>Rendez-vous immédiats :</strong> Nous réservons des créneaux d'urgence pour les voyageurs souffrant de douleurs aiguës nécessitant une extraction urgente.</li>
                    <li><strong>Planification de remplacement :</strong> Si vous voyagez pour une extraction, nous pouvons coordonner une greffe de « préservation alvéolaire » pour vous préparer à la pose d'un implant dentaire lors de la même visite.</li>
                    <li><strong>Réseau multi-sites :</strong> Réalisez votre procédure en <strong>Albanie</strong> et effectuez votre contrôle de suivi en <strong>Italie</strong> ou au <strong>Kosovo</strong> via notre réseau intégré.</li>
                </ul>
            `
        }
    ]
};

export default toothExtractionContent;