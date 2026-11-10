import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign est un système orthodontique révolutionnaire qui aligne les dents à l'aide d'une série d'aligneurs transparents sur mesure, pratiquement invisibles. Cette approche moderne offre une alternative discrète, confortable et flexible aux bagues métalliques traditionnelles, ce qui en fait le choix de premier plan pour les adultes et les adolescents souhaitant améliorer leur sourire sans l'aspect esthétique des appareils classiques. Les aligneurs sont fabriqués en plastique lisse sans BPA et s'adaptent parfaitement à vos dents, appliquant une force contrôlée pour les guider vers la position idéale.",
        "Au-delà de l'esthétique, Invisalign offre une expérience hautement prévisible et hygiénique. Étant donné que les aligneurs sont amovibles, vous pouvez maintenir votre alimentation habituelle et votre routine de soins bucco-dentaires en toute simplicité. Grâce à la modélisation numérique 3D avancée, nous pouvons planifier l'ensemble de votre parcours, du premier aligneur jusqu'à votre sourire final, vous permettant de visualiser les résultats projetés avant même que le traitement ne commence."
    ],
    benefits: [
        "Presque invisible : Le matériau transparent SmartTrack™ rend votre traitement pratiquement imperceptible.",
        "Amovible : Retirez facilement vos aligneurs pour manger, boire et participer à des événements sociaux spéciaux.",
        "Confort supérieur : Pas de brackets ou de fils métalliques causant des irritations buccales ou des urgences.",
        "Meilleure hygiène : Le brossage et l'utilisation du fil dentaire restent simples, réduisant le risque d'accumulation de plaque.",
        "Précision numérique : La cartographie 3D garantit des mouvements plus précis et des temps de traitement souvent plus courts."
    ],
    quickFacts: {
        procedureTime: 'Scan initial : 30 min ; Contrôles : toutes les 6-8 semaines',
        anesthesia: 'Aucune requise',
        recoveryTime: 'Aucun ; 1 à 2 jours de légère pression à chaque nouvelle gouttière',
        results: 'Dents alignées généralement en 12 - 18 mois',
    },
    sections: [
        {
            id: 'digital-precision',
            title: 'Technologie de planification 3D avancée',
            content: `
                <p>Le succès d'Invisalign repose sur notre flux de travail numérique de pointe, garantissant un ajustement parfait et des résultats prévisibles :</p>
                <ul>
                    <li><strong>Scanner numérique iTero® :</strong> Nous capturons une image 3D haute résolution de vos dents en quelques minutes, remplaçant les empreintes en pâte inconfortables et salissantes du passé.</li>
                    <li><strong>Logiciel ClinCheck® :</strong> Il nous permet d'affiner chaque mouvement dentaire. Vous pourrez visualiser une animation 3D virtuelle de la transformation de votre sourire avant même la fabrication de vos gouttières.</li>
                    <li><strong>Technologie SmartStage® :</strong> Elle optimise la progression de vos mouvements pour garantir que chaque dent se déplace dans le bon ordre pour une efficacité maximale.</li>
                </ul>
            `
        },
        {
            id: 'the-invisalign-journey',
            title: 'Votre parcours vers un nouveau sourire',
            content: `
                <p>Le traitement est simple et conçu pour s'intégrer parfaitement à un style de vie actif :</p>
                <ol>
                    <li><strong>Consultation :</strong> Nous évaluons votre structure dentaire et discutons de vos objectifs esthétiques pour confirmer qu'Invisalign est la solution adaptée.</li>
                    <li><strong>Fabrication sur mesure :</strong> Vos scans 3D sont envoyés au laboratoire, où une série complète d'aligneurs personnalisés est fabriquée exclusivement pour vous.</li>
                    <li><strong>La routine :</strong> Vous portez chaque jeu de gouttières environ 20 à 22 heures par jour, en passant au suivant toutes les 1 à 2 semaines.</li>
                    <li><strong>Suivi :</strong> De courts rendez-vous de contrôle tous les quelques mois permettent de s'assurer que vos dents suivent parfaitement le plan prévu.</li>
                </ol>
            `
        },
        {
            id: 'lifestyle-maintenance',
            title: 'Vivre avec des aligneurs transparents',
            content: `
                <p>Invisalign demande de la discipline mais offre une liberté inégalée par rapport aux appareils fixes :</p>
                <ul>
                    <li><strong>Liberté alimentaire :</strong> Comme vous retirez les gouttières pour manger, il n'y a aucune restriction sur les aliments durs, collants ou croquants.</li>
                    <li><strong>Nettoyage :</strong> Rincez simplement vos aligneurs et brossez-les délicatement avec une brosse à dents souple pour les garder transparents et sans odeur.</li>
                    <li><strong>Contention Vivera® :</strong> Une fois le traitement terminé, nous fournissons des appareils de contention Vivera sur mesure pour maintenir votre nouveau sourire parfaitement en place.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Excellence orthodontique internationale',
            content: `
                <p>Nous sommes spécialisés dans la coordination des traitements Invisalign pour nos patients internationaux :</p>
                <ul>
                    <li><strong>Rendez-vous optimisés :</strong> Nous pouvons fournir plusieurs jeux d'aligneurs à la fois pour minimiser le nombre de visites nécessaires à la clinique.</li>
                    <li><strong>Soutien régional :</strong> Accédez à vos contrôles de progression dans l'une de nos cliniques partenaires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Services de conciergerie :</strong> Nous vous aidons pour les arrangements de voyage et l'hébergement local afin que vos "vacances dentaires" soient fluides et sans stress.</li>
                </ul>
            `
        }
    ]
};

export default invisalignContent;