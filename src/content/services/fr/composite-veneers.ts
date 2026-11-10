import type { ServiceContent } from '@/lib/services';

const compositeVeneersContent: ServiceContent = {
    description: [
        "Les facettes en composite, souvent appelées collage dentaire ou facettes directes, sont une solution esthétique polyvalente et rentable conçue pour améliorer instantanément l'apparence de vos dents. Contrairement aux facettes en porcelaine traditionnelles fabriquées en laboratoire, les facettes en composite sont sculptées à la main par nos dentistes experts directement sur vos dents à l'aide d'une résine de haute qualité de la couleur naturelle des dents.",
        "Cette procédure peu invasive est idéale pour corriger les imperfections dentaires mineures telles que les éclats, les espaces (diastèmes) et les décolorations tenaces en une seule visite. Comme le traitement nécessite peu ou pas d'élimination de l'émail naturel, c'est l'un des moyens les plus conservateurs d'obtenir une transformation significative du sourire avec des résultats immédiats et naturels."
    ],
    benefits: [
        "Transformation en une seule visite : obtenez un nouveau sourire en un seul rendez-vous dentaire.",
        "Peu invasif : préserve la structure naturelle de vos dents avec peu ou pas de retrait d'émail.",
        "Correction polyvalente : corrige efficacement les éclats, les fissures, les espaces et les formes de dents inégales.",
        "Rentable : une alternative plus abordable aux facettes en porcelaine avec des résultats esthétiques de haute qualité.",
        "Facilement réparable : contrairement à la porcelaine, la résine composite peut être facilement retouchée ou réparée en cas d'éclat."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes par dent',
        anesthesia: 'Généralement non requise',
        recoveryTime: 'Immédiate ; aucun temps d\'arrêt',
        results: 'Durent 5 à 7 ans avec un entretien approprié',
    },
    sections: [
        {
            id: 'smile-design',
            title: 'L\'art dans chaque couche',
            content: `
                <p>La création de facettes en composite est autant un art qu'une science. Nos dentistes esthétiques utilisent une technique de stratification méticuleuse pour garantir que votre nouveau sourire paraisse complètement naturel :</p>
                <ul>
                    <li><strong>Correspondance des couleurs sur mesure :</strong> Nous utilisons plusieurs nuances de résine pour imiter la translucidité et le dégradé naturels de l'émail réel.</li>
                    <li><strong>Sculpture anatomique :</strong> La résine est moulée à la main pour améliorer la longueur, la largeur et la texture de surface de chaque dent.</li>
                    <li><strong>Polissage haute brillance :</strong> Un processus de polissage en plusieurs étapes garantit que les facettes ont le même éclat réfléchissant que vos dents naturelles environnantes.</li>
                </ul>
            `
        },
        {
            id: 'the-process',
            title: 'À quoi s\'attendre pendant le traitement',
            content: `
                <p>Le processus est simple et confortable pour le patient :</p>
                <ol>
                    <li><strong>Préparation :</strong> La surface de la dent est nettoyée et légèrement conditionnée pour créer une liaison forte avec la résine.</li>
                    <li><strong>Application :</strong> Le composite malléable est appliqué et sculpté dans la forme idéale par le dentiste.</li>
                    <li><strong>Polymérisation :</strong> Une lumière bleue de haute intensité est utilisée pour durcir instantanément la résine.</li>
                    <li><strong>Affinage :</strong> Des ajustements finaux sont apportés à votre occlusion, suivis d'un polissage détaillé.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Entretenir votre nouveau sourire',
            content: `
                <p>Bien que les facettes en composite soient durables, elles nécessitent des soins attentifs pour rester éclatantes et intactes :</p>
                <ul>
                    <li><strong>Prévention des taches :</strong> La résine composite peut absorber les taches avec le temps. Nous recommandons de vous rincer la bouche après avoir consommé du café, du thé ou du vin rouge.</li>
                    <li><strong>Éviter les impacts durs :</strong> Évitez de vous ronger les ongles ou de mordre des objets durs (stylos, glace), car cela peut écailler le matériau composite.</li>
                    <li><strong>Hygiène régulière :</strong> Un brossage et l'utilisation de fil dentaire sont essentiels, ainsi que des nettoyages professionnels pour maintenir le poli de la résine.</li>
                </ul>
            `
        },
        {
            id: 'why-choose-us',
            title: 'Praticité pour les patients internationaux',
            content: `
                <p>Pour nos clients internationaux, les facettes en composite offrent la solution ultime en « une seule journée ». Vous pouvez arriver avec des préoccupations dentaires et repartir le même après-midi avec un sourire restauré. Nous offrons un support logistique complet, incluant :</p>
                <ul>
                    <li><strong>Transport et séjour :</strong> Assistance pour les arrangements de voyage et hébergement confortable à proximité de notre clinique.</li>
                    <li><strong>Suivi régional :</strong> Accès à nos cliniques partenaires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong> pour tout entretien ou retouche future.</li>
                </ul>
            `
        }
    ]
};

export default compositeVeneersContent;