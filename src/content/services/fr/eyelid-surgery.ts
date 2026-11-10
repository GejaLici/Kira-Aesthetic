import type { ServiceContent } from '@/lib/services';

const blepharoplastyContent: ServiceContent = {
    description: [
        "La chirurgie des paupières, ou blépharoplastie, est une procédure chirurgicale précise conçue pour rajeunir le regard en traitant le relâchement cutané, l'excès de graisse et la laxité musculaire. Qu'elle soit pratiquée sur les paupières supérieures, inférieures ou les deux, ce traitement élimine efficacement l'aspect « fatigué », réduisant les poches et l'effet de paupière tombante pour révéler une expression plus éclatante, éveillée et sereine.",
        "Le regard est souvent la première zone à montrer des signes de vieillissement en raison de la nature délicate de la peau périorbitaire. Notre approche de la blépharoplastie se concentre sur des raffinements subtils et naturels qui respectent l'anatomie unique de votre visage. En repositionnant méticuleusement les tissus et en dissimulant les incisions dans les plis naturels, nous restaurons le contour dynamique de vos yeux sans altérer votre expression fondamentale."
    ],
    benefits: [
        "Élimination de l'excès de peau des paupières supérieures qui peut parfois gêner la vision.",
        "Suppression des poches sous les yeux pour un aspect reposé.",
        "Réduction des ridules et de l'excès cutané au niveau de la paupière inférieure.",
        "Rajeunissement durable qui illumine l'ensemble du visage.",
        "Cicatrices pratiquement invisibles, cachées dans les plis naturels ou à l'intérieur de la paupière."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures',
        anesthesia: 'anesthésie locale avec sédation (ou générale)',
        recoveryTime: '7 - 10 jours pour les activités sociales',
        results: 'visibles dès la résorption de l\'enflure ; finaux après 1-2 mois',
    },
    sections: [
        {
            id: 'upper-vs-lower',
            title: 'Blépharoplastie supérieure et inférieure',
            content: `
                <p>Selon vos besoins spécifiques, nous pouvons traiter les paupières supérieures, inférieures ou les deux simultanément :</p>
                <ul>
                    <li><strong>Blépharoplastie supérieure :</strong> Se concentre sur le retrait de la peau "lourde" qui pèse sur les cils. L'incision est parfaitement dissimulée dans le pli horizontal naturel de la paupière.</li>
                    <li><strong>Blépharoplastie inférieure :</strong> Cible les cernes et les amas graisseux (poches). Cela peut souvent être réalisé par voie "transconjonctivale", où l'incision est faite à l'intérieur de la paupière, ne laissant aucune cicatrice externe.</li>
                    <li><strong>Rajeunissement combiné :</strong> De nombreux patients choisissent de traiter les deux zones à la fois pour un rafraîchissement complet et harmonieux du regard.</li>
                </ul>
            `
        },
        {
            id: 'surgical-precision',
            title: 'Notre approche de précision',
            content: `
                <p>La chirurgie des paupières est une procédure qui se joue au millimètre près. Nos chirurgiens utilisent des techniques avancées pour garantir sécurité et esthétique :</p>
                <ul>
                    <li><strong>Expertise anatomique :</strong> Compréhension approfondie des muscles délicats et des coussinets graisseux autour de l'œil pour éviter un aspect "trop opéré".</li>
                    <li><strong>Technique de suture :</strong> Nous utilisons des fils ultra-fins qui sont généralement retirés sous une semaine, minimisant tout risque de marque visible.</li>
                    <li><strong>Repositionnement graisseux :</strong> Plutôt que de simplement retirer la graisse, nous la repositionnons souvent pour combler les zones creuses, évitant ainsi un aspect "œil creusé" et assurant une transition fluide vers la pommette.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Votre parcours de récupération',
            content: `
                <p>Le processus de guérison pour une blépharoplastie est relativement rapide par rapport à d'autres chirurgies faciales :</p>
                <ol>
                    <li><strong>Les premières 48 heures :</strong> Appliquez des compresses froides avec assiduité pour minimiser l'enflure et les ecchymoses. Gardez la tête surélevée, même pendant le sommeil.</li>
                    <li><strong>Jours 5-7 :</strong> Retrait des fils à la clinique. La plupart des ecchymoses virent au jaune pâle et peuvent souvent être camouflées avec du maquillage.</li>
                    <li><strong>Semaine 2 :</strong> La plupart des patients se sentent à l'aise de reprendre le travail et leur vie publique. Les exercices intenses doivent être évités pendant encore 1 à 2 semaines.</li>
                    <li><strong>Résultat final :</strong> Bien que l'aspect rafraîchi soit rapide, les contours raffinés définitifs se stabilisent au cours des semaines suivantes.</li>
                </ol>
            `
        },
        {
            id: 'global-patient-care',
            title: 'Soins fluides pour les patients internationaux',
            content: `
                <p>Nous mettons un point d'honneur à offrir une expérience sans stress pour ceux qui voyagent pour une chirurgie :</p>
                <ul>
                    <li><strong>Soutien logistique :</strong> Nous vous assistons pour l'hébergement premium et le transport local vers et depuis notre clinique.</li>
                    <li><strong>Flexibilité du suivi :</strong> Vous avez la possibilité d'effectuer vos visites de contrôle post-opératoires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi à distance :</strong> Pour nos clients internationaux, nous offrons un accès numérique direct à notre équipe médicale pour toute question durant les premières phases de guérison.</li>
                </ul>
            `
        }
    ]
};

export default blepharoplastyContent;