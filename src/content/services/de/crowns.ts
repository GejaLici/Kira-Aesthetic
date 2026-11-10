import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "Eine Zahnkrone ist eine individuell gefertigte „Kappe“, die dazu dient, einen beschädigten, geschwächten oder ästhetisch beeinträchtigten Zahn vollständig zu umschließen. Indem sie den gesamten sichtbaren Teil des Zahns oberhalb des Zahnfleischsaums abdeckt, stellt eine Krone seine ursprüngliche Form, Größe und Stärke wieder her und bietet gleichzeitig eine Schutzbarriere gegen weiteren Verfall oder Brüche.",
        "Moderne Zahnkronen sind so konzipiert, dass sie sich nahtlos in Ihr natürliches Lächeln einfügen. Ob Sie einen Zahn nach einer Wurzelbehandlung verstärken, eine große Füllung stützen oder ein Zahnimplantat abdecken müssen – unsere Kronen nutzen fortschrittliche biokompatible Materialien, die das perfekte Gleichgewicht zwischen struktureller Haltbarkeit und lebensnaher Transluzenz bieten."
    ],
    benefits: [
        "Wiederherstellung der strukturellen Integrität von gebrochenen, rissigen oder stark abgenutzten Zähnen.",
        "Essenzieller Schutz für schwache Zähne, um zukünftige Frakturen zu verhindern.",
        "Verbesserung der Ästhetik durch Korrektur von Form, Größe und Farbe missgestalteter Zähne.",
        "Dient als langlebiger Anker für Zahnbrücken und als sichere Abdeckung für Zahnimplantate.",
        "Langfristige Funktionalität mit Ergebnissen, die bei richtiger Pflege 10–15 Jahre oder länger halten können."
    ],
    quickFacts: {
        procedureTime: '2 Besuche (Vorbereitung & Einsetzen)',
        anesthesia: 'Lokalanästhesie',
        recoveryTime: 'Sofort; leichte Empfindlichkeit für 24-48 Stunden',
        results: 'Langlebige Restauration; endgültige Krone wird beim zweiten Besuch eingesetzt',
    },
    sections: [
        {
            id: 'material-options',
            title: 'Hochleistungsmaterialien',
            content: `
                <p>Wir bieten eine Vielzahl von Materialien an, die auf die Position und Funktion des zu restaurierenden Zahns abgestimmt sind:</p>
                <ul>
                    <li><strong>Zirkon:</strong> Bekannt für seine extreme Festigkeit und Biokompatibilität; die ideale Wahl für Backenzähne, die hohem Kaudruck standhalten müssen.</li>
                    <li><strong>Vollkeramik / Porzellan:</strong> Bietet die natürlichste Farbanpassung und Lichtreflexion, was es zum Goldstandard für Frontzähne in der „Lächeln-Zone“ macht.</li>
                    <li><strong>Verblendmetallkeramik (VMK):</strong> Kombiniert ein stabiles Metallinnere für Haltbarkeit mit einer Porzellanaußenseite für ein natürliches Aussehen.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Der Ablauf: Ihr Lächeln wiederherstellen',
            content: `
                <p>Die Restauration eines Zahns mit einer Krone ist ein präziser zweistufiger Prozess:</p>
                <ol>
                    <li><strong>Vorbereitung:</strong> Der Zahn wird vorsichtig beschleift, um Platz für die Krone zu schaffen. Wir nehmen digitale Abdrücke oder traditionelle Formen, um eine perfekte Passform zu garantieren.</li>
                    <li><strong>Temporärer Schutz:</strong> Während Ihre permanente Krone individuell im Labor gefertigt wird, setzen wir eine provisorische Krone ein, um Ihren Zahn zu schützen und Ihren Biss zu erhalten.</li>
                    <li><strong>Endgültiges Einsetzen:</strong> Sobald Ihre individuelle Krone fertig ist, prüfen wir Passform und Farbe akribisch, bevor sie dauerhaft zementiert wird.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Pflege und Langlebigkeit',
            content: `
                <p>Ein überkronter Zahn benötigt die gleiche sorgfältige Pflege wie ein natürlicher Zahn, um seine Langlebigkeit zu gewährleisten:</p>
                <ul>
                    <li><strong>Mundhygiene:</strong> Putzen Sie zweimal täglich und verwenden Sie vorsichtig Zahnseide um die Basis der Krone, um Zahnfleischerkrankungen und Karies am Kronenrand vorzubeugen.</li>
                    <li><strong>Harte Gegenstände vermeiden:</strong> Verzichten Sie auf das Kauen von Eis, harten Bonbons oder Nicht-Lebensmitteln, um ein Absplittern des Porzellans zu verhindern.</li>
                    <li><strong>Routine-Check-ups:</strong> Regelmäßige Zahnarztbesuche ermöglichen es uns, die Integrität der Krone und die Gesundheit des umliegenden Gewebes zu überwachen.</li>
                </ul>
            `
        },
        {
            id: 'international-service',
            title: 'Komfort für internationale Patienten',
            content: `
                <p>Wir sind auf effiziente, hochwertige restaurative Behandlungen für Patienten aus dem Ausland spezialisiert:</p>
                <ul>
                    <li><strong>Effiziente Planung:</strong> Wir koordinieren uns eng mit unseren Dentallaboren, um sicherzustellen, dass Ihr Zahnersatz innerhalb Ihres Reisezeitraums fertiggestellt wird.</li>
                    <li><strong>Logistische Unterstützung:</strong> Volle Unterstützung bei lokalem Transport und komfortabler Unterbringung in der Nähe unserer modernen Klinik.</li>
                    <li><strong>Nachsorge an mehreren Standorten:</strong> Sie können wählen, ob Sie Ihre Nachsorge oder Routinebehandlungen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> durchführen lassen möchten.</li>
                </ul>
            `
        }
    ]
};

export default dentalCrownsContent;