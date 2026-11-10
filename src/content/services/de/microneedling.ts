import type { ServiceContent } from '@/lib/services';

const microneedlingContent: ServiceContent = {
    description: [
        "Microneedling, auch bekannt als Collagen-Induktions-Therapie (CIT), ist ein transformatives, nicht-operatives Verfahren, das die angeborene Fähigkeit der Haut zur Selbstreparatur nutzt. Durch den Einsatz eines medizinischen Geräts, das tausende mikroskopisch kleine, kontrollierte „Verletzungen“ in der Hautoberfläche erzeugt, wird eine starke Heilungsreaktion ausgelöst. Diese Reparaturkaskade führt zur raschen Produktion von neuem Kollagen und Elastin – den wesentlichen Bausteinen für eine feste, glatte und jugendlich aussehende Haut.",
        "Diese Behandlung ist außergewöhnlich vielseitig und gilt als Goldstandard zur Lösung tiefgreifender Hautprobleme wie Aknenarben, feine Linien und vergrößerte Poren. Ob als präventive Anti-Aging-Maßnahme oder als korrektive Behandlung von Strukturunregelmäßigkeiten – Microneedling liefert langfristige strukturelle Verbesserungen, die weit über die Oberfläche hinausgehen und zu einem sichtbar dichteren, glatteren und widerstandsfähigeren Teint führen."
    ],
    benefits: [
        "Narbenreduktion: Lässt Akne-, Operations- und traumabedingte Narben deutlich verblassen, indem altes Narbengewebe aufgebrochen wird.",
        "Anti-Aging: Glättet feine Linien und tiefe Falten durch natürliche Kollagensynthese.",
        "Porenverfeinerung: Strafft und minimiert das Erscheinungsbild vergrößerter Poren.",
        "Struktur & Tonus: Korrigiert raue Hautstrukturen und gleicht Hyperpigmentierung sowie Sonnenschäden aus.",
        "Maximale Wirkstoffaufnahme: Erzeugt Mikrokanäle, durch die aktive Inhaltsstoffe der Hautpflege bis zu 80 % tiefer eindringen können."
    ],
    quickFacts: {
        procedureTime: '30 - 60 Minuten (inkl. Betäubung)',
        anesthesia: 'Starke topische Betäubungscreme',
        recoveryTime: '24 - 48 Stunden leichte Rötung',
        results: 'Erster Glow nach 1 Woche; vollständige Kollagen-Neubildung nach 3-6 Monaten',
    },
    sections: [
        {
            id: 'prp-vampire-facial',
            title: 'Fortschrittliche Optimierung: Microneedling mit PRP',
            content: `
                <p>Um das ultimative Niveau der Verjüngung zu erreichen, bieten wir das „Vampire Facial“ an – eine Kombination aus Microneedling und plättchenreichem Plasma (PRP):</p>
                <ul>
                    <li><strong>Natürliche Wachstumsfaktoren:</strong> Wir entnehmen eine kleine Menge Ihres eigenen Blutes und konzentrieren die Blutplättchen, die voller regenerativer Wachstumsfaktoren stecken.</li>
                    <li><strong>Tiefenwirkung:</strong> Das Microneedling schafft die perfekten Kanäle, damit das PRP die tieferen Schichten der Dermis erreichen kann.</li>
                    <li><strong>Beschleunigte Heilung:</strong> PRP beschleunigt den Erholungsprozess dramatisch und vervielfacht den kollagenaufbauenden Effekt – ideal bei tiefen Narben und fortgeschrittener Hautalterung.</li>
                </ul>
            `
        },
        {
            id: 'treatment-process',
            title: 'Was Sie während der Behandlung erwartet',
            content: `
                <p>Unser klinischer Ansatz garantiert eine komfortable und sterile Erfahrung:</p>
                <ol>
                    <li><strong>Vorbereitung:</strong> Die Haut wird gründlich gereinigt und ein medizinisches Oberflächenanästhetikum für 30–45 Minuten aufgetragen.</li>
                    <li><strong>Die Behandlung:</strong> Ein steriler Einweg-Nadelaufsatz wird mit einem automatisierten Pen-Gerät verwendet. Wir passen die Nadeltiefe präzise an den Bereich an (z. B. tiefer bei Narben, flacher an der Stirn).</li>
                    <li><strong>Beruhigung:</strong> Nach dem Needling tragen wir ein beruhigendes Hyaluronsäure-Serum oder Ihr PRP auf, um Feuchtigkeit einzuschließen und den Reparaturprozess zu starten.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-results',
            title: 'Genesung und optimale Ergebnisse',
            content: `
                <p>Die Nachsorge ist entscheidend, um Ihre „offene“ Haut zu schützen und den Kollagenschub zu maximieren:</p>
                <ul>
                    <li><strong>Die ersten 24 Stunden:</strong> Ihre Haut wird sich anfühlen und aussehen wie bei einem leichten Sonnenbrand. Vermeiden Sie Make-up, starkes Schwitzen und direkte Sonne.</li>
                    <li><strong>Die „Rosa“-Phase:</strong> Leichte Rötungen klingen in der Regel innerhalb von 48 Stunden ab. Es kann zu leichtem Schälen kommen, wenn alte Hautzellen abgestoßen werden.</li>
                    <li><strong>Kumulativer Nutzen:</strong> Während eine Behandlung bereits erfrischt, empfehlen wir für signifikante strukturelle Veränderungen eine Serie von 3 bis 6 Sitzungen im Abstand von 4 Wochen.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Maßgeschneiderte Betreuung für internationale Patienten',
            content: `
                <p>Wir ermöglichen unseren globalen Kunden erstklassige Hautverjüngung mit Fokus auf Komfort:</p>
                <ul>
                    <li><strong>Logistik & Aufenthalt:</strong> Umfassende Unterstützung bei Flughafentransfers und erstklassigen Unterkünften in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Regionale Kontinuität:</strong> Sie können Ihre Microneedling-Serie in einer unserer Kliniken beginnen und die Folgetermine in einer anderen fortsetzen – für eine nahtlose Betreuung in unserem Netzwerk.</li>
                    <li><strong>Sicherheitsstandards:</strong> Wir verwenden ausschließlich medizinische Geräte mit FDA-Zulassung oder CE-Kennzeichnung sowie strikte sterile Protokolle.</li>
                </ul>
            `
        }
    ]
};

export default microneedlingContent;