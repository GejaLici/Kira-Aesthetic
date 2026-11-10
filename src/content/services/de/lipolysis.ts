import type { ServiceContent } from '@/lib/services';

const injectionLipolysisContent: ServiceContent = {
    description: [
        "Die Injektionslipolyse, gemeinhin als Fett-weg-Spritze bekannt, ist eine minimalinvasive Behandlung zur Beseitigung hartnäckiger, lokalisierter Fettdepots, die resistent gegen Diät und Sport sind. Bei diesem Verfahren werden spezielle Wirkstoffe, wie beispielsweise Desoxycholsäure, eingesetzt, um die Membranen der Fettzellen aufzubrechen. Sobald die Fettzellen zerstört sind, metabolisiert und eliminiert der Körper die freigesetzten Fettsäuren auf natürlichem Weg über das Lymphsystem.",
        "Diese Behandlung ist eine ideale nicht-chirurgische Lösung für die präzise Körperkonturierung. Sie ist spezifisch für die „punktuelle Reduktion“ in Bereichen wie Kinn, Bauch und Oberschenkeln gedacht. Obwohl sie kein Ersatz für eine Gewichtsabnahme ist, bietet sie eine effektive Möglichkeit, die Silhouette zu verfeinern und ein definierteres Erscheinungsbild mit minimaler Ausfallzeit zu erreichen."
    ],
    benefits: [
        "Nicht-chirurgisch: Erreicht Fettreduktion ohne Schnitte, Narben oder Vollnarkose.",
        "Gezielte Konturierung: Behandelt präzise Problemzonen wie das Doppelkinn oder BH-Polster.",
        "Dauerhafte Ergebnisse: Einmal zerstörte Fettzellen kehren im behandelten Bereich nicht zurück.",
        "Minimale Ausfallzeit: Die meisten Patienten können sofort nach der Sitzung zu ihren täglichen Aktivitäten zurückkehren.",
        "Natürliche Elimination: Arbeitet mit den körpereigenen Stoffwechselprozessen zusammen, um Fett abzubauen."
    ],
    quickFacts: {
        procedureTime: '15 - 30 Minuten',
        anesthesia: 'Keine (Lösung enthält Betäubungsmittel)',
        recoveryTime: 'Schwellung für 3 - 7 Tage; keine Ausfallzeit im Beruf',
        results: 'Sichtbar nach 6 - 8 Wochen; erfordert typischerweise 2-4 Sitzungen',
    },
    sections: [
        {
            id: 'treatment-areas',
            title: 'Häufige Behandlungsbereiche',
            content: `
                <p>Die Injektionslipolyse ist hocheffektiv für kleine Fettpolster, welche die natürlichen Linien des Körpers stören:</p>
                <ul>
                    <li><strong>Submentales Fett:</strong> Eliminierung eines „Doppelkinns“ zur Schärfung der Kieferlinie.</li>
                    <li><strong>Körperkonturierung:</strong> Behandlung von Love Handles, kleinen Bauchansätzen und „Reiterhosen“ an den Oberschenkeln.</li>
                    <li><strong>Spezifische Fettdepots:</strong> Reduktion von BH-Röllchen, Fett am Innenknie und am Rücken.</li>
                    <li><strong>Postoperative Verfeinerung:</strong> Glättung kleinerer Unregelmäßigkeiten nach einer Fettabsaugung (Liposuktion).</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Was Sie während der Behandlung erwartet',
            content: `
                <p>Der Prozess ist schnell und klinisch, mit Fokus auf Sicherheit und gleichmäßige Verteilung:</p>
                <ol>
                    <li><strong>Mapping:</strong> Der Behandler markiert den Behandlungsbereich in einem rasterähnlichen Muster, um präzise Injektionsabstände zu gewährleisten.</li>
                    <li><strong>Injektionen:</strong> Eine Serie kleiner, flacher Injektionen wird direkt in die Fettschicht gesetzt. Sie spüren eventuell ein kurzes Brennen oder ein Wärmegefühl.</li>
                    <li><strong>Entzündungsreaktion:</strong> Unmittelbar danach wird der Bereich rot und schwillt an. Dies ist ein positives Zeichen dafür, dass der Lipolyseprozess ausgelöst wurde.</li>
                </ol>
            `
        },
        {
            id: 'recovery-timeline',
            title: 'Heilung und Ergebnisentwicklung',
            content: `
                <p>Im Gegensatz zu chirurgischen Eingriffen treten die Ergebnisse der Lipolyse schrittweise ein, während der Körper das Fett verarbeitet:</p>
                <ul>
                    <li><strong>Tag 1-5:</strong> Deutliche Schwellungen und Druckempfindlichkeit sind zu erwarten, besonders bei Behandlungen im Kinnbereich.</li>
                    <li><strong>Woche 2-4:</strong> Die anfängliche Entzündung lässt nach, und der Körper beginnt mit dem allmählichen Prozess der Lymphdrainage.</li>
                    <li><strong>Woche 6-8:</strong> Der konturierende Effekt wird sichtbar. Dies ist der optimale Zeitpunkt, um zu beurteilen, ob eine weitere Sitzung erforderlich ist.</li>
                    <li><strong>Erhaltung:</strong> Um die Ergebnisse zu bewahren, ist es wichtig, ein stabiles Gewicht durch gesunde Lebensgewohnheiten zu halten.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Concierge-Service für internationale Patienten',
            content: `
                <p>Wir gewährleisten einen reibungslosen Ablauf für Patienten, die für ein nicht-chirurgisches Body-Contouring anreisen:</p>
                <ul>
                    <li><strong>Koordinierte Sitzungen:</strong> Für Patienten aus dem Ausland planen wir Behandlungszyklen, die optimal in Ihren Reiseplan passen.</li>
                    <li><strong>Reiseunterstützung:</strong> Unterstützung bei Transport und erstklassiger Unterbringung in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Regionale Nachsorge:</strong> Sie können jeden unserer Klinikstandorte für Folgesitzungen oder Kontrollen wählen, was eine grenzüberschreitende Kontinuität der Versorgung ermöglicht.</li>
                </ul>
            `
        }
    ]
};

export default injectionLipolysisContent;