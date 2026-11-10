import type { ServiceContent } from '@/lib/services';

const dentalSealantsContent: ServiceContent = {
    description: [
        "Le scellement de sillons est un revêtement protecteur fin et performant appliqué sur les surfaces de mastication des dents postérieures (molaires et prémolaires). Ces dents présentent naturellement des puits et des fissures — des rainures microscopiques souvent plus étroites qu'un seul poil de brosse à dents. En comblant ces zones vulnérables, les scellements créent un bouclier lisse et imperméable qui empêche les particules alimentaires et les bactéries productrices d'acide de s'installer dans l'émail.",
        "Le scellement est considéré comme l'une des mesures préventives les plus efficaces de la dentisterie pédiatrique moderne. Ce traitement indolore et non invasif agit comme une barrière physique contre la carie, réduisant considérablement les risques durant les années où l'enfant y est le plus exposé. C'est un investissement proactif qui protège l'intégrité structurelle des dents définitives avant même que la carie n'ait une chance de se développer."
    ],
    benefits: [
        "Protection ciblée : Protège les sillons profonds des molaires où se forment 80 % des caries chez l'enfant.",
        "Indolore et non invasif : Pas de perçage, pas d'injections, et aucune altération de la structure dentaire.",
        "Application rapide : Chaque dent peut être scellée et protégée en seulement quelques minutes.",
        "Durabilité à long terme : Peut résister à la pression d'une mastication normale pendant plusieurs années.",
        "Prévention économique : Nettement moins coûteux que les obturations ou les couronnes nécessaires pour traiter une carie."
    ],
    quickFacts: {
        procedureTime: '5 - 10 minutes par dent',
        anesthesia: 'Aucune requise',
        recoveryTime: 'Immédiate ; les patients peuvent manger et boire tout de suite',
        results: 'Protection instantanée contre l\'accumulation de nourriture et de plaque',
    },
    sections: [
        {
            id: 'how-sealants-work',
            title: 'Créer une barrière physique',
            content: `
                <p>Pour comprendre l'utilité des scellements, il faut observer l'anatomie d'une molaire :</p>
                <ul>
                    <li><strong>Le problème :</strong> Les « puits et fissures » sur le dessus des molaires sont assez profonds pour emprisonner la plaque, mais trop étroits pour être nettoyés par une brosse à dents.</li>
                    <li><strong>La solution :</strong> Le scellement liquide s'écoule dans ces rainures profondes, les comble complètement et durcit pour former un bouclier protecteur résistant.</li>
                    <li><strong>Le résultat :</strong> Une surface lisse facile à nettoyer au brossage, ne laissant aucune place aux bactéries pour se cacher et produire les acides responsables des caries.</li>
                </ul>
            `
        },
        {
            id: 'application-steps',
            title: 'Un processus simple en plusieurs étapes',
            content: `
                <p>L'application d'un scellement est une procédure clinique simple réalisée lors d'une visite de routine :</p>
                
                <ol>
                    <li><strong>Décontamination :</strong> La dent est méticuleusement nettoyée pour éliminer toute trace de plaque ou de débris en surface.</li>
                    <li><strong>Conditionnement :</strong> Un léger gel de mordançage est appliqué sur l'émail pendant quelques secondes pour créer une texture microscopique, garantissant une adhérence permanente.</li>
                    <li><strong>Adhésion :</strong> La dent est rincée et séchée, puis le scellement liquide est « peint » sur les sillons de la dent.</li>
                    <li><strong>Photopolymérisation :</strong> Une lampe LED bleue spécialisée est utilisée pour durcir instantanément le matériau, le liant solidement à l'émail.</li>
                </ol>
            `
        },
        {
            id: 'optimal-timing',
            title: 'Quel est le meilleur moment pour le scellement ?',
            content: `
                <p>Le moment choisi est crucial pour s'assurer que les dents sont protégées dès qu'elles sont les plus vulnérables :</p>
                <ul>
                    <li><strong>Premières molaires :</strong> Elles sortent généralement vers l'âge de 6 ans. Les sceller tôt les protège durant la transition vers la dentition définitive.</li>
                    <li><strong>Secondes molaires :</strong> Elles apparaissent généralement vers 12 ans. Sceller ces « molaires de 12 ans » assure une protection durant l'adolescence.</li>
                    <li><strong>Patients adultes :</strong> Bien que plus fréquent chez les enfants, les adultes ayant des sillons profonds sans obturations existantes peuvent aussi bénéficier du pouvoir préventif des scellements.</li>
                </ul>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Entretien et longévité',
            content: `
                <p>Bien que les scellements soient incroyablement durables, ils ne sont pas permanents et nécessitent un suivi minimal :</p>
                <ul>
                    <li><strong>Contrôles de routine :</strong> Lors de chaque examen semestriel, notre équipe inspecte les scellements pour détecter tout signe d'usure ou d'écaillement.</li>
                    <li><strong>Réparations faciles :</strong> Si un scellement est usé par une mastication importante, il peut être facilement retouché ou réappliqué sans aucun inconfort.</li>
                    <li><strong>Soins à domicile :</strong> Les scellements protègent les surfaces de mastication, mais le brossage quotidien et le fil dentaire restent essentiels pour protéger les faces latérales et les espaces interdentaires.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Excellence pédiatrique pour les familles voyageuses',
            content: `
                <p>Pour les familles visitant nos cliniques depuis l'étranger, nous coordonnons les soins préventifs pour maximiser l'efficacité :</p>
                <ul>
                    <li><strong>Séances combinées :</strong> Nous pouvons réaliser le nettoyage, la fluoration et le scellement en une seule séance pour respecter votre planning de voyage.</li>
                    <li><strong>Dossiers régionaux :</strong> L'historique dentaire préventif de votre enfant est accessible dans toutes nos cliniques en <strong>Albanie</strong>, au <strong>Kosovo</strong> et en <strong>Italie</strong>.</li>
                    <li><strong>Soutien complet :</strong> Notre équipe vous aide à trouver un hébergement adapté aux familles et assure les transports locaux pour un voyage médical sans stress.</li>
                </ul>
            `
        }
    ]
};

export default dentalSealantsContent;