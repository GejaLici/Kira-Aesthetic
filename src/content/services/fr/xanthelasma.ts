import type { ServiceContent } from '@/lib/services';

const xanthelasmaRemovalContent: ServiceContent = {
    description: [
        "Le xanthelasma se présente sous forme de plaques jaunâtres et plates de dépôts de cholestérol qui se développent sur ou autour des paupières. Bien que médicalement bénins, ils peuvent être esthétiquement gênants et affectent souvent la confiance en soi. Dans notre clinique, nous utilisons la thérapie par arc plasma (Fibroblast) — une solution non chirurgicale de pointe qui élimine efficacement ces dépôts sans avoir recours au scalpel, aux points de suture ou à la chirurgie traditionnelle.",
        "La technique de l'arc plasma utilise un appareil spécialisé pour créer une décharge électrique microscopique qui sublime le tissu superficiel du xanthelasma. Ce processus vaporise instantanément le dépôt de cholestérol tout en laissant intacte la peau saine environnante. Cette approche de haute précision réduit considérablement le risque de cicatrices et offre un contour de paupière plus lisse et net, avec un temps de récupération beaucoup plus rapide que l'excision chirurgicale."
    ],
    benefits: [
        "Précision non chirurgicale : Aucune incision ni suture n'est requise, préservant ainsi la peau délicate de la paupière.",
        "Temps d'arrêt minimal : Les patients peuvent reprendre la plupart de leurs activités quotidiennes immédiatement après la procédure.",
        "Haute efficacité : Élimine efficacement les plaques de cholestérol même persistantes en une ou deux séances.",
        "Sécurité pour les paupières : L'arc plasma contrôlé n'affecte que la couche superficielle ciblée de la peau.",
        "Guérison naturelle : Stimule les processus régénératifs naturels de la peau pour un résultat final lisse."
    ],
    quickFacts: {
        procedureTime: '15 - 30 minutes',
        anesthesia: 'Crème anesthésiante topique puissante',
        recoveryTime: '5 - 10 jours pour la chute des croûtes de carbone',
        results: 'Disparition visible une fois la guérison terminée (environ 2-3 semaines)',
    },
    sections: [
        {
            id: 'plasma-arc-technology',
            title: 'Comment fonctionne la sublimation plasma',
            content: `
                <p>Contrairement aux lasers ou à la cautérisation, la technologie Plasma Arc fonctionne selon le principe de la sublimation — la conversion directe d'un solide en gaz :</p>
                <ul>
                    <li><strong>Gaz ionisé :</strong> L'appareil crée un minuscule « arc » de plasma entre la pointe du stylo et la peau.</li>
                    <li><strong>Vaporisation localisée :</strong> L'énergie thermique vaporise la plaque de cholestérol sans transférer de chaleur excessive au derme profond.</li>
                    <li><strong>Contraction des tissus :</strong> Le processus déclenche également une contraction immédiate des fibres de la peau, offrant un léger effet liftant à la zone de la paupière.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure-experience',
            title: 'Votre parcours de soins',
            content: `
                <p>Nous privilégions le confort du patient et la sécurité clinique à chaque séance :</p>
                <ol>
                    <li><strong>Diagnostic clinique :</strong> Nous confirmons que les lésions sont bien des xanthelasmas et évaluons leur profondeur et leur distribution.</li>
                    <li><strong>Anesthésie :</strong> Un anesthésique topique à haute puissance est appliqué pendant 20 à 30 minutes pour garantir un confort optimal.</li>
                    <li><strong>Élimination précise :</strong> Le praticien traite systématiquement les plaques jaunes, déplaçant le stylo plasma avec une haute précision sur le dépôt.</li>
                    <li><strong>Soins post-opératoires protecteurs :</strong> Un baume cicatrisant spécialisé est appliqué sur la zone traitée pour entamer la phase de récupération.</li>
                </ol>
            `
        },
        {
            id: 'recovery-aftercare',
            title: 'Guérison et soins post-traitement',
            content: `
                <p>Le succès de l'intervention dépend fortement du respect du protocole post-traitement :</p>
                <ul>
                    <li><strong>Croûtes de carbone :</strong> De petites croûtes protectrices brunes se formeront. Il est vital de <strong>ne pas les gratter</strong> ; elles doivent tomber naturellement pour éviter les cicatrices.</li>
                    <li><strong>Gonflement des paupières :</strong> Un gonflement léger à modéré est normal pendant les premières 48 à 72 heures. Des compresses froides (sans contact direct avec l'eau) peuvent aider.</li>
                    <li><strong>Protection solaire :</strong> La « nouvelle » peau en dessous est extrêmement sensible. Vous devez appliquer un SPF 50+ quotidiennement pendant plusieurs mois pour éviter l'hyperpigmentation.</li>
                    <li><strong>Suivi systémique :</strong> Le xanthelasma étant lié au cholestérol, nous recommandons de surveiller vos taux de lipides avec votre médecin pour prévenir de nouveaux dépôts.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Service d\'élite pour les patients internationaux',
            content: `
                <p>Nous accueillons des patients du monde entier cherchant des traitements non invasifs pour les paupières :</p>
                <ul>
                    <li><strong>Kit de récupération express :</strong> Nous fournissons tous les produits de soins nécessaires dans un kit de voyage pour votre retour à domicile.</li>
                    <li><strong>Lieux de soins intégrés :</strong> Commencez votre traitement en <strong>Albanie</strong> et bénéficiez d'un suivi dans nos cliniques au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Conciergerie complète :</strong> Nous organisons les transferts aéroport et l'hébergement à proximité de nos installations pour garantir une expérience sans stress.</li>
                </ul>
            `
        }
    ]
};

export default xanthelasmaRemovalContent;