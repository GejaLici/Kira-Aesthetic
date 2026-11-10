import type { ServiceContent } from '@/lib/services';

const prpFaceContent: ServiceContent = {
    description: [
        "La thérapie par Plasma Riche en Plaquettes (PRP) pour le visage, populairement connue sous le nom de « Vampire Facial », est un traitement de rajeunissement cutané révolutionnaire qui utilise le pouvoir de guérison de votre propre biologie. En isolant les plaquettes concentrées de votre sang, riches en facteurs de croissance essentiels, cette procédure 100 % naturelle déclenche une réparation des tissus profonds, stimule la production de collagène et accélère le processus de renouvellement de la peau.",
        "Contrairement aux traitements synthétiques, le PRP agit de l'intérieur pour améliorer l'intégrité structurelle de votre peau. C'est une solution idéale pour ceux qui cherchent à atténuer les ridules, lisser les cicatrices d'acné et restaurer un éclat sain et juvénile. En exploitant les capacités régénératrices innées de votre corps, le Vampire Facial offre des améliorations à long terme de la qualité, de la texture et de la fermeté de la peau, sans aucun risque de réaction allergique."
    ],
    benefits: [
        "Rajeunissement naturel : Utilise vos propres composants sanguins, sans produits chimiques ni additifs synthétiques.",
        "Synthèse de collagène : Booste la production de collagène de type I pour une peau plus ferme et plus épaisse.",
        "Réparation des cicatrices et de la texture : Très efficace pour lisser les cicatrices d'acné et affiner les irrégularités cutanées.",
        "Teint radieux : Améliore le flux sanguin et le renouvellement cellulaire pour un éclat « illuminé de l'intérieur ».",
        "Sûr et biocompatible : Risque zéro de rejet ou de réaction allergique puisqu'il s'agit d'un traitement autologue (provenant de votre propre corps)."
    ],
    quickFacts: {
        procedureTime: '60 - 90 minutes',
        anesthesia: 'Crème anesthésiante topique puissante',
        recoveryTime: '24 - 48 heures de légères rougeurs (sensation de coup de soleil)',
        results: 'Éclat initial après 1 semaine ; améliorations structurelles après 4-6 semaines',
    },
    sections: [
        {
            id: 'science-of-prp',
            title: 'La science derrière l\'éclat',
            content: `
                <p>L'efficacité du Vampire Facial réside dans la haute concentration de plaquettes délivrées directement dans le derme :</p>
                <ul>
                    <li><strong>L'extraction :</strong> Un petit échantillon de sang est prélevé puis placé dans une centrifugeuse spécialisée pour séparer le plasma des globules rouges.</li>
                    <li><strong>Facteurs de croissance :</strong> Le PRP résultant contient 5 à 10 fois la concentration de facteurs de croissance du sang normal, agissant comme des « messagers » pour stimuler la croissance cellulaire.</li>
                    <li><strong>Synergie avec le Microneedling :</strong> Nous utilisons le microneedling pour créer des micro-canaux verticaux, permettant au PRP de franchir la barrière de surface pour atteindre les couches régénératrices de la peau.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'À quoi s\'attendre pendant votre séance',
            content: `
                <p>Notre protocole clinique est conçu pour un confort et une stérilité optimaux :</p>
                <ol>
                    <li><strong>Anesthésie et prélèvement :</strong> Pendant qu'une crème anesthésiante puissante fait effet, notre équipe médicale effectue un prélèvement sanguin standard et rapide.</li>
                    <li><strong>Traitement :</strong> Votre sang est traité sur place à l'aide d'une centrifugeuse de haute précision pour isoler votre « or liquide » (le PRP).</li>
                    <li><strong>Infusion :</strong> Le PRP est appliqué par voie topique tandis qu'un dispositif de microneedling de qualité médicale glisse sur la peau, poussant les plaquettes dans les micro-canaux.</li>
                    <li><strong>Apaisement :</strong> Nous terminons par l'application du plasma restant pour agir comme un masque cicatrisant naturel.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Récupération et longévité des résultats',
            content: `
                <p>Le traitement déclenchant une réponse naturelle de guérison, le respect des soins post-séance est essentiel :</p>
                <ul>
                    <li><strong>Les premières 24 heures :</strong> Évitez de vous laver le visage ou de vous maquiller pour laisser les facteurs de croissance agir. Attendez-vous à un aspect « coup de soleil ».</li>
                    <li><strong>Hydratation et protection :</strong> Utilisez uniquement des hydratants doux approuvés et évitez l'exposition directe au soleil pendant au moins une semaine.</li>
                    <li><strong>Résultats optimaux :</strong> Si une séance offre un rafraîchissement visible, nous recommandons généralement une cure de 3 traitements espacés de 4 à 6 semaines pour un remodelage profond de la peau.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Soins premium pour les patients internationaux',
            content: `
                <p>Nous garantissons un parcours fluide et confortable pour notre clientèle mondiale en quête de rajeunissement naturel :</p>
                <ul>
                    <li><strong>Soutien au voyage :</strong> Assistance pour les transferts aéroport et hébergement haut de gamme en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Suivi régional :</strong> Vous pouvez choisir d'effectuer vos séances suivantes dans n'importe laquelle de nos cliniques selon votre itinéraire de voyage.</li>
                    <li><strong>Normes médicales :</strong> Toutes les procédures PRP sont réalisées par des professionnels de santé certifiés utilisant des kits stériles à usage unique et des équipements aux normes CE/FDA.</li>
                </ul>
            `
        }
    ]
};

export default prpFaceContent;