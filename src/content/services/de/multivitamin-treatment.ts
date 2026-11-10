import type { ServiceContent } from '@/lib/services';

const multivitaminTreatmentContent: ServiceContent = {
    description: [
        "Die Multivitamin-Behandlung, eine spezialisierte Form der Mesotherapie, ist ein biologisches Verfahren zur Hautrevitalisierung, das einen hochwirksamen „Cocktail“ aus essenziellen Nährstoffen direkt in die Dermis liefert. Im Gegensatz zu topischer Hautpflege, die oft Schwierigkeiten hat, die Schutzbarriere der Haut zu durchdringen, nutzt die Mesotherapie Mikroinjektionen. So wird sichergestellt, dass Vitamine, Mineralien, Aminosäuren und Antioxidantien die tieferen Schichten erreichen, in denen sie die zelluläre Reparatur und Erneuerung effektiv stimulieren können.",
        "Diese Behandlung fungiert als tiefenwirksame „Hautnahrung“ und liefert die notwendigen Bausteine für die Kollagen- und Elastinproduktion. Sie ist die ideale Lösung für alle, die erste Anzeichen der Hautalterung, Umweltstress oder einen fahlen, müden Teint bekämpfen möchten. Das Ergebnis ist eine tief hydratisierte, festere und leuchtendere Haut, die von innen heraus Gesundheit ausstrahlt."
    ],
    benefits: [
        "Sofortige Strahlkraft: Vitalisiert fahle Haut für einen sichtbaren „Glow“ von innen heraus.",
        "Tiefe Hydratation: Polstert die Haut mit Hyaluronsäure und Mineralien von innen auf.",
        "Antioxidativer Schutz: Neutralisiert freie Radikale, um vorzeitiger Hautalterung und Umweltschäden vorzubeugen.",
        "Verbesserte Elastizität: Stimuliert die natürliche Produktion von Kollagen- und Elastinfasern.",
        "Ebenmäßiger Teint: Hilft, das Hautbild aufzuhellen und kleinere Unregelmäßigkeiten der Struktur zu glätten."
    ],
    quickFacts: {
        procedureTime: '30 - 45 Minuten',
        anesthesia: 'Optionale topische Betäubungscreme',
        recoveryTime: 'Sofort; leichte Rötungen klingen innerhalb von 24 Stunden ab',
        results: 'Sofortige Hydratation; kumulative Verbesserung über 3-6 Sitzungen',
    },
    sections: [
        {
            id: 'bespoke-cocktails',
            title: 'Individuelle Nährstoff-Cocktails',
            content: `
                <p>Wir glauben nicht an Pauschallösungen. Jede Behandlung wird individuell zusammengestellt, um den spezifischen biologischen Bedürfnissen Ihrer Haut gerecht zu werden:</p>
                <ul>
                    <li><strong>Vitamin C & E:</strong> Starke Antioxidantien zur Aufhellung und zum Schutz der Hautbarriere.</li>
                    <li><strong>Vitamin A (Retinoide):</strong> Zur Förderung der Zellneubildung und Reparatur feiner Linien.</li>
                    <li><strong>Hyaluronsäure:</strong> Für intensive Feuchtigkeitsspeicherung und sofortige Aufpolsterung.</li>
                    <li><strong>Aminosäuren & Peptide:</strong> Die essenziellen Proteine für den Aufbau von neuem, festem Hautgewebe.</li>
                    <li><strong>Mineralien (Magnesium, Zink):</strong> Um die Hautgesundheit auszugleichen und Entzündungen zu reduzieren.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure',
            title: 'Was Sie während der Sitzung erwartet',
            content: `
                <p>Die Mesotherapie ist ein schnelles, gut verträgliches Verfahren, das sich leicht in jeden Zeitplan integrieren lässt:</p>
                <ol>
                    <li><strong>Vorbereitung:</strong> Die Haut wird desinfiziert und auf Wunsch wird eine leichte Betäubungscreme auf das Zielareal aufgetragen.</li>
                    <li><strong>Mikro-Injektionen:</strong> Mit einer ultrafeinen Nadel oder einer speziellen Meso-Gun wird das maßgeschneiderte Serum durch eine Serie schneller, oberflächlicher Injektionen verabreicht.</li>
                    <li><strong>Absorption:</strong> Eine sanfte Massage sorgt für die gleichmäßige Verteilung der Nährstoffe in der dermalen Schicht.</li>
                    <li><strong>Schutz:</strong> Wir schließen die Behandlung mit einem kühlenden Serum und einem hohen Lichtschutzfaktor ab, um die Haut zu schützen.</li>
                </ol>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Optimale Ergebnisse & Erhaltung',
            content: `
                <p>Während eine einzelne Sitzung eine sofortige Erfrischung bietet, ist die Mesotherapie als kumulative Therapie konzipiert:</p>
                <ul>
                    <li><strong>Initialphase:</strong> Eine Serie von 3 bis 6 Sitzungen im Abstand von 2 bis 4 Wochen wird empfohlen, um die Haut vollständig mit Nährstoffen zu sättigen.</li>
                    <li><strong>Erhaltung:</strong> Eine Sitzung alle 3 bis 6 Monate ist in der Regel ausreichend, um den Glow zu bewahren und die Anti-Aging-Vorteile fortzuführen.</li>
                    <li><strong>Zielareale:</strong> Diese Behandlung ist nicht nur für das Gesicht, sondern auch für Hals, Dekolleté und Handrücken hochwirksam.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Nahtlose Betreuung für internationale Kunden',
            content: `
                <p>Wir bieten eine erstklassige Erfahrung für Patienten, die für unsere spezialisierten ästhetischen Protokolle anreisen:</p>
                <ul>
                    <li><strong>Umfassende Unterstützung:</strong> Volle Unterstützung bei der Reiselogistik, Flughafentransfers und Unterbringung in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Regionale Nachsorge:</strong> Sie haben die Flexibilität, Ihre Erhaltungstermine an jedem unserer Klinikstandorte in der Region wahrzunehmen.</li>
                    <li><strong>Fachpersonal:</strong> Alle Behandlungen werden von medizinischen Kosmetikerinnen oder Ärzten durchgeführt, die auf injizierbare Hautverjüngung spezialisiert sind.</li>
                </ul>
            `
        }
    ]
};

export default multivitaminTreatmentContent;