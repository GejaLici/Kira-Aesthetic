import type { ServiceContent } from '@/lib/services';

const armLiftContent: ServiceContent = {
    description: [
        "Eine Oberarmstraffung, oder Brachioplastik, ist ein transformativer chirurgischer Eingriff, der darauf abzielt, die Oberarme neu zu formen, indem erschlaffte Haut und hartnäckige Fettdepots entfernt werden. Überschüssiges Gewebe an den Armen, oft als „Winkearme“ bezeichnet, kann die Folge von erheblichem Gewichtsverlust, Alterung oder Genetik sein und ist häufig resistent gegenüber Diät und Sport allein.",
        "Unser Ansatz zur Brachioplastik konzentriert sich darauf, dem Oberkörper eine feste, jugendliche und wohlproportionierte Kontur zurückzugeben. Durch die strategische Straffung des darunter liegenden Stützgewebes und die Neuausrichtung der Haut erzielen wir ein glatteres und definierteres Armprofil. Dieser Eingriff verbessert nicht nur Ihr körperliches Erscheinungsbild, sondern gibt Ihnen auch das Selbstvertrauen zurück, ärmellose Kleidung zu tragen und sich in Ihrer Haut wohlzufühlen."
    ],
    benefits: [
        "Entfernung von loser, hängender Haut („Winkearme“) für ein strafferes Aussehen.",
        "Reduzierung hartnäckiger Fettdepots, oft kombiniert mit einer Fettabsaugung.",
        "Verbesserte Armdefinition und eine proportionalere Körpersilhouette.",
        "Lang anhaltende Ergebnisse, die die Ästhetik des Oberkörpers deutlich verbessern.",
        "Gesteigertes Selbstvertrauen und mehr Komfort bei verschiedenen Kleidungsstilen."
    ],
    quickFacts: {
        procedureTime: '2 - 3 Stunden',
        anesthesia: 'Vollnarkose',
        recoveryTime: '4 - 6 Wochen für volle körperliche Aktivität',
        results: 'Lang anhaltend (am besten beibehalten bei stabilem Gewicht)',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Maßgeschneiderte chirurgische Techniken',
            content: `
                <p>Wir bieten verschiedene Schnittmuster an, abhängig vom Grad der Hauterschlaffung und der Fettverteilung:</p>
                <ul>
                    <li><strong>Vollständige Brachioplastik:</strong> Die häufigste Methode, bei der ein Schnitt von der Achselhöhle bis zum Ellenbogen erfolgt. Ideal bei erheblichem Hautüberschuss.</li>
                    <li><strong>Mini-Oberarmstraffung:</strong> Bei Patienten mit moderater Erschlaffung können die Schnitte auf den Achselbereich beschränkt werden, was zu weniger sichtbaren Narben führt.</li>
                    <li><strong>Kombinierte Liposuktion:</strong> Wir setzen häufig Fettabsaugung parallel zur Hautentfernung ein, um die Form des Arms zu verfeinern und eine glatte, athletische Kontur zu gewährleisten.</li>
                </ul>
            `
        },
        {
            id: 'preparation-safety',
            title: 'Vorbereitung und Patientensicherheit',
            content: `
                <p>Ein optimales Ergebnis beginnt mit einer umfassenden präoperativen Phase:</p>
                <ul>
                    <li><strong>Medizinisches Screening:</strong> Beinhaltet Blutuntersuchungen, EKG und eine detaillierte körperliche Untersuchung.</li>
                    <li><strong>Anpassung des Lebensstils:</strong> Patienten müssen das Rauchen einstellen und blutverdünnende Medikamente für einige Wochen vor der Operation meiden.</li>
                    <li><strong>Gewichtsstabilität:</strong> Für beste Ergebnisse wird empfohlen, dass Patienten vor dem Eingriff ein stabiles, gesundes Gewicht haben.</li>
                </ul>
            `
        },
        {
            id: 'recovery-process',
            title: 'Genesung und postoperative Pflege',
            content: `
                <p>Eine reibungslose Genesung ist entscheidend für das beste ästhetische Ergebnis:</p>
                <ol>
                    <li><strong>Kompression:</strong> Sie tragen für 4–6 Wochen spezielle Kompressionsärmel, um Schwellungen zu minimieren und die neuen Konturen zu unterstützen.</li>
                    <li><strong>Aktivität:</strong> Während leichtes Gehen sofort gefördert wird, müssen schweres Heben und Überkopf-Bewegungen der Arme für mindestens einen Monat vermieden werden.</li>
                    <li><strong>Narbenmanagement:</strong> Wir bieten detaillierte Protokolle zur Narbenpflege an, einschließlich Silikongele und Sonnenschutz, damit die Schnitte mit der Zeit schön verblassen.</li>
                </ol>
            `
        },
        {
            id: 'international-patients',
            title: 'Besondere Unterstützung für unsere Patienten',
            content: `
                <p>Wir setzen uns dafür ein, Ihnen eine nahtlose Erfahrung zu bieten, egal wo Sie zu Hause sind:</p>
                <ul>
                    <li><strong>Internationale Patienten:</strong> Wir bieten volle Unterstützung bei der Unterkunft und dem lokalen Transport, um Ihre chirurgische Reise stressfrei zu gestalten.</li>
                    <li><strong>Nachsorge in Italien:</strong> Für unsere italienischen Patienten bieten wir den besonderen Komfort von Nachuntersuchungen und Kontrollen direkt in Italien an, um die Kontinuität der Versorgung in der Nähe Ihres Wohnortes zu gewährleisten.</li>
                </ul>
            `
        }
    ]
};

export default armLiftContent;