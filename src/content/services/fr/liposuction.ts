import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "La liposuccion est l'une des procédures esthétiques les plus efficaces et les plus populaires pour éliminer les amas graisseux localisés et tenaces qui résistent au régime et à l'exercice. En retirant de manière permanente les cellules adipeuses de zones spécifiques — telles que l'abdomen, les hanches, les cuisses, les bras et le cou — la liposuccion permet un remodelage précis du corps, vous aidant à obtenir une silhouette plus mince, mieux proportionnée et harmonieuse.",
        "Il est important de souligner que la liposuccion est un outil de remodelage corporel plutôt qu'une méthode de perte de poids. Les meilleurs résultats sont obtenus par des patients qui ont un poids idéal ou proche de celui-ci, mais qui cherchent à éliminer des « zones critiques ». Grâce aux techniques modernes et peu invasives, nous pouvons offrir des résultats plus fluides, moins d'ecchymoses et une récupération plus rapide que jamais."
    ],
    benefits: [
        "Cible la graisse tenace : Élimine les dépôts localisés qui ne répondent pas à une perte de poids traditionnelle.",
        "Résultats permanents : Une fois les cellules adipeuses retirées d'une zone spécifique, elles ne repoussent pas.",
        "Sculpture de précision : Améliore les contours naturels du corps et les proportions globales.",
        "Peu invasif : De petites incisions (quelques millimètres) permettent d'obtenir des cicatrices presque invisibles.",
        "Application polyvalente : Peut traiter diverses zones, notamment le menton, le dos, les flancs et les jambes."
    ],
    quickFacts: {
        procedureTime: '1 - 4 heures (selon le volume)',
        anesthesia: 'Locale avec sédation ou anesthésie générale',
        recoveryTime: '3 - 7 jours pour le retour au travail ; 4-6 semaines pour le sport',
        results: 'Changements initiaux en quelques semaines ; résultats finaux après 3-6 mois',
    },
    sections: [
        {
            id: 'liposuction-techniques',
            title: 'Technologies avancées d\'élimination des graisses',
            content: `
                <p>Nous utilisons plusieurs techniques de pointe pour garantir une précision maximale et la sécurité des patients :</p>
                <ul>
                    <li><strong>Liposuccion tumescente :</strong> La technique de référence où une solution médicamenteuse est injectée pour insensibiliser la zone et réduire les vaisseaux sanguins, rendant l'extraction de la graisse douce et efficace.</li>
                    <li><strong>Liposuccion VASER :</strong> Utilise des ondes ultrasonores pour briser sélectivement les cellules adipeuses tout en épargnant les tissus environnants comme les nerfs et les vaisseaux sanguins.</li>
                    <li><strong>Liposuccion assistée par puissance (PAL) :</strong> Comprend une canule vibrante spécialisée qui permet une extraction de graisse plus fluide avec moins de traumatismes physiques pour le corps.</li>
                </ul>
            `
        },
        {
            id: 'treatment-areas',
            title: 'Zones de traitement courantes',
            content: `
                <p>La liposuccion est une procédure polyvalente capable de raffiner presque toutes les zones du corps :</p>
                <ul>
                    <li><strong>Abdomen et Flancs :</strong> Élimination des « poignées d'amour » et de la graisse abdominale pour un ventre plus plat.</li>
                    <li><strong>Cuisses et Hanches :</strong> Remodelage de l'intérieur et de l'extérieur des cuisses (culotte de cheval) pour un meilleur galbe des jambes.</li>
                    <li><strong>Haut du corps :</strong> Traitement du dos, de la « graisse du soutien-gorge » et des bras.</li>
                    <li><strong>Visage et Cou :</strong> Élimination de la graisse sous-mentonnière (double menton) pour redéfinir la mâchoire.</li>
                </ul>
            `
        },
        {
            id: 'recovery-guidelines',
            title: 'Soins post-opératoires et récupération',
            content: `
                <p>Le respect de votre plan de récupération est essentiel pour garantir une peau lisse et des contours optimaux :</p>
                <ol>
                    <li><strong>Vêtements de compression :</strong> Vous devez porter une gaine de compression de qualité médicale pendant 4 à 6 semaines. Cela contrôle le gonflement et aide votre peau à se rétracter sur votre nouvelle silhouette.</li>
                    <li><strong>Activité physique :</strong> Bien qu'un repos initial soit nécessaire, une marche légère est encouragée dès les premières 24 heures pour prévenir les caillots sanguins.</li>
                    <li><strong>Gestion du gonflement :</strong> Les ecchymoses et les œdèmes sont à leur maximum durant la première semaine. Nous recommandons souvent des massages de drainage lymphatique pour accélérer le processus de guérison.</li>
                </ol>
            `
        },
        {
            id: 'international-support',
            title: 'Des soins d\'excellence pour les patients internationaux',
            content: `
                <p>Nous offrons une expérience de « tourisme médical » fluide pour nos patients venant de l'étranger :</p>
                <ul>
                    <li><strong>Soutien logistique :</strong> Assistance pour les transferts aéroport et hébergement premium en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Réseau de suivi :</strong> Vous pouvez choisir d'effectuer vos visites de contrôle post-opératoires dans n'importe laquelle de nos cliniques de la région.</li>
                    <li><strong>Sécurité complète :</strong> Toutes les interventions sont pratiquées dans des centres chirurgicaux accrédités par des chirurgiens plasticiens certifiés.</li>
                </ul>
            `
        }
    ]
};

export default liposuctionContent;