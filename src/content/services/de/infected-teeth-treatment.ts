import type { ServiceContent } from '@/lib/services';

const rootCanalContent: ServiceContent = {
    description: [
        "Die Wurzelkanalbehandlung oder endodontische Therapie ist ein spezialisiertes Verfahren, das darauf abzielt, einen natürlichen Zahn zu retten, der schwer geschädigt, entzündet oder infiziert ist. Im Zentrum jedes Zahns befindet sich die „Pulpa“ – ein Geflecht aus Nerven und Blutgefäßen. Wenn dieser Bereich durch Bakterien geschädigt wird, kann dies starke Schmerzen verursachen oder zu einem Abszess führen. Eine Wurzelkanalbehandlung entfernt das erkrankte Gewebe, eliminiert die Infektion und versiegelt den Zahn, um weitere Probleme zu verhindern.",
        "Die moderne Endodontie hat dieses Verfahren in eine komfortable Routinebehandlung verwandelt, die einer normalen Füllung ähnelt. Mit einer Wurzelkanaltherapie entscheiden Sie sich für den Erhalt Ihrer natürlichen Zahnsubstanz. Dies ist stets der beste Weg, um die Gesundheit Ihres Kieferknochens, Ihre Beißkraft und die natürliche Ausrichtung Ihres Lächelns zu bewahren."
    ],
    benefits: [
        "Schmerzlinderung: Eliminiert sofort die Quelle akuter Zahnschmerzen und Druckgefühle.",
        "Zahnerhalt: Rettet Ihren natürlichen Zahn und macht Extraktionen sowie Implantate überflüssig.",
        "Infektionskontrolle: Entfernt Bakterien, um die Ausbreitung der Infektion auf den Kiefer und das umliegende Gewebe zu verhindern.",
        "Natürliche Funktionalität: Stellt Ihre Fähigkeit wieder her, mit Ihrem Originalzahn normal zu kauen und zu sprechen.",
        "Kosteneffizient: Den Erhalt eines Zahns zu sichern ist deutlich kostengünstiger als der Ersatz durch eine Brücke oder ein Implantat."
    ],
    quickFacts: {
        procedureTime: '60 - 90 Minuten pro Sitzung (meist 1-2 Sitzungen)',
        anesthesia: 'Lokalanästhesie (schmerzfreies Verfahren)',
        recoveryTime: '2 - 3 Tage bis zum Abklingen der Empfindlichkeit',
        results: 'Dauerhafte Entfernung der Infektion; Zahn durch Krone geschützt',
    },
    sections: [
        {
            id: 'advanced-endodontics',
            title: 'Unser fortschrittlicher endodontischer Ansatz',
            content: `
                <p>Wir kombinieren klinische Expertise mit modernster Technologie, um höchste Erfolgsquoten für die Wurzelkanaltherapie zu gewährleisten:</p>
                <ul>
                    <li><strong>Digitale Apex-Lokatoren:</strong> Wir nutzen elektronische Sensoren, um die Länge Ihrer Wurzelkanäle präzise zu messen und eine gründliche Reinigung sicherzustellen.</li>
                    <li><strong>Rotierende Endodontie:</strong> Hochmoderne, flexible Nickel-Titan-Instrumente ermöglichen es uns, Kanäle effizienter und komfortabler zu reinigen und zu formen als mit herkömmlichen Handfeilen.</li>
                    <li><strong>Biokompatible Versiegelung:</strong> Wir verwenden hochwertige Guttapercha und antimikrobielle Versiegler, um die Kanäle hermetisch gegen zukünftiges Eindringen von Bakterien abzudichten.</li>
                </ul>
            `
        },
        {
            id: 'procedure-steps',
            title: 'Den Ablauf verstehen',
            content: `
                <p>Die Wurzelkanalbehandlung ist ein akribischer, mehrstufiger Prozess, der auf vollständige Desinfektion ausgerichtet ist:</p>
                <ol>
                    <li><strong>Diagnose & Betäubung:</strong> Wir nutzen digitale Röntgenaufnahmen, um die Infektion zu lokalisieren und sicherzustellen, dass der Zahn vollständig betäubt ist.</li>
                    <li><strong>Reinigung:</strong> Die infizierte Pulpa wird entfernt, und die Kanäle werden sorgfältig desinfiziert und geformt.</li>
                    <li><strong>Versiegelung:</strong> Die hohlen Kanäle werden mit einem gummiartigen Material gefüllt, um strukturellen Halt zu bieten und eine Reinfektion zu verhindern.</li>
                    <li><strong>Endgültige Restauration:</strong> Da der Zahn nach der Behandlung spröder ist, empfehlen wir fast immer eine <strong>Zahnkrone</strong>, um seine volle Stabilität und Ästhetik wiederherzustellen.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Nachsorge und Empfindlichkeit',
            content: `
                <p>Die Erholung nach der Behandlung ist in der Regel sehr unkompliziert:</p>
                <ul>
                    <li><strong>Umgang mit Empfindlichkeit:</strong> Es ist normal, dass sich der Bereich für einige Tage leicht empfindlich anfühlt. Dies lässt sich meist gut mit gängigen rezeptfreien Schmerzmitteln behandeln.</li>
                    <li><strong>Kaugewohnheiten:</strong> Vermeiden Sie es, mit dem behandelten Zahn auf harte Lebensmittel zu beißen, bis Ihre endgültige Krone eingesetzt wurde.</li>
                    <li><strong>Mundhygiene:</strong> Putzen und pflegen Sie Ihre Zähne wie gewohnt weiter. Ein wurzelkanalbehandelter Zahn ist weiterhin anfällig für Zahnfleischerkrankungen, daher bleibt regelmäßige Hygiene entscheidend.</li>
                </ul>
            `
        },
        {
            id: 'global-patient-experience',
            title: 'Unterstützung für internationale Patienten',
            content: `
                <p>Wir bieten Gästen, die für ihre Zahnbehandlung aus dem Ausland anreisen, einen optimierten Ablauf:</p>
                <ul>
                    <li><strong>Priorisierte Terminplanung:</strong> Wir koordinieren Ihre Wurzelbehandlung und das Einsetzen der Krone so, dass sie perfekt in Ihren Reiseplan passen.</li>
                    <li><strong>Reise-Concierge:</strong> Unterstützung bei erstklassigen Unterkünften und lokalem Transport in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Integrierte Versorgung:</strong> Greifen Sie an all unseren regionalen Standorten auf Ihre Behandlungsunterlagen und Nachsorge-Support zu.</li>
                </ul>
            `
        }
    ]
};

export default rootCanalContent;