import type { ServiceContent } from '@/lib/services';

const toothFillingsContent: ServiceContent = {
    description: [
        "L'obturation dentaire (communément appelée « plombage ») est une procédure de restauration fondamentale utilisée pour traiter les caries. Lorsque les bactéries érodent l'émail, elles créent une cavité qui, si elle n'est pas traitée, peut atteindre la pulpe interne sensible, provoquant des douleurs intenses et des infections. Une obturation stoppe cette progression en éliminant les tissus cariés et en scellant l'espace avec un matériau durable et biocompatible.",
        "La dentisterie restauratrice moderne a évolué bien au-delà des métaux traditionnels. Dans notre clinique, nous privilégions les résines composites de haute qualité qui non seulement restaurent l'intégrité structurelle de votre dent, mais imitent également sa translucidité et sa couleur naturelles. Cela garantit que votre restauration soit à la fois robuste sur le plan fonctionnel et esthétiquement indiscernable de votre sourire naturel."
    ],
    benefits: [
        "Stoppe la carie : Empêche la propagation des bactéries vers les couches plus profondes de la dent.",
        "Renforcement structurel : Restaure la force de la dent, permettant une mastication normale.",
        "Esthétique naturelle : Les matériaux composites de la couleur des dents se fondent parfaitement avec votre émail.",
        "Prévient les complications : Éviter une simple obturation conduit souvent à des traitements plus invasifs comme le traitement de canal.",
        "Préservation de l'émail : Les techniques d'adhésion modernes nécessitent moins de retrait de structure dentaire saine."
    ],
    quickFacts: {
        procedureTime: '20 - 45 minutes par dent',
        anesthesia: 'Anesthésie locale pour une expérience sans douleur',
        recoveryTime: 'Immédiate ; attendez la fin de l\'engourdissement avant de manger',
        results: 'Restauration durable de la fonction et de la forme de la dent',
    },
    sections: [
        {
            id: 'material-excellence',
            title: 'Technologie avancée de résine composite',
            content: `
                <p>Nous utilisons principalement des obturations en composite "blanc" pour plusieurs raisons cliniques :</p>
                <ul>
                    <li><strong>Harmonie esthétique :</strong> Nous utilisons un teintier complet pour faire correspondre la résine à la couleur spécifique de vos dents.</li>
                    <li><strong>Adhésion chimique :</strong> Contrairement aux amalgames d'argent, les composites adhèrent directement à la structure dentaire, offrant un soutien supplémentaire.</li>
                    <li><strong>Polyvalence :</strong> Les composites peuvent être utilisés pour réparer des dents ébréchées ou cassées ainsi que pour combler des caries.</li>
                    <li><strong>Sécurité :</strong> Les résines composites sont sans mercure et ne se dilatent pas ou ne se contractent pas de manière significative avec les changements de température.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Le processus de restauration',
            content: `
                <p>L'obturation est une procédure de routine réalisée avec précision et soin :</p>
                <ol>
                    <li><strong>Anesthésie :</strong> Un anesthésique local est appliqué afin que vous ne ressentiez aucun inconfort.</li>
                    <li><strong>Préparation de la cavité :</strong> Toute la structure dentaire cariée et affaiblie est soigneusement retirée à l'aide d'instruments spécialisés.</li>
                    <li><strong>Décontamination :</strong> L'espace vide est méticuleusement nettoyé et désinfecté pour éliminer toute bactérie résiduelle.</li>
                    <li><strong>Stratification :</strong> Le matériau composite est appliqué en fines couches, chaque couche étant durcie (polymérisée) à l'aide d'une lampe LED bleue spécialisée.</li>
                    <li><strong>Ajustement de l'occlusion :</strong> Nous vérifions votre occlusion pour nous assurer que l'obturation semble naturelle et polissons la surface pour un fini lisse.</li>
                </ol>
            `
        },
        {
            id: 'longevity-care',
            title: 'Prendre soin de vos obturations',
            content: `
                <p>Bien que les obturations modernes soient incroyablement durables, leur durée de vie dépend de vos habitudes d'hygiène :</p>
                <ul>
                    <li><strong>Sensibilité initiale :</strong> Il est normal de ressentir une légère sensibilité à la température pendant 24 à 48 heures après l'intervention.</li>
                    <li><strong>Hygiène :</strong> Brossez-vous les dents deux fois par jour et utilisez du fil dentaire autour de l'obturation pour prévenir les « caries secondaires » aux marges de la restauration.</li>
                    <li><strong>Habitudes alimentaires :</strong> Limitez les collations sucrées et les boissons acides qui peuvent affaiblir l'interface entre l'obturation et la dent.</li>
                    <li><strong>Contrôles réguliers :</strong> Lors de vos examens tous les 6 mois, nous surveillons l'intégrité de vos restaurations.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Soins restaurateurs pour les voyageurs internationaux',
            content: `
                <p>Pour les patients venant de l'étranger, nous offrons des soins efficaces dans le cadre d'un plan dentaire global :</p>
                <ul>
                    <li><strong>Traitement le jour même :</strong> Nous pouvons souvent identifier et obturer plusieurs caries en un seul rendez-vous pour optimiser votre temps.</li>
                    <li><strong>Audit complet du sourire :</strong> Nous utilisons des radiographies numériques pour détecter les caries cachées entre les dents.</li>
                    <li><strong>Praticité du réseau :</strong> Vos dossiers sont disponibles dans toutes nos cliniques en <strong>Albanie</strong>, au <strong>Kosovo</strong> et en <strong>Italie</strong>.</li>
                </ul>
            `
        }
    ]
};

export default toothFillingsContent;