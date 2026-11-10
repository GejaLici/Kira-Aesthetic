import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "Une couronne dentaire est une « coiffe » sur mesure conçue pour recouvrir entièrement une dent endommagée, affaiblie ou esthétiquement compromise. En recouvrant toute la partie visible de la dent au-dessus de la gencive, la couronne restaure sa forme, sa taille et sa force d'origine, tout en offrant une barrière protectrice contre les caries futures ou les fractures.",
        "Les couronnes dentaires modernes sont conçues pour se fondre parfaitement dans votre sourire naturel. Que vous ayez besoin de renforcer une dent après un traitement de canal, de soutenir une obturation volumineuse ou de recouvrir un implant dentaire, nos couronnes utilisent des matériaux biocompatibles avancés offrant l'équilibre parfait entre durabilité structurelle et translucidité naturelle."
    ],
    benefits: [
        "Restaure l'intégrité structurelle des dents cassées, fissurées ou gravement usées.",
        "Fournit une protection essentielle aux dents fragiles pour prévenir les fractures futures.",
        "Améliore l'esthétique en corrigeant la forme, la taille et la couleur des dents malformées.",
        "Sert d'ancrage durable pour les ponts (bridges) et de recouvrement sécurisé pour les implants dentaires.",
        "Fonctionnalité à long terme, avec des résultats pouvant durer 10 à 15 ans ou plus avec des soins appropriés."
    ],
    quickFacts: {
        procedureTime: '2 visites (préparation et pose)',
        anesthesia: 'anesthésie locale',
        recoveryTime: 'Immédiate ; légère sensibilité pendant 24-48 heures',
        results: 'Restauration durable ; couronne finale posée lors de la seconde visite',
    },
    sections: [
        {
            id: 'material-options',
            title: 'Matériaux haute performance',
            content: `
                <p>Nous proposons une variété de matériaux adaptés à l'emplacement et à la fonction de la dent à restaurer :</p>
                <ul>
                    <li><strong>Zircone :</strong> Réputée pour sa résistance extrême et sa biocompatibilité, c'est le choix idéal pour les molaires qui subissent une forte pression de mastication.</li>
                    <li><strong>Tout-céramique / Porcelaine :</strong> Offre la correspondance de couleur et la réflexion de la lumière les plus naturelles, ce qui en fait la référence pour les dents de devant dans la "zone du sourire".</li>
                    <li><strong>Céramo-métallique (PFM) :</strong> Combine un intérieur en métal robuste pour la durabilité avec un extérieur en porcelaine pour un aspect naturel.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'La procédure : Restaurer votre sourire',
            content: `
                <p>La restauration d'une dent par une couronne est un processus précis en deux étapes :</p>
                <ol>
                    <li><strong>Préparation :</strong> La dent est soigneusement taillée pour accueillir la couronne. Nous prenons des empreintes numériques ou traditionnelles pour garantir un ajustement parfait.</li>
                    <li><strong>Protection temporaire :</strong> Pendant que votre couronne permanente est fabriquée sur mesure en laboratoire, nous posons une couronne provisoire pour protéger votre dent et maintenir votre occlusion.</li>
                    <li><strong>Pose finale :</strong> Une fois votre couronne personnalisée prête, nous vérifions méticuleusement l'ajustement et la couleur avant de la cimenter définitivement.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Entretien et longévité',
            content: `
                <p>Une dent couronnée nécessite les mêmes soins qu'une dent naturelle pour garantir sa longévité :</p>
                <ul>
                    <li><strong>Hygiène bucco-dentaire :</strong> Brossez-vous les dents deux fois par jour et passez le fil dentaire soigneusement autour de la base de la couronne pour prévenir les maladies des gencives.</li>
                    <li><strong>Éviter les objets durs :</strong> Évitez de croquer de la glace, des bonbons durs ou des objets non alimentaires pour ne pas écailler la porcelaine.</li>
                    <li><strong>Contrôles de routine :</strong> Des visites dentaires régulières nous permettent de surveiller l'intégrité de la couronne et la santé des tissus de soutien.</li>
                </ul>
            `
        },
        {
            id: 'international-service',
            title: 'Services pour les patients internationaux',
            content: `
                <p>Nous sommes spécialisés dans les soins restaurateurs efficaces et de haute qualité pour les patients venant de l'étranger :</p>
                <ul>
                    <li><strong>Planification optimisée :</strong> Nous nous coordonnons avec nos laboratoires dentaires pour garantir que votre restauration permanente est prête durant votre séjour.</li>
                    <li><strong>Soutien logistique :</strong> Assistance complète pour le transport local et hébergement confortable à proximité de notre clinique moderne.</li>
                    <li><strong>Suivi multi-sites :</strong> Vous pouvez choisir d'effectuer vos soins de suivi ou votre entretien de routine en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                </ul>
            `
        }
    ]
};

export default dentalCrownsContent;