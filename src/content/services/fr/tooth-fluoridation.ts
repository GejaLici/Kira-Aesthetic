import type { ServiceContent } from '@/lib/services';

const toothFluoridationContent: ServiceContent = {
    description: [
        "La fluoration professionnelle est l'un des piliers de la dentisterie pédiatrique préventive, agissant comme un véritable bouclier pour les sourires en pleine croissance. Le fluor est un minéral naturel qui facilite la reminéralisation de l'émail dentaire — la couche externe dure et protectrice des dents. En s'intégrant à la structure de l'émail, le fluor rend les dents nettement plus résistantes aux attaques acides des bactéries de la plaque et des sucres responsables des caries.",
        "Pour les enfants, les traitements professionnels au fluor sont particulièrement vitaux car leurs dents définitives fraîchement sorties ne sont pas encore totalement minéralisées et sont plus vulnérables à la carie. Cette procédure simple et indolore ne se contente pas de prévenir les futures caries ; elle peut également aider à « guérir » les caries à un stade très précoce en redéposant des minéraux dans les zones fragilisées de l'émail avant qu'une cavité ne se forme."
    ],
    benefits: [
        "Renforcement de l'émail : Durcit considérablement l'émail dentaire contre les acides bactériens.",
        "Prévention des caries : Cliniquement prouvé pour réduire le risque de carie chez les enfants et les adolescents.",
        "Protection indolore : Une application rapide et non invasive qui ne nécessite ni perçage ni anesthésie.",
        "Inverse les premières caries : Peut stopper et inverser la progression des lésions initiales (taches blanches).",
        "Économique : Une mesure préventive simple qui évite le recours à des obturations ou extractions coûteuses à l'avenir."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutes',
        anesthesia: 'Aucune requise',
        recoveryTime: 'Immédiate ; éviter le brossage jusqu au lendemain matin',
        results: 'Émail renforcé et résistance accrue aux caries',
    },
    sections: [
        {
            id: 'fluoride-application',
            title: 'Technologie avancée de vernis fluoré',
            content: `
                <p>Nous utilisons la dernière génération de systèmes d'administration de fluor pour garantir une absorption maximale et le confort du patient :</p>
                <ul>
                    <li><strong>Vernis fluoré :</strong> Contrairement aux anciennes méthodes de gouttières ou de mousses, notre vernis à haute concentration est « peint » sur les dents. Il adhère immédiatement au contact de la salive, garantissant que le fluor reste en contact avec l'émail pendant plusieurs heures.</li>
                    <li><strong>Saveurs agréables :</strong> Nos vernis sont disponibles dans des saveurs adaptées aux enfants, rendant l'expérience positive même pour nos plus jeunes patients.</li>
                    <li><strong>Application ciblée :</strong> L'application au pinceau nous permet de concentrer le fluor sur des zones spécifiques à haut risque, comme les sillons profonds des molaires et les espaces entre les dents.</li>
                </ul>
            `
        },
        {
            id: 'why-children-need-it',
            title: 'Pourquoi commencer tôt ?',
            content: `
                <p>La santé dentaire pédiatrique pose les bases d'un bien-être durable. La fluoration est recommandée pour plusieurs raisons clés :</p>
                <ol>
                    <li><strong>Émail immature :</strong> Les dents nouvellement sorties sont plus molles et plus poreuses que les dents adultes, agissant comme des « éponges » pour l'absorption du fluor.</li>
                    <li><strong>Habitudes alimentaires :</strong> Les enfants sont souvent plus exposés aux collations sucrées et aux jus, nécessitant une protection supplémentaire contre les bactéries productrices d'acide.</li>
                    <li><strong>Apprentissage de l'hygiène :</strong> Pendant que les enfants perfectionnent leur technique de brossage, le fluor offre un « filet de sécurité » pour les zones qu'ils pourraient oublier.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Maximiser les bénéfices du traitement',
            content: `
                <p>Pour s'assurer que le vernis fluoré offre le plus haut niveau de protection, nous recommandons les soins suivants :</p>
                <ul>
                    <li><strong>Boire et manger :</strong> Votre enfant peut boire des liquides froids immédiatement. Nous suggérons d'attendre 4 à 6 heures avant de manger des aliments croquants ou collants.</li>
                    <li><strong>Brossage et fil dentaire :</strong> Ne brossez pas les dents de votre enfant et n'utilisez pas de fil dentaire pendant au moins 6 à 12 heures (idéalement jusqu'au lendemain matin). Cela permet au vernis de rester en contact optimal avec l'émail.</li>
                    <li><strong>Éviter la chaleur :</strong> Évitez de donner à votre enfant des boissons ou des soupes très chaudes pour le reste de la journée du traitement.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Soins préventifs pour les familles en voyage',
            content: `
                <p>Nous proposons des forfaits de soins pédiatriques spécialisés pour les familles visitant nos cliniques régionales :</p>
                <ul>
                    <li><strong>Bilans complets :</strong> Combinez la fluoration avec des scellements de sillons et un nettoyage complet pour une visite « Protection Totale ».</li>
                    <li><strong>Flexibilité géographique :</strong> Commencez les soins préventifs de votre enfant en <strong>Albanie</strong> et conservez ses dossiers dans nos cliniques au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Assistance voyage :</strong> Nous offrons un soutien complet pour le transport et l'hébergement familial afin de rendre votre visite dentaire aussi confortable que possible.</li>
                </ul>
            `
        }
    ]
};

export default toothFluoridationContent;