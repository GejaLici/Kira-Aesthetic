import type { ServiceContent } from '@/lib/services';

const dentalImplantsContent: ServiceContent = {
    description: [
        "Les implants dentaires sont largement considérés comme la référence absolue pour le remplacement des dents, offrant une solution permanente et hautement durable aux dents manquantes. Contrairement aux prothèses amovibles ou aux ponts traditionnels, l'implant utilise un pivot en titane qui agit comme une racine artificielle, placé chirurgicalement dans l'os de la mâchoire. Ce pivot fusionne avec votre os naturel, offrant une base incroyablement stable qui prévient la perte osseuse et préserve la structure du visage.",
        "Une restauration complète sur implant se compose du pivot (l'implant), d'un pilier de connexion et d'une couronne en porcelaine fabriquée sur mesure. Ce système en trois parties imite la structure entière d'une dent naturelle, restaurant 100 % de votre force de mastication et offrant une esthétique parfaite, pratiquement indiscernable de vos dents d'origine."
    ],
    benefits: [
        "Solution permanente : Conçue pour durer toute une vie avec une hygiène bucco-dentaire appropriée.",
        "Préservation osseuse : Stimule l'os de la mâchoire pour prévenir l'aspect « affaissé » associé à la perte des dents.",
        "Fonctionnalité naturelle : Mangez, parlez et souriez avec la même force et la même confiance qu'avec des dents naturelles.",
        "Protection des dents adjacentes : Contrairement aux bridges, les implants ne nécessitent pas de tailler les dents saines voisines.",
        "Taux de réussite élevé : Affiche un taux de réussite clinique allant jusqu'à 98 % lorsqu'il est réalisé par des spécialistes."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures par implant (plusieurs étapes)',
        anesthesia: 'anesthésie locale ou sédation',
        recoveryTime: '3 - 6 mois pour l\'ostéointégration ; 3-5 jours pour la cicatrisation initiale',
        results: 'Durabilité à vie pour le pivot de l\'implant ; 10-15 ans pour la couronne',
    },
    sections: [
        {
            id: 'advanced-planning',
            title: 'Planification numérique de précision',
            content: `
                <p>Le succès d'une implantation dépend de la précision. Nous utilisons des outils de diagnostic de pointe pour garantir que chaque implant est parfaitement placé :</p>
                <ul>
                    <li><strong>Scanner 3D CBCT :</strong> Nous utilisons l'imagerie 3D haute définition pour évaluer la densité osseuse et cartographier les nerfs et les sinus avec une précision millimétrique.</li>
                    <li><strong>Chirurgie guidée par ordinateur :</strong> Pour les restaurations complexes ou complètes, nous utilisons des guides chirurgicaux numériques pour placer les implants à l'angle et à la profondeur exacts requis.</li>
                    <li><strong>Titane biocompatible de qualité supérieure :</strong> Nous utilisons exclusivement les meilleures marques d'implants, reconnues pour leur intégration rapide avec l'os humain.</li>
                </ul>
            `
        },
        {
            id: 'the-journey',
            title: 'Votre parcours d\'implantation',
            content: `
                <p>Le processus d'implantation dentaire est un parcours transformateur en plusieurs étapes conçu pour la longévité :</p>
                <ol>
                    <li><strong>Pose :</strong> Le pivot en titane est délicatement placé dans l'os de la mâchoire sous anesthésie locale.</li>
                    <li><strong>Ostéointégration :</strong> Sur une période de 3 à 6 mois, l'os se développe autour de l'implant pour le fixer. Une restauration esthétique temporaire est souvent fournie pendant cette période.</li>
                    <li><strong>Pilier et Empreinte :</strong> Une fois l'implant stable, un petit connecteur est fixé et des scans numériques de votre bouche sont effectués.</li>
                    <li><strong>Couronne finale :</strong> Votre couronne en porcelaine personnalisée est solidement fixée, complétant ainsi votre nouveau sourire.</li>
                </ol>
            `
        },
        {
            id: 'long-term-care',
            title: 'Soins et entretien',
            content: `
                <p>L'entretien de votre implant dentaire est presque identique à celui des dents naturelles :</p>
                <ul>
                    <li><strong>Hygiène quotidienne :</strong> Un brossage deux fois par jour et l'utilisation quotidienne de fil dentaire sont essentiels pour garder les gencives environnantes en bonne santé.</li>
                    <li><strong>Examens réguliers :</strong> Les nettoyages professionnels et les contrôles de routine nous permettent de surveiller la santé de l'os et des tissus mous autour de l'implant.</li>
                    <li><strong>Habitudes protectrices :</strong> Évitez d'utiliser vos dents comme des outils ou de croquer des objets extrêmement durs pour ne pas écailler la couronne en porcelaine.</li>
                </ul>
            `
        },
        {
            id: 'global-logistics',
            title: 'Soutien aux patients internationaux',
            content: `
                <p>Voyager pour des implants dentaires nécessite une planification rigoureuse. Nous offrons une expérience fluide à nos patients internationaux :</p>
                <ul>
                    <li><strong>Visites coordonnées :</strong> Nous optimisons votre calendrier de voyage, en veillant à ce que les étapes chirurgicales majeures soient traitées efficacement durant votre séjour.</li>
                    <li><strong>Hébergement et Transport :</strong> Notre équipe vous assiste pour le logement local et les transferts entre l'aéroport et la clinique.</li>
                    <li><strong>Suivi régional :</strong> Vous pouvez choisir d'effectuer la pose de votre couronne finale ou vos visites de contrôle en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                </ul>
            `
        }
    ]
};

export default dentalImplantsContent;