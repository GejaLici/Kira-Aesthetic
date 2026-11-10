import type { ServiceContent } from '@/lib/services';

const prpHairContent: ServiceContent = {
    description: [
        "Die PRP-Therapie (Platelet-Rich Plasma) ist eine wegweisende, nicht-operative Lösung zur Haarwiederherstellung, welche die regenerative Kraft Ihres eigenen Blutes nutzt. Diese Form der biologischen Medizin setzt an der Ursache von dünner werdendem Haar an, indem sie eine hohe Konzentration an Wachstumsfaktoren direkt an ruhende oder geschwächte Haarfollikel liefert. Durch das „Wiedererwecken“ dieser Follikel hilft PRP dabei, aktiven Haarausfall zu verlangsamen und das Wachstum dickerer, widerstandsfähigerer Haarsträhnen auszulösen.",
        "Ideal für Männer und Frauen im frühen bis mittleren Stadium von Haarverlust oder androgenetischer Alopezie, bietet die PRP-Therapie eine völlig natürliche Alternative zu synthetischen Medikamenten oder invasiven Operationen. Da die Behandlung Ihr eigenes Plasma verwendet, ist sie außergewöhnlich sicher und biokompatibel. Sie bietet einen wissenschaftlich fundierten Weg zur Wiedererlangung von Haardichte und Kopfhautgesundheit."
    ],
    benefits: [
        "Natürliche Follikelstimulation: Nutzt Wachstumsfaktoren, um die Wachstumsphase des Haarzyklus zu verlängern.",
        "Erhöhte Haardichte: Fördert den Durchmesser einzelner Haarschäfte für ein volleres Erscheinungsbild.",
        "Verlangsamt Haarausfall: Reduziert effektiv das aktive Ausfallen bei Patienten mit anlagebedingtem Haarschwund.",
        "Nicht-operativ & komfortabel: Keine Schnitte, keine Narben und keine nennenswerten Ausfallzeiten.",
        "Gesundheit der Kopfhaut: Verbessert die Durchblutung der Kopfhaut und schafft so ein besseres Umfeld für das Haarwachstum."
    ],
    quickFacts: {
        procedureTime: '45 - 60 Minuten',
        anesthesia: 'Lokalanästhesie oder Kühlung für maximalen Komfort auf der Kopfhaut',
        recoveryTime: 'Sofort; Haarewaschen für 24 Stunden vermeiden',
        results: 'Reduktion des Haarausfalls nach 2-3 Monaten; sichtbares Wachstum nach 4-6 Monaten',
    },
    sections: [
        {
            id: 'biological-mechanism',
            title: 'Die Wissenschaft der Haarregeneration',
            content: `
                <p>PRP wirkt auf zellulärer Ebene, um die Miniaturisierung der Haarfollikel umzukehren:</p>
                <ul>
                    <li><strong>Plättchenkonzentration:</strong> Ihre Blutplättchen enthalten spezialisierte Proteine, die die Zellteilung und Gewebereparatur stimulieren.</li>
                    <li><strong>Freisetzung von Wachstumsfaktoren:</strong> Einmal injiziert, aktivieren diese Faktoren den Wulstbereich des Haarfollikels und signalisieren ihm, aus einer Ruhephase (Telogenphase) zurück in eine aktive Wachstumsphase (Anagenphase) zu wechseln.</li>
                    <li><strong>Vaskularisierung:</strong> PRP fördert die Bildung neuer Blutgefäße, wodurch sichergestellt wird, dass die Follikel den Sauerstoff und die Nährstoffe erhalten, die sie für gesundes Haar benötigen.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Ihre Behandlungsreise',
            content: `
                <p>Eine typische PRP-Sitzung ist effizient und klinisch strukturiert, um eine maximale Vitalität der Blutplättchen zu gewährleisten:</p>
                <ol>
                    <li><strong>Blutentnahme:</strong> Eine kleine Menge Blut wird mit einem sterilen Einweg-Set entnommen.</li>
                    <li><strong>Trennung:</strong> Wir verwenden eine Hochgeschwindigkeitszentrifuge, um das plättchenreiche Plasma von den roten und weißen Blutkörperchen zu isolieren.</li>
                    <li><strong>Mikro-Injektion:</strong> Das konzentrierte „flüssige Gold“ wird in einer spezifischen Tiefe, in der sich die Haarwurzeln befinden, in die Kopfhaut injiziert, wobei der Fokus auf den dünner werdenden Bereichen liegt.</li>
                </ol>
            `
        },
        {
            id: 'results-maintenance',
            title: 'Was Sie erwartet und langfristige Ergebnisse',
            content: `
                <p>Haarwiederherstellung ist ein kumulativer Prozess. Für das beste ästhetische Ergebnis empfehlen wir einen strukturierten Ansatz:</p>
                <ul>
                    <li><strong>Die Initialphase:</strong> Die meisten Patienten benötigen 3 bis 4 erste Sitzungen im Abstand von etwa 4 Wochen, um die Follikel zu reaktivieren.</li>
                    <li><strong>Die Erhaltungsphase:</strong> Um die Ergebnisse aufrechtzuerhalten und dem genetischen Fortschreiten des Haarausfalls entgegenzuwirken, wird in der Regel eine Erhaltungssitzung alle 6 bis 12 Monate empfohlen.</li>
                    <li><strong>Komplementärtherapie:</strong> PRP kann sicher mit anderen Behandlungen wie Minoxidil oder nach einer Haartransplantation kombiniert werden, um die Gesamtdichte zu erhöhen.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-concierge',
            title: 'Globale Betreuung & Logistik',
            content: `
                <p>Wir bieten umfassende Unterstützung für internationale Patienten, die eine fortschrittliche Haarwiederherstellung suchen:</p>
                <ul>
                    <li><strong>Logistik:</strong> Wir unterstützen bei Flughafentransfers und erstklassigen Unterkünften in der Nähe unserer Kliniken in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Regionale Kontinuität:</strong> Sie können Ihre Initialserie in einem Land beginnen und Ihre Erhaltungssitzungen in einem anderen innerhalb unseres klinischen Netzwerks durchführen.</li>
                    <li><strong>Sicherheit & Expertise:</strong> Alle Verfahren werden von zertifiziertem medizinischem Fachpersonal durchgeführt, wobei FDA/CE-geprüfte PRP-Kits verwendet werden, um die höchste Plättchenkonzentration zu garantieren.</li>
                </ul>
            `
        }
    ]
};

export default prpHairContent;