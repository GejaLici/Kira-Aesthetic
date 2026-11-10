import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "Un pont dentaire (ou bridge) est une solution de restauration fixe conçue pour remplacer une ou plusieurs dents manquantes en « comblant » littéralement l'espace vide. Il se compose de dents artificielles sur mesure (intermédiaires) ancrées par des couronnes dentaires (piliers) placées sur les dents naturelles ou les implants de chaque côté de l'espace.",
        "Au-delà de la simple restauration esthétique de votre sourire, le pont est essentiel au maintien de votre santé bucco-dentaire. Il empêche le déplacement des dents restantes, restaure votre capacité à mâcher et à parler correctement, et aide à préserver la forme naturelle de votre visage en offrant un soutien structurel à vos lèvres et à vos joues."
    ],
    benefits: [
        "Restaure instantanément l'aspect esthétique d'un sourire complet et sain.",
        "Améliore l'efficacité de la mastication et clarifie l'élocution affectée par les dents manquantes.",
        "Prévient la dérive — le mouvement des dents adjacentes vers l'espace vide.",
        "Répartit uniformément les forces de mastication pour protéger les dents environnantes.",
        "Offre une alternative fixe et stable aux prothèses partielles amovibles."
    ],
    quickFacts: {
        procedureTime: '2+ visites (préparation et pose finale)',
        anesthesia: 'anesthésie locale',
        recoveryTime: 'Immédiate ; période d\'adaptation de 2 à 3 jours',
        results: 'Restauration fixe, robuste et durable',
    },
    sections: [
        {
            id: 'bridge-types',
            title: 'Options de ponts personnalisés',
            content: `
                <p>Nous proposons plusieurs types de ponts adaptés à vos besoins cliniques spécifiques et à l'emplacement des dents manquantes :</p>
                <ul>
                    <li><strong>Pont traditionnel :</strong> Le choix le plus courant, où des couronnes sont placées sur les deux dents adjacentes à l'espace.</li>
                    <li><strong>Pont en extension (Cantilever) :</strong> Utilisé lorsqu'il n'y a une dent adjacente que d'un seul côté de l'espace manquant.</li>
                    <li><strong>Pont Maryland :</strong> Une option conservatrice souvent utilisée pour les dents de devant, utilisant une structure en métal ou en porcelaine collée à l'arrière des dents voisines.</li>
                    <li><strong>Pont sur implants :</strong> La solution la plus stable pour plusieurs dents manquantes, ancrée par des implants dentaires plutôt que par des dents naturelles.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Le processus de restauration',
            content: `
                <p>Le parcours vers un sourire restauré comprend généralement deux phases clés :</p>
                <ol>
                    <li><strong>Préparation des piliers :</strong> Les dents d'ancrage sont façonnées avec précision pour recevoir les couronnes de soutien. Nous prenons ensuite des empreintes haute définition pour guider le laboratoire dentaire.</li>
                    <li><strong>Pont provisoire :</strong> Nous posons une restauration temporaire pour protéger vos dents et maintenir l'esthétique pendant la fabrication de votre pont sur mesure.</li>
                    <li><strong>Intégration finale :</strong> Une fois le pont permanent prêt, nous vérifions méticuleusement l'ajustement, l'occlusion et la correspondance des couleurs avant de le fixer définitivement avec un ciment dentaire.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Santé bucco-dentaire à long terme',
            content: `
                <p>La longévité d'un pont dépend de la santé des dents et des gencives de soutien :</p>
                <ul>
                    <li><strong>Nettoyage spécialisé :</strong> Nous vous montrerons comment utiliser des enfile-fils ou des brossettes interproximales pour nettoyer sous l'intermédiaire (la dent artificielle).</li>
                    <li><strong>Santé des fondations :</strong> Le brossage et l'utilisation quotidienne du fil dentaire sur les dents piliers sont essentiels pour prévenir les caries et les maladies des gencives.</li>
                    <li><strong>Contrôles professionnels :</strong> Des visites régulières nous permettent de vérifier que le pont reste bien scellé et que les tissus environnants restent sains.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Soins d\'excellence pour les patients internationaux',
            content: `
                <p>Nous offrons une expérience fluide aux personnes voyageant vers notre clinique pour des soins de restauration :</p>
                <ul>
                    <li><strong>Logistique coordonnée :</strong> Support complet pour le transport local et hébergement de premier choix à proximité de la clinique.</li>
                    <li><strong>Suivi multi-pays :</strong> Vous bénéficiez de l'avantage unique de pouvoir effectuer votre suivi en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Délais optimisés :</strong> Nous priorisons votre calendrier de traitement pour garantir que votre restauration permanente soit terminée confortablement durant votre séjour.</li>
                </ul>
            `
        }
    ]
};

export default dentalBridgesContent;