import type { ServiceContent } from '@/lib/services';

const rhinoplastieContent: ServiceContent = {
    description: [
        "La rhinoplastie est une intervention de chirurgie esthétique et fonctionnelle visant à améliorer la forme du nez et son harmonie avec les traits du visage. De nombreux patients choisissent de faire une opération du nez pour corriger une bosse nasale, une pointe épaisse ou un nez dévié, tout en recherchant un résultat naturel et équilibré.",
        "Au-delà de l’aspect esthétique, la rhinoplastie moderne permet également d’améliorer la respiration, notamment en cas de déviation de la cloison nasale. Dans notre centre, nous privilégions la rhinoplastie fermée ainsi que la rhinoplastie ultrasonique (Piezo), des techniques avancées qui réduisent les traumatismes chirurgicaux et accélèrent la récupération."
    ],
    benefits: [
        "Améliore l’harmonie du visage et les proportions du nez.",
        "Corrige les troubles respiratoires liés à une cloison nasale déviée (rhinoseptoplastie).",
        "Résultats naturels sans cicatrices visibles.",
        "Renforce la confiance en soi et le bien-être personnel.",
        "Récupération plus rapide grâce à la rhinoplastie ultrasonique."
    ],
    quickFacts: {
        procedureTime: '1–2 Heures',
        anesthesia: 'Locale ou Générale',
        recoveryTime: '1–2 Semaines',
        results: 'Définitifs',
    },
    sections: [
        {
            id: 'quest-ce-que-la-rhinoplastie',
            title: 'Qu’est-ce que la Rhinoplastie',
            content: `
                <p><strong>La rhinoplastie</strong> est une intervention chirurgicale esthétique et fonctionnelle du nez qui vise à modifier la structure osseuse et cartilagineuse afin d’améliorer à la fois l’apparence et la respiration.</p>
                <p>Il s’agit de l’une des opérations les plus complexes en <strong>chirurgie esthétique du visage</strong>, car le nez est un élément central de l’équilibre facial.</p>
                <p>Une rhinoplastie réussie doit offrir un résultat naturel : le nez ne doit pas paraître « opéré », mais parfaitement intégré aux traits du patient.</p>
            `
        },
        {
            id: 'indications-rhinoplastie',
            title: 'Quand Envisager une Opération du Nez',
            content: `
                <p>La rhinoplastie peut être réalisée pour des raisons esthétiques, fonctionnelles ou les deux.</p>
                <ul>
                    <li>Bosse nasale marquée</li>
                    <li>Pointe du nez large, tombante ou asymétrique</li>
                    <li>Nez dévié de face ou de profil</li>
                    <li>Difficultés respiratoires liées à une cloison déviée</li>
                    <li>Séquelles de traumatismes ou fractures nasales</li>
                    <li>Rhinoplastie secondaire après un premier échec</li>
                </ul>
                <p>Contrairement aux idées reçues, la <strong>douleur après une opération du nez</strong> est généralement faible et bien contrôlée par un traitement adapté.</p>
            `
        },
        {
            id: 'rhinoplastie-fermee',
            title: 'Rhinoplastie Fermée : Sans Cicatrices Visibles',
            content: `
                <p><strong>La rhinoplastie fermée</strong> est une technique chirurgicale avancée où toutes les incisions sont réalisées à l’intérieur des narines.</p>
                <p>Elle présente de nombreux avantages :</p>
                <ul>
                    <li>Aucune cicatrice externe visible</li>
                    <li>Moins d’œdèmes et d’ecchymoses</li>
                    <li>Temps de récupération réduit</li>
                    <li>Résultat esthétique plus naturel</li>
                </ul>
                <p>Le <strong>prix d’une rhinoplastie</strong> par technique fermée dépend de la complexité du cas et des objectifs esthétiques définis lors de la consultation.</p>
            `
        },
        {
            id: 'rhinoplastie-ultrasonique',
            title: 'Rhinoplastie Ultrasonique (Piezo) : Précision et Innovation',
            content: `
                <p><strong>La rhinoplastie ultrasonique</strong>, également appelée rhinoplastie Piezo, représente une avancée majeure dans la chirurgie du nez.</p>
                <p>Grâce aux ultrasons, le chirurgien peut remodeler les os du nez avec une précision millimétrique tout en préservant les tissus environnants.</p>
                <ul>
                    <li>Moins de traumatismes osseux</li>
                    <li>Réduction significative des ecchymoses</li>
                    <li>Récupération plus confortable</li>
                    <li>Résultats plus symétriques et prévisibles</li>
                </ul>
                <p>Le <strong>coût de la rhinoplastie ultrasonique</strong> reflète l’utilisation de technologies de pointe et l’expertise requise.</p>
            `
        },
        {
            id: 'rhinoseptoplastie',
            title: 'Rhinoseptoplastie : Esthétique et Fonction Respiratoire',
            content: `
                <p><strong>La rhinoseptoplastie</strong> est une intervention combinée qui corrige à la fois l’apparence du nez et la déviation de la cloison nasale.</p>
                <p>Elle est particulièrement indiquée chez les patients souffrant de troubles respiratoires chroniques tout en souhaitant une amélioration esthétique.</p>
                <p>Le <strong>prix d’une rhinoseptoplastie</strong> varie selon la sévérité de la déviation et la complexité chirurgicale.</p>
            `
        },
        {
            id: 'deroulement-rhinoplastie',
            title: 'Déroulement de la Rhinoplastie : Avant, Pendant et Après',
            content: `
                <h3>Avant l’intervention</h3>
                <p>Une évaluation médicale complète est réalisée afin de garantir une sécurité maximale.</p>
                <ul>
                    <li>Analyses sanguines et urinaires</li>
                    <li>Consultation cardiologique et ECG</li>
                    <li>Consultation anesthésique</li>
                    <li>Simulation 3D du résultat final</li>
                </ul>

                <h3>Anesthésie</h3>
                <p>La rhinoplastie est réalisée sous <strong>anesthésie générale intraveineuse</strong>, permettant un meilleur contrôle du saignement et du confort post-opératoire.</p>

                <h3>Après l’intervention</h3>
                <ul>
                    <li>Attelle nasale portée pendant 7 à 10 jours</li>
                    <li>Tampons nasaux nouvelle génération, respirants</li>
                    <li>Œdème transitoire, diminuant progressivement</li>
                </ul>
            `
        },
        {
            id: 'recuperation-resultats',
            title: 'Récupération et Résultats de la Rhinoplastie',
            content: `
                <p>Après une rhinoplastie, un gonflement est normal, surtout au niveau de la pointe du nez.</p>
                <ul>
                    <li>Reprise des activités quotidiennes après 10–14 jours</li>
                    <li>Activité sportive autorisée après environ 1 mois</li>
                    <li>Résultat définitif visible entre 6 et 12 mois</li>
                </ul>
                <p>La patience est essentielle pour apprécier pleinement le résultat final.</p>
            `
        },
        {
            id: 'pourquoi-nous-choisir',
            title: 'Pourquoi Nous Choisir pour Votre Rhinoplastie',
            content: `
                <ul>
                    <li><strong>Chirurgiens hautement spécialisés</strong> en rhinoplastie</li>
                    <li><strong>Technologie ultrasonique Piezo</strong> de dernière génération</li>
                    <li><strong>Prise en charge complète</strong> : transport et hébergement</li>
                    <li><strong>Suivi post-opératoire</strong> possible en France ou en Italie</li>
                </ul>
                <p><strong>La rhinoplastie à l’étranger</strong> permet de bénéficier d’un excellent rapport qualité-prix sans compromis sur la sécurité ni les résultats.</p>
            `
        }
    ]
};

export default rhinoplastieContent;
