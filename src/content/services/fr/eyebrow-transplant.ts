import type { ServiceContent } from '@/lib/services';

const eyebrowTransplantContent: ServiceContent = {
    description: [
        "La greffe de sourcils est une procédure de restauration capillaire hautement spécialisée conçue pour restaurer ou améliorer de façon permanente la densité, la forme et la définition des sourcils. C'est une solution idéale pour les personnes ayant perdu leurs sourcils à cause de la génétique, d'épilations excessives, de cicatrices ou de conditions médicales. En utilisant vos propres cheveux naturels, cette procédure offre une alternative tridimensionnelle et permanente aux solutions temporaires comme le microblading ou le maquillage.",
        "Grâce à la technique avancée d'extraction d'unités folliculaires (FUE), les follicules pileux individuels sont méticuleusement prélevés et transplantés sur la zone des sourcils. Notre priorité est la recréation artistique du sourcil, en veillant à ce que chaque cheveu soit placé selon l'angle et la direction corrects pour imiter la croissance naturelle, ce qui donne des sourcils magnifiquement sculptés qui encadrent parfaitement votre visage."
    ],
    benefits: [
        "Résultats permanents : offre une solution à vie en utilisant vos propres follicules pileux vivants.",
        "Apparence naturelle : le placement individuel des follicules imite la direction naturelle des poils du sourcil.",
        "Conception sur mesure : forme et densité des sourcils entièrement personnalisées selon vos traits faciaux.",
        "Temps d'arrêt minimal : la technique FUE peu invasive permet une guérison rapide sans cicatrice linéaire.",
        "Élimine l'entretien quotidien : réduit ou supprime le besoin de crayons, gels ou poudres à sourcils."
    ],
    quickFacts: {
        procedureTime: '3 - 5 heures',
        anesthesia: 'anesthésie locale',
        recoveryTime: '7 - 10 jours pour la cicatrisation initiale',
        results: 'La repousse commence à 3-4 mois ; résultats finaux à 12 mois',
    },
    sections: [
        {
            id: 'art-of-restoration',
            title: 'L\'art et la précision du design des sourcils',
            content: `
                <p>La restauration des sourcils est autant une forme d'art qu'une procédure médicale. Nous nous concentrons sur quatre éléments critiques pour garantir un résultat impeccable :</p>
                <ul>
                    <li><strong>Sélection des follicules :</strong> Nous prélevons soigneusement les cheveux les plus fins à l'arrière du cuir chevelu pour qu'ils correspondent au mieux à la texture naturelle des sourcils.</li>
                    <li><strong>Cartographie anatomique :</strong> Nous concevons la forme du sourcil en fonction de votre structure osseuse unique et des proportions de votre visage.</li>
                    <li><strong>Angulation :</strong> Chaque cheveu est implanté avec un angle très plat pour garantir qu'il repose bien contre la peau, tout comme un poil de sourcil naturel.</li>
                    <li><strong>Flux directionnel :</strong> Nous reproduisons le schéma de croissance multidirectionnel complexe du sourcil naturel, des poils verticaux à la tête jusqu'à la "queue" horizontale.</li>
                </ul>
            `
        },
        {
            id: 'the-fue-technique',
            title: 'La méthode FUE pour les sourcils',
            content: `
                <p>Nous utilisons exclusivement la méthode d'extraction d'unités folliculaires (FUE) pour ses résultats supérieurs et le confort du patient :</p>
                <ol>
                    <li><strong>Prélèvement des greffons :</strong> Les follicules individuels sont extraits à l'aide d'un outil de micro-punch spécialisé, ne laissant aucune cicatrice visible.</li>
                    <li><strong>Micro-incisions :</strong> De minuscules sites, de la taille d'une aiguille, sont créés dans la zone du sourcil pour recevoir les greffons.</li>
                    <li><strong>Implantation :</strong> Les greffons sont placés un par un sous haute magnification pour garantir une précision absolue.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'À quoi s\'attendre pendant la récupération',
            content: `
                <p>Comprendre le cycle de guérison est essentiel pour une expérience sans stress :</p>
                <ul>
                    <li><strong>Phase initiale :</strong> Une légère rougeur et de minuscules croûtes autour des greffons disparaîtront en 5 à 7 jours.</li>
                    <li><strong>La phase de "perte" :</strong> Il est normal que les poils transplantés tombent après 2 à 4 semaines. Les racines restent saines et dormantes sous la peau.</li>
                    <li><strong>Nouvelle croissance :</strong> De nouveaux poils fins commenceront à émerger après 3 à 4 mois et continueront de s'épaissir au cours de la première année.</li>
                    <li><strong>Entretien :</strong> Comme ces poils proviennent du cuir chevelu, ils pousseront plus longuement que les poils de sourcils naturels et nécessiteront d'être taillés toutes les 1 à 2 semaines.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Soins fluides pour les clients internationaux',
            content: `
                <p>Nous offrons un soutien complet aux patients voyageant de l'étranger vers nos centres spécialisés :</p>
                <ul>
                    <li><strong>Soutien logistique :</strong> Assistance complète pour le transport local et hébergement de qualité à proximité de notre clinique.</li>
                    <li><strong>Continuité régionale :</strong> Vous pouvez choisir d'effectuer vos soins de suivi ou vos contrôles post-opératoires en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Évaluation à distance :</strong> Envoyez-nous des photos claires de vos sourcils et de la zone donneuse pour une première évaluation virtuelle avant votre voyage.</li>
                </ul>
            `
        }
    ]
};

export default eyebrowTransplantContent;