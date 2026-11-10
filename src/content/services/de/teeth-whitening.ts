import type { ServiceContent } from '@/lib/services';

const teethWhiteningContent: ServiceContent = {
    description: [
        "Professionelle Zahnaufhellung ist ein schnelles, sicheres und nicht-invasives kosmetisches Verfahren, das darauf ausgelegt ist, jahrelange Verfärbungen zu entfernen. Im Laufe der Zeit können Faktoren wie der natürliche Alterungsprozess sowie der Konsum von Kaffee, Tee, Rotwein oder Tabak das Strahlen Ihres Lächelns trüben. Professionelles Bleaching verwendet medizinische Bleichmittel, um tief sitzende Pigmente im Zahnschmelz aufzuspalten und ein Lächeln zum Vorschein zu bringen, das deutlich heller und jugendlicher wirkt.",
        "Während frei verkäufliche Produkte oft ungleichmäßige Ergebnisse liefern und Zahnfleischirritationen verursachen können, sind unsere klinikgeführten Behandlungen auf Ihr spezifisches Zahnprofil abgestimmt. Durch die Verwendung hochkonzentrierter Gele und fortschrittlicher Lichtaktivierungstechnologie gewährleisten wir ein gleichmäßiges Ergebnis, das Ihr empfindliches Weichgewebe schützt und gleichzeitig eine dramatische Veränderung in einer einzigen Sitzung erzielt."
    ],
    benefits: [
        "Sofortige Verwandlung: Erreichen Sie ein um mehrere Nuancen helleres Lächeln in nur einer Stunde.",
        "Präzision & Sicherheit: Maßgefertigte Schienen und Schutzbarrieren verhindern Irritationen am Zahnfleisch.",
        "Langanhaltende Ergebnisse: Formeln in Profiqualität bieten dauerhaftere Resultate als Alternativen aus der Drogerie.",
        "Stärkung des Selbstvertrauens: Ein helleres Lächeln wird oft mit Gesundheit, Vitalität und verbessertem Selbstwertgefühl assoziiert.",
        "Maßgeschneiderte Lösungen: Wählen Sie zwischen einem schnellen Verfahren in der Praxis oder einem praktischen professionellen Home-Kit."
    ],
    quickFacts: {
        procedureTime: '60 Minuten (In der Praxis) oder 10-14 Tage (Home-Bleaching)',
        anesthesia: 'Nicht erforderlich',
        recoveryTime: 'Keine; vorübergehende Empfindlichkeit kann für 24-48 Stunden auftreten',
        results: 'Strahlendes, aufgehelltes Lächeln unmittelbar nach der Behandlung sichtbar',
    },
    sections: [
        {
            id: 'whitening-options',
            title: 'Unsere fortschrittlichen Aufhellungstechnologien',
            content: `
                <p>Wir bieten weltweit führende Aufhellungsprotokolle an, um maximale Wirksamkeit bei minimaler Sensibilität zu gewährleisten:</p>
                <ul>
                    <li><strong>Laser-aktiviertes In-Office-Bleaching:</strong> Der Goldstandard für Schnelligkeit. Ein starkes Peroxid-Gel wird aufgetragen und durch eine spezielle Lichtquelle aktiviert, um den Bleichprozess zu beschleunigen – perfekt für besondere Anlässe.</li>
                    <li><strong>Individuelle Home-Bleaching-Kits:</strong> Wir erstellen im Labor maßgeformte Schienen, die perfekt auf Ihre Zähne passen. In Kombination mit unserem professionellen Bleichgel erzielen Sie bei einer Anwendung von 30–60 Minuten pro Tag professionelle Ergebnisse bei voller Flexibilität.</li>
                    <li><strong>Internes Bleaching:</strong> Für einzelne Zähne, die sich aufgrund eines Traumas oder einer Wurzelkanalbehandlung dunkel verfärbt haben, bieten wir spezielles internes Bleichen an, um den Zahn farblich an seine Nachbarn anzupassen.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Ihr Weg zur Zahnaufhellung',
            content: `
                <p>Um das beste Ergebnis zu gewährleisten, folgen wir einem strengen klinischen Protokoll:</p>
                <ol>
                    <li><strong>Untersuchung:</strong> Wir prüfen auf Karies oder Zahnfleischrückgang, da Bleichmittel nur auf gesunden Zähnen angewendet werden sollten.</li>
                    <li><strong>Prophylaxe (Reinigung):</strong> Wir empfehlen eine professionelle Reinigung vor dem Bleaching, um Plaque und Zahnstein zu entfernen, damit das Gel direkten Kontakt mit dem Zahnschmelz hat.</li>
                    <li><strong>Farbauswahl:</strong> Wir dokumentieren Ihre aktuelle Zahnfarbe, um den Fortschritt zu verfolgen und Ihnen bei der Wahl eines natürlich wirkenden Zieltons zu helfen.</li>
                    <li><strong>Schutz:</strong> Ihr Zahnfleisch und Ihre Lippen werden mit einer Schutzbarriere isoliert, um jeglichen Kontakt mit dem Bleichgel zu vermeiden.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Erhaltung Ihrer Ergebnisse',
            content: `
                <p>Obwohl eine Zahnaufhellung nicht permanent ist, können Sie die Lebensdauer Ihrer Ergebnisse durch einfache Gewohnheiten verlängern:</p>
                <ul>
                    <li><strong>Die „Weiße Diät“:</strong> Vermeiden Sie stark pigmentierte Lebensmittel (Beeren, Sojasauce) und Getränke (Kaffee, Rotwein) für die ersten 48 Stunden nach der Behandlung.</li>
                    <li><strong>Mundhygiene:</strong> Putzen Sie weiterhin zweimal täglich Ihre Zähne und nutzen Sie Zahnseide, um zu verhindern, dass sich neue Oberflächenverfärbungen festsetzen.</li>
                    <li><strong>Auffrischungen:</strong> Nutzen Sie Ihre individuellen Schienen alle 6 Monate für eine einnächtige Auffrischung, um die maximale Helligkeit Ihres Lächelns zu bewahren.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Concierge-Service für ein globales Lächeln',
            content: `
                <p>Wir bieten eine erstklassige Erfahrung für Patienten, die für kosmetische Zahnheilkunde anreisen:</p>
                <ul>
                    <li><strong>Express-Service:</strong> Wir priorisieren das In-Office-Bleaching für internationale Reisende, damit Sie Ihr neues Lächeln für den Rest Ihres Trips genießen können.</li>
                    <li><strong>Vorbereitung des Home-Kits:</strong> Wir können am ersten Tag Ihre Abdrücke nehmen und Ihre maßgefertigten Schienen innerhalb von 24 Stunden fertigstellen.</li>
                    <li><strong>Logistik-Unterstützung:</strong> Hilfe bei Flughafentransfers und luxuriösen Unterkünften in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                </ul>
            `
        }
    ]
};

export default teethWhiteningContent;