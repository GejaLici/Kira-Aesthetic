import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
    description: [
        "Die Liposuktion ist einer der effektivsten und beliebtesten kosmetischen Eingriffe zur Entfernung hartnäckiger, lokalisierter Fettdepots, die gegen Diät und Sport resistent sind. Durch die dauerhafte Entfernung von Fettzellen aus spezifischen Bereichen – wie Bauch, Hüften, Oberschenkeln, Armen und Hals – ermöglicht die Fettabsaugung eine präzise Körpermodellierung. Sie hilft Ihnen dabei, eine schlankere, proportionalere und ästhetisch ansprechendere Silhouette zu erreichen.",
        "Es ist wichtig zu betonen, dass die Liposuktion eher ein Werkzeug zur Körperkonturierung als eine Methode zur Gewichtsabnahme ist. Die besten Ergebnisse werden bei Patienten erzielt, die sich an oder nahe ihrem Idealgewicht befinden, aber „Problemzonen“ eliminieren möchten. Mit modernen, minimalinvasiven Techniken können wir heute gleichmäßigere Ergebnisse, weniger Blutergüsse und eine schnellere Genesung als je zuvor ermöglichen."
    ],
    benefits: [
        "Gezielte Fettreduktion: Eliminiert lokale Depots, die auf herkömmliche Gewichtsabnahme nicht reagieren.",
        "Dauerhafte Ergebnisse: Einmal aus einem Bereich entfernte Fettzellen wachsen nicht nach.",
        "Präzises Sculpting: Betont die natürlichen Körperkonturen und verbessert die Gesamtproportionen.",
        "Minimalinvasiv: Kleine Schnitte (nur wenige Millimeter) führen zu nahezu unsichtbaren Narben.",
        "Vielseitige Anwendung: Kann verschiedene Bereiche wie Kinn, Rücken, Flanken und Beine behandeln."
    ],
    quickFacts: {
        procedureTime: '1 - 4 Stunden (je nach Volumen)',
        anesthesia: 'Lokalanästhesie mit Sedierung oder Vollnarkose',
        recoveryTime: '3 - 7 Tage bis zur Rückkehr zur Arbeit; 4-6 Wochen für Sport',
        results: 'Erste Veränderungen in Wochen; endgültige Ergebnisse nach 3-6 Monaten',
    },
    sections: [
        {
            id: 'liposuction-techniques',
            title: 'Fortschrittliche Technologien der Fettentfernung',
            content: `
                <p>Wir setzen mehrere hochmoderne Techniken ein, um maximale Präzision und Patientensicherheit zu gewährleisten:</p>
                <ul>
                    <li><strong>Tumeszenz-Liposuktion:</strong> Der Goldstandard, bei dem eine medikamentöse Lösung injiziert wird, um den Bereich zu betäuben und Blutgefäße zu verengen, was die Fettentfernung sanft und effizient macht.</li>
                    <li><strong>VASER Liposuktion:</strong> Nutzt Ultraschallwellen, um Fettzellen selektiv aufzubrechen, während umliegendes Gewebe wie Nerven und Blutgefäße geschont werden.</li>
                    <li><strong>Power-Assisted Liposuction (PAL):</strong> Arbeitet mit einer speziellen vibrierenden Kanüle, die eine sanftere Fettextraktion mit geringerem physischem Trauma für den Körper ermöglicht.</li>
                </ul>
            `
        },
        {
            id: 'treatment-areas',
            title: 'Häufige Behandlungsbereiche',
            content: `
                <p>Die Liposuktion ist ein äußerst vielseitiges Verfahren, das fast jeden Bereich des Körpers verfeinern kann:</p>
                <ul>
                    <li><strong>Bauch & Flanken:</strong> Eliminierung von „Hüftspeck“ und Bauchfett für eine flachere Körpermitte.</li>
                    <li><strong>Oberschenkel & Hüften:</strong> Neugestaltung der Innen- und Außenseiten der Oberschenkel für eine bessere Beinkontur.</li>
                    <li><strong>Oberkörper:</strong> Behandlung des Rückens, von „BH-Röllchen“ und der Oberarme.</li>
                    <li><strong>Gesicht & Hals:</strong> Entfernung von submentalem Fett (Doppelkinn) zur Schärfung der Kieferlinie.</li>
                </ul>
            `
        },
        {
            id: 'recovery-guidelines',
            title: 'Postoperative Pflege & Genesung',
            content: `
                <p>Die Einhaltung Ihres Genesungsplans ist entscheidend für eine glatte Haut und optimale Konturen:</p>
                <ol>
                    <li><strong>Kompressionskleidung:</strong> Sie müssen für 4–6 Wochen ein medizinisches Kompressionsmieder tragen. Dies kontrolliert Schwellungen und hilft der Haut, sich an die neue Form anzupassen.</li>
                    <li><strong>Physische Aktivität:</strong> Während anfangs Ruhe nötig ist, wird leichtes Gehen innerhalb von 24 Stunden empfohlen, um Blutgerinnseln vorzubeugen.</li>
                    <li><strong>Umgang mit Schwellungen:</strong> Hämatome und Schwellungen erreichen in der ersten Woche ihren Höhepunkt. Wir empfehlen oft Lymphdrainage-Massagen, um den Heilungsprozess zu beschleunigen.</li>
                </ol>
            `
        },
        {
            id: 'international-support',
            title: 'Erstklassige Betreuung für internationale Patienten',
            content: `
                <p>Wir bieten unseren aus dem Ausland anreisenden Patienten eine reibungslose Erfahrung im Bereich des Medizintourismus:</p>
                <ul>
                    <li><strong>Logistik-Support:</strong> Unterstützung bei Flughafentransfers und erstklassigen Unterkünften in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Nachsorge-Netzwerk:</strong> Sie können Ihre postoperativen Kontrollen in jeder unserer Kliniken in der Region durchführen.</li>
                    <li><strong>Umfassende Sicherheit:</strong> Alle Eingriffe werden in akkreditierten chirurgischen Zentren von zertifizierten plastischen Chirurgen durchgeführt.</li>
                </ul>
            `
        }
    ]
};

export default liposuctionContent;