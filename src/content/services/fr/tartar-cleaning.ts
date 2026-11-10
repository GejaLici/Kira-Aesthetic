import type { ServiceContent } from '@/lib/services';

const teethCleaningContent: ServiceContent = {
    description: [
        "Le nettoyage dentaire professionnel, médicalement appelé prophylaxie, est le traitement préventif le plus essentiel de la dentisterie moderne. Même avec un brossage méticuleux et l'utilisation de fil dentaire à domicile, la plaque — un film collant de bactéries — peut s'accumuler dans les zones difficiles d'accès et se minéraliser en tartre (calcul). Une fois le tartre formé, il ne peut plus être éliminé par une brosse à dents et nécessite une intervention professionnelle pour éviter qu'il ne cause des caries et des maladies parodontales.",
        "Notre protocole de nettoyage en profondeur va au-delà de la surface pour éliminer les colonies bactériennes et les dépôts durcis qui compromettent votre santé bucco-dentaire. En combinant le détartrage ultrasonique de pointe avec un polissage de haute précision, nous restaurons la surface lisse de votre émail, rendant l'adhésion de la nouvelle plaque plus difficile et laissant votre bouche incroyablement fraîche et propre."
    ],
    benefits: [
        "Prévention des caries : Élimine l'accumulation de bactéries acides qui érodent l'émail des dents.",
        "Défense contre les maladies des gencives : Arrête la gingivite avant qu'elle ne progresse vers une perte osseuse permanente (parodontite).",
        "Élimination des taches : Polit délicatement les taches externes causées par le café, le thé, le vin rouge et le tabac.",
        "Haleine fraîche : Élimine les bactéries produisant du soufre, principales responsables de l'halitose.",
        "Santé systémique : Réduit l'inflammation buccale, cliniquement liée aux maladies cardiaques et au diabète."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes',
        anesthesia: 'Aucune requise (gel anesthésiant topique disponible pour les gencives sensibles)',
        recoveryTime: 'Immédiate ; éviter les aliments fortement pigmentés pendant 2-3 heures',
        results: 'Fraîcheur instantanée et apparence plus nette',
    },
    sections: [
        {
            id: 'cleaning-process',
            title: 'Notre protocole de nettoyage complet',
            content: `
                <p>Nous utilisons un processus en plusieurs étapes pour garantir que chaque surface dentaire est méticuleusement décontaminée :</p>
                <ul>
                    <li><strong>Détartrage ultrasonique :</strong> Nous utilisons des appareils à ultrasons de pointe qui émettent des vibrations à haute fréquence pour décoller doucement le tartre sans endommager l'émail.</li>
                    <li><strong>Détartrage manuel de précision :</strong> Nos hygiénistes utilisent des instruments manuels de précision pour éliminer les dépôts tenaces restants dans les espaces étroits et sous la gencive.</li>
                    <li><strong>Air-Flow ou Prophy-Jet :</strong> Pour une élimination avancée des taches, nous pouvons utiliser un jet pressurisé d'air, d'eau et de poudre fine pour nettoyer en profondeur les sillons des dents.</li>
                    <li><strong>Polissage professionnel :</strong> Une cupule rotative spécialisée et une pâte prophylactique sont utilisées pour lisser la surface de la dent, offrant une finition brillante.</li>
                </ul>
            `
        },
        {
            id: 'preventive-care',
            title: 'Le fondement de votre santé à long terme',
            content: `
                <p>Une séance de nettoyage est aussi l'occasion d'un bilan de santé détaillé :</p>
                <ol>
                    <li><strong>Dépistage parodontal :</strong> Nous mesurons les « poches » entre vos dents et vos gencives pour détecter les signes précoces de récession gingivale ou de perte osseuse.</li>
                    <li><strong>Dépistage du cancer buccal :</strong> Une inspection visuelle des tissus mous pour s'assurer que tout est sain.</li>
                    <li><strong>Conseils d'hygiène personnalisés :</strong> Nous fournissons des conseils sur mesure sur les meilleurs outils (brosses électriques, brossettes interdentaires) adaptés à votre anatomie dentaire.</li>
                </ol>
            `
        },
        {
            id: 'frequency-recommendations',
            title: 'À quelle fréquence devez-vous nous rendre visite ?',
            content: `
                <p>Bien que la recommandation standard soit de tous les <strong>six mois</strong>, nous adaptons la fréquence en fonction de votre « risque biologique » :</p>
                <ul>
                    <li><strong>Risque faible :</strong> Deux fois par an suffisent pour les patients ayant une excellente hygiène à domicile et des gencives saines.</li>
                    <li><strong>Risque élevé :</strong> Les patients ayant des antécédents de maladie des gencives, les fumeurs ou les porteurs d'appareils orthodontiques peuvent nécessiter un nettoyage tous les 3-4 mois.</li>
                    <li><strong>Diabète et grossesse :</strong> Ces conditions augmentent le risque d'inflammation des gencives, rendant les nettoyages professionnels réguliers encore plus critiques.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Services conciergerie pour nos patients internationaux',
            content: `
                <p>Pour nos clients internationaux, nous intégrons le nettoyage professionnel dans une visite complète de « Bilan du Sourire » :</p>
                <ul>
                    <li><strong>Planification facilitée :</strong> Nous coordonnons votre nettoyage avec vos autres traitements pour optimiser votre temps dans nos cliniques.</li>
                    <li><strong>Accès régional :</strong> Maintenez votre santé bucco-dentaire à travers notre réseau en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soutien au voyage :</strong> Assistance pour le transport et hébergement premium pour rendre vos soins dentaires sans stress.</li>
                </ul>
            `
        }
    ]
};

export default teethCleaningContent;