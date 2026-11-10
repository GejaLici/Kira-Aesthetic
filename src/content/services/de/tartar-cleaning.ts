import type { ServiceContent } from '@/lib/services';

const teethCleaningContent: ServiceContent = {
    description: [
        "Die professionelle Zahnreinigung, medizinisch als Prophylaxe bekannt, ist die wichtigste präventive Behandlung in der modernen Zahnheilkunde. Selbst bei sorgfältigem Zähneputzen und der Verwendung von Zahnseide zu Hause kann sich Plaque – ein klebriger Bakterienfilm – in schwer zugänglichen Bereichen ansammeln und zu Zahnstein (Calculus) mineralisieren. Sobald sich Zahnstein gebildet hat, kann er nicht mehr mit einer Zahnbürste entfernt werden und erfordert professionelle Hilfe, um Karies und Zahnfleischerkrankungen vorzubeugen.",
        "Unser Protokoll für die Tiefenreinigung geht über die Oberfläche hinaus, um Bakterienkolonien und verhärtete Ablagerungen zu beseitigen, die Ihre Mundgesundheit gefährden. Durch die Kombination von fortschrittlichem Ultraschall-Scaling mit hochpräziser Politur stellen wir die glatte Oberfläche Ihres Zahnschmelzes wieder her. Dies erschwert es neuer Plaque, sich festzusetzen, und hinterlässt ein bemerkenswert frisches und sauberes Gefühl im Mund."
    ],
    benefits: [
        "Kariesprävention: Entfernt saure Bakterienansammlungen, die den Zahnschmelz angreifen.",
        "Schutz vor Zahnfleischerkrankungen: Stoppt Gingivitis (Zahnfleischentzündung), bevor sie zu dauerhaftem Knochenabbau (Parodontitis) führt.",
        "Entfernung von Verfärbungen: Poliert sanft äußere Verfärbungen durch Kaffee, Tee, Rotwein und Tabak weg.",
        "Frischer Atem: Eliminiert schwefelproduzierende Bakterien, die die Hauptursache für Mundgeruch (Halitosis) sind.",
        "Systemische Gesundheit: Reduziert Entzündungen im Mundraum, die klinisch mit Herzerkrankungen und Diabetes in Verbindung gebracht werden."
    ],
    quickFacts: {
        procedureTime: '30 - 60 Minuten',
        anesthesia: 'Nicht erforderlich (topisches Betäubungsgel für empfindliches Zahnfleisch verfügbar)',
        recoveryTime: 'Sofort; stark pigmentierte Lebensmittel für 2-3 Stunden vermeiden',
        results: 'Sofortige Frische und saubereres Erscheinungsbild',
    },
    sections: [
        {
            id: 'cleaning-process',
            title: 'Unser umfassendes Reinigungsprotokoll',
            content: `
                <p>Wir wenden ein mehrstufiges Verfahren an, um sicherzustellen, dass jede Zahnoberfläche akribisch dekontaminiert wird:</p>
                <ul>
                    <li><strong>Ultraschall-Scaling:</strong> Wir verwenden modernste Ultraschallgeräte, die hochfrequente Schwingungen aussenden, um Zahnstein sanft zu „lösen“, ohne den Zahnschmelz zu beschädigen.</li>
                    <li><strong>Manuelles Fein-Scaling:</strong> Unsere Hygieniker verwenden Präzisionshandinstrumente, um hartnäckige Ablagerungen in engen Zwischenräumen und unter dem Zahnfleischrand zu entfernen.</li>
                    <li><strong>Air-Flow oder Prophy-Jet:</strong> Zur fortgeschrittenen Fleckentfernung verwenden wir einen Druckstrahl aus Luft, Wasser und feinem Pulver, um selbst tiefe Furchen und Fissuren zu reinigen.</li>
                    <li><strong>Professionelle Politur:</strong> Mit einem speziellen rotierenden Kelch und Prophylaxepaste wird die Zahnoberfläche geglättet, um ein hochglänzendes Finish zu erzielen.</li>
                </ul>
            `
        },
        {
            id: 'preventive-care',
            title: 'Das Fundament für langfristige Gesundheit',
            content: `
                <p>Eine Reinigungssitzung ist auch eine Gelegenheit für einen detaillierten Gesundheitscheck:</p>
                <ol>
                    <li><strong>Parodontal-Screening:</strong> Wir messen die „Taschen“ zwischen Zähnen und Zahnfleisch, um frühe Anzeichen von Zahnfleischrückgang oder Knochenabbau zu erkennen.</li>
                    <li><strong>Vorsorge gegen Mundhöhlenkrebs:</strong> Eine visuelle Inspektion des Weichgewebes stellt sicher, dass alles gesund aussieht.</li>
                    <li><strong>Individuelles Hygiene-Coaching:</strong> Wir beraten Sie individuell zu den besten Hilfsmitteln (elektrische Bürsten, Interdentalreiniger) für Ihre spezifische Anatomie.</li>
                </ol>
            `
        },
        {
            id: 'frequency-recommendations',
            title: 'Wie oft sollten Sie uns besuchen?',
            content: `
                <p>Während die Standardempfehlung bei <strong>alle sechs Monate</strong> liegt, passen wir die Häufigkeit an Ihr „biologisches Risiko“ an:</p>
                <ul>
                    <li><strong>Niedriges Risiko:</strong> Zweimal pro Jahr ist ausreichend für Patienten mit exzellenter häuslicher Pflege und gesundem Zahnfleisch.</li>
                    <li><strong>Hohes Risiko:</strong> Patienten mit einer Vorgeschichte von Zahnfleischerkrankungen, Raucher oder Träger von Zahnspangen benötigen möglicherweise alle 3–4 Monate eine Reinigung.</li>
                    <li><strong>Diabetes & Schwangerschaft:</strong> Diese Zustände erhöhen das Risiko für Zahnfleischentzündungen, was regelmäßige professionelle Reinigungen noch kritischer macht.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Concierge-Service für globale Patienten',
            content: `
                <p>Für unsere internationalen Kunden betrachten wir eine professionelle Reinigung als Teil eines umfassenden „Smile Check-ups“:</p>
                <ul>
                    <li><strong>Einfache Terminplanung:</strong> Wir koordinieren Ihre Reinigung zusammen mit anderen Behandlungen, um Ihre Zeit in unseren Kliniken optimal zu nutzen.</li>
                    <li><strong>Regionaler Zugang:</strong> Pflegen Sie Ihre Mundgesundheit über unser Netzwerk in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Reiseunterstützung:</strong> Hilfe bei Transport und erstklassiger Unterkunft, um Ihren Zahnarztbesuch stressfrei zu gestalten.</li>
                </ul>
            `
        }
    ]
};

export default teethCleaningContent;