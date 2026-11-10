import type { ServiceContent } from '@/lib/services';

const gynecomastiaContent: ServiceContent = {
    description: [
        "La gynécomastie, le développement excessif du tissu mammaire chez l'homme, est une condition courante qui peut affecter les hommes de tous âges, entraînant souvent une gêne physique et une gêne psychologique importante. La chirurgie de réduction mammaire masculine est une procédure hautement efficace conçue pour corriger l'aspect des mamelons pointés ou l'excès de volume pectoral en retirant le tissu glandulaire et la graisse localisée afin de créer un torse plus plat, plus ferme et plus masculin.",
        "Cette procédure cible spécifiquement les tissus qui résistent au régime alimentaire et à l'exercice physique. En combinant une liposuccion avancée avec une excision chirurgicale précise, nos chirurgiens certifiés peuvent remodeler la zone pectorale, restaurant ainsi un profil plus athlétique et renforçant considérablement la confiance en soi et la qualité de vie du patient."
    ],
    benefits: [
        "Restaure un contour de poitrine plus plat, plus ferme et traditionnellement plus masculin.",
        "Élimine le tissu glandulaire et la graisse tenace qui ne répondent pas à l'exercice.",
        "Corrige les « mamelons saillants » et l'asymétrie pectorale pour un look plus athlétique.",
        "Renforce l'estime de soi et la confiance dans les situations sociales et intimes.",
        "Fournit des résultats permanents, à condition de maintenir un poids stable."
    ],
    quickFacts: {
        procedureTime: '1 - 3 heures',
        anesthesia: 'Anesthésie générale',
        recoveryTime: '1 semaine pour le travail ; 4-6 semaines pour l\'exercice intense',
        results: 'Contour final visible après 3 à 6 mois',
    },
    sections: [
        {
            id: 'customized-techniques',
            title: 'Techniques de sculpture de précision',
            content: `
                <p>Chaque cas de gynécomastie étant unique, nous adaptons notre approche chirurgicale à la composition tissulaire spécifique du patient :</p>
                <ul>
                    <li><strong>Liposuccion :</strong> Utilisée principalement lorsque l'excès de volume est constitué de tissus graisseux. Elle est réalisée par de minuscules incisions très discrètes.</li>
                    <li><strong>Excision chirurgicale :</strong> Nécessaire lorsqu'il y a une quantité importante de tissu glandulaire. L'incision est généralement placée sur la moitié inférieure de l'aréole pour dissimuler toute cicatrice éventuelle.</li>
                    <li><strong>Approche combinée :</strong> La plupart des patients bénéficient d'une technique hybride utilisant la liposuccion pour le remodelage global et l'excision pour le tissu glandulaire ferme situé directement sous le mamelon.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Le chemin vers la guérison',
            content: `
                <p>Les soins post-opératoires sont essentiels pour garantir le meilleur résultat esthétique et un processus de guérison fluide :</p>
                <ol>
                    <li><strong>Vêtement de compression :</strong> Vous porterez un gilet médical spécialisé pendant 4 à 6 semaines pour minimiser l'enflure et aider la peau à épouser la nouvelle forme du torse.</li>
                    <li><strong>Cicatrisation initiale :</strong> La plupart des patients peuvent reprendre un travail de bureau sous 5 à 7 jours. De légères ecchymoses et un gonflement sont normaux et atteignent leur maximum dans les premières 72 heures.</li>
                    <li><strong>Restrictions d'exercice :</strong> Bien que la marche soit encouragée immédiatement, le soulèvement de charges lourdes et les entraînements du haut du corps doivent être évités pendant au moins un mois.</li>
                </ol>
            `
        },
        {
            id: 'results-longevity',
            title: 'Résultats à long terme',
            content: `
                <p>Les résultats de la chirurgie de la gynécomastie sont généralement permanents. Le tissu glandulaire retiré ne repousse pas. Cependant, pour maintenir votre nouveau profil, il est important de :</p>
                <ul>
                    <li><strong>Maintenir un poids stable :</strong> Une prise de poids importante peut entraîner de nouveaux dépôts graisseux dans la zone pectorale.</li>
                    <li><strong>Mode de vie sain :</strong> Éviter certains médicaments ou substances qui peuvent causer des déséquilibres hormonaux et potentiellement stimuler les tissus restants.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-support',
            title: 'Conciergerie pour les patients internationaux',
            content: `
                <p>Nous offrons une expérience complète et discrète pour nos clients internationaux :</p>
                <ul>
                    <li><strong>Logistique tout compris :</strong> Assistance pour l'hébergement premium et transport privé entre l'aéroport et la clinique.</li>
                    <li><strong>Suivis stratégiques :</strong> Les patients ont l'option unique d'effectuer leurs examens de suivi en <strong>Albanie</strong>, au <strong>Kosovo</strong> ou en <strong>Italie</strong>.</li>
                    <li><strong>Consultation à distance :</strong> Les évaluations chirurgicales initiales peuvent être effectuées par examen de photos de haute qualité pour planifier efficacement votre voyage.</li>
                </ul>
            `
        }
    ]
};

export default gynecomastiaContent;