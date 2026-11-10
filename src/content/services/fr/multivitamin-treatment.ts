import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
    description: [
        "Le traitement multivitaminé, une forme spécialisée de mésothérapie (souvent appelée Mésolift), est une procédure biologique de revitalisation cutanée qui délivre un puissant « cocktail » de nutriments essentiels directement dans le derme. Contrairement aux soins topiques qui peinent souvent à franchir la barrière protectrice de la peau, la mésothérapie utilise des micro-injections pour garantir que les vitamines, minéraux, acides aminés et antioxydants atteignent les couches profondes où ils peuvent stimuler efficacement la réparation et le renouvellement cellulaire.",
        "Ce traitement agit comme une véritable « nourriture cutanée » en profondeur, fournissant les éléments nécessaires à la production de collagène et d'élastine. C'est une solution idéale pour ceux qui cherchent à combattre les premiers signes du vieillissement, le stress environnemental ou un teint terne et fatigué. Le résultat est une peau profondément hydratée, plus ferme et plus lumineuse, rayonnante de santé de l'intérieur."
    ],
    benefits: [
        "Éclat instantané : Revitalise la peau terne pour un effet « lumière » visible immédiatement.",
        "Hydratation profonde : Repulpe la peau de l'intérieur grâce à l'acide hyaluronique et aux minéraux.",
        "Protection antioxydante : Neutralise les radicaux libres pour prévenir le vieillissement prématuré.",
        "Élasticité renforcée : Stimule la production naturelle des fibres de collagène et d'élastine.",
        "Teint unifié : Aide à illuminer le teint et à lisser les petites irrégularités de texture."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutes',
        anesthesia: 'Crème anesthésiante topique en option',
        recoveryTime: 'Immédiate ; les légères rougeurs s estompent sous 24 heures',
        results: 'Hydratation immédiate ; amélioration cumulative sur 3 à 6 séances',
    },
    sections: [
        {
            id: 'bespoke-cocktails',
            title: 'Cocktails nutritifs sur mesure',
            content: `
                <p>Nous ne croyons pas aux solutions universelles. Chaque traitement est un mélange personnalisé pour répondre aux besoins biologiques spécifiques de votre peau :</p>
                <ul>
                    <li><strong>Vitamines C et E :</strong> Antioxydants puissants pour illuminer et protéger la barrière cutanée.</li>
                    <li><strong>Vitamine A (Rétinoïdes) :</strong> Pour favoriser le renouvellement cellulaire et corriger les ridules.</li>
                    <li><strong>Acide Hyaluronique :</strong> Pour une rétention d'eau intense et un effet repulpant immédiat.</li>
                    <li><strong>Acides aminés et Peptides :</strong> Protéines essentielles à la construction d'un tissu cutané ferme.</li>
                    <li><strong>Minéraux (Magnésium, Zinc) :</strong> Pour équilibrer la santé de la peau et réduire l'inflammation.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'À quoi s\'attendre pendant la séance',
            content: `
                <p>La mésothérapie est une procédure rapide et très bien tolérée qui s'intègre facilement dans n'importe quel emploi du temps :</p>
                <ol>
                    <li><strong>Préparation :</strong> La peau est désinfectée et, si souhaité, une crème anesthésiante légère est appliquée sur la zone cible.</li>
                    <li><strong>Micro-injections :</strong> À l'aide d'une aiguille ultra-fine ou d'un pistolet de mésothérapie spécialisé, le sérum personnalisé est administré par une série d'injections superficielles rapides.</li>
                    <li><strong>Absorption :</strong> Un massage doux est effectué pour assurer une répartition homogène des nutriments dans la couche dermique.</li>
                    <li><strong>Protection :</strong> Nous terminons par l'application d'un sérum apaisant et d'une protection SPF élevée.</li>
                </ol>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Résultats optimaux et entretien',
            content: `
                <p>Si une seule séance offre un rafraîchissement immédiat, la mésothérapie est conçue comme une thérapie cumulative :</p>
                <ul>
                    <li><strong>Phase d'attaque :</strong> Une série de 3 à 6 séances, espacées de 2 à 4 semaines, est recommandée pour saturer la peau en nutriments.</li>
                    <li><strong>Entretien :</strong> Une séance tous les 3 à 6 mois suffit généralement à maintenir l'éclat et les bénéfices anti-âge.</li>
                    <li><strong>Zones cibles :</strong> Ce traitement est hautement efficace pour le visage, mais aussi pour le cou, le décolletage et le dos des mains.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Services premium pour nos clients internationaux',
            content: `
                <p>Nous offrons une expérience sereine pour les patients voyageant pour nos protocoles esthétiques spécialisés :</p>
                <ul>
                    <li><strong>Soutien complet :</strong> Assistance logistique pour vos voyages, transferts aéroport et hébergement en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi régional :</strong> Vous avez la flexibilité de planifier vos séances d'entretien dans n'importe laquelle de nos cliniques à travers la région.</li>
                    <li><strong>Équipe d'experts :</strong> Tous les soins sont pratiqués par des médecins ou des esthéticiens médicaux spécialisés en rajeunissement injectable.</li>
                </ul>
            `
        }
    ]
};

export default multivitaminTreatmentContent;