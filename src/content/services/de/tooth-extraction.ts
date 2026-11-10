import type { ServiceContent } from '@/lib/services';

const toothExtractionContent: ServiceContent = {
    description: [
        "Eine Zahnextraktion ist die klinische Entfernung eines Zahns aus seinem Zahnfach im Kieferknochen. Während unser primäres Ziel immer der Erhalt Ihrer natürlichen Zähne ist, wird eine Extraktion zu einer notwendigen und lebensqualitätsverbessernden Maßnahme, wenn ein Zahn so stark geschädigt ist, dass er nicht mehr repariert werden kann. Das Entfernen einer Quelle chronischer Infektionen oder starker Schmerzen ist oft der erste Schritt zur Wiederherstellung Ihrer allgemeinen Mundgesundheit und Ihres körperlichen Wohlbefindens.",
        "Ob Sie vor einer Notfallextraktion aufgrund eines Traumas stehen oder einen geplanten Eingriff für Weisheitszähne oder eine kieferorthopädische Platzbeschaffung benötigen – unsere Klinik bietet eine sterile Hightech-Umgebung. Wir konzentrieren uns auf „atraumatische“ Extraktionstechniken. Diese Methoden sind darauf ausgelegt, so viel wie möglich vom umgebenden Knochen- und Zahnfleischgewebe zu erhalten, was entscheidend ist, wenn Sie planen, den Zahn später durch ein Zahnimplantat zu ersetzen."
    ],
    benefits: [
        "Schmerzbeseitigung: Entfernt sofort die Quelle akuter oder chronischer Zahnschmerzen.",
        "Infektionskontrolle: Verhindert die Ausbreitung von Bakterien von einem toten oder eitrig entzündeten Zahn auf den restlichen Körper.",
        "Schutz benachbarter Zähne: Stoppt die Ausbreitung von Karies und verhindert Schäden durch verlagerte Weisheitszähne.",
        "Kieferorthopädischer Erfolg: Schafft den notwendigen Platz für eine effektive Zahnausrichtung bei Engständen.",
        "Basis für Restaurationen: Macht den Weg frei für gesunden, funktionellen Ersatz wie Zahnimplantate."
    ],
    quickFacts: {
        procedureTime: '20 - 60 Minuten (je nach Komplexität)',
        anesthesia: 'Lokalanästhesie (Sedierungsoptionen bei Angstpatienten verfügbar)',
        recoveryTime: '2 - 5 Tage für die erste Heilung; 48 Std. kein schwerer Sport',
        results: 'Beseitigung von Infektion und Schmerz; Vorbereitung des Fachs für künftigen Ersatz',
    },
    sections: [
        {
            id: 'extraction-types',
            title: 'Einfache vs. chirurgische Extraktionen',
            content: `
                <p>Wir kategorisieren Extraktionen basierend auf der Komplexität der Position und dem Zustand des Zahns:</p>
                <ul>
                    <li><strong>Einfache Extraktion:</strong> Wird an Zähnen durchgeführt, die über dem Zahnfleischrand voll sichtbar sind. Mit speziellen Instrumenten (Hebeln und Zangen) wird der Zahn sanft gelockert und unter lokaler Betäubung entfernt.</li>
                    <li><strong>Chirurgische Extraktion:</strong> Erforderlich bei Zähnen, die am Zahnfleischrand abgebrochen oder im Kiefer eingeschlossen sind (wie Weisheitszähne). Dies erfordert einen kleinen Schnitt im Zahnfleisch und manchmal die Teilung des Zahns für eine schonendere Entfernung.</li>
                    <li><strong>Weisheitszahnentfernung:</strong> Spezialisierter Eingriff zur Entfernung der dritten Molaren, die Schmerzen, Zysten oder Engstände verursachen können.</li>
                </ul>
            `
        },
        {
            id: 'comfort-first',
            title: 'Eine schmerzfreie Erfahrung',
            content: `
                <p>Die moderne Zahnheilkunde stellt sicher, dass das Ziehen eines Zahns eine gut bewältigbare und schmerzfreie Erfahrung ist:</p>
                <ol>
                    <li><strong>Tiefenanästhesie:</strong> Wir verwenden modernste Lokalanästhetika, um sicherzustellen, dass der gesamte Bereich vollständig betäubt ist. Sie werden Druck spüren, aber keinen stechenden Schmerz.</li>
                    <li><strong>Sedierung (Dämmerschlaf):</strong> Für Patienten mit Zahnarztphobie oder bei komplexen chirurgischen Fällen bieten wir Sedierungsoptionen an, damit Sie entspannt und stressfrei bleiben.</li>
                    <li><strong>Präoperative Bildgebung:</strong> Hochauflösende Röntgenbilder oder 3D-DVT-Scans werden genutzt, um die genaue Wurzelstruktur und die Nähe zu Nerven vor Beginn des Eingriffs zu bestimmen.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Wichtige Nachsorge & Heilung',
            content: `
                <p>Eine erfolgreiche Heilung hängt vom Schutz des Blutgerinnsels ab, das sich im Zahnfach bildet:</p>
                <ul>
                    <li><strong>Die ersten 24 Stunden:</strong> Beißen Sie 45 Minuten fest auf den Mullbausch. Vermeiden Sie Rauchen, Trinken durch einen Strohhalm und heftiges Ausspülen, da dies eine schmerzhafte „trockene Alveole“ verursachen kann.</li>
                    <li><strong>Ernährung:</strong> Essen Sie weiche, kühle Speisen wie Joghurt, Smoothies und lauwarme Suppen. Vermeiden Sie harte oder scharfe Lebensmittel, die die Wunde reizen könnten.</li>
                    <li><strong>Schwellungsmanagement:</strong> Nutzen Sie am ersten Tag ein Ice-Pack von außen für jeweils 20 Minuten, um Entzündungen zu minimieren.</li>
                    <li><strong>Hygiene:</strong> Putzen Sie Ihre anderen Zähne normal, aber spülen Sie nach den ersten 24 Stunden sanft mit warmem Salzwasser, um die Extraktionsstelle sauber zu halten.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Notfall- & chirurgische Versorgung für Reisende',
            content: `
                <p>Wir bieten schnelle Hilfe für internationale Patienten bei Zahnnotfällen oder geplanten oralchirurgischen Eingriffen:</p>
                <ul>
                    <li><strong>Sofort-Termine:</strong> Wir halten Notfall-Termine für Reisende mit akuten Schmerzen frei, die eine dringende Extraktion benötigen.</li>
                    <li><strong>Planung des Zahnersatzes:</strong> Wenn Sie für eine Extraktion anreisen, können wir gleichzeitig eine „Socket Preservation“ (Knochenerhalt) durchführen, um Sie optimal auf ein späteres Implantat vorzubereiten.</li>
                    <li><strong>Netzwerk-Vorteil:</strong> Lassen Sie den Eingriff in <strong>Albanien</strong> durchführen und nutzen Sie unsere Standorte in <strong>Italien</strong> oder im <strong>Kosovo</strong> für die Nachkontrolle.</li>
                </ul>
            `
        }
    ]
};

export default toothExtractionContent;