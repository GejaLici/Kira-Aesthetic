import type { ServiceContent } from '@/lib/services';

const browLiftContent: ServiceContent = {
    description: [
        "Le lifting des sourcils, également appelé lifting frontal, est une procédure de rajeunissement facial spécialisée conçue pour corriger le relâchement cutané du front, des sourcils et des paupières supérieures. En repositionnant les tissus mous et la peau de la zone du sourcil, cette chirurgie élimine efficacement les rides profondes du front, les rides du lion entre les yeux et l'aspect lourd ou tombant qui accompagne souvent le vieillissement.",
        "Notre approche du rajeunissement frontal se concentre sur la restauration d'une apparence naturellement fraîche et éveillée. Grâce à des techniques avancées et peu invasives telles que l'endoscopie, nous pouvons remonter le sourcil avec précision, évitant ainsi l'aspect « figé » ou surpris des méthodes traditionnelles. Cette procédure lisse non seulement le haut du visage, mais ouvre également le regard, vous rendant plus reposé, plus avenant et plus jeune."
    ],
    benefits: [
        "Corrige l'affaissement des sourcils qui contribue à une expression fatiguée ou triste.",
        "Lisse les rides horizontales profondes du front et les rides verticales du lion.",
        "Réduit l'excès de peau tombante sur les paupières supérieures.",
        "Restaure un contour du haut du visage plus alerte, vibrant et jeune.",
        "Les techniques peu invasives garantissent des cicatrices discrètes cachées dans la racine des cheveux."
    ],
    quickFacts: {
        procedureTime: '1 - 2 heures',
        anesthesia: 'anesthésie générale ou sédation vigile (twilight)',
        recoveryTime: '7 - 14 jours pour les activités sociales',
        results: 'rajeunissement durable (5 à 10 ans en moyenne)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Techniques modernes de lifting',
            content: `
                <p>Nous utilisons diverses méthodes pour répondre aux différents degrés de vieillissement et aux besoins anatomiques :</p>
                <ul>
                    <li><strong>Lifting frontal endoscopique :</strong> La méthode la plus avancée. À l'aide d'une caméra miniature et de petites incisions cachées dans les cheveux, nous relevons l'ensemble du front avec un traumatisme minimal et une récupération rapide.</li>
                    <li><strong>Lifting temporal (latéral) :</strong> Idéal pour les patientes concernées par la queue du sourcil et les rides de la patte d'oie, offrant un rafraîchissement subtil façon « cat-eye ».</li>
                    <li><strong>Lifting coronal :</strong> Une approche traditionnelle réservée aux patientes présentant un relâchement cutané important ou des rides très profondes nécessitant une correction plus étendue.</li>
                </ul>
            `
        },
        {
            id: 'combined-procedures',
            title: 'Harmonie faciale totale',
            content: `
                <p>Le lifting des sourcils est fréquemment associé à d'autres interventions pour un rajeunissement plus équilibré :</p>
                <ul>
                    <li><strong>Blépharoplastie :</strong> Combiner le lifting frontal à une chirurgie des paupières offre un résultat ultime d'ouverture du regard.</li>
                    <li><strong>Lifting du visage (Facelift) :</strong> Traiter simultanément le haut, le milieu et le bas du visage garantit une jeunesse cohérente et naturelle.</li>
                    <li><strong>Injectables :</strong> Le Botox ou les produits de comblement dermique peuvent être utilisés après l'opération pour maintenir le lissage et affiner les ridules.</li>
                </ul>
            `
        },
        {
            id: 'recovery-care',
            title: 'Votre récupération et soins après l\'opération',
            content: `
                <p>La récupération après un lifting frontal moderne est généralement simple :</p>
                <ol>
                    <li><strong>Soutien post-opératoire :</strong> Un pansement léger peut être placé autour de votre front pendant 24 à 48 heures pour réduire l'enflure initiale.</li>
                    <li><strong>Surélévation :</strong> Dormir avec la tête surélevée est essentiel la première semaine pour minimiser les ecchymoses et les poches autour des yeux.</li>
                    <li><strong>Retour au travail :</strong> La plupart des patientes reprennent leur vie professionnelle et sociale sous 10 jours, une fois les sutures ou les clips retirés.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Services de conciergerie internationale',
            content: `
                <p>Nous nous engageons à offrir une expérience chirurgicale fluide à notre clientèle mondiale :</p>
                <ul>
                    <li><strong>Voyage et hébergement :</strong> Coordination complète pour le transport local et hébergement confortable à proximité de notre clinique.</li>
                    <li><strong>Suivi flexible :</strong> Les patients ont la possibilité d'effectuer leurs visites de contrôle en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Surveillance experte :</strong> Support numérique continu de notre équipe médicale tout au long de votre processus de cicatrisation.</li>
                </ul>
            `
        }
    ]
};

export default browLiftContent;