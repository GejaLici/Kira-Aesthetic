import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
    description: [
        "La microdermabrasion est un traitement de resurfaçage cutané non invasif conçu pour revitaliser et polir la peau. En utilisant un applicateur spécialisé à pointe de diamant ou de fins cristaux abrasifs, cette procédure élimine en douceur la couche externe épaisse de cellules mortes (la couche cornée). Cette exfoliation mécanique révèle une peau plus fraîche et plus éclatante, tout en stimulant la réponse naturelle de guérison du corps pour produire davantage de collagène.",
        "Souvent qualifiée de « soin visage express » (lunchtime facial), la microdermabrasion est une méthode rapide et indolore pour traiter diverses imperfections de surface. Que vous souhaitiez corriger un teint terne, des ridules ou un grain de peau irrégulier, ce traitement offre un éclat instantané et une sensation de douceur sans aucune éviction sociale, ce qui en fait le soin d'entretien idéal pour un mode de vie actif."
    ],
    benefits: [
        "Éclat instantané : Élimine les cellules mortes pour un teint frais et sain immédiatement.",
        "Affine le grain de peau : Lisse les zones rugueuses et estompe l'apparence des ridules.",
        "Désincruste les pores : Élimine efficacement les débris de surface pour réduire les imperfections.",
        "Optimise l'absorption des soins : Permet à vos sérums et hydratants de pénétrer plus profondément.",
        "Uniformise le teint : Aide à atténuer l'hyperpigmentation légère, les taches solaires et les taches de vieillesse avec le temps."
    ],
    quickFacts: {
        procedureTime: '30 - 45 minutes',
        anesthesia: 'Aucune requise (indolore)',
        recoveryTime: 'Aucune ; légère rougeur possible pendant 1 à 2 heures',
        results: 'Luminosité immédiate ; résultats cumulatifs après une série de séances',
    },
    sections: [
        {
            id: 'clinical-approach',
            title: 'Notre approche d’exfoliation sur mesure',
            content: `
                <p>Nous considérons la microdermabrasion comme une étape clinique de soin de la peau, en veillant à ce que l'intensité soit parfaitement adaptée à la sensibilité de votre épiderme :</p>
                <ul>
                    <li><strong>Équipement de qualité professionnelle :</strong> Nous utilisons des systèmes haut de gamme offrant des niveaux d'aspiration et d'abrasion réglables pour un résultat sûr et constant.</li>
                    <li><strong>Analyse cutanée :</strong> Avant de commencer, nos esthéticiennes évaluent votre type de peau pour s'assurer que la microdermabrasion est le choix le plus efficace pour vos besoins.</li>
                    <li><strong>Infusion de nutriments :</strong> Après l'exfoliation, la peau est prête à absorber les actifs. Nous appliquons des sérums spécialisés riches en antioxydants et en acide hyaluronique pour apaiser et hydrater.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'À quoi s’attendre pendant la séance',
            content: `
                <p>L'expérience est souvent décrite comme une sensation de « ponçage » doux ou le contact rugueux de la langue d'un chat :</p>
                <ol>
                    <li><strong>Nettoyage :</strong> La peau est soigneusement nettoyée de tout maquillage et impuretés.</li>
                    <li><strong>Exfoliation :</strong> L'esthéticienne déplace l'embout sur les zones cibles, utilisant une aspiration sous vide pour éliminer les débris cellulaires.</li>
                    <li><strong>Hydratation et protection :</strong> Un masque apaisant ou un sérum rafraîchissant est appliqué, suivi d'une protection solaire SPF élevé pour protéger les nouvelles couches cutanées exposées.</li>
                </ol>
            `
        },
        {
            id: 'optimal-results',
            title: 'Maintenir votre éclat',
            content: `
                <p>Si une seule séance offre un rafraîchissement visible, la santé de la peau à long terme s'obtient par la régularité :</p>
                <ul>
                    <li><strong>Série recommandée :</strong> Pour des problématiques telles que les ridules ou les cicatrices légères, nous suggérons généralement une série de 5 à 10 traitements.</li>
                    <li><strong>Espacement :</strong> Les séances sont idéalement espacées de 2 à 4 semaines pour s'aligner sur le cycle naturel de régénération de votre peau (28 jours).</li>
                    <li><strong>Sécurité solaire :</strong> La couche protectrice externe étant retirée, votre peau sera plus sensible aux rayons UV. L'utilisation quotidienne d'un écran solaire est obligatoire après le traitement.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Expérience pour les patients internationaux',
            content: `
                <p>Pour nos clients venant de l'étranger, nous veillons à ce que votre visite soit productive et sereine :</p>
                <ul>
                    <li><strong>Intégration de soins :</strong> La microdermabrasion est souvent combinée à d'autres procédures comme les peelings chimiques ou les traitements laser pour une rénovation cutanée totale.</li>
                    <li><strong>Soutien logistique :</strong> Nous offrons une assistance pour le transport et l'hébergement de standing en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Continuité des soins :</strong> Vous pouvez commencer votre série de traitements dans un centre et poursuivre le suivi dans n'importe laquelle de nos autres cliniques régionales.</li>
                </ul>
            `
        }
    ]
};

export default microdermabrasionContent;