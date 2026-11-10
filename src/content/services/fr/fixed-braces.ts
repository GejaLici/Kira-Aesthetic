import type { ServiceContent } from '@/lib/services';

const fixedBracesContent: ServiceContent = {
    description: [
        "L'appareil dentaire fixe reste la solution orthodontique la plus fiable et la plus efficace pour obtenir un sourire parfaitement aligné. Composé de petits brackets (bagues) fixés sur chaque dent et reliés par un arc spécialisé, il exerce une pression douce et continue pour guider les dents vers leur position idéale. Cette méthode offre une précision inégalée, permettant aux orthodontistes de corriger les problèmes d'alignement et d'occlusion les plus complexes.",
        "Que vous souhaitiez traiter un chevauchement sévère, des espaces interdentaires ou des décalages importants de la mâchoire comme les supraclusions, l'appareil fixe traditionnel offre une polyvalence exceptionnelle. Grâce aux avancées modernes, les systèmes d'aujourd'hui sont plus petits, plus confortables et plus esthétiques que jamais, ce qui en fait un choix privilégié tant pour les adolescents que pour les adultes en quête d'une transformation permanente de leur sourire."
    ],
    benefits: [
        "Contrôle de précision : Capable de corriger des mouvements dentaires complexes et des désalignements sévères.",
        "Polyvalence : Traite efficacement les supraclusions, sous-occlusions, occlusions croisées et béances.",
        "Correction constante : Fixé en place, l'appareil travaille 24h/24 sans nécessiter l'intervention ou l'oubli du patient.",
        "Santé bucco-dentaire améliorée : Des dents droites sont plus faciles à nettoyer, réduisant ainsi les risques de carie et de maladie des gencives.",
        "Résultats durables : Une méthode éprouvée qui offre une base solide à vie pour un sourire sain."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures pour la pose',
        anesthesia: 'Aucune requise',
        recoveryTime: '3 - 5 jours pour s\'habituer à la pression',
        results: 'Alignement complet généralement en 18 - 24 mois',
    },
    sections: [
        {
            id: 'brace-options',
            title: 'Options orthodontiques modernes',
            content: `
                <p>Nous proposons différents systèmes d'appareils adaptés à votre style de vie et à vos préférences esthétiques :</p>
                <ul>
                    <li><strong>Appareils métalliques :</strong> L'option la plus durable, utilisant désormais des brackets en acier inoxydable de haute qualité, plus petits pour un confort accru.</li>
                    <li><strong>Appareils en céramique :</strong> Une alternative discrète utilisant des brackets transparents ou de la couleur de la dent qui se fondent avec votre émail naturel—idéal pour les professionnels.</li>
                    <li><strong>Arcs à mémoire de forme :</strong> Nous utilisons des fils activés par la chaleur corporelle qui aident les dents à se déplacer plus rapidement et de manière moins douloureuse que par le passé.</li>
                </ul>
            `
        },
        {
            id: 'treatment-journey',
            title: 'Votre chemin vers un sourire droit',
            content: `
                <p>Le traitement orthodontique est un parcours structuré axé sur un mouvement progressif et sain :</p>
                <ol>
                    <li><strong>La pose :</strong> Les brackets sont collés avec précision sur vos dents, puis l'arc initial est engagé. Ce processus est totalement indolore.</li>
                    <li><strong>Ajustements périodiques :</strong> Toutes les 4 à 8 semaines, vous nous rendrez visite pour resserrer ou changer les fils, garantissant que vos dents continuent de progresser vers l'objectif.</li>
                    <li><strong>La révélation :</strong> Une fois l'alignement terminé, l'appareil est retiré et nous procédons à un nettoyage professionnel pour dévoiler votre nouveau sourire.</li>
                </ol>
            `
        },
        {
            id: 'life-with-braces',
            title: 'Soins et entretien',
            content: `
                <p>L'entretien de votre appareil est essentiel pour la réussite du traitement et la santé de votre émail :</p>
                <ul>
                    <li><strong>Ajustements alimentaires :</strong> Évitez les aliments durs, collants ou très croquants (noix, chewing-gum, croûtes dures) qui peuvent casser les brackets ou tordre les fils.</li>
                    <li><strong>Hygiène renforcée :</strong> Nous vous enseignerons des techniques de brossage spécialisées utilisant des brossettes interdentaires pour garder les zones autour des bagues sans plaque dentaire.</li>
                    <li><strong>Phase de contention :</strong> Après le retrait, le port d'un appareil de contention sur mesure est vital pour garantir que vos dents restent dans leur nouvelle position.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Soutien international pour les patients',
            content: `
                <p>Pour les patients venant de l'étranger, nous veillons à ce que votre expérience orthodontique soit efficace et bien encadrée :</p>
                <ul>
                    <li><strong>Rendez-vous coordonnés :</strong> Nous planifions vos visites d'ajustement pour optimiser votre temps, avec un soutien complet pour le transport et l'hébergement local.</li>
                    <li><strong>Continuité des soins :</strong> Nos cliniques en <strong>Albanie</strong>, au <strong>Kosovo</strong> et en <strong>Italie</strong> vous permettent de choisir le lieu le plus pratique pour vos contrôles réguliers.</li>
                    <li><strong>Assistance d'urgence :</strong> Nous fournissons des conseils et des contacts locaux dans votre pays d'origine pour les ajustements mineurs si nécessaire entre deux visites.</li>
                </ul>
            `
        }
    ]
};

export default fixedBracesContent;