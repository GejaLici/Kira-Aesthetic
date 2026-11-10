import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
    description: [
        "Les appareils orthodontiques amovibles sont des dispositifs conçus sur mesure que le patient peut facilement mettre et retirer de sa bouche. Contrairement aux bagues fixes traditionnelles, ces appareils offrent une grande flexibilité et sont principalement utilisés pour des mouvements dentaires mineurs, le guidage de la croissance des mâchoires chez les enfants et la phase cruciale de contention qui suit un traitement orthodontique complet.",
        "Bien qu'ils ne remplacent pas les bagues fixes dans les cas complexes, les appareils amovibles sont des outils indispensables pour atteindre des objectifs fonctionnels spécifiques et maintenir les résultats d'un sourire parfaitement aligné. Qu'il s'agisse d'une gouttière transparente ou d'une plaque fonctionnelle, le succès de ces traitements repose en grande partie sur l'assiduité du patient et sur un plan de traitement personnalisé élaboré par un orthodontiste expert."
    ],
    benefits: [
        "Hygiène optimisée : Les appareils sont retirés pour le brossage et l'utilisation du fil dentaire, facilitant le maintien de la santé bucco-dentaire.",
        "Traitement discret : De nombreuses options amovibles modernes, comme les gouttières transparentes, sont pratiquement invisibles.",
        "Confort et commodité : Peuvent être retirés pour manger, faire du sport ou lors d'occasions spéciales.",
        "Guidage de la croissance : Très efficaces en orthodontie pédiatrique pour guider le développement des structures de la mâchoire.",
        "Contention vitale : Garantit que les dents ne reprennent pas leur position d'origine après le retrait des bagues."
    ],
    quickFacts: {
        procedureTime: 'Séance d\'ajustement de 30 minutes',
        anesthesia: 'Aucune requise',
        recoveryTime: '1 à 3 jours pour s\'adapter à l\'élocution et au confort',
        results: 'Stabilité à long terme de l\'alignement dentaire',
    },
    sections: [
        {
            id: 'types-of-appliances',
            title: 'Types de dispositifs orthodontiques amovibles',
            content: `
                <p>Nous utilisons divers appareils spécialisés en fonction de l'âge du patient et des objectifs cliniques :</p>
                <ul>
                    <li><strong>Appareils de Hawley :</strong> Le dispositif de contention classique et durable composé d'un fil métallique et d'une base en résine, utilisé pour maintenir l'alignement après les bagues.</li>
                    <li><strong>Gouttières d'alignement ou de contention :</strong> Plateaux en plastique transparent presque invisibles et très esthétiques pour les adolescents et les adultes.</li>
                    <li><strong>Appareils fonctionnels :</strong> Des dispositifs tels que les Twin Blocks ou les activateurs qui utilisent les forces musculaires de la mâchoire pour corriger les décalages de l'articulé chez les enfants en croissance.</li>
                    <li><strong>Plaques orthodontiques :</strong> Souvent équipées de vis d'expansion ou de ressorts pour élargir doucement une arcade étroite ou basculer une dent spécifique en place.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Le processus de fabrication sur mesure',
            content: `
                <p>L'obtention d'un ajustement parfait est essentielle pour le confort et l'efficacité clinique :</p>
                <ol>
                    <li><strong>Empreintes numériques :</strong> Nous utilisons des scans de haute précision ou des moules traditionnels pour créer une réplique 3D exacte de vos dents.</li>
                    <li><strong>Conception en laboratoire :</strong> Votre appareil personnalisé est fabriqué dans un laboratoire dentaire spécialisé selon les spécifications exactes de l'orthodontiste.</li>
                    <li><strong>Pose et ajustement :</strong> Lors de votre rendez-vous, nous nous assurons que le dispositif est confortable et nous vous donnons les instructions pour l'insérer et le retirer en toute sécurité.</li>
                </ol>
            `
        },
        {
            id: 'patient-compliance',
            title: 'Vivre avec un appareil amovible',
            content: `
                <p>Ces dispositifs étant amovibles, votre engagement est le facteur le plus important de la réussite du traitement :</p>
                <ul>
                    <li><strong>Temps de port prescrit :</strong> La plupart des appareils doivent être portés 22 heures par jour (y compris pendant le sommeil) pour être efficaces, sauf s'ils sont spécifiquement destinés à un usage nocturne.</li>
                    <li><strong>Protocole de nettoyage :</strong> Les appareils doivent être nettoyés quotidiennement avec une brosse à dents souple et de l'eau tiède (non bouillante) ou des tablettes de nettoyage spécialisées.</li>
                    <li><strong>Rangement sécurisé :</strong> Dès que l'appareil n'est pas en bouche, il doit être conservé dans son boîtier de protection pour éviter tout dommage ou perte.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Accompagnement des patients internationaux',
            content: `
                <p>Nous offrons une expérience fluide pour les familles et les particuliers voyageant pour des soins orthodontiques :</p>
                <ul>
                    <li><strong>Planification efficace :</strong> Nous coordonnons les scans numériques et les poses pour minimiser le nombre de visites nécessaires.</li>
                    <li><strong>Continuité régionale :</strong> Les ajustements de suivi peuvent être gérés à travers notre réseau de cliniques en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Assistance logistique :</strong> Soutien complet pour le transport et l'hébergement afin de garantir un séjour confortable et sans stress.</li>
                </ul>
            `
        }
    ]
};

export default removableOrthodonticsContent;