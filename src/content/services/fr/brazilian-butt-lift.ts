import type { ServiceContent } from '@/lib/services';

const brazilianButtLiftContent: ServiceContent = {
    description: [
        "Le lifting colombien (BBL) est une procédure sophistiquée de remodelage corporel qui améliore le volume, la forme et le galbe des fesses en utilisant votre propre graisse naturelle. Contrairement aux implants, le BBL utilise la graisse prélevée par liposuccion dans des zones donneuses — telles que l'abdomen, les hanches ou les cuisses — pour créer une silhouette plus courbée et équilibrée, tout en affinant simultanément les zones que vous souhaitez remodeler.",
        "La beauté du BBL réside dans son double avantage : il offre une sculpture corporelle haute définition d'un côté et une augmentation naturelle de l'autre. Parce qu'il utilise les propres tissus de votre corps, les résultats sont incroyablement naturels au regard et au toucher. Notre approche se concentre sur la création d'une silhouette harmonieuse en « sablier », en donnant la priorité à la sécurité des patients et à la survie des cellules graisseuses à long terme."
    ],
    benefits: [
        "Augmentation naturelle utilisant votre propre graisse corporelle plutôt que des implants.",
        "Remodelage corporel à double action : affine les zones donneuses tout en augmentant le volume des fesses.",
        "Amélioration des proportions corporelles et silhouette en « sablier » mieux définie.",
        "Résultats durables grâce à l'intégration permanente des cellules graisseuses transférées.",
        "Cicatrices minimales grâce à l'utilisation de micro-canules de liposuccion et d'injection."
    ],
    quickFacts: {
        procedureTime: '2 - 5 heures',
        anesthesia: 'anesthésie générale',
        recoveryTime: '2 - 3 semaines (initiale) ; 6-8 semaines (activité complète)',
        results: 'visibles après la fonte de l\'œdème ; définitifs à 3-6 mois',
    },
    sections: [
        {
            id: 'bbl-technique',
            title: 'Précision du lipofilling et de la sculpture',
            content: `
                <p>Un BBL réussi est une forme d'art qui exige une technique méticuleuse à chaque étape :</p>
                <ul>
                    <li><strong>Prélèvement doux :</strong> Nous utilisons une liposuccion avancée pour extraire soigneusement les cellules graisseuses tout en préservant leur intégrité.</li>
                    <li><strong>Purification :</strong> La graisse prélevée est traitée pour isoler les cellules les plus pures et les plus saines en vue de la transplantation.</li>
                    <li><strong>Injection stratégique :</strong> Nos chirurgiens injectent la graisse dans les couches sous-cutanées (au-dessus du muscle) pour garantir les normes de sécurité les plus élevées et un contour aussi lisse que possible.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Protocoles de sécurité et préparation',
            content: `
                <p>La sécurité est notre priorité absolue. Le BBL est une chirurgie complexe qui demande une planification préopératoire rigoureuse :</p>
                <ul>
                    <li><strong>Bilan complet :</strong> Analyses de sang complètes, ECG et examens physiques pour s'assurer que vous êtes une candidate apte à l'intervention.</li>
                    <li><strong>Stabilité pondérale :</strong> Les candidates doivent avoir un poids stable, car des fluctuations importantes peuvent altérer la forme finale.</li>
                    <li><strong>Arrêt du tabac :</strong> Il est strictement interdit de fumer 4 à 6 semaines avant et après la chirurgie, car cela réduit considérablement la survie de la graisse.</li>
                </ul>
            `
        },
        {
            id: 'recovery-rules',
            title: 'Consignes critiques de récupération',
            content: `
                <p>Le succès de votre BBL dépend fortement des soins postopératoires, en particulier de la protection des nouvelles cellules graisseuses :</p>
                <ol>
                    <li><strong>La règle de « ne pas s'asseoir » :</strong> Vous devez éviter de vous asseoir ou de vous allonger directement sur vos fesses pendant au moins 2 à 3 semaines. Un « coussin BBL » est nécessaire pour les moments de position assise obligatoires.</li>
                    <li><strong>Compression :</strong> Un vêtement de contention spécialisé doit être porté sur les zones donneuses pour réduire l'enflure et favoriser la rétraction cutanée.</li>
                    <li><strong>Position de sommeil :</strong> Vous devez dormir sur le ventre ou sur le côté pendant la phase initiale de cicatrisation.</li>
                    <li><strong>Marche :</strong> Une marche légère et précoce est encouragée pour favoriser la circulation sanguine.</li>
                </ol>
            `
        },
        {
            id: 'international-logistics',
            title: 'Accompagnement des patients internationaux',
            content: `
                <p>Nous offrons un écosystème complet pour nos clients internationaux :</p>
                <ul>
                    <li><strong>Voyage et séjour :</strong> Assistance complète pour le transport et hébergement haut de gamme à proximité de notre centre chirurgical.</li>
                    <li><strong>Suivi flexible :</strong> Vous pouvez choisir d'effectuer vos visites de contrôle postopératoires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soins à long terme :</strong> Accès direct à votre équipe chirurgicale pour surveiller vos résultats pendant que la graisse se « stabilise » au cours des 6 premiers mois.</li>
                </ul>
            `
        }
    ]
};

export default brazilianButtLiftContent;