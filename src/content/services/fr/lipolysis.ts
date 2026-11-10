import type { ServiceContent } from '@/lib/services';

const injectionLipolysisContent: ServiceContent = {
    description: [
        "La lipolyse injectable, communément appelée injections dissolvantes de graisse, est un traitement peu invasif conçu pour éliminer les amas graisseux localisés et tenaces qui résistent au régime et à l'exercice. Cette procédure utilise des composés spécialisés, tels que l'acide désoxycholique, pour rompre les membranes des cellules adipeuses. Une fois les cellules détruites, le corps métabolise et élimine naturellement les acides gras libérés via le système lymphatique.",
        "Ce traitement est une solution non chirurgicale idéale pour un remodelage corporel de précision. Il est spécifiquement destiné à la « réduction ciblée » de zones comme le menton, l'abdomen et les cuisses. Bien qu'il ne remplace pas une perte de poids globale, il offre un moyen puissant d'affiner votre silhouette et d'obtenir une apparence plus sculptée avec un temps de récupération minimal."
    ],
    benefits: [
        "Non chirurgical : Réduit la graisse sans incisions, sans cicatrices et sans anesthésie générale.",
        "Remodelage ciblé : Traite avec précision les zones difficiles comme le double menton ou la graisse du dos.",
        "Résultats permanents : Une fois détruites, les cellules adipeuses ne reviennent pas dans la zone traitée.",
        "Récupération minimale : La plupart des patients reprennent leurs activités quotidiennes immédiatement après la séance.",
        "Élimination naturelle : Utilise les processus métaboliques naturels du corps pour évacuer les graisses."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutes',
        anesthesia: 'Aucune (la solution contient des agents anesthésiants)',
        recoveryTime: 'Gonflement pendant 3 à 7 jours ; aucun arrêt de travail nécessaire',
        results: 'Visibles après 6 à 8 semaines ; nécessite généralement 2 à 4 séances',
    },
    sections: [
        {
            id: 'treatment-areas',
            title: 'Zones de traitement courantes',
            content: `
                <p>La lipolyse injectable est très efficace pour les petites poches de graisse qui altèrent les lignes naturelles du corps :</p>
                <ul>
                    <li><strong>Graisse sous-mentonnière :</strong> Élimination du « double menton » pour redéfinir la mâchoire.</li>
                    <li><strong>Remodelage de la silhouette :</strong> Cible les poignées d'amour, le petit ventre abdominal et la « culotte de cheval » sur les cuisses.</li>
                    <li><strong>Poches de graisse spécifiques :</strong> Réduction des plis du dos (graisse du soutien-gorge) et de l'intérieur des genoux.</li>
                    <li><strong>Raffinement post-chirurgical :</strong> Correction des petites irrégularités après une liposuccion.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'À quoi s\'attendre pendant le traitement',
            content: `
                <p>Le processus est rapide et clinique, axé sur la sécurité et une distribution homogène :</p>
                <ol>
                    <li><strong>Quadrillage :</strong> Le praticien marque la zone de traitement selon un motif de grille pour garantir des intervalles d'injection précis.</li>
                    <li><strong>Injections :</strong> Une série de petites injections superficielles sont réalisées dans la couche graisseuse. Vous pouvez ressentir un bref picotement ou une sensation de chaleur.</li>
                    <li><strong>Réaction inflammatoire :</strong> Immédiatement après, la zone deviendra rouge et gonflée. C'est un signe positif que le processus de lipolyse a été déclenché.</li>
                </ol>
            `
        },
        {
            id: 'recovery-timeline',
            title: 'Récupération et maturation des résultats',
            content: `
                <p>Contrairement aux procédures chirurgicales, les résultats de la lipolyse apparaissent progressivement au fur et à mesure que le corps traite la graisse :</p>
                <ul>
                    <li><strong>Jours 1 à 5 :</strong> Un gonflement important et une sensibilité sont attendus, particulièrement lors du traitement du menton.</li>
                    <li><strong>Semaines 2 à 4 :</strong> L'inflammation initiale s'atténue et le corps commence le processus progressif de drainage lymphatique.</li>
                    <li><strong>Semaines 6 à 8 :</strong> L'effet de remodelage devient visible. C'est le moment optimal pour évaluer si une séance de suivi est nécessaire.</li>
                    <li><strong>Entretien :</strong> Pour préserver les résultats, il est important de maintenir un poids stable grâce à des habitudes de vie saines.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Services de conciergerie pour les patients internationaux',
            content: `
                <p>Nous garantissons une expérience fluide pour les patients voyageant pour un remodelage corporel non chirurgical :</p>
                <ul>
                    <li><strong>Séances coordonnées :</strong> Pour les patients venant de l'étranger, nous planifions des cycles de traitement adaptés à votre calendrier de voyage.</li>
                    <li><strong>Soutien logistique :</strong> Assistance pour le transport et l'hébergement haut de gamme en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi régional :</strong> Vous pouvez choisir n'importe lequel de nos centres pour vos séances suivantes ou vos contrôles, assurant une continuité des soins sans frontières.</li>
                </ul>
            `
        }
    ]
};

export default injectionLipolysisContent;