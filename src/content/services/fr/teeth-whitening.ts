import type { ServiceContent } from '@/lib/services';

const teethWhiteningContent: ServiceContent = {
    description: [
        "Le blanchiment dentaire professionnel est une procédure esthétique rapide, sûre et non invasive conçue pour effacer des années de taches et de décoloration. Au fil du temps, des facteurs tels que le processus naturel de vieillissement et la consommation de café, de thé, de vin rouge ou de tabac peuvent ternir l'éclat de votre sourire. Le blanchiment professionnel utilise des agents de blanchiment de qualité médicale pour décomposer les pigments incrustés dans l'émail, révélant un sourire nettement plus éclatant et plus jeune.",
        "Alors que les produits en vente libre offrent souvent des résultats irréguliers et peuvent causer des irritations gingivales, nos traitements prodigués en clinique sont personnalisés selon votre profil dentaire spécifique. En utilisant des gels à haute concentration et une technologie avancée d'activation par la lumière, nous garantissons un résultat uniforme qui protège vos tissus mous sensibles tout en réalisant une transformation spectaculaire en une seule séance."
    ],
    benefits: [
        "Transformation instantanée : Obtenez un sourire gagnant plusieurs teintes de blancheur en seulement une heure.",
        "Précision et sécurité : Des gouttières sur mesure et des barrières protectrices préviennent toute irritation des gencives.",
        "Résultats durables : Les formules de qualité professionnelle offrent des résultats plus pérennes que les alternatives du commerce.",
        "Confiance boostée : Un sourire éclatant est souvent associé à la santé, à la vitalité et à une meilleure estime de soi.",
        "Solutions sur mesure : Choisissez entre une procédure rapide au cabinet ou un kit professionnel pratique à domicile."
    ],
    quickFacts: {
        procedureTime: '60 minutes (au cabinet) ou 10-14 jours (à domicile)',
        anesthesia: 'Aucune requise',
        recoveryTime: 'Immédiate ; une sensibilité temporaire peut durer 24 à 48 heures',
        results: 'Sourire éclatant et blanchi visible immédiatement après le traitement',
    },
    sections: [
        {
            id: 'whitening-options',
            title: 'Nos technologies de blanchiment avancées',
            content: `
                <p>Nous proposons les meilleurs protocoles de blanchiment au monde pour garantir une efficacité maximale avec une sensibilité minimale :</p>
                <ul>
                    <li><strong>Blanchiment au cabinet activé par Laser :</strong> La référence absolue en termes de rapidité. Un gel de peroxyde puissant est appliqué et activé par une source lumineuse spécialisée pour accélérer le processus, idéal pour les événements spéciaux.</li>
                    <li><strong>Kits personnalisés à domicile :</strong> Nous créons des gouttières moulées sur mesure en laboratoire qui s'adaptent parfaitement à vos dents. Utilisées avec notre gel professionnel 30 à 60 minutes par jour, elles vous permettent d'obtenir des résultats professionnels avec une totale flexibilité.</li>
                    <li><strong>Blanchiment interne :</strong> Pour les dents isolées qui ont noirci suite à un traumatisme ou à un traitement de canal, nous proposons un blanchiment interne spécialisé pour harmoniser la dent avec ses voisines.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Votre parcours vers un sourire éclatant',
            content: `
                <p>Pour garantir le meilleur résultat, nous suivons un protocole clinique strict :</p>
                <ol>
                    <li><strong>Examen préalable :</strong> Nous vérifions l'absence de caries ou de récession gingivale, car les agents de blanchiment ne doivent être appliqués que sur des dents saines.</li>
                    <li><strong>Prophylaxie (Nettoyage) :</strong> Nous recommandons un nettoyage professionnel avant le blanchiment pour éliminer la plaque et le tartre, assurant un contact direct du gel avec l'émail.</li>
                    <li><strong>Sélection de la teinte :</strong> Nous enregistrons votre teinte actuelle pour suivre la progression et vous aider à choisir une teinte cible d'aspect naturel.</li>
                    <li><strong>Protection :</strong> Vos gencives et vos lèvres sont isolées par une barrière protectrice pour éviter tout contact avec le gel de blanchiment.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Maintenir vos résultats',
            content: `
                <p>Bien que le blanchiment dentaire ne soit pas permanent, vous pouvez prolonger la durée de vos résultats grâce à ces habitudes simples :</p>
                <ul>
                    <li><strong>Le « Régime Blanc » :</strong> Évitez les aliments fortement pigmentés (baies, sauce soja) et les boissons colorées (café, vin rouge) pendant les 48 heures suivant le traitement.</li>
                    <li><strong>Hygiène bucco-dentaire :</strong> Continuez le brossage et le passage du fil dentaire deux fois par jour pour empêcher les nouvelles taches de surface de s'installer.</li>
                    <li><strong>Retouches :</strong> Utilisez vos gouttières personnalisées pour une retouche d'une nuit tous les 6 mois afin de maintenir la luminosité maximale de votre sourire.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Services conciergerie pour nos patients internationaux',
            content: `
                <p>Nous offrons une expérience haut de gamme pour les patients voyageant pour des soins dentaires esthétiques :</p>
                <ul>
                    <li><strong>Service Express :</strong> Nous priorisons le blanchiment au cabinet pour les voyageurs internationaux afin que vous puissiez profiter de votre nouveau sourire dès le reste de votre séjour.</li>
                    <li><strong>Préparation de kit à domicile :</strong> Nous pouvons prendre vos empreintes le premier jour et avoir vos gouttières sur mesure prêtes en moins de 24 heures.</li>
                    <li><strong>Logistique :</strong> Assistance pour les transferts aéroport et hébergement de luxe en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                </ul>
            `
        }
    ]
};

export default teethWhiteningContent;