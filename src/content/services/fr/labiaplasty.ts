import type { ServiceContent } from '@/lib/services';

const labiaplastyContent: ServiceContent = {
    description: [
        "La labiaplastie, ou nymphoplastie, est une procédure chirurgicale spécialisée conçue pour remodeler ou réduire la taille des petites lèvres (lèvres internes) ou des grandes lèvres (lèvres externes). De nombreuses femmes ont recours à ce traitement pour soulager un inconfort physique — tel que des frottements, des irritations ou des douleurs lors de l'exercice et de l'intimité — causé par des lèvres hypertrophiées ou asymétriques. Au-delà du soulagement physique, la procédure offre des avantages esthétiques significatifs, aidant les femmes à retrouver leur confiance en elles et à se sentir plus à l'aise dans des vêtements ajustés.",
        "Notre approche de la chirurgie intime se définit par une discrétion absolue, de la compassion et une excellence chirurgicale. En utilisant des techniques avancées qui privilégient la préservation de la sensibilité et des contours naturels, nos chirurgiens certifiés offrent un environnement bienveillant où vos objectifs fonctionnels et esthétiques sont atteints selon les normes médicales les plus strictes."
    ],
    benefits: [
        "Élimine l'inconfort physique, les frottements et les irritations lors des activités quotidiennes.",
        "Réduit la gêne psychologique et améliore la confiance lors des moments intimes.",
        "Permet un plus grand confort lors du port de vêtements moulants ou de maillots de bain.",
        "Corrige l'asymétrie et restaure une apparence plus proportionnée.",
        "Améliore l'hygiène et le confort pendant les menstruations et l'exercice physique."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures',
        anesthesia: 'Anesthésie locale avec sédation ou anesthésie générale',
        recoveryTime: '1 semaine pour le travail ; 4-6 semaines pour le sport et l\'intimité',
        results: 'Résultats permanents avec fils résorbables',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques chirurgicales avancées',
            content: `
                <p>Nous adaptons la méthode chirurgicale à votre anatomie spécifique et au résultat souhaité, garantissant des cicatrices minimales et une guérison optimale :</p>
                <ul>
                    <li><strong>Technique de résection longitudinale (Trim) :</strong> L'excès de tissu est retiré le long du bord externe des lèvres, offrant une finition très nette et symétrique.</li>
                    <li><strong>Technique en V (Wedge) :</strong> Une section en forme de V est retirée de la partie centrale des lèvres. Cette méthode est privilégiée par beaucoup car elle préserve le bord naturel, plissé et la coloration du bord labial.</li>
                    <li><strong>Sutures résorbables :</strong> Nous utilisons des fils absorbables de haute qualité qui se dissolvent d'eux-mêmes, éliminant le besoin de retirer les points et réduisant le stress post-opératoire.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Votre parcours de rétablissement',
            content: `
                <p>La guérison d'une labiaplastie nécessite une attention particulière à l'hygiène et au repos durant les premières semaines :</p>
                <ol>
                    <li><strong>Les premières 72 heures :</strong> Le pic de gonflement et l'inconfort mineur sont gérés avec des analgésiques prescrits et des compresses froides. Le repos est essentiel.</li>
                    <li><strong>Semaine 1-2 :</strong> La plupart des patientes reprennent un travail sédentaire. L'œdème commence à diminuer de manière significative, bien que la zone reste sensible.</li>
                    <li><strong>Semaine 4-6 :</strong> Les tissus sont généralement assez cicatrisés pour reprendre l'exercice physique intense, la natation et l'activité sexuelle. Les résultats finaux apparaissent une fois que tout gonflement résiduel a disparu.</li>
                </ol>
            `
        },
        {
            id: 'patient-care-safety',
            title: 'Sécurité et confidentialité',
            content: `
                <p>Votre sécurité et votre vie privée sont nos priorités absolues. Nous garantissons une expérience confidentielle de la première consultation au suivi final :</p>
                <ul>
                    <li><strong>Consultation discrète :</strong> Un environnement privé pour discuter de vos symptômes et de vos attentes sans jugement.</li>
                    <li><strong>Cicatrices minimales :</strong> Les incisions sont stratégiquement placées pour être pratiquement invisibles une fois la guérison complète.</li>
                    <li><strong>Préservation de la sensibilité :</strong> Nos chirurgiens utilisent des techniques méticuleuses pour protéger les terminaisons nerveuses et maintenir une sensibilité naturelle.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Soutien premium pour les patientes internationales',
            content: `
                <p>Nous facilitons le parcours de nos patientes internationales à la recherche d'une chirurgie intime spécialisée :</p>
                <ul>
                    <li><strong>Voyage et hébergement :</strong> Assistance complète pour les transferts aéroport et hébergement privé haut de gamme pour garantir une convalescence sereine.</li>
                    <li><strong>Flexibilité du suivi :</strong> Vous pouvez choisir d'effectuer vos contrôles post-opératoires dans n'importe laquelle de nos installations modernes en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Assistance à distance :</strong> Communication directe avec notre équipe médicale avant et après votre voyage pour une totale tranquillité d'esprit.</li>
                </ul>
            `
        }
    ]
};

export default labiaplastyContent;