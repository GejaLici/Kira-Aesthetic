import type { ServiceContent } from '@/lib/services';

const armLiftContent: ServiceContent = {
    description: [
        "Le lifting des bras, ou brachioplastie, est une procédure chirurgicale transformatrice conçue pour remodeler la partie supérieure des bras en éliminant l'excès de peau et les dépôts de graisse tenaces. Souvent appelé « bras en chauve-souris », cet excès de tissu peut résulter d'une perte de poids importante, du vieillissement ou de la génétique, et résiste fréquemment au régime alimentaire et à l'exercice seuls.",
        "Notre approche de la brachioplastie se concentre sur la restauration d'un contour ferme, jeune et bien proportionné du haut du corps. En resserrant stratégiquement les tissus de soutien sous-jacents et en redrapant la peau, nous obtenons un profil de bras plus lisse et mieux défini. Cette procédure améliore non seulement votre apparence physique, mais redonne également la confiance nécessaire pour porter des vêtements sans manches et se sentir bien dans sa peau."
    ],
    benefits: [
        "Élimination de la peau lâche et tombante pour un aspect plus ferme.",
        "Réduction des dépôts de graisse tenaces, souvent optimisée par liposuccion.",
        "Amélioration de la définition des bras et silhouette plus proportionnée.",
        "Résultats durables améliorant significativement l'esthétique du haut du corps.",
        "Confiance en soi accrue et plus grand confort dans divers styles vestimentaires."
    ],
    quickFacts: {
        procedureTime: '2 - 3 heures',
        anesthesia: 'anesthésie générale',
        recoveryTime: '4 - 6 semaines pour une reprise complète des activités',
        results: 'résultats durables (optimaux avec un poids stable)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques chirurgicales sur mesure',
            content: `
                <p>Nous proposons différents schémas d'incision en fonction du degré de relâchement cutané et de la répartition des graisses :</p>
                <ul>
                    <li><strong>Brachioplastie complète :</strong> La méthode la plus courante, impliquant une incision de l'aisselle au coude. Idéal pour un excès cutané important.</li>
                    <li><strong>Lifting des bras à incision limitée :</strong> Pour les patients présentant un relâchement modéré, les incisions peuvent être limitées à la zone de l'aisselle, ce qui réduit la visibilité des cicatrices.</li>
                    <li><strong>Liposuccion combinée :</strong> Nous utilisons fréquemment la liposuccion en complément de l'excision cutanée pour affiner la forme du bras et garantir un contour lisse et athlétique.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Préparation et sécurité du patient',
            content: `
                <p>Garantir un résultat optimal commence par une phase préopératoire complète :</p>
                <ul>
                    <li><strong>Bilan médical :</strong> Comprend des analyses de sang, un ECG et un examen physique détaillé.</li>
                    <li><strong>Ajustements du mode de vie :</strong> Les patients doivent arrêter de fumer et éviter les médicaments anticoagulants plusieurs semaines avant la chirurgie.</li>
                    <li><strong>Stabilité pondérale :</strong> Pour de meilleurs résultats, il est recommandé que les patients aient un poids stable et sain avant l'intervention.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Récupération et soins post-opératoires',
            content: `
                <p>Une récupération sans encombre est essentielle pour obtenir les meilleurs résultats esthétiques :</p>
                <ol>
                    <li><strong>Compression :</strong> Vous porterez des manchons de compression spécialisés pendant 4 à 6 semaines pour minimiser l'enflure et soutenir les nouveaux contours.</li>
                    <li><strong>Activité :</strong> Bien que la marche légère soit encouragée immédiatement, le soulèvement de charges lourdes et les mouvements de bras au-dessus de la tête doivent être évités pendant au moins un mois.</li>
                    <li><strong>Gestion des cicatrices :</strong> Nous fournissons des protocoles détaillés pour le soin des cicatrices, incluant des gels de silicone et une protection solaire, pour aider les incisions à s'estomper harmonieusement.</li>
                </ol>
            `
        },
        {
            id: 'international-patients',
            title: 'Accompagnement de nos patients',
            content: `
                <p>Nous nous engageons à offrir une expérience fluide, quel que soit votre lieu de résidence :</p>
                <ul>
                    <li><strong>Patients internationaux :</strong> Nous offrons une assistance complète pour l'hébergement et le transport local afin de rendre votre parcours chirurgical sans stress.</li>
                    <li><strong>Suivi en Italie :</strong> Pour nos patients italiens, nous offrons la commodité unique de consultations de suivi et de contrôles directement en Italie, assurant la continuité des soins près de chez vous.</li>
                </ul>
            `
        }
    ]
};

export default armLiftContent;