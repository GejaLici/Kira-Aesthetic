import type { ServiceContent } from '@/lib/services';

const faceliftContent: ServiceContent = {
    description: [
        "Le lifting, ou rhytidectomie, est une procédure chirurgicale d'excellence conçue pour inverser les signes les plus visibles du vieillissement facial. Avec le temps, des facteurs tels que la gravité, l'exposition au soleil et la perte d'élasticité cutanée entraînent un affaissement des tissus, des rides profondes et une perte de définition de la mâchoire. Le lifting traite méticuleusement ces préoccupations en retendant les muscles sous-jacents, en repositionnant les volumes graisseux et en retirant l'excès de peau pour restaurer un contour plus ferme et rajeuni.",
        "La chirurgie moderne du lifting a évolué bien au-delà du simple étirement de la peau. Notre approche se concentre sur le rajeunissement structurel des couches profondes afin de garantir des résultats élégants, durables et, surtout, naturels. En restaurant les fondations du visage, nous vous aidons à retrouver une version rafraîchie de vous-même, en évitant l'aspect « figé » ou tiré associé aux anciennes techniques."
    ],
    benefits: [
        "Élimine le relâchement cutané et réduit l'apparence des bajoues le long de la mâchoire.",
        "Lisse les rides profondes, telles que les sillons nasogéniens entre le nez et la bouche.",
        "Resserre les muscles faciaux sous-jacents (SMAS) pour un lifting interne durable.",
        "Restaure le volume et la définition de la zone médiane du visage et des pommettes.",
        "Offre un rajeunissement global permettant de paraître 10 à 15 ans plus jeune."
    ],
    quickFacts: {
        procedureTime: '3 - 6 heures',
        anesthesia: 'anesthésie générale ou sédation profonde',
        recoveryTime: '2 - 3 semaines pour les activités sociales ; plusieurs mois pour le résultat final',
        results: 'Rajeunissement durable (généralement plus de 10 ans)',
    },
    sections: [
        {
            id: 'advanced-techniques',
            title: 'Nos techniques chirurgicales sophistiquées',
            content: `
                <p>Nous nous spécialisons dans la chirurgie faciale multicouche qui traite le visage comme une structure dynamique en trois dimensions :</p>
                <ul>
                    <li><strong>Lifting SMAS :</strong> En soulevant le système musculo-aponévrotique superficiel, nous offrons un maintien structurel qui dure plus longtemps et semble plus naturel que les procédures limitées à la peau.</li>
                    <li><strong>Deep Plane Facelift :</strong> Une technique avancée qui repositionne l'ensemble du complexe peau et muscle comme une seule unité, idéale pour un rajeunissement significatif du milieu du visage.</li>
                    <li><strong>Mini-Lifting :</strong> Une option ciblée et moins invasive pour les patients présentant des signes précoces de vieillissement, se concentrant sur le bas du visage et l'ovale de la mâchoire.</li>
                    <li><strong>Lifting du cou intégré :</strong> Souvent combiné au lifting du visage pour éliminer le "cou de dindon" et les cordes platysmales pour une transition fluide du profil.</li>
                </ul>
            `
        },
        {
            id: 'surgical-journey',
            title: 'Comprendre l\'intervention',
            content: `
                <p>Le lifting est un parcours hautement personnalisé impliquant une planification chirurgicale méticuleuse :</p>
                <ol>
                    <li><strong>Incisions discrètes :</strong> Les incisions sont stratégiquement dissimulées dans les contours naturels de l'oreille et le long de la ligne des cheveux pour être pratiquement invisibles après cicatrisation.</li>
                    <li><strong>Repositionnement structurel :</strong> Les tissus profonds sont soulevés et fixés dans une position verticale plus jeune.</li>
                    <li><strong>Redrapage cutané :</strong> L'excès de peau est retiré et la peau restante est redrapée délicatement sans tension pour éviter toute distorsion des traits.</li>
                    <li><strong>Post-opératoire immédiat :</strong> Une nuit d'hospitalisation est généralement requise pour garantir votre confort et votre sécurité sous surveillance médicale.</li>
                </ol>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Votre récupération et soins après l\'opération',
            content: `
                <p>La patience est la clé pour obtenir les meilleurs résultats pendant la phase de guérison :</p>
                <ul>
                    <li><strong>La première semaine :</strong> Repos impératif avec la tête surélevée. Les bandages et les éventuels drains temporaires sont généralement retirés dans les premiers jours.</li>
                    <li><strong>Semaines 2-3 :</strong> Les ecchymoses et l'enflure majeure diminuent considérablement. La plupart des patients se sentent prêts à reprendre une vie sociale et un travail peu physique.</li>
                    <li><strong>Guérison à long terme :</strong> Bien que l'aspect rafraîchi soit rapide, l'affinement des contours et l'assouplissement des incisions se poursuivent sur 6 à 12 mois.</li>
                </ul>
            `
        },
        {
            id: 'international-assistance',
            title: 'Soins et accompagnement international',
            content: `
                <p>Nous offrons une expérience de classe mondiale pour notre clientèle internationale voyageant pour un rajeunissement facial :</p>
                <ul>
                    <li><strong>Conciergerie complète :</strong> Assistance pour les transferts aéroport, le transport local et l'hébergement de luxe.</li>
                    <li><strong>Continuité multi-pays :</strong> Nous offrons la flexibilité unique d'effectuer vos soins de suivi et le retrait des points en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Supervision experte :</strong> Accès direct à notre équipe médicale tout au long de votre séjour et durant votre phase de récupération à distance.</li>
                </ul>
            `
        }
    ]
};

export default faceliftContent;