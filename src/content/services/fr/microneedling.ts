import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
    description: [
        "Le microneedling, également connu sous le nom de thérapie d'induction de collagène (CIT), est une procédure non chirurgicale transformative qui exploite la capacité innée de la peau à se réparer. En utilisant un dispositif de qualité médicale pour créer des milliers de micro-perforations contrôlées à la surface de la peau, le traitement déclenche une puissante réponse de guérison. Cette cascade de réparation entraîne une production rapide de nouveau collagène et d'élastine, les piliers essentiels d'une peau ferme, lisse et d'apparence jeune.",
        "Ce traitement est exceptionnellement polyvalent, ce qui en fait une solution de référence pour traiter des problèmes cutanés profonds tels que les cicatrices d'acné, les ridules et les pores dilatés. Qu'il soit utilisé comme mesure anti-âge préventive ou comme traitement correcteur des irrégularités de texture, le microneedling apporte des améliorations structurelles à long terme qui dépassent la surface, pour un teint visiblement plus dense, plus lisse et plus résilient."
    ],
    benefits: [
        "Réduction des cicatrices : Atténue significativement les cicatrices d'acné, chirurgicales ou traumatiques en brisant les anciens tissus cicatriciels.",
        "Anti-âge : Lisse les ridules et les rides profondes grâce à la synthèse naturelle du collagène.",
        "Raffinement des pores : Resserre et minimise l'apparence des pores dilatés.",
        "Texture et Teint : Corrige le grain de peau irrégulier et unifie l'hyperpigmentation ainsi que les dommages causés par le soleil.",
        "Absorption décuplée : Crée des micro-canaux qui permettent aux principes actifs des soins de pénétrer jusqu'à 80 % plus profondément."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes (anesthésie incluse)',
        anesthesia: 'Crème anesthésiante topique puissante',
        recoveryTime: '24 - 48 heures de légères rougeurs',
        results: 'Éclat initial après 1 semaine ; remodelage complet du collagène après 3-6 mois',
    },
    sections: [
        {
            id: 'prp-vampire-facial',
            title: 'Optimisation Avancée : Microneedling avec PRP',
            content: `
                <p>Pour atteindre le niveau ultime de rajeunissement, nous proposons le « Vampire Facial » — une combinaison de microneedling et de thérapie par Plasma Riche en Plaquettes (PRP) :</p>
                <ul>
                    <li><strong>Facteurs de croissance naturels :</strong> Nous prélevons une petite quantité de votre propre sang pour en concentrer les plaquettes, qui regorgent de facteurs de croissance réparateurs.</li>
                    <li><strong>Diffusion profonde :</strong> Le processus de microneedling crée les voies d'accès parfaites pour que votre PRP atteigne les couches profondes du derme.</li>
                    <li><strong>Guérison accélérée :</strong> Le PRP accélère considérablement le processus de récupération et multiplie les effets de production de collagène, idéal pour les cicatrices profondes et le vieillissement avancé.</li>
                </ul>
            `
        },
        {
            id: 'treatment-process',
            title: 'À quoi s\'attendre pendant la procédure',
            content: `
                <p>Notre approche clinique garantit une expérience confortable et stérile :</p>
                <ol>
                    <li><strong>Préparation :</strong> La peau est soigneusement nettoyée et un anesthésique topique de qualité médicale est appliqué pendant 30 à 45 minutes.</li>
                    <li><strong>Le traitement :</strong> Une cartouche d'aiguilles stériles à usage unique est utilisée avec un stylo automatisé. Nous ajustons précisément la profondeur des aiguilles selon la zone (ex: plus profond pour les cicatrices, plus superficiel pour le front).</li>
                    <li><strong>Apaisement :</strong> Après le microneedling, nous appliquons un sérum calmant à l'acide hyaluronique ou votre PRP pour sceller l'hydratation et initier le processus de réparation.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-results',
            title: 'Récupération et résultats optimaux',
            content: `
                <p>Les soins post-traitement sont vitaux pour protéger votre peau « ouverte » et maximiser le boost de collagène :</p>
                <ul>
                    <li><strong>Les premières 24 heures :</strong> Votre peau présentera l'aspect et la sensation d'un léger coup de soleil. Évitez le maquillage, la sudation et l'exposition directe au soleil.</li>
                    <li><strong>La phase « rose » :</strong> Les rougeurs mineures s'estompent généralement sous 48 heures. Une légère desquamation peut survenir lors du renouvellement cellulaire.</li>
                    <li><strong>Bénéfices cumulatifs :</strong> Bien qu'une séance offre un coup d'éclat, nous recommandons une série de 3 à 6 séances espacées de 4 semaines pour des changements structurels significatifs.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Soins sur mesure pour les patients internationaux',
            content: `
                <p>Nous facilitons le rajeunissement cutané haut de gamme pour notre clientèle internationale avec un accent sur le confort :</p>
                <ul>
                    <li><strong>Logistique et séjour :</strong> Assistance complète pour les transferts aéroport et hébergement de standing en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Continuité régionale :</strong> Vous pouvez commencer votre série de microneedling dans l'une de nos cliniques et effectuer vos suivis dans une autre, garantissant une prise en charge fluide à travers notre réseau.</li>
                    <li><strong>Normes de sécurité :</strong> Nous utilisons exclusivement des dispositifs médicaux certifiés CE ou approuvés par la FDA et respectons des protocoles de stérilité stricts.</li>
                </ul>
            `
        }
    ]
};

export default microneedlingContent;