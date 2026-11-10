import type { ServiceContent } from '@/lib/services';

const removableOrthodonticsContent: ServiceContent = {
    description: [
        "Herausnehmbare kieferorthopädische Apparaturen sind maßgefertigte Geräte, die vom Patienten leicht selbst eingesetzt und wieder herausgenommen werden können. Im Gegensatz zu herkömmlichen festsitzenden Zahnspangen bieten diese Apparaturen ein hohes Maß an Flexibilität. Sie werden primär für kleinere Zahnbewegungen, zur Steuerung des Kieferwachstums bei Kindern sowie in der kritischen Retentionsphase nach einer umfassenden kieferorthopädischen Behandlung eingesetzt.",
        "Obwohl sie in komplexen Fällen kein Ersatz für festsitzende Zahnspangen sind, stellen herausnehmbare Apparaturen unverzichtbare Werkzeuge dar, um spezifische funktionelle Ziele zu erreichen und das Ergebnis eines perfekt ausgerichteten Lächelns zu sichern. Ob es sich um einen transparenten Retainer oder eine Funktionsplatte handelt – der Erfolg dieser Behandlungen hängt maßgeblich von der Mitarbeit des Patienten und einem persönlichen Behandlungsplan ab, der von einem erfahrenen Kieferorthopäden erstellt wurde."
    ],
    benefits: [
        "Verbesserte Hygiene: Die Apparaturen werden zum Zähneputzen und zur Anwendung von Zahnseide herausgenommen, was die Mundgesundheit erleichtert.",
        "Diskretion: Viele moderne herausnehmbare Optionen, wie transparente Retainer, sind nahezu unsichtbar.",
        "Komfort & Bequemlichkeit: Kann zum Essen, beim Sport und zu besonderen Anlässen herausgenommen werden.",
        "Wachstumssteuerung: In der Kinder-Kieferorthopädie hochwirksam zur Lenkung der sich entwickelnden Kieferstrukturen.",
        "Wichtige Retention: Stellt sicher, dass sich die Zähne nach dem Entfernen einer festen Spange nicht wieder in ihre ursprüngliche Position verschieben."
    ],
    quickFacts: {
        procedureTime: '30-minütiger Anpassungstermin',
        anesthesia: 'Nicht erforderlich',
        recoveryTime: '1-3 Tage zur Gewöhnung (Sprache und Tragegefühl)',
        results: 'Langfristige Stabilität der Zahnstellung',
    },
    sections: [
        {
            id: 'types-of-appliances',
            title: 'Arten herausnehmbarer kieferorthopädischer Geräte',
            content: `
                <p>Wir setzen verschiedene spezialisierte Apparaturen ein, abhängig vom Alter des Patienten und den klinischen Zielen:</p>
                <ul>
                    <li><strong>Hawley-Retainer:</strong> Der klassische, langlebige Retainer aus Metalldraht und einer Kunststoffbasis, der zur Sicherung der Zahnstellung nach einer festen Spange dient.</li>
                    <li><strong>Transparente Aligner/Retainer:</strong> Durchsichtige Kunststoffschienen, die nahezu unsichtbar und hochästhetisch für Jugendliche und Erwachsene sind.</li>
                    <li><strong>Funktionskieferorthopädische Geräte:</strong> Geräte wie der Twin-Block oder Aktivator, die die Kräfte der Kiefermuskulatur nutzen, um Bissfehlstellungen bei wachsenden Kindern zu korrigieren.</li>
                    <li><strong>Kieferorthopädische Platten:</strong> Oft mit Dehnschrauben oder Federn ausgestattet, um einen schmalen Kiefer sanft zu weiten oder einzelne Zähne in Position zu bringen.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Der Prozess der individuellen Anfertigung',
            content: `
                <p>Eine perfekte Passform ist entscheidend für Komfort und klinische Wirksamkeit:</p>
                <ol>
                    <li><strong>Digitale Abformung:</strong> Wir nutzen hochpräzise Scans oder traditionelle Abformungen, um ein exaktes 3D-Abbild Ihrer Zähne zu erstellen.</li>
                    <li><strong>Labordesign:</strong> Ihre individuelle Apparatur wird in einem spezialisierten Dentallabor exakt nach den Vorgaben des Kieferorthopäden gefertigt.</li>
                    <li><strong>Anpassung & Justierung:</strong> Während Ihres Termins stellen wir sicher, dass das Gerät bequem sitzt, und weisen Sie in das sichere Einsetzen und Herausnehmen ein.</li>
                </ol>
            `
        },
        {
            id: 'patient-compliance',
            title: 'Leben mit einer herausnehmbaren Zahnspange',
            content: `
                <p>Da diese Geräte herausnehmbar sind, ist Ihre Mitarbeit der wichtigste Faktor für den Behandlungserfolg:</p>
                <ul>
                    <li><strong>Vorgeschriebene Tragezeit:</strong> Die meisten Geräte müssen 22 Stunden am Tag getragen werden (einschließlich während des Schlafs), außer sie sind explizit nur für die Nacht vorgesehen.</li>
                    <li><strong>Reinigungsprotokoll:</strong> Apparaturen sollten täglich mit einer weichen Zahnbürste und kühlem Wasser oder speziellen Reinigungstabletten gereinigt werden, um Bakterienbildung zu vermeiden.</li>
                    <li><strong>Sichere Aufbewahrung:</strong> Immer wenn sich die Apparatur nicht im Mund befindet, sollte sie in ihrer Schutzdose aufbewahrt werden, um Beschädigungen oder Verlust zu vermeiden.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Betreuung für internationale Patienten',
            content: `
                <p>Wir bieten Familien und Einzelpersonen, die für eine kieferorthopädische Behandlung anreisen, einen reibungslosen Ablauf:</p>
                <ul>
                    <li><strong>Effiziente Terminplanung:</strong> Wir koordinieren digitale Scans und Anpassungen so, dass die Anzahl der erforderlichen Besuche für internationale Kunden minimiert wird.</li>
                    <li><strong>Regionale Kontinuität:</strong> Folgetermine zur Justierung können über unser Kliniknetzwerk in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> verwaltet werden.</li>
                    <li><strong>Logistik-Unterstützung:</strong> Umfassende Hilfe bei Transport und Unterkunft, um Ihren Aufenthalt so angenehm und stressfrei wie möglich zu gestalten.</li>
                </ul>
            `
        }
    ]
};

export default removableOrthodonticsContent;