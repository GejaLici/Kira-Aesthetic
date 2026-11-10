import type { ServiceContent } from '@/lib/services';

const hairTransplantContent: ServiceContent = {
    description: [
        "La greffe de cheveux est une solution chirurgicale hautement efficace conçue pour restaurer de façon permanente la croissance des cheveux dans les zones touchées par l'amincissement ou la calvitie. La procédure consiste à redistribuer des follicules pileux sains et résistants à la chute depuis une zone donneuse — généralement l'arrière ou les côtés du cuir chevelu — vers les zones receveuses. Cela permet une restauration naturelle et permanente de la densité capillaire ainsi qu'une redéfinition de la ligne frontale.",
        "La restauration capillaire moderne est devenue un mélange sophistiqué de science médicale et d'art. En utilisant vos propres cheveux naturels, les résultats sont pratiquement indétectables, permettant aux cheveux transplantés de pousser, d'être coupés et coiffés exactement comme le reste de votre chevelure. Notre objectif est de transformer durablement votre apparence et de renforcer votre confiance en vous grâce à des techniques de précision."
    ],
    benefits: [
        "Croissance permanente : Les follicules transplantés sont génétiquement résistants aux hormones responsables de la calvitie.",
        "Résultats naturels : Un placement méticuleux garantit que la ligne frontale et la densité s'harmonisent avec les traits de votre visage.",
        "Cicatrices imperceptibles : Les techniques FUE avancées ne laissent que des points microscopiques, tandis que les cicatrices FUT sont facilement camouflées.",
        "Taux de réussite élevé : La manipulation spécialisée des greffons assure un taux de survie élevé des cheveux transplantés.",
        "Restauration polyvalente : Efficace pour la calvitie masculine, l'éclaircissement de la couronne et le recul de la ligne frontale."
    ],
    quickFacts: {
        procedureTime: '4 - 8 heures (selon le nombre de greffons)',
        anesthesia: 'Anesthésie locale avec sédation légère optionnelle',
        recoveryTime: '7 - 10 jours pour la chute des croûtes ; 2 semaines pour une activité normale',
        results: 'La repousse commence à 3-4 mois ; résultats finaux visibles entre 12 et 18 mois',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'FUE vs FUT : Méthodes de restauration avancées',
            content: `
                <p>Nous proposons les deux techniques de restauration capillaire les plus efficaces, en adaptant le choix à votre type de cheveux et à vos objectifs de densité :</p>
                <ul>
                    <li><strong>FUE (Extraction d'Unités Folliculaires) :</strong> Les follicules sont extraits un par un à l'aide d'un outil de micro-punch. C'est une technique sans suture qui ne laisse aucune cicatrice linéaire et permet une récupération plus rapide.</li>
                    <li><strong>FUT (Transplantation d'Unités Folliculaires) :</strong> Également appelée méthode de la "bandelette", une étroite bande de cuir chevelu est prélevée puis disséquée sous des microscopes de haute puissance. C'est souvent l'idéal pour les patients nécessitant un volume important de greffons en une seule séance.</li>
                </ul>
            `
        },
        {
            id: 'artistic-design',
            title: 'L\'art de la ligne frontale naturelle',
            content: `
                <p>Une greffe réussie se définit par son invisibilité. Nos chirurgiens se concentrent sur les détails les plus fins du design capillaire :</p>
                <ul>
                    <li><strong>Macro et Micro-irrégularité :</strong> Nous reproduisons le schéma naturel et non linéaire d'une véritable ligne frontale pour éviter l'aspect "champ de poireaux" ou artificiel.</li>
                    <li><strong>Angulation :</strong> Les greffons sont placés selon des angles précis pour correspondre au flux naturel et à l'angle de sortie de vos cheveux d'origine.</li>
                    <li><strong>Densité stratégique :</strong> Nous priorisons le placement des greffons là où ils auront l'impact visuel le plus significatif pour une couverture naturelle.</li>
                </ul>
            `
        },
        {
            id: 'recovery-cycle',
            title: 'Votre chronologie de croissance',
            content: `
                <p>La patience est essentielle car les follicules pileux traversent leurs cycles naturels de croissance :</p>
                <ol>
                    <li><strong>Les 10 premiers jours :</strong> Cicatrisation initiale où de petites croûtes se forment puis tombent. Un lavage doux est requis durant cette période.</li>
                    <li><strong>La phase de chute (Shock Loss) :</strong> Entre 2 et 4 semaines, les tiges des cheveux transplantés tombent. C'est normal ; la racine vivante reste saine sous la peau.</li>
                    <li><strong>Nouvelle croissance :</strong> De nouveaux cheveux fins commencent à émerger vers le 3ème ou 4ème mois.</li>
                    <li><strong>Maturation finale :</strong> Les cheveux continuent de s'épaissir et de foncer, la densité finale étant atteinte entre 12 et 18 mois.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Soins et accompagnement international',
            content: `
                <p>Nous offrons une expérience premium pour les patients internationaux voyageant pour une restauration capillaire :</p>
                <ul>
                    <li><strong>Conciergerie complète :</strong> Assistance totale pour les transferts aéroport, le transport local et l'hébergement haut de gamme.</li>
                    <li><strong>Suivi multi-régional :</strong> Les patients bénéficient de la flexibilité unique d'effectuer leurs visites de contrôle en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soutien direct :</strong> Accès 24h/24 et 7j/7 à notre équipe médicale pour toute question post-opératoire durant votre phase initiale de guérison à l'étranger.</li>
                </ul>
            `
        }
    ]
};

export default hairTransplantContent;