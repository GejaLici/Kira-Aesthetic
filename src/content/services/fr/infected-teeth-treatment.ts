import type { ServiceContent } from '@/lib/services';

const rootCanalContent: ServiceContent = {
    description: [
        "Le traitement canalaire, ou thérapie endodontique, est une procédure spécialisée conçue pour sauver une dent naturelle sévèrement cariée, endommagée ou infectée. Au centre de chaque dent se trouve la « pulpe », un ensemble de nerfs et de vaisseaux sanguins. Lorsque cette zone est compromise par des bactéries, elle peut provoquer une douleur intense ou mener à un abcès. Le traitement canalaire retire les tissus infectés, élimine l'infection et scelle la dent pour prévenir d'autres complications.",
        "L'endodontie moderne a transformé cette procédure en une expérience confortable et routinière, similaire à la pose d'un plombage standard. En choisissant la thérapie canalaire, vous optez pour la préservation de votre structure dentaire naturelle, ce qui reste le meilleur moyen de maintenir la santé de votre mâchoire, votre force de mastication et l'alignement naturel de votre sourire."
    ],
    benefits: [
        "Soulagement de la douleur : Élimine immédiatement la source de la douleur dentaire aiguë et de la pression.",
        "Préservation de la dent : Sauve votre dent naturelle, évitant ainsi le recours à l'extraction et aux implants.",
        "Contrôle de l'infection : Élimine les bactéries pour empêcher la propagation de l'infection à la mâchoire et aux tissus environnants.",
        "Fonctionnalité naturelle : Restaure votre capacité à mâcher et à parler normalement avec votre dent d'origine.",
        "Solution économique : Conserver une dent est nettement plus abordable que de la remplacer par un bridge ou un implant."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutes par visite (généralement 1-2 visites)',
        anesthesia: 'Anesthésie locale (procédure indolore)',
        recoveryTime: '2 - 3 jours pour la disparition de la sensibilité',
        results: 'Élimination permanente de l\'infection ; dent protégée par une couronne',
    },
    sections: [
        {
            id: 'advanced-endodontics',
            title: 'Notre approche endodontique avancée',
            content: `
                <p>Nous combinons expertise clinique et technologie de pointe pour garantir les taux de réussite les plus élevés :</p>
                <ul>
                    <li><strong>Localisateurs d'apex numériques :</strong> Nous utilisons des capteurs électroniques pour mesurer précisément la longueur de vos canaux radiculaires, garantissant un nettoyage complet.</li>
                    <li><strong>Endodontie mécanisée (Rotary) :</strong> Des outils flexibles en nickel-titane nous permettent de nettoyer et de mettre en forme les canaux plus efficacement et confortablement que les limes manuelles traditionnelles.</li>
                    <li><strong>Scellement biocompatible :</strong> Nous utilisons de la gutta-percha de qualité supérieure et des ciments antimicrobiens pour sceller hermétiquement les canaux contre toute future intrusion bactérienne.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Comprendre l\'intervention',
            content: `
                <p>Le traitement canalaire est un processus méticuleux en plusieurs étapes axé sur une désinfection totale :</p>
                <ol>
                    <li><strong>Diagnostic et anesthésie :</strong> Nous utilisons des radiographies numériques pour cartographier l'infection et nous assurons que la dent est totalement insensible.</li>
                    <li><strong>Nettoyage :</strong> La pulpe infectée est retirée, et les canaux sont méticuleusement désinfectés et mis en forme.</li>
                    <li><strong>Obturation :</strong> Les canaux creux sont remplis d'un matériau caoutchouteux pour assurer un soutien structurel et prévenir la réinfection.</li>
                    <li><strong>Restauration finale :</strong> La dent étant plus fragile après le traitement, nous recommandons presque toujours une <strong>couronne dentaire</strong> pour restaurer sa force et son apparence initiale.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Soins après traitement et sensibilité',
            content: `
                <p>La récupération après un traitement canalaire est généralement très simple :</p>
                <ul>
                    <li><strong>Gestion de la sensibilité :</strong> Il est normal que la zone soit légèrement sensible pendant quelques jours. Cela se gère facilement avec des antalgiques classiques sans ordonnance.</li>
                    <li><strong>Habitudes de mastication :</strong> Évitez de croquer des aliments durs avec la dent traitée tant que votre couronne permanente n'a pas été posée.</li>
                    <li><strong>Hygiène bucco-dentaire :</strong> Continuez à vous brosser les dents et à utiliser du fil dentaire normalement. Une dent dévitalisée reste sensible aux maladies parodontales, une hygiène régulière est donc cruciale.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-experience',
            title: 'Soutien aux patients internationaux',
            content: `
                <p>Nous offrons une expérience optimisée pour nos patients voyageant de l'étranger pour leurs soins dentaires :</p>
                <ul>
                    <li><strong>Planification prioritaire :</strong> Nous coordonnons votre traitement canalaire et la pose de la couronne pour qu'ils s'intègrent parfaitement à votre itinéraire de voyage.</li>
                    <li><strong>Conciergerie de voyage :</strong> Assistance pour l'hébergement premium et les transports locaux en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soins intégrés :</strong> Accédez à vos dossiers de traitement et au suivi post-opératoire dans l'ensemble de nos cliniques régionales.</li>
                </ul>
            `
        }
    ]
};

export default rootCanalContent;