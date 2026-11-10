import type { ServiceContent } from '@/lib/services';

const hairTransplantContent: ServiceContent = {
    description: [
        "Eine Haartransplantation ist eine hochwirksame chirurgische Lösung, um den Haarwuchs in Bereichen, die von Ausdünnung oder Kahlheit betroffen sind, dauerhaft wiederherzustellen. Das Verfahren beinhaltet die Umverteilung gesunder, gegen Haarausfall resistenter Haarfollikel von einem Spenderbereich – in der Regel der Hinterkopf oder die Seiten – zu den Empfängerstellen. Dies führt zu einer natürlich wirkenden, permanenten Wiederherstellung der Haardichte und einer neu definierten Haarlinie.",
        "Die moderne Haarwiederherstellung hat sich zu einer anspruchsvollen Mischung aus medizinischer Wissenschaft und Kunstfertigkeit entwickelt. Durch die Verwendung Ihres eigenen Naturhaars sind die Ergebnisse praktisch nicht erkennbar. Das transplantierte Haar wächst, kann geschnitten und exakt wie der Rest Ihres Haares gestylt werden. Unser Ziel ist es, Ihr Erscheinungsbild und Ihr Selbstvertrauen durch präzisionsfokussierte Techniken langfristig zu stärken."
    ],
    benefits: [
        "Permanentes Wachstum: Transplantierte Follikel sind genetisch resistent gegen die Hormone, die Haarausfall verursachen.",
        "Natürlich wirkende Ergebnisse: Die akribische Platzierung sorgt dafür, dass Haarlinie und Dichte perfekt zu Ihren Gesichtszügen passen.",
        "Unauffällige Narbenbildung: Fortschrittliche FUE-Techniken hinterlassen nur mikroskopisch kleine Punkte, während FUT-Narben leicht zu verbergen sind.",
        "Hohe Erfolgsquote: Die spezialisierte Handhabung der Grafts gewährleistet eine hohe Überlebensrate des transplantierten Haares.",
        "Vielseitige Wiederherstellung: Effektiv bei männlichem Haarausfall, dünner werdendem Scheitel und zurückweichendem Haaransatz."
    ],
    quickFacts: {
        procedureTime: '4 - 8 Stunden (je nach Anzahl der Grafts)',
        anesthesia: 'Lokalanästhesie mit optionaler leichter Sedierung',
        recoveryTime: '7 - 10 Tage bis die Krusten abheilen; 2 Wochen für normale Aktivitäten',
        results: 'Wachstum beginnt nach 3-4 Monaten; volle Ergebnisse nach 12-18 Monaten sichtbar',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'FUE vs. FUT: Fortgeschrittene Methoden',
            content: `
                <p>Wir bieten die zwei effektivsten Techniken der Haarwiederherstellung an und passen die Wahl individuell an Ihren Haartyp und Ihre Dichte-Ziele an:</p>
                <ul>
                    <li><strong>FUE (Follicular Unit Extraction):</strong> Einzelne Follikel werden nacheinander mit einem Mikro-Punch-Werkzeug entnommen. Dies ist eine nahtlose Technik, die keine lineare Narbe hinterlässt und eine kürzere Erholungszeit ermöglicht.</li>
                    <li><strong>FUT (Follicular Unit Transplantation):</strong> Auch als „Streifenmethode“ bekannt. Ein schmaler Streifen behaarter Haut wird entnommen und unter Hochleistungsmikroskopen zerlegt. Dies ist oft ideal für Patienten, die ein großes Volumen an Grafts in einer einzigen Sitzung benötigen.</li>
                </ul>
            `
        },
        {
            id: 'artistic-design',
            title: 'Die Kunst der natürlichen Haarlinie',
            content: `
                <p>Eine erfolgreiche Transplantation zeichnet sich durch ihre Unsichtbarkeit aus. Unsere Chirurgen konzentrieren sich auf die feinen Details des Haardesigns:</p>
                <ul>
                    <li><strong>Makro- & Mikro-Irregularität:</strong> Wir replizieren das natürliche, nicht-lineare Muster eines echten Haaransatzes, um sicherzustellen, dass es nicht künstlich oder wie „eingesetzt“ aussieht.</li>
                    <li><strong>Winkelung:</strong> Grafts werden in präzisen Winkeln platziert, um dem natürlichen Fluss und Austrittswinkel Ihres ursprünglichen Haares zu entsprechen.</li>
                    <li><strong>Strategische Dichte:</strong> Wir priorisieren die Platzierung der Grafts dort, wo sie die größte visuelle Wirkung und eine natürliche Abdeckung erzielen.</li>
                </ul>
            `
        },
        {
            id: 'recovery-cycle',
            title: 'Ihr Zeitplan für das Wachstum',
            content: `
                <p>Geduld ist entscheidend, während die Haarfollikel ihre natürlichen Wachstumszyklen durchlaufen:</p>
                <ol>
                    <li><strong>Die ersten 10 Tage:</strong> Initialphase der Heilung, in der sich kleine Krusten bilden und abfallen. In dieser Zeit ist vorsichtiges Waschen erforderlich.</li>
                    <li><strong>Die Shedding-Phase (Schockverlust):</strong> Innerhalb von 2–4 Wochen fallen die transplantierten Haarschäfte aus. Dies ist normal; die lebende Wurzel bleibt gesund unter der Haut.</li>
                    <li><strong>Neues Wachstum:</strong> Feine neue Haare beginnen etwa im 3. oder 4. Monat zu sprießen.</li>
                    <li><strong>Endgültige Reifung:</strong> Das Haar wird kontinuierlich dicker und dunkler, wobei die endgültige Dichte zwischen 12 und 18 Monaten erreicht wird.</li>
                </ol>
            `
        },
        {
            id: 'international-patient-experience',
            title: 'Globale Betreuung & Unterstützung',
            content: `
                <p>Wir bieten eine erstklassige Erfahrung für internationale Patienten, die für eine Haarwiederherstellung anreisen:</p>
                <ul>
                    <li><strong>Umfassender Concierge:</strong> Volle Unterstützung bei Flughafentransfers, lokalem Transport und erstklassigen Unterkünften.</li>
                    <li><strong>Nachsorge in mehreren Regionen:</strong> Patienten haben die einzigartige Flexibilität, Nachuntersuchungen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> wahrzunehmen.</li>
                    <li><strong>Direkter Support:</strong> 24/7-Zugang zu unserem medizinischen Team für postoperative Fragen während Ihrer ersten Heilungsphase im Ausland.</li>
                </ul>
            `
        }
    ]
};

export default hairTransplantContent;