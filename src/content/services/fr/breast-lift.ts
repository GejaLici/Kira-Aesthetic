import type { ServiceContent } from '@/lib/services';

const breastLiftContent: ServiceContent = {
    description: [
        "Le lifting des seins, ou mastopexie, est une intervention chirurgicale conçue pour corriger l'affaissement (ptôse) et restaurer un contour mammaire plus ferme et plus élevé. Au fil du temps, des facteurs tels que la grossesse, l'allaitement, les fluctuations de poids et le vieillissement naturel peuvent faire perdre à la poitrine son élasticité. Cette procédure retire l'excès de peau et retend les tissus environnants pour remodeler et soutenir le nouveau profil de la poitrine.",
        "Contrairement à une augmentation mammaire, un lifting se concentre sur la position plutôt que sur le volume. En repositionnant le mamelon et l'aréole à une hauteur plus jeune, nos chirurgiens peuvent créer une silhouette rajeunie, naturelle et harmonieuse avec votre corps. Pour les patientes souhaitant à la fois un rehaussement et une augmentation de volume, cette procédure peut également être combinée avec la pose d'implants mammaires."
    ],
    benefits: [
        "Rehausse les seins vers une position plus jeune et surélevée.",
        "Élimine l'excès de peau distendue pour une sensation de fermeté accrue.",
        "Repositionne le mamelon et l'aréole pour une meilleure symétrie esthétique.",
        "Remodèle le tissu mammaire pour améliorer la projection et le galbe.",
        "Renforce la confiance en soi et améliore le rendu des vêtements et des maillots de bain."
    ],
    quickFacts: {
        procedureTime: '2 - 3 heures',
        anesthesia: 'anesthésie générale',
        recoveryTime: '4 - 6 semaines pour une récupération complète',
        results: 'amélioration immédiate ; la forme finale se stabilise en 3 à 6 mois',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques de lifting personnalisées',
            content: `
                <p>Le choix du type d'incision dépend du degré d'affaissement et de la quantité de peau à retirer :</p>
                <ul>
                    <li><strong>Périaréolaire (Donut) :</strong> Une incision circulaire autour de l'aréole, adaptée à un affaissement léger.</li>
                    <li><strong>Verticale (Lollipop) :</strong> Une incision autour de l'aréole et verticalement jusqu'au pli mammaire ; idéale pour une ptôse modérée.</li>
                    <li><strong>En Ancre (T inversé) :</strong> Le lifting le plus complet, impliquant des incisions autour de l'aréole, verticalement, et le long du sillon mammaire.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Préparation et protocoles de sécurité',
            content: `
                <p>Votre sécurité est notre priorité. La phase préopératoire garantit que vous êtes prête pour l'intervention :</p>
                <ul>
                    <li><strong>Santé mammaire :</strong> Une mammographie ou une échographie est généralement requise pour établir un bilan de santé mammaire de référence.</li>
                    <li><strong>Bilan médical :</strong> Comprend des analyses de sang complètes, un ECG et une consultation avec notre anesthésiste.</li>
                    <li><strong>Soins préopératoires :</strong> Les patientes doivent arrêter de fumer et éviter les médicaments anticoagulants (comme l'aspirine) plusieurs semaines avant l'intervention.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Récupération et soins post-opératoires',
            content: `
                <p>Un résultat réussi repose sur des soins post-opératoires rigoureux :</p>
                <ol>
                    <li><strong>Maintien :</strong> Vous porterez un soutien-gorge de contention spécialisé 24h/24 et 7j/7 pendant les 4 à 6 premières semaines pour soutenir les tissus en cicatrisation.</li>
                    <li><strong>Activité :</strong> La marche légère est encouragée immédiatement, mais le soulèvement de charges lourdes et les exercices intenses doivent être évités pendant au moins un mois.</li>
                    <li><strong>Soin des cicatrices :</strong> Nous fournissons des protocoles spécifiques pour le soin des plaies et la gestion des cicatrices afin de garantir qu'elles s'estompent au mieux avec le temps.</li>
                </ol>
            `
        },
        {
            id: 'global-logistics',
            title: 'Accompagnement des patients internationaux',
            content: `
                <p>Nous facilitons chaque aspect de votre parcours chirurgical pour vous garantir une expérience sans stress :</p>
                <ul>
                    <li><strong>Assistance au voyage :</strong> Nous offrons un soutien complet pour le transport et un hébergement haut de gamme à proximité de notre centre chirurgical.</li>
                    <li><strong>Flexibilité du suivi :</strong> Les patientes ont l'option unique d'effectuer leurs visites de contrôle post-opératoires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi continu :</strong> Notre équipe est disponible pour des consultations virtuelles pendant votre récupération une fois de retour chez vous.</li>
                </ul>
            `
        }
    ]
};

export default breastLiftContent;