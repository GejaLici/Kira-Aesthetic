import type { ServiceContent } from '@/lib/services';

const xanthelasmaRemovalContent: ServiceContent = {
    description: [
        "Xanthelasmen sind gelbliche, flache Plaques aus Cholesterinablagerungen, die sich an oder um die Augenlider entwickeln. Obwohl sie medizinisch harmlos sind, können sie optisch störend sein und oft das Selbstvertrauen einer Person beeinträchtigen. In unserer Klinik nutzen wir die Plasma-Arc-Therapie (Fibroblast) – eine hochmoderne, nicht-chirurgische Lösung, die diese Ablagerungen effektiv beseitigt, ohne dass Skalpelle, Nähte oder herkömmliche Operationen erforderlich sind.",
        "Die Plasma-Arc-Technik verwendet ein spezialisiertes Gerät, um eine mikroskopische elektrische Entladung zu erzeugen, die das oberflächliche Gewebe des Xanthelasmas sublimiert. Dieser Prozess verdampft die Cholesterinablagerung sofort, während die umliegende gesunde Haut intakt bleibt. Dieser präzisionsfokussierte Ansatz reduziert das Narbenrisiko erheblich und sorgt für eine glattere, klarere Lidkontur mit einer viel schnelleren Erholungszeit als die chirurgische Exzision."
    ],
    benefits: [
        "Nicht-chirurgische Präzision: Keine Schnitte oder Nähte erforderlich, wodurch die empfindliche Haut des Augenlids geschont wird.",
        "Minimale Ausfallzeit: Patienten können unmittelbar nach dem Eingriff zu den meisten täglichen Aktivitäten zurückkehren.",
        "Hohe Wirksamkeit: Entfernt selbst hartnäckige Cholesterin-Plaques effektiv in einer oder zwei Sitzungen.",
        "Sicher für die Augenlider: Der kontrollierte Plasmabogen beeinflusst nur die gezielte oberflächliche Hautschicht.",
        "Natürliche Heilung: Stimuliert die natürlichen Regenerationsprozesse der Haut für ein glattes Endergebnis."
    ],
    quickFacts: {
        procedureTime: '15 - 30 Minuten',
        anesthesia: 'Starke topische Betäubungscreme',
        recoveryTime: '5 - 10 Tage bis zum Abfallen der Schorfkrusten',
        results: 'Sichtbare Klärung nach Abschluss der Heilung (ca. 2-3 Wochen)',
    },
    sections: [
        {
            id: 'plasma-arc-technology',
            title: 'Wie Plasma-Sublimation funktioniert',
            content: `
                <p>Im Gegensatz zu Lasern oder Kauterisation arbeitet die Plasma-Arc-Technologie nach dem Prinzip der Sublimation – der direkten Umwandlung eines Feststoffs in Gas:</p>
                <ul>
                    <li><strong>Ionisiertes Gas:</strong> Das Gerät erzeugt einen winzigen „Lichtbogen“ aus Plasma zwischen der Spitze des Pens und der Haut.</li>
                    <li><strong>Lokalisierte Verdampfung:</strong> Die thermische Energie verdampft die Cholesterin-Plaque, ohne überschüssige Wärme an die tiefere Dermis abzugeben.</li>
                    <li><strong>Gewebekontraktion:</strong> Der Prozess löst zudem eine sofortige Kontraktion der Hautfasern aus, was einen leichten Lifting-Effekt im Augenlidbereich bewirkt.</li>
                </ul>
            `
        },
        {
            id: 'the-procedure-experience',
            title: 'Ihre Behandlungsreise',
            content: `
                <p>Wir priorisieren Patientenkomfort und klinische Sicherheit in jeder Sitzung:</p>
                <ol>
                    <li><strong>Klinische Diagnose:</strong> Wir bestätigen, dass es sich um Xanthelasmen handelt, und bewerten deren Tiefe und Verteilung.</li>
                    <li><strong>Betäubung:</strong> Ein hochwirksames topisches Anästhetikum wird für 20–30 Minuten aufgetragen, um sicherzustellen, dass Sie wenig bis gar keine Beschwerden verspüren.</li>
                    <li><strong>Präzise Entfernung:</strong> Der Behandler behandelt systematisch die gelben Plaques und führt den Plasma-Pen mit hoher Präzision über die Ablagerung.</li>
                    <li><strong>Schützende Nachsorge:</strong> Ein spezieller Heilbalsam wird auf die behandelte Stelle aufgetragen, um die Erholungsphase einzuleiten.</li>
                </ol>
            `
        },
        {
            id: 'recovery-aftercare',
            title: 'Heilung & Pflege nach der Behandlung',
            content: `
                <p>Der Erfolg der Entfernung hängt stark von der Einhaltung des Nachbehandlungsprotokolls ab:</p>
                <ul>
                    <li><strong>Schorfkrusten:</strong> Es bilden sich kleine, braune Schutzverkrustungen. Es ist lebenswichtig, diese <strong>nicht abzukratzen oder zu manipulieren</strong>; sie müssen natürlich abfallen, um Narben zu vermeiden.</li>
                    <li><strong>Lidschwellung:</strong> Leichte bis mäßige Schwellungen sind in den ersten 48–72 Stunden normal. Kalte Kompressen (ohne direkten Wasserkontakt) können helfen.</li>
                    <li><strong>Sonnenschutz:</strong> Die „neue“ Haut darunter ist hochempfindlich. Sie müssen mehrere Monate lang täglich SPF 50+ auftragen, um Hyperpigmentierung zu vermeiden.</li>
                    <li><strong>Systemische Wartung:</strong> Da Xanthelasmen mit Cholesterin in Verbindung stehen, empfehlen wir, Ihre Lipidwerte mit Ihrem Arzt zu überwachen, um neue Ablagerungen zu verhindern.</li>
                </ul>
            `
        },
        {
            id: 'international-patients',
            title: 'Elite-Service für internationale Patienten',
            content: `
                <p>Wir begrüßen Patienten aus aller Welt, die nach nicht-invasiven Augenlidbehandlungen suchen:</p>
                <ul>
                    <li><strong>Express-Heilungsunterstützung:</strong> Wir stellen alle notwendigen Nachpflegeprodukte in einem Reiseset für Ihre Heimreise zur Verfügung.</li>
                    <li><strong>Integrierte Pflegestandorte:</strong> Beginnen Sie Ihre Behandlung in <strong>Albanien</strong> und erhalten Sie Nachsorge in unseren Kliniken im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Full Concierge:</strong> Wir unterstützen Sie bei Flughafentransfers und der Unterbringung in der Nähe unserer Einrichtungen, um einen stressfreien Ablauf zu gewährleisten.</li>
                </ul>
            `
        }
    ]
};

export default xanthelasmaRemovalContent;