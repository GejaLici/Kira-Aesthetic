import type { ServiceContent } from '@/lib/services';

const thighLiftContent: ServiceContent = {
    description: [
        "Le lifting des cuisses, ou cruroplastie, est une procédure chirurgicale transformative conçue pour remodeler les jambes en éliminant l'excès de peau tombante et les dépôts de graisse tenaces. Cette intervention est particulièrement efficace pour les personnes ayant subi une perte de poids importante, les effets naturels du vieillissement ou présentant des prédispositions génétiques entraînant un relâchement cutané. En retendant les tissus sous-jacents et en redrapant la peau, le lifting des cuisses crée un profil de jambe plus ferme, plus lisse et plus athlétique.",
        "Dans notre clinique, nous donnons la priorité à l'harmonie corporelle et au confort fonctionnel. Au-delà des avantages esthétiques d'une apparence plus tonique, le lifting des cuisses peut soulager des inconforts physiques tels que l'irritation cutanée et les frottements. Nos chirurgiens plasticiens certifiés combinent des techniques chirurgicales avancées à un œil artistique pour garantir que les cicatrices sont placées discrètement et que les contours finaux complètent les proportions globales de votre corps."
    ],
    benefits: [
        "Raffermissement de la peau : Élimine l'aspect « froissé » ou tombant de la peau qui persiste souvent après une perte de poids.",
        "Contours affinés : Remodèle l'intérieur et l'extérieur des cuisses pour un aspect plus proportionné.",
        "Confort physique : Réduit la friction cutanée et les irritations causées par l'excès de tissu.",
        "Meilleur ajustement des vêtements : Permet de mieux porter les maillots de bain, les vêtements de sport et les vêtements ajustés.",
        "Résultats durables : Offre une élimination permanente de l'excès de peau avec des résultats qui durent des années."
    ],
    quickFacts: {
        procedureTime: '2 - 4 heures',
        anesthesia: 'Anesthésie générale',
        recoveryTime: '2 - 3 semaines (travail léger) ; 6 semaines pour une activité complète',
        results: 'Visibles immédiatement ; affinement final après 6 à 12 mois',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Approches chirurgicales personnalisées',
            content: `
                <p>Nous adaptons le tracé des incisions selon la répartition spécifique de vos excès de tissus :</p>
                <ul>
                    <li><strong>Lifting de la face interne (médial) :</strong> L'approche la plus courante, ciblant la partie supérieure de l'intérieur de la cuisse. Les incisions sont généralement dissimulées dans le pli de l'aine.</li>
                    <li><strong>Cruroplastie verticale :</strong> Pour les patients présentant un relâchement cutané important s'étendant vers le genou, une incision verticale le long de la face interne peut être nécessaire pour une correction maximale.</li>
                    <li><strong>Lifting de la face externe (latéral) :</strong> Traite le devant et l'extérieur des cuisses, souvent combiné à un lifting des fesses ou du bas du corps (bodylift).</li>
                    <li><strong>Lipo-cruroplastie :</strong> Nous intégrons fréquemment la liposuccion pour éliminer les couches de graisse profonde avant de retendre la peau, garantissant ainsi la transition la plus fluide possible.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Sécurité et soins préopératoires',
            content: `
                <p>Votre sécurité est notre priorité absolue. Le parcours commence par un bilan médical complet :</p>
                <ol>
                    <li><strong>Évaluation médicale :</strong> Comprend une revue complète des antécédents, un examen physique et des analyses de sang détaillées.</li>
                    <li><strong>Planification pré-chirurgicale :</strong> Nous utilisons la photographie haute résolution pour cartographier les emplacements d'incisions afin qu'elles soient les plus faciles à dissimuler.</li>
                    <li><strong>Anesthésiologie :</strong> Une consultation dédiée pour garantir l'administration sécurisée d'une anesthésie générale adaptée à votre profil de santé.</li>
                </ol>
            `
        },
        {
            id: 'recovery-process',
            title: 'Le chemin vers la guérison',
            content: `
                <p>La récupération d'un lifting des cuisses nécessite de la patience et le respect d'un protocole postopératoire spécifique :</p>
                <ul>
                    <li><strong>Compression :</strong> Vous porterez un vêtement de contention spécialisé pendant 4 à 6 semaines pour soutenir les nouveaux contours et minimiser le gonflement.</li>
                    <li><strong>Repos initial :</strong> La plupart des patients passent une nuit à la clinique pour un suivi professionnel. Nous recommandons un repos de 10 à 14 jours avant de reprendre un travail de bureau.</li>
                    <li><strong>Reprise d'activité :</strong> Bien que la marche légère soit encouragée dès les premières 24 heures pour prévenir les caillots sanguins, les exercices intenses et le port de charges lourdes doivent être évités pendant au moins 6 semaines.</li>
                    <li><strong>Gestion des cicatrices :</strong> Nous proposons des traitements avancés à base de silicone et des options de thérapie laser pour garantir que les cicatrices s'estompent autant que possible avec le temps.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Soutien complet pour les patients internationaux',
            content: `
                <p>Nous sommes spécialisés dans les soins chirurgicaux haut de gamme pour les patients venant du Royaume-Uni, de l'UE et d'ailleurs :</p>
                <ul>
                    <li><strong>Logistique Conciergerie :</strong> Gestion complète des transferts aéroport et hébergement de luxe en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi prolongé :</strong> Nous nous assurons que vous êtes en état de voyager avant votre sortie et fournissons un accès numérique 24/7 à votre équipe chirurgicale.</li>
                    <li><strong>Suivis régionaux :</strong> Si vous résidez dans la région, vous pouvez choisir d'effectuer vos visites de contrôle postopératoires dans l'une de nos cliniques affiliées.</li>
                </ul>
            `
        }
    ]
};

export default thighLiftContent;