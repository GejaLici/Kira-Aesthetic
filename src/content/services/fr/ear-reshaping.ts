import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "L'otoplastie, ou chirurgie de remodelage des oreilles, est une procédure transformatrice conçue pour améliorer la forme, la position ou la proportion de l'oreille. Bien qu'elle soit souvent associée à la correction des « oreilles décollées », l'otoplastie traite également la macrotie (oreilles excessivement grandes), l'asymétrie auriculaire et les déformations congénitales ou liées à un traumatisme. L'objectif principal est de créer une apparence plus équilibrée qui s'harmonise avec le reste de vos traits faciaux.",
        "Cette procédure est unique car elle est très efficace tant pour les enfants (généralement à partir de 5 ans) que pour les adultes. Pour de nombreux patients, l'otoplastie apporte un soulagement psychologique significatif, renforçant la confiance en soi en corrigeant des caractéristiques qui ont pu être une source de complexe. Nos chirurgiens se concentrent sur la création de contours naturels, garantissant que les oreilles soient esthétiques sans paraître artificielles ou trop « plaquées »."
    ],
    benefits: [
        "Corrige les oreilles proéminentes ou décollées pour un profil plus équilibré.",
        "Remodèle et réduit la taille des grandes oreilles (macrotie).",
        "Améliore la symétrie faciale en traitant les formes ou positions d'oreilles inégales.",
        "Renforce l'estime de soi et atténue l'anxiété sociale, particulièrement chez les jeunes patients.",
        "Offre des résultats permanents avec des incisions discrètes cachées derrière l'oreille."
    ],
    quickFacts: {
        procedureTime: '1 - 3 heures',
        anesthesia: 'anesthésie locale avec sédation ou anesthésie générale',
        recoveryTime: '1 - 2 semaines pour l\'école/le travail ; 6-8 semaines pour le sport',
        results: 'Correction permanente de la forme et de la position des oreilles',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques de remodelage de précision',
            content: `
                <p>Nous utilisons des méthodes chirurgicales avancées pour garantir un aspect naturel et des résultats durables :</p>
                <ul>
                    <li><strong>Sculpture du cartilage :</strong> Le cartilage de l'oreille est soigneusement remodelé pour créer le pli naturel (anthélix), souvent absent dans les cas d'oreilles décollées.</li>
                    <li><strong>Sutures internes :</strong> Des sutures spécialisées et permanentes sont utilisées à l'intérieur pour fixer le cartilage dans sa nouvelle position esthétique.</li>
                    <li><strong>Cicatrices invisibles :</strong> Les incisions sont stratégiquement placées dans le pli naturel derrière l'oreille ou dans les replis antérieurs, rendant les cicatrices pratiquement indétectables après la guérison.</li>
                </ul>
            `
        },
        {
            id: 'pediatric-otoplasty',
            title: 'Considérations pour les enfants',
            content: `
                <p>L'otoplastie est l'une des rares procédures esthétiques recommandées pour les enfants. L'oreille étant développée à 90 % dès l'âge de cinq ans, l'intervention peut être réalisée avant l'entrée à l'école pour prévenir les moqueries potentielles :</p>
                <ul>
                    <li><strong>Développement sécurisé :</strong> Nous nous assurons que le cartilage est suffisamment mature avant de procéder à la chirurgie.</li>
                    <li><strong>Le confort avant tout :</strong> Pour les plus jeunes patients, l'anesthésie générale est généralement privilégiée pour garantir une expérience totalement indolore et sans stress.</li>
                    <li><strong>Récupération accompagnée :</strong> Nous fournissons des bandeaux spécialisés et des conseils post-opératoires adaptés aux enfants actifs.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Votre parcours de récupération',
            content: `
                <p>La guérison après une otoplastie est relativement rapide, à condition de respecter les consignes post-opératoires :</p>
                <ol>
                    <li><strong>La première semaine :</strong> Un pansement de compression protecteur est porté pour maintenir la nouvelle position des oreilles et minimiser l'enflure.</li>
                    <li><strong>La phase du bandeau :</strong> Une fois le pansement retiré, un bandeau souple doit être porté (initialement à plein temps, puis seulement la nuit) pour protéger les oreilles pendant le sommeil.</li>
                    <li><strong>Activités :</strong> La plupart des patients reprennent le travail ou l'école sous 7 à 10 jours. Cependant, les sports de contact doivent être évités pendant au moins deux mois pour prévenir tout traumatisme au cartilage.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Soutien aux patients internationaux',
            content: `
                <p>Nous sommes spécialisés dans les soins de haute qualité pour les patients venant de l'étranger :</p>
                <ul>
                    <li><strong>Logistique fluide :</strong> Assistance pour le transport local et hébergement de qualité à proximité de notre clinique pour un séjour confortable.</li>
                    <li><strong>Suivi tri-régional :</strong> Pour votre commodité, vous pouvez choisir d'effectuer votre suivi en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Consultation à distance :</strong> Les évaluations initiales peuvent être réalisées par examen de photos ou appel vidéo pour simplifier votre parcours chirurgical.</li>
                </ul>
            `
        }
    ]
};

export default otoplastyContent;