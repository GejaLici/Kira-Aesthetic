import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "Eine Barttransplantation ist ein spezialisiertes Verfahren zur Haarestaurierung, das darauf abzielt, die Dichte der Gesichtsbehaarung zu erhöhen und die maskuline Ästhetik neu zu definieren. Ganz gleich, ob Sie mit lückenhaftem Wachstum oder dünnem Barthaar zu kämpfen haben oder Gesichtsnarben verbergen möchten – dieses Verfahren nutzt Ihre eigenen Haarfollikel, um einen vollen, natürlich aussehenden Bart, Schnurrbart oder Koteletten zu kreieren.",
        "Unter Anwendung der fortschrittlichen FUE-Technik (Follicular Unit Extraction) werden einzelne Follikel von der Kopfhaut entnommen und künstlerisch in das Gesicht implantiert. Diese dauerhafte Lösung ermöglicht es Ihnen, einen echten Bart wachsen zu lassen, der genau wie natürliche Gesichtsbehaarung rasiert, getrimmt und gestylt werden kann, was zu einer deutlichen Steigerung des Selbstvertrauens und der Gesichtssymmetrie führt."
    ],
    benefits: [
        "Dauerhafte Lösung für lückenhafte oder dünne Bärte und Schnurrbärte.",
        "Natürlich wirkende Ergebnisse mit Haar, das im korrekten Winkel und in der richtigen Richtung wächst.",
        "Künstlerisches Design, das exakt auf Ihre Gesichtsstruktur und ästhetischen Ziele zugeschnitten ist.",
        "Minimalinvasive FUE-Technik ohne lineare Narbenbildung und mit schneller Genesung.",
        "Möglichkeit, Gesichtsnarben, Aknemale oder frühere Verletzungen zu kaschieren."
    ],
    quickFacts: {
        procedureTime: '3 - 8 Stunden',
        anesthesia: 'Lokalanästhesie',
        recoveryTime: '7 - 10 Tage für die Erstheilung',
        results: 'Sichtbares Wachstum nach 3-4 Monaten; volle Ergebnisse nach 12 Monaten',
    },
    sections: [
        {
            id: 'fue-technique',
            title: 'Die Kunst der FUE-Bartrestauration',
            content: `
                <p>Die Schaffung eines realistischen Bartes erfordert eine Mischung aus chirurgischer Präzision und künstlerischer Vision. Wir nutzen ausschließlich die FUE-Methode (Follicular Unit Extraction):</p>
                <ul>
                    <li><strong>Einzelentnahme:</strong> Follikel werden einzeln mit Mikro-Punches aus dem Spendebereich (meist der Hinterkopf) entnommen, ohne sichtbare Narben zu hinterlassen.</li>
                    <li><strong>Strategische Platzierung:</strong> Jedes Transplantat wird akribisch angewinkelt, um den natürlichen Abwärtsfluss der Gesichtsbehaarung zu imitieren.</li>
                    <li><strong>Natürliche Integration:</strong> Wir wählen Einzelhaar-Grafts für die Ränder und dichtere Grafts für das Zentrum des Bartes, um einen weichen, nicht erkennbaren Übergang zu gewährleisten.</li>
                </ul>
            `
        },
        {
            id: 'treatment-phases',
            title: 'Ihre Transplantationsreise',
            content: `
                <p>Der Eingriff ist eine ambulante Erfahrung, die auf Ihren Komfort ausgelegt ist:</p>
                <ol>
                    <li><strong>Design & Mapping:</strong> Wir zeichnen die neue Bartlinie basierend auf Ihren Gesichtsproportionen und dem gewünschten Stil vor.</li>
                    <li><strong>Entnahme:</strong> Unter Lokalanästhesie werden die Spendefollikel vorsichtig von der Kopfhaut gewonnen.</li>
                    <li><strong>Kanaleröffnung:</strong> Im Bartbereich werden Mikrokanäle geschaffen, welche die Dichte und Wuchsrichtung bestimmen.</li>
                    <li><strong>Implantation:</strong> Die Grafts werden sorgfältig in die Empfängerstellen eingesetzt.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Genesung und Wachstumszeitraum',
            content: `
                <p>Das Verständnis des Heilungsprozesses ist der Schlüssel zu einem erfolgreichen Ergebnis:</p>
                <ul>
                    <li><strong>Erste Woche:</strong> Es bilden sich winzige Krusten um die Grafts. Rötungen und leichte Schwellungen sind normal und klingen schnell ab.</li>
                    <li><strong>Shock Loss:</strong> Zwischen Woche 2 und 4 fallen die transplantierten Haare zunächst aus. Dies ist ein normaler Teil des Zyklus; die Wurzeln bleiben gesund im Gewebe.</li>
                    <li><strong>Regeneration:</strong> Neues, dauerhaftes Haar beginnt etwa ab dem 3. oder 4. Monat zu sprießen.</li>
                    <li><strong>Volle Dichte:</strong> Der Bart wird kontinuierlich dichter und erreicht sein finales, ausgereiftes Erscheinungsbild zwischen 10 und 12 Monaten.</li>
                </ul>
            `
        },
        {
            id: 'international-care',
            title: 'Internationale Unterstützung & Nachsorge',
            content: `
                <p>Wir bieten Patienten, die aus dem Ausland anreisen, einen reibungslosen Ablauf:</p>
                <ul>
                    <li><strong>Reiselogistik:</strong> Umfassende Unterstützung bei Transport und Unterkunft in der Nähe unserer Klinik.</li>
                    <li><strong>Flexible Nachsorge:</strong> Für Ihren Komfort können Sie Nachuntersuchungen in <strong>Albanien</strong>, <strong>Kosovo</strong> oder <strong>Italien</strong> vereinbaren.</li>
                    <li><strong>Kontinuierlicher Support:</strong> Unser Team steht Ihnen während der gesamten Wachstumsphase für digitale Konsultationen und postoperative Beratung zur Verfügung.</li>
                </ul>
            `
        }
    ]
};

export default beardTransplantContent;