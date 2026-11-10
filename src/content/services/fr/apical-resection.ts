import type { ServiceContent } from '@/lib/services';

const apicoectomyContent: ServiceContent = {
    description: [
        "L'apicoectomie, également connue sous le nom de résection apicale, est une intervention de microchirurgie endodontique spécialisée conçue pour sauver une dent naturelle lorsque les traitements de canal standard ont échoué ou ne sont pas réalisables. En traitant l'infection directement à l'extrémité de la racine (l'apex), nous pouvons éliminer l'inflammation persistante et favoriser la guérison osseuse sans avoir à extraire la dent.",
        "Grâce à des techniques de microchirurgie avancées, nos spécialistes retirent les tissus infectés ainsi que l'extrémité de la racine, puis scellent le canal de bas en haut. Cette procédure est souvent le dernier rempart pour préserver votre sourire naturel, évitant ainsi le recours aux implants dentaires ou aux ponts en résolvant des infections profondes que les méthodes traditionnelles ne peuvent atteindre."
    ],
    benefits: [
        "Sauve la dent naturelle, évitant l'extraction et le remplacement.",
        "Résout les infections persistantes et les douleurs dentaires chroniques.",
        "Traitement de haute précision réalisé sous microscope opératoire.",
        "Favorise une cicatrisation rapide de l'os de la mâchoire environnant.",
        "Solution efficace pour les structures racinaires complexes et les canaux cachés."
    ],
    quickFacts: {
        procedureTime: '30 - 90 minutes',
        anesthesia: 'anesthésie locale (sédation disponible)',
        recoveryTime: '2 - 7 jours pour une cicatrisation complète',
        results: 'résolution permanente de l\'infection apicale',
    },
    sections: [
        {
            id: 'why-apicoectomy',
            title: 'Quand une apicoectomie est-elle nécessaire ?',
            content: `
                <p>Bien que la plupart des traitements de canal soient couronnés de succès, certaines conditions nécessitent une approche chirurgicale pour sauver la dent :</p>
                <ul>
                    <li><strong>Infection persistante :</strong> Lorsque des bactéries subsistent dans les minuscules ramifications au bout de la racine après un traitement de canal standard.</li>
                    <li><strong>Anatomie complexe :</strong> Racines courbées ou dépôts de calcium qui bloquent les instruments endodontiques traditionnels.</li>
                    <li><strong>Échec du retraitement :</strong> Si un second traitement de canal a déjà été tenté mais que l'infection persiste.</li>
                    <li><strong>Précision diagnostique :</strong> Pour inspecter la racine à la recherche de micro-fractures ou d'anomalies non visibles sur les radiographies standards.</li>
                </ul>
            `
        },
        {
            id: 'microsurgical-approach',
            title: 'L\'avantage de la microchirurgie',
            content: `
                <p>Nous utilisons des technologies de pointe pour garantir les taux de réussite les plus élevés en chirurgie apicale :</p>
                <ul>
                    <li><strong>Microscope chirurgical :</strong> Offre un grossissement extrême, permettant au chirurgien de voir les détails microscopiques et les canaux cachés.</li>
                    <li><strong>Nettoyage ultrasonique :</strong> Nous utilisons des outils à vibrations haute fréquence pour nettoyer l'extrémité de la racine de manière plus efficace et conservatrice que les fraises traditionnelles.</li>
                    <li><strong>Scellement biocompatible :</strong> Des matériaux avancés (comme le MTA ou la biocéramique) sont utilisés pour créer un scellement étanche aux bactéries à l'apex.</li>
                    <li><strong>Imagerie 3D (CBCT) :</strong> Des scans numériques préopératoires nous permettent de cartographier l'infection en trois dimensions avant de commencer.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Déroulement de l\'intervention',
            content: `
                <p>Le processus est simple et réalisé dans un cadre ambulatoire confortable :</p>
                <ol>
                    <li><strong>Anesthésie :</strong> Une anesthésie locale est administrée pour garantir que la zone soit totalement insensible à la douleur.</li>
                    <li><strong>Accès :</strong> Une petite incision est pratiquée dans le tissu gingival pour atteindre l'extrémité de la racine infectée.</li>
                    <li><strong>Ablation :</strong> Le tissu infecté et les derniers millimètres de l'extrémité de la racine sont retirés.</li>
                    <li><strong>Obturation a retro :</strong> L'extrémité du canal est nettoyée par ultrasons et scellée avec un matériau de remplissage biocompatible.</li>
                    <li><strong>Sutures :</strong> Quelques petits points de suture sont posés pour aider la gencive à cicatriser dans sa position initiale.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Récupération et soins après l\'intervention',
            content: `
                <p>La récupération après une apicoectomie est généralement plus rapide que celle d'une extraction dentaire :</p>
                <ul>
                    <li><strong>Confort post-opératoire :</strong> La plupart des patients gèrent les légers gonflements ou inconforts avec des anti-inflammatoires en vente libre.</li>
                    <li><strong>Cicatrisation :</strong> Les points de suture sont généralement retirés ou se dissolvent dans les 7 jours.</li>
                    <li><strong>Alimentation :</strong> Nous recommandons des aliments mous pendant les premières 48 heures et d'éviter toute pression directe sur le site chirurgical.</li>
                    <li><strong>Succès à long terme :</strong> Des radiographies de suivi seront programmées pour surveiller la régénération de l'os autour de la racine scellée.</li>
                </ul>
            `
        }
    ]
};

export default apicoectomyContent;