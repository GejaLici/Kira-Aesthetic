import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "La greffe de barbe est une procédure de restauration capillaire spécialisée conçue pour densifier la pilosité faciale et redéfinir l'esthétique masculine. Que vous fassiez face à une croissance irrégulière, une barbe clairsemée ou que vous souhaitiez camoufler des cicatrices, cette intervention utilise vos propres follicules pileux pour créer une barbe, une moustache ou des favoris au rendu parfaitement naturel.",
        "Grâce à la technique avancée d'extraction d'unités folliculaires (FUE), les follicules individuels sont prélevés sur le cuir chevelu et implantés avec précision sur le visage. Cette solution permanente vous permet de laisser pousser une véritable barbe qui peut être rasée, taillée et coiffée comme une pilosité naturelle, offrant ainsi un gain significatif de confiance en soi et de symétrie faciale."
    ],
    benefits: [
        "Solution permanente pour les barbes et moustaches clairsemées ou irrégulières.",
        "Résultats naturels avec des poils poussant selon l'angle et la direction corrects.",
        "Design artistique personnalisé selon votre structure faciale et vos objectifs esthétiques.",
        "Technique FUE peu invasive sans cicatrice linéaire et avec une récupération rapide.",
        "Capacité à dissimuler les cicatrices faciales, les marques d'acné ou les blessures anciennes."
    ],
    quickFacts: {
        procedureTime: '3 - 8 heures',
        anesthesia: 'anesthésie locale',
        recoveryTime: '7 - 10 jours pour la cicatrisation initiale',
        results: 'repousse visible après 3-4 mois ; résultats définitifs à 12 mois',
    },
    sections: [
        {
            id: 'fue-technique',
            title: 'L\'art de la restauration de barbe par FUE',
            content: `
                <p>Créer une barbe réaliste exige un mélange de précision chirurgicale et de vision artistique. Nous utilisons exclusivement la méthode FUE (Follicular Unit Extraction) :</p>
                <ul>
                    <li><strong>Extraction individuelle :</strong> Les follicules sont prélevés un par un dans la zone donneuse (généralement l'arrière du crâne) à l'aide de micro-punches, ne laissant aucune cicatrice visible.</li>
                    <li><strong>Implantation stratégique :</strong> Chaque greffon est méticuleusement incliné pour imiter le mouvement naturel vers le bas des poils du visage.</li>
                    <li><strong>Intégration naturelle :</strong> Nous sélectionnons des greffons à cheveu unique pour les contours et des greffons plus denses pour le centre de la barbe afin d'assurer une transition douce et indécelable.</li>
                </ul>
            `
        },
        {
            id: 'treatment-phases',
            title: 'Votre parcours de greffe de barbe',
            content: `
                <p>La procédure est une intervention ambulatoire conçue pour votre confort :</p>
                <ol>
                    <li><strong>Design et tracé :</strong> Nous dessinons le nouveau contour de la barbe en fonction de vos proportions faciales et du style souhaité.</li>
                    <li><strong>Prélèvement :</strong> Sous anesthésie locale, les follicules donneurs sont extraits du cuir chevelu.</li>
                    <li><strong>Création des sites :</strong> Des micro-canaux sont créés dans la zone de la barbe, déterminant la densité et la direction de la pousse.</li>
                    <li><strong>Implantation :</strong> Les greffons sont soigneusement placés dans les sites receveurs.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Récupération et chronologie de la repousse',
            content: `
                <p>Comprendre le processus de cicatrisation est essentiel pour un résultat réussi :</p>
                <ul>
                    <li><strong>Première semaine :</strong> De petites croûtes se forment autour des greffons. Des rougeurs et un léger gonflement sont normaux et s'estompent rapidement.</li>
                    <li><strong>Perte transitoire (Shock Loss) :</strong> Entre la 2ème et la 4ème semaine, les poils transplantés tombent. C'est une étape normale du cycle ; les racines restent en excellente santé sous la peau.</li>
                    <li><strong>Repousse :</strong> Les nouveaux poils permanents commencent à émerger vers le 3ème ou 4ème mois.</li>
                    <li><strong>Densité maximale :</strong> La barbe continuera de s'épaissir pour atteindre son aspect final et mature entre 10 et 12 mois.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Soutien international et suivi',
            content: `
                <p>Nous offrons une expérience fluide pour les patients venant de l'étranger :</p>
                <ul>
                    <li><strong>Logistique de voyage :</strong> Assistance complète pour le transport et l'hébergement à proximité de notre clinique.</li>
                    <li><strong>Suivi multi-sites :</strong> Pour votre commodité, vous pouvez organiser vos visites de contrôle en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Soutien continu :</strong> Notre équipe reste disponible pour des consultations digitales et des conseils post-opératoires tout au long de votre processus de repousse.</li>
                </ul>
            `
        }
    ]
};

export default beardTransplantContent;