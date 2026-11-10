
import type { ServiceContent } from '@/lib/services';

const toothFillingsContent: ServiceContent = {
    description: [
        "Eine Zahnfüllung ist eine grundlegende restaurative Maßnahme zur Behandlung von Karies. Wenn Bakterien den Zahnschmelz angreifen, entstehen Hohlräume, die – wenn sie unbehandelt bleiben – bis zum empfindlichen Zahnnerv vordringen und starke Schmerzen oder Infektionen verursachen können. Eine Füllung stoppt diesen Prozess, indem das geschädigte Gewebe entfernt und der Hohlraum mit einem langlebigen, biokompatiblen Material versiegelt wird.",
        "Die moderne restaurative Zahnheilkunde hat sich weit über die traditionellen Metalle hinausentwickelt. In unserer Klinik setzen wir auf hochwertige Kompositharze (zahnfarbene Füllungen), die nicht nur die strukturelle Integrität Ihres Zahnes wiederherstellen, sondern auch die natürliche Lichtdurchlässigkeit und Farbe Ihres Zahnschmelzes imitieren. Dies stellt sicher, dass Ihre Zahnbehandlung funktionell stabil und ästhetisch nicht von Ihren natürlichen Zähnen zu unterscheiden ist."
    ],
    benefits: [
        "Stoppt Karies: Verhindert die Ausbreitung von Bakterien in tiefere Zahnschichten.",
        "Strukturelle Verstärkung: Stellt die Stabilität des Zahnes für normales Kauen und Beißen wieder her.",
        "Natürliche Ästhetik: Zahnfarbene Kompositmaterialien passen sich perfekt an Ihren Schmelz an.",
        "Vermeidung von Komplikationen: Eine rechtzeitige Füllung verhindert invasive Eingriffe wie Wurzelkanalbehandlungen.",
        "Schonung der Zahnsubstanz: Moderne Klebetechniken erfordern nur einen minimalen Abtrag gesunder Zahnsubstanz."
    ],
    quickFacts: {
        procedureTime: '20 - 45 Minuten pro Zahn',
        anesthesia: 'Lokalanästhesie für eine schmerzfreie Behandlung',
        recoveryTime: 'Sofort; warten Sie mit dem Essen, bis die Betäubung abgeklungen ist',
        results: 'Langfristige Wiederherstellung von Funktion und Form des Zahnes',
    },
    sections: [
        {
            id: 'material-excellence',
            title: 'Hochentwickelte Komposit-Technologie',
            content: `
                <p>Wir verwenden primär "weiße" Kompositfüllungen aus mehreren klinischen Gründen:</p>
                <ul>
                    <li><strong>Ästhetische Anpassung:</strong> Wir nutzen eine umfassende Farbskala, um das Harz exakt auf Ihre individuelle Zahnfarbe abzustimmen.</li>
                    <li><strong>Chemische Verbindung:</strong> Im Gegensatz zu Amalgamfüllungen gehen Komposite eine direkte Verbindung mit der Zahnstruktur ein und stützen diese zusätzlich.</li>
                    <li><strong>Vielseitigkeit:</strong> Komposite können sowohl zur Kariesbehandlung als auch zur Reparatur von abgebrochenen oder rissigen Zähnen verwendet werden.</li>
                    <li><strong>Sicherheit:</strong> Unsere Harze sind quecksilberfrei und reagieren kaum auf Temperaturschwankungen im Mundraum.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Der Restaurationsprozess',
            content: `
                <p>Eine Füllung ist ein präziser Routineeingriff, der sorgfältig durchgeführt wird:</p>
                <ol>
                    <li><strong>Anästhesie:</strong> Ein lokales Betäubungsmittel sorgt dafür, dass Sie während des gesamten Vorgangs keine Schmerzen spüren.</li>
                    <li><strong>Kariesentfernung:</strong> Die geschädigte Zahnsubstanz wird mit spezialisierten Instrumenten schonend entfernt.</li>
                    <li><strong>Dekontamination:</strong> Der Hohlraum wird gründlich gereinigt und desinfiziert, um verbleibende Bakterien zu eliminieren.</li>
                    <li><strong>Schichtung:</strong> Das Kompositmaterial wird in dünnen Schichten aufgetragen und jede Schicht mit einem speziellen Blaulicht ausgehärtet.</li>
                    <li><strong>Anpassung:</strong> Wir prüfen Ihren Biss und polieren die Füllung für ein glattes, natürliches Gefühl.</li>
                </ol>
            `
        }
    ]
};

export default toothFillingsContent;
