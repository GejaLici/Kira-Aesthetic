import type { ServiceContent } from '@/lib/services';

const genioplastyContent: ServiceContent = {
    description: [
        "Le remodelage du menton, médicalement connu sous le nom de génioplastie, est une procédure faciale transformatrice conçue pour améliorer la projection, la symétrie et le contour global du menton. Un menton bien défini est fondamental pour un profil équilibré ; la génioplastie peut renforcer un menton « fuyant » ou réduit, ou réduire un menton proéminent afin d'harmoniser les traits du visage.",
        "Que ce soit par des implants sur mesure ou des techniques avancées de repositionnement osseux, la génioplastie offre une solution permanente pour l'équilibre du profil. Cette procédure est fréquemment réalisée en complément d'une rhinoplastie (profiloplastie) ou d'une chirurgie de la mâchoire pour atteindre une harmonie faciale totale, garantissant que le menton complète le nez et la mâchoire pour une apparence naturelle et esthétique."
    ],
    benefits: [
        "Renforce un menton fuyant ou effacé pour un profil plus affirmé.",
        "Réduit un menton trop proéminent pour adoucir et équilibrer les traits du visage.",
        "Corrige l'asymétrie du menton et améliore les proportions verticales du visage.",
        "Améliore la définition de la mâchoire et de la zone du cou.",
        "Résultats permanents sans cicatrices externes visibles dans la plupart des cas."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures',
        anesthesia: 'anesthésie générale',
        recoveryTime: '1 - 2 semaines pour les activités sociales',
        results: 'amélioration permanente du profil facial',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques de remodelage avancées',
            content: `
                <p>Nous adaptons la méthode chirurgicale à votre anatomie squelettique spécifique et à vos objectifs esthétiques :</p>
                <ul>
                    <li><strong>Augmentation du menton (implants) :</strong> Un implant en silicone biocompatible est placé via une petite incision à l'intérieur de la bouche pour augmenter la projection. Idéal pour les cas de récession légère à modérée.</li>
                    <li><strong>Génioplastie de glissement (ostéotomie) :</strong> Une procédure sophistiquée où le chirurgien coupe et repositionne précisément l'os du menton. Cela permet de traiter des problèmes complexes, incluant les ajustements de hauteur et les asymétries importantes.</li>
                    <li><strong>Réduction du menton :</strong> Pour les personnes ayant un menton proéminent, nous remodelons soigneusement l'os pour créer un bas du visage plus doux et plus équilibré.</li>
                </ul>
            `
        },
        {
            id: 'profile-harmony',
            title: 'L\'art de l\'équilibre du profil',
            content: `
                <p>La génioplastie est souvent la « pièce manquante » du rajeunissement facial. Nos chirurgiens se concentrent sur la relation entre tous les traits du visage :</p>
                <ul>
                    <li><strong>Synergie avec la rhinoplastie :</strong> Améliorer le menton peut faire paraître un nez imposant plus petit, offrant souvent de meilleurs résultats qu'une chirurgie du nez seule.</li>
                    <li><strong>Définition de la mâchoire :</strong> En projetant le menton, nous créons une tension dans la zone sous-mentonnière, ce qui aide à éliminer l'apparence d'un « double menton ».</li>
                    <li><strong>Incisions invisibles :</strong> La plupart des techniques utilisent des incisions à l'intérieur de la lèvre inférieure, garantissant que vos résultats soient visibles, mais que la chirurgie reste votre secret.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Récupération et soins post-opératoires',
            content: `
                <p>La guérison après une génioplastie est généralement rapide, l'inconfort s'estompant la première semaine :</p>
                <ol>
                    <li><strong>Phase d'alimentation souple :</strong> Vous suivrez un régime liquide ou mou pendant 7 à 10 jours pour protéger les incisions intra-buccales.</li>
                    <li><strong>Hygiène bucco-dentaire :</strong> Des bains de bouche spécialisés sont prescrits pour maintenir la zone chirurgicale propre pendant la cicatrisation.</li>
                    <li><strong>Gestion de l'enflure :</strong> L'œdème initial atteint son maximum à 48 heures. La plupart des patients reprennent le travail sous 10 jours, bien que les contours définitifs apparaissent une fois la cicatrisation interne terminée.</li>
                </ol>
            `
        },
        {
            id: 'international-assistance',
            title: 'Soins et suivi international',
            content: `
                <p>Nous fournissons un soutien complet à nos patients internationaux pour garantir un voyage sans stress :</p>
                <ul>
                    <li><strong>Logistique :</strong> Assistance complète pour le transport local et l'hébergement à proximité de notre établissement.</li>
                    <li><strong>Continuité régionale :</strong> Vous pouvez choisir d'effectuer vos soins de suivi et vos contrôles en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Support d'experts :</strong> Communication directe avec votre équipe chirurgicale avant et après votre séjour.</li>
                </ul>
            `
        }
    ]
};

export default genioplastyContent;