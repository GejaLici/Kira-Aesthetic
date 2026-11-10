import type { ServiceContent } from '@/lib/services';

const denturesContent: ServiceContent = {
    description: [
        "Les prothèses dentaires sont des dispositifs amovibles sur mesure conçus pour remplacer les dents manquantes et restaurer la fonction de votre sourire. Au-delà de l'esthétique, la perte de dents peut impacter considérablement votre élocution, votre capacité à mâcher et la structure de votre visage. Les prothèses modernes offrent une solution fiable et éprouvée à ces défis, vous rendant un sourire complet et confiant.",
        "Les prothèses d'aujourd'hui sont bien plus avancées que les « dentiers » d'autrefois. En utilisant des acryliques de haute qualité et des techniques de prothèse dentaire de pointe, nous créons des appareils légers, durables et méticuleusement conçus pour épouser les contours naturels de votre bouche. Que vous ayez besoin d'un ensemble complet ou du remplacement de quelques dents seulement, notre objectif est de fournir une restauration confortable et parfaitement naturelle."
    ],
    benefits: [
        "Restaure un sourire complet, renforçant la confiance en soi et l'apparence physique.",
        "Fournit un soutien vital aux muscles du visage, évitant l'aspect « affaissé ».",
        "Améliore l'élocution et la clarté phonétique souvent entravées par les dents manquantes.",
        "Améliore la capacité de mastication, permettant une alimentation plus variée et saine.",
        "Disponible en plusieurs options : prothèses complètes, partielles ou stabilisées sur implants."
    ],
    quickFacts: {
        procedureTime: 'Plusieurs rendez-vous sur 3 à 5 semaines',
        anesthesia: 'Aucune requise (sauf en cas d\'extractions préalables)',
        recoveryTime: '2 à 4 semaines de période d\'adaptation',
        results: 'Restauration fonctionnelle ; renouvellement conseillé tous les 5 à 7 ans',
    },
    sections: [
        {
            id: 'denture-types',
            title: 'Les types de prothèses que nous proposons',
            content: `
                <p>Nous proposons des solutions spécialisées en fonction du nombre de dents manquantes et de la santé de votre mâchoire :</p>
                <ul>
                    <li><strong>Prothèses complètes :</strong> Utilisées lorsque toutes les dents de l'arcade supérieure ou inférieure sont manquantes. Elles disposent d'une base en acrylique couleur gencive pour un ajustement précis.</li>
                    <li><strong>Prothèses partielles :</strong> Idéales lorsqu'il reste des dents naturelles. Elles sont souvent fixées par une structure discrète pour empêcher les dents existantes de se déplacer.</li>
                    <li><strong>Prothèses sur implants :</strong> Pour une stabilité maximale, les prothèses peuvent être ancrées à des implants dentaires. Cela élimine le besoin d'adhésifs et évite tout glissement lors de la mastication ou de l'élocution.</li>
                </ul>
            `
        },
        {
            id: 'custom-crafting',
            title: 'L\'art de l\'ajustement sur mesure',
            content: `
                <p>Le succès d'une prothèse réside dans sa précision. Notre processus d'ajustement en plusieurs étapes garantit un confort optimal :</p>
                <ol>
                    <li><strong>Empreintes détaillées :</strong> Nous prenons des moulages précis de vos crêtes alvéolaires et de votre palais pour assurer la base la plus stable possible.</li>
                    <li><strong>Enregistrement de l'occlusion :</strong> Nous mesurons la rencontre de vos mâchoires pour garantir que vos nouvelles dents fonctionnent harmonieusement sans causer de douleurs maxillaires.</li>
                    <li><strong>Essai esthétique :</strong> Vous essaierez une version en cire pour valider l'esthétique (taille, forme et teinte) avant la fabrication finale de l'appareil.</li>
                </ol>
            `
        },
        {
            id: 'adjustment-period',
            title: 'Vivre avec de nouvelles prothèses',
            content: `
                <p>S'adapter à de nouvelles prothèses est un processus graduel. Voici à quoi vous attendre durant les premières semaines :</p>
                <ul>
                    <li><strong>Adaptation musculaire :</strong> Vos muscles de la langue et des joues apprendront naturellement à maintenir l'appareil en place avec le temps.</li>
                    <li><strong>Élocution et alimentation :</strong> Nous recommandons de s'entraîner à lire à haute voix et de commencer par des aliments mous coupés en petits morceaux pour gagner en confiance.</li>
                    <li><strong>Entretien quotidien :</strong> Les prothèses doivent être nettoyées quotidiennement avec des brosses spécialisées et trempées toute la nuit pour maintenir le matériau hydraté et vos gencives saines.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Soutien aux patients internationaux',
            content: `
                <p>Nous offrons une expérience fluide pour les patients internationaux recherchant des soins prothétiques de haute qualité à des prix abordables :</p>
                <ul>
                    <li><strong>Délais optimisés :</strong> Nous priorisons vos travaux de laboratoire pour garantir que vos rendez-vous d'ajustement soient effectués efficacement durant votre séjour.</li>
                    <li><strong>Conciergerie de voyage :</strong> Assistance pour le transport local et hébergement confortable à proximité de notre clinique.</li>
                    <li><strong>Suivi pratique :</strong> Les ajustements post-opératoires ou les rebasages peuvent être organisés dans nos centres partenaires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                </ul>
            `
        }
    ]
};

export default denturesContent;