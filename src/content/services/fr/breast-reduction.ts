import type { ServiceContent } from '@/lib/services';

const breastReductionContent: ServiceContent = {
    description: [
        "La réduction mammaire, ou mammoplastie de réduction, est une intervention qui change la vie, conçue pour soulager les fardeaux physiques et émotionnels causés par une poitrine trop volumineuse (hypertrophie mammaire). En retirant l'excès de tissu glandulaire, de graisse et de peau, cette chirurgie crée une taille de poitrine plus en harmonie avec votre morphologie, offrant un soulagement immédiat des douleurs chroniques et des limitations fonctionnelles.",
        "Au-delà des bienfaits physiques, la réduction mammaire restaure un contour ferme et rehaussé tout en améliorant les proportions globales de la silhouette. Notre approche se concentre sur l'harmonie esthétique et le confort à long terme, permettant aux patientes de mener un mode de vie plus actif et de se sentir plus confiantes dans leurs vêtements et dans leur corps."
    ],
    benefits: [
        "Soulagement des douleurs chroniques du dos, du cou et des épaules causées par le poids excessif.",
        "Élimination des irritations cutanées et des éruptions sous le pli mammaire.",
        "Amélioration de la posture et capacité à participer confortablement à des activités physiques.",
        "Obtention d'une taille de poitrine proportionnelle à votre physique global.",
        "Poitrine plus ferme et rehaussée avec des mamelons repositionnés pour un aspect rajeuni."
    ],
    quickFacts: {
        procedureTime: '2 - 4 heures',
        anesthesia: 'anesthésie générale',
        recoveryTime: '4 - 6 semaines pour une activité complète',
        results: 'permanents (sous réserve de changements de poids importants ou du vieillissement)',
    },
    sections: [
        {
            id: 'medical-benefits',
            title: 'Pourquoi envisager une réduction mammaire ?',
            content: `
                <p>Pour de nombreuses femmes, la réduction mammaire est autant une nécessité médicale qu'un choix esthétique. Elle traite efficacement plusieurs conditions :</p>
                <ul>
                    <li><strong>Soulagement physique :</strong> Réduction de la charge lourde sur la colonne vertébrale et les muscles de soutien.</li>
                    <li><strong>Sillons d'épaules :</strong> Atténue les marques douloureuses et les creux causés par les bretelles de soutien-gorge.</li>
                    <li><strong>Retour à l'activité :</strong> Permet la course, les sports et l'exercice qui étaient auparavant difficiles ou douloureux.</li>
                    <li><strong>Confiance en soi :</strong> Résout la gêne liée au volume de la poitrine et facilite l'habillage avec des vêtements standards.</li>
                </ul>
            `
        },
        {
            id: 'surgical-approach',
            title: 'Techniques de remodelage de précision',
            content: `
                <p>Nous utilisons des techniques chirurgicales avancées pour garantir le meilleur résultat esthétique avec un minimum de cicatrices :</p>
                <ul>
                    <li><strong>Technique verticale (Lollipop) :</strong> Idéale pour les réductions modérées, impliquant une incision autour de l'aréole et une verticale jusqu'au pli.</li>
                    <li><strong>Technique en ancre (T inversé) :</strong> La référence pour les réductions importantes, permettant un remodelage et un rehaussement maximaux.</li>
                    <li><strong>Repositionnement du mamelon :</strong> Le mamelon et l'aréole sont déplacés vers une position plus haute et naturelle, tout en préservant autant que possible la vascularisation et la sensibilité.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Récupération et suivi post-opératoire',
            content: `
                <p>Une bonne cicatrisation est essentielle pour maintenir la nouvelle forme et garantir votre confort :</p>
                <ol>
                    <li><strong>Maintien :</strong> Un soutien-gorge chirurgical spécialisé doit être porté pendant 4 à 6 semaines pour soutenir la poitrine pendant la guérison.</li>
                    <li><strong>Surveillance :</strong> Des drains temporaires peuvent être utilisés pendant quelques jours pour éviter l'accumulation de fluides.</li>
                    <li><strong>Mode de vie :</strong> La plupart des patientes reprennent un travail de bureau sous 2 semaines ; le sport intensif est restreint pendant 6 semaines.</li>
                    <li><strong>Gestion des cicatrices :</strong> Nous fournissons des instructions complètes sur les traitements topiques et la protection solaire pour aider les cicatrices à s'estomper harmonieusement.</li>
                </ol>
            `
        },
        {
            id: 'patient-concierge',
            title: 'Soins pour les patients internationaux',
            content: `
                <p>Nous assurons un parcours fluide et professionnel pour nos patients venant de l'étranger :</p>
                <ul>
                    <li><strong>Voyage serein :</strong> Coordination complète pour le transport local et hébergement confortable à proximité de notre clinique.</li>
                    <li><strong>Réseau de suivi :</strong> Pour votre commodité, vous pouvez choisir d'effectuer vos contrôles post-opératoires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Équipe d'experts :</strong> Nos chirurgiens certifiés assurent un soutien continu, garantissant la continuité des soins de votre arrivée jusqu'à votre résultat final.</li>
                </ul>
            `
        }
    ]
};

export default breastReductionContent;