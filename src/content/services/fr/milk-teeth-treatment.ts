import type { ServiceContent } from '@/lib/services';

const milkTeethTreatmentContent: ServiceContent = {
    description: [
        "La santé des dents primaires d'un enfant — communément appelées dents de lait — constitue le fondement de son futur sourire d'adulte. Ces premières dents sont bien plus que temporaires ; elles sont essentielles pour une nutrition adéquate grâce à la mastication, le développement d'une élocution claire et, plus important encore, elles servent de mainteneurs d'espace naturels. Elles guident les dents permanentes vers leur position correcte, prévenant ainsi l'encombrement futur et les problèmes orthodontiques complexes.",
        "Traiter les caries et les infections des dents de lait est vital pour prévenir la douleur et s'assurer que les dents permanentes en formation ne soient pas endommagées par la propagation de bactéries. Notre approche en dentisterie pédiatrique se concentre sur la conservation de ces dents primaires chaque fois que possible, garantissant que votre enfant grandisse avec une bouche saine et fonctionnelle, tout en développant une attitude positive envers les soins dentaires."
    ],
    benefits: [
        "Développement optimal : Garantit que les dents permanentes disposent de l'espace nécessaire pour émerger.",
        "Prévention de la douleur : Arrête les maux de dents et la sensibilité qui peuvent affecter le sommeil et l'apprentissage de l'enfant.",
        "Élocution claire : Favorise le placement correct de la langue pour une prononciation nette.",
        "Santé nutritionnelle : Permet aux enfants de mastiquer confortablement une grande variété d'aliments sains et croquants.",
        "Confiance psychologique : Aide les enfants à être fiers de leur sourire dès leur plus jeune âge."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minutes par séance',
        anesthesia: 'Anesthésie locale ou sédation légère si nécessaire',
        recoveryTime: 'Immédiate',
        results: 'Fonction restaurée et dents primaires sans infection',
    },
    sections: [
        {
            id: 'pediatric-specialties',
            title: 'Traitements spécialisés pour enfants',
            content: `
                <p>Les enfants nécessitent une approche clinique différente de celle des adultes. Nous proposons des procédures pédiatriques spécialisées adaptées aux petites bouches :</p>
                <ul>
                    <li><strong>Obturations en composite :</strong> Nous utilisons des matériaux sûrs, de la couleur de la dent, pour réparer discrètement les caries et restaurer la structure dentaire.</li>
                    <li><strong>Pulpotomie (« dévitalisation partielle ») :</strong> Lorsque la carie atteint le nerf, nous pratiquons une thérapie pulpaire douce pour retirer uniquement la partie affectée, sauvant ainsi la dent et stoppant la douleur.</li>
                    <li><strong>Couronnes pédiatriques :</strong> Pour les dents très dégradées, nous utilisons des couronnes durables en zircone ou en acier inoxydable pour protéger la dent jusqu'à sa chute naturelle.</li>
                    <li><strong>Mainteneurs d'espace :</strong> Si une dent de lait est perdue prématurément, nous posons un dispositif sur mesure pour maintenir l'espace ouvert pour la future dent adulte.</li>
                </ul>
            `
        },
        {
            id: 'fear-free-dentistry',
            title: 'Une expérience sans peur',
            content: `
                <p>Nous savons que les premières visites chez le dentiste peuvent définir la relation d'un enfant avec sa santé bucco-dentaire pour toute sa vie. Notre clinique est conçue comme un espace accueillant :</p>
                <ol>
                    <li><strong>Dire-Montrer-Faire :</strong> Nous expliquons chaque outil et chaque étape avec un vocabulaire adapté aux enfants avant de commencer.</li>
                    <li><strong>Techniques douces :</strong> Nos spécialistes pédiatriques sont formés à la gestion comportementale pour garder les enfants calmes et coopératifs.</li>
                    <li><strong>Renforcement positif :</strong> Nous nous efforçons de rendre l'expérience gratifiante, pour que votre enfant reparte avec le sourire et un sentiment de fierté.</li>
                </ol>
            `
        },
        {
            id: 'preventive-shield',
            title: 'Le bouclier préventif',
            content: `
                <p>Le meilleur traitement reste la prévention. Nous offrons une protection de haut niveau pour stopper les caries avant qu'elles ne commencent :</p>
                <ul>
                    <li><strong>Scellement de sillons :</strong> Un revêtement protecteur mince appliqué sur les surfaces de mastication des molaires pour « sceller » l'accès aux débris alimentaires et aux bactéries.</li>
                    <li><strong>Fluoruration :</strong> Application de fluor professionnel pour renforcer l'émail et le rendre plus résistant aux attaques acides.</li>
                    <li><strong>Éducation aux soins à domicile :</strong> Démonstrations pratiques pour les parents et les enfants sur les meilleures techniques de brossage adaptées aux petites mains.</li>
                </ul>
            `
        },
        {
            id: 'international-families',
            title: 'Accompagnement des familles internationales',
            content: `
                <p>Nous accueillons des familles du monde entier, offrant une expérience fluide pour les soins dentaires de vos enfants :</p>
                <ul>
                    <li><strong>Logistique familiale :</strong> Assistance pour trouver des hébergements et des transports adaptés aux familles en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soins multilingues :</strong> Notre équipe communique clairement dans plusieurs langues pour s'assurer que les parents et les enfants se sentent compris.</li>
                    <li><strong>Continuité des soins :</strong> Les rendez-vous de suivi et les examens préventifs peuvent être coordonnés dans n'importe laquelle de nos cliniques régionales.</li>
                </ul>
            `
        }
    ]
};

export default milkTeethTreatmentContent;