import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "Die Otoplastik oder Ohrenkorrektur ist ein transformativer Eingriff, der darauf abzielt, die Form, Position oder Proportion der Ohren zu verbessern. Während sie oft mit dem „Anlegen“ abstehender Ohren assoziiert wird, korrigiert die Otoplastik auch Makrotie (zu große Ohren), Ohrenasymmetrien sowie angeborene oder traumatisch bedingte Deformitäten. Das primäre Ziel ist es, ein ausgewogeneres Erscheinungsbild zu schaffen, das harmonisch auf Ihre Gesichtszüge abgestimmt ist.",
        "Dieses Verfahren ist insofern einzigartig, als es sowohl bei Kindern (in der Regel ab 5 Jahren) als auch bei Erwachsenen äußerst effektiv ist. Vielen Patienten bietet die Otoplastik eine erhebliche psychologische Entlastung und stärkt das Selbstvertrauen, indem Merkmale korrigiert werden, die oft eine Quelle für Befangenheit waren. Unsere Chirurgen konzentrieren sich auf die Schaffung natürlicher Konturen, um sicherzustellen, dass die Ohren ästhetisch ansprechend aussehen, ohne „zu eng angelegt“ oder künstlich zu wirken."
    ],
    benefits: [
        "Korrigiert markante oder abstehende Ohren für ein ausgewogeneres Profil.",
        "Formt große Ohren (Makrotie) um und reduziert deren Größe.",
        "Verbessert die Gesichtssymmetrie durch Korrektur ungleichmäßiger Ohrformen oder -positionen.",
        "Steigert das Selbstwertgefühl und lindert soziale Ängste, insbesondere bei jüngeren Patienten.",
        "Bietet dauerhafte Ergebnisse mit diskreten, hinter dem Ohr verborgenen Schnitten."
    ],
    quickFacts: {
        procedureTime: '1 - 3 Stunden',
        anesthesia: 'Lokalanästhesie mit Sedierung oder Vollnarkose',
        recoveryTime: '1 - 2 Wochen für Schule/Beruf; 6-8 Wochen für Sport',
        results: 'Dauerhafte Korrektur der Ohrform und -position',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Präzisions-Formungstechniken',
            content: `
                <p>Wir setzen fortschrittliche chirurgische Methoden ein, um natürliche Ergebnisse und dauerhafte Stabilität zu gewährleisten:</p>
                <ul>
                    <li><strong>Knorpelmodellierung:</strong> Der Ohrknorpel wird vorsichtig neu geformt, um die natürliche Anthelixfalte zu bilden, die bei abstehenden Ohren oft fehlt.</li>
                    <li><strong>Interne Vernähung:</strong> Spezielle, permanente Nähte werden intern verwendet, um den Knorpel in seiner neuen, ästhetischeren Position zu fixieren.</li>
                    <li><strong>Unsichtbare Narbenbildung:</strong> Die Schnitte werden strategisch in der natürlichen Falte hinter dem Ohr oder innerhalb der vorderen Falten platziert, wodurch Narben nach der Heilung praktisch unsichtbar sind.</li>
                </ul>
            `
        },
        {
            id: 'pediatric-otoplasty',
            title: 'Besonderheiten bei Kindern',
            content: `
                <p>Die Otoplastik ist einer der wenigen ästhetischen Eingriffe, die bereits für Kinder empfohlen werden. Da das Ohr im Alter von fünf Jahren zu 90 % entwickelt ist, kann die Operation vor der Einschulung durchgeführt werden, um potenzielle Hänseleien zu vermeiden:</p>
                <ul>
                    <li><strong>Sichere Entwicklung:</strong> Wir stellen sicher, dass der Knorpel ausreichend gereift ist, bevor wir mit dem Eingriff fortfahren.</li>
                    <li><strong>Komfort an erster Stelle:</strong> Bei jüngeren Patienten wird in der Regel eine Vollnarkose angewandt, um eine völlig schmerz- und stressfreie Erfahrung zu gewährleisten.</li>
                    <li><strong>Unterstützende Genesung:</strong> Wir bieten spezielle Stirnbänder und eine postoperative Anleitung an, die auf die Bedürfnisse aktiver Kinder zugeschnitten ist.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Ihr Weg zur Genesung',
            content: `
                <p>Die Heilung nach einer Otoplastik verläuft relativ schnell, sofern die postoperativen Anweisungen befolgt werden:</p>
                <ol>
                    <li><strong>Die erste Woche:</strong> Ein schützender Kompressionsverband wird getragen, um die neue Ohrposition zu halten und Schwellungen zu minimieren.</li>
                    <li><strong>Die Stirnband-Phase:</strong> Nach dem Entfernen des Verbandes muss ein weiches Stirnband getragen werden (anfangs rund um die Uhr, später nur nachts), um die Ohren im Schlaf zu schützen.</li>
                    <li><strong>Aktivität:</strong> Die meisten Patienten kehren innerhalb von 7–10 Tagen zur Arbeit oder Schule zurück. Kontaktsportarten müssen jedoch für mindestens zwei Monate vermieden werden, um Traumata am Knorpel zu verhindern.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Unterstützung für internationale Patienten',
            content: `
                <p>Wir sind auf die hochwertige Betreuung von Patienten spezialisiert, die aus dem Ausland anreisen:</p>
                <ul>
                    <li><strong>Nahtlose Logistik:</strong> Unterstützung bei lokalem Transport und erstklassige Unterbringung in der Nähe unserer Klinik für einen angenehmen Aufenthalt.</li>
                    <li><strong>Nachsorge in drei Regionen:</strong> Für Ihren Komfort können Sie wählen, ob Sie Ihre Nachuntersuchungen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> durchführen lassen möchten.</li>
                    <li><strong>Remote-Konsultation:</strong> Erste Einschätzungen können per Fotoprüfung oder Videocall durchgeführt werden, um Ihre chirurgische Reise zu optimieren.</li>
                </ul>
            `
        }
    ]
};

export default otoplastyContent;