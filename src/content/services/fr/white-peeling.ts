import type { ServiceContent } from '@/lib/services';

const whitePeelingContent: ServiceContent = {
    description: [
        "Le White Peel est un traitement chimique de qualité médicale spécifiquement conçu pour cibler l'hyperpigmentation et le teint irrégulier. Contrairement aux peelings chimiques standards axés sur la texture générale ou l'acné, le White Peel utilise un mélange puissant d'agents dépigmentants destinés à inhiber les mélanocytes — les cellules responsables de la production de pigments. Cette approche à double action élimine les taches brunes existantes tout en supprimant les déclencheurs biologiques qui causent l'apparition de nouvelles décolorations.",
        "Ce traitement avancé est la solution idéale pour les patients luttant contre le mélasma, les dommages solaires et l'hyperpigmentation post-inflammatoire (HPI). En accélérant le renouvellement cellulaire et en exfoliant en douceur les couches pigmentées de l'épiderme, le White Peel révèle un teint lumineux et plus uniforme, éclaircissant considérablement l'apparence générale de la peau avec une précision professionnelle."
    ],
    benefits: [
        "Correction pigmentaire : Atténue efficacement les taches solaires, les taches de vieillesse et le mélasma hormonal tenace.",
        "Suppression de la mélanine : Inhibe l'activité de la tyrosinase pour prévenir la formation de nouvelles taches sombres.",
        "Teint éclatant : Élimine le aspect terne en supprimant les cellules mortes et en stimulant la croissance de nouvelles cellules fraîches.",
        "Uniformité du teint : Harmonise la palette de couleurs de la peau, réduisant les rougeurs et les taches brunes.",
        "Cicatrisation post-acné : Cible et estompe les marques sombres souvent laissées après les poussées d'acné."
    ],
    quickFacts: {
        procedureTime: '30 minutes',
        anesthesia: 'Aucune requise (légère sensation de picotement)',
        recoveryTime: '3 - 7 jours de légères rougeurs et desquamation',
        results: 'Résultats optimaux après une série de 3 à 6 séances',
    },
    sections: [
        {
            id: 'targeted-pigment-science',
            title: 'La science de la dépigmentation',
            content: `
                <p>Notre système de White Peel agit via trois voies biologiques distinctes pour garantir une clarté de la peau à long terme :</p>
                <ul>
                    <li><strong>Inhibition de la tyrosinase :</strong> Les ingrédients actifs atteignent les couches profondes de l'épiderme pour « désactiver » l'enzyme qui déclenche la production de mélanine.</li>
                    <li><strong>Exfoliation accélérée :</strong> La solution chimique dissout les liens entre les cellules pigmentées, leur permettant de s'éliminer plus rapidement.</li>
                    <li><strong>Synergie d'éclat :</strong> En libérant la voie pour des cellules neuves et saines, le peeling permet à la lumière de se refléter plus uniformément sur la surface de la peau pour un effet « peau de verre » (glass skin).</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'À quoi s\'attendre pendant la procédure',
            content: `
                <p>Une séance de White Peel est une procédure clinique ciblée réalisée par nos spécialistes en esthétique :</p>
                <ol>
                    <li><strong>Analyse de la peau :</strong> Nous évaluons votre phototype (échelle de Fitzpatrick) et la profondeur de votre pigmentation pour calibrer l'intensité du peeling.</li>
                    <li><strong>Préparation :</strong> La peau est soigneusement nettoyée et dégraissée pour garantir une pénétration uniforme des agents de peeling.</li>
                    <li><strong>Application :</strong> La solution est appliquée en couches précises. Vous pouvez ressentir une brève sensation de chaleur ou de picotement lors de l'activation des ingrédients.</li>
                    <li><strong>Neutralisation :</strong> Une fois le point clinique souhaité atteint, le peeling est neutralisé et un baume apaisant et rafraîchissant est appliqué.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-importance',
            title: 'Soins post-peeling et sécurité solaire',
            content: `
                <p>Le succès d'un White Peel dépend à 50 % du traitement et à 50 % des soins post-opératoires. La protection de votre « nouvelle » peau est cruciale :</p>
                <ul>
                    <li><strong>SPF Obligatoire :</strong> Vous devez appliquer un écran solaire large spectre SPF 50+ chaque jour. Une exposition solaire sans protection peut assombrir les pigments plus qu'auparavant.</li>
                    <li><strong>Routine douce :</strong> Utilisez uniquement des nettoyants doux et hydratants ainsi que des crèmes riches en céramides pendant au moins 7 jours après le traitement.</li>
                    <li><strong>Ne pas toucher :</strong> Laissez la peau peler naturellement. Tirer sur les peaux mortes peut entraîner des cicatrices ou une hyperpigmentation secondaire.</li>
                    <li><strong>Pause cosmétique :</strong> Évitez les rétinoïdes, les AHA et les sérums à la vitamine C pendant une semaine, sauf indication contraire.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Accompagnement d\'élite pour les clients internationaux',
            content: `
                <p>Nous offrons une expérience fluide pour les patients voyageant pour des soins de dermatologie esthétique avancée :</p>
                <ul>
                    <li><strong>Logistique coordonnée :</strong> Assistance complète pour les transferts aéroport et l'hébergement en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Continuité du traitement :</strong> Pour les cures nécessitant plusieurs séances, les rendez-vous peuvent être planifiés dans nos différents centres régionaux selon votre itinéraire.</li>
                    <li><strong>Consultations virtuelles :</strong> Discutez de vos problèmes de peau avec nos spécialistes par appel vidéo avant votre voyage pour confirmer que le White Peel est le meilleur choix pour vous.</li>
                </ul>
            `
        }
    ]
};

export default whitePeelingContent;