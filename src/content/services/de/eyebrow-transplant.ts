import type { ServiceContent } from '@/lib/services';

const eyebrowTransplantContent: ServiceContent = {
    description: [
        "Eine Augenbrauentransplantation ist ein hochspezialisiertes Verfahren zur Haarwiederherstellung, das darauf abzielt, die Dichte, Form und Definition der Augenbrauen dauerhaft wiederherzustellen oder zu verbessern. Sie ist die ideale Lösung für Personen, die Augenbrauenhaare durch Genetik, übermäßiges Zupfen, Narbenbildung oder medizinische Bedingungen verloren haben. Durch die Verwendung von eigenem Naturhaar bietet dieses Verfahren eine permanente, dreidimensionale Alternative zu temporären Lösungen wie Microblading oder Make-up.",
        "Mithilfe der fortschrittlichen FUE-Technik (Follicular Unit Extraction) werden einzelne Haarfollikel präzise entnommen und in den Brauenbereich transplantiert. Unser Fokus liegt auf der künstlerischen Rekonstruktion der Braue. Dabei stellen wir sicher, dass jedes Haar im richtigen Winkel und in der richtigen Richtung platziert wird, um natürliche Wachstumsmuster zu imitieren. Das Ergebnis sind wunderschön geformte Augenbrauen, die Ihr Gesicht perfekt einrahmen."
    ],
    benefits: [
        "Permanente Ergebnisse: Bietet eine lebenslange Lösung durch die Verwendung eigener, lebender Haarfollikel.",
        "Natürliches Aussehen: Die Platzierung einzelner Follikel imitiert die natürliche Wuchsrichtung der Augenbrauenhaare.",
        "Individuelles Design: Vollständig personalisierte Form und Dichte der Augenbrauen, abgestimmt auf Ihre Gesichtszüge.",
        "Minimale Ausfallzeit: Die minimalinvasive FUE-Technik ermöglicht eine schnelle Heilung ohne lineare Narben.",
        "Keine tägliche Pflege mehr nötig: Reduziert oder ersetzt den Bedarf an Augenbrauenstiften, Gels oder Puder."
    ],
    quickFacts: {
        procedureTime: '3 - 5 Stunden',
        anesthesia: 'Lokalanästhesie',
        recoveryTime: '7 - 10 Tage für die Erstheilung',
        results: 'Wachstum beginnt nach 3-4 Monaten; volle Ergebnisse nach 12 Monaten',
    },
    sections: [
        {
            id: 'art-of-restoration',
            title: 'Die Kunst und Präzision des Brauendesigns',
            content: `
                <p>Die Wiederherstellung von Augenbrauen ist ebenso eine Kunstform wie ein medizinischer Eingriff. Wir konzentrieren uns auf vier kritische Elemente, um ein makelloses Ergebnis zu gewährleisten:</p>
                <ul>
                    <li><strong>Follikelauswahl:</strong> Wir entnehmen sorgfältig die feinsten Haare am Hinterkopf, die der natürlichen Textur von Augenbrauenhaaren am nächsten kommen.</li>
                    <li><strong>Anatomisches Mapping:</strong> Wir entwerfen die Brauenform basierend auf Ihrer einzigartigen Knochenstruktur und Ihren Gesichtsproportionen.</li>
                    <li><strong>Winkelung:</strong> Jedes Haar wird in einem sehr flachen Winkel implantiert, um sicherzustellen, dass es flach an der Haut anliegt, genau wie natürliches Brauenhaar.</li>
                    <li><strong>Wuchsrichtung:</strong> Wir replizieren das komplexe, multidirektionale Wachstumsmuster der natürlichen Augenbraue – von den vertikalen Ansätzen am Kopf bis zum horizontalen „Schwanz“ der Braue.</li>
                </ul>
            `
        },
        {
            id: 'the-fue-technique',
            title: 'Die FUE-Methode für Augenbrauen',
            content: `
                <p>Wir verwenden ausschließlich die FUE-Methode (Follicular Unit Extraction) aufgrund ihrer überlegenen Ergebnisse und des Patientenkomforts:</p>
                <ol>
                    <li><strong>Entnahme:</strong> Einzelne Follikel werden mit einem speziellen Mikropunch-Werkzeug entnommen, ohne sichtbare Narben zu hinterlassen.</li>
                    <li><strong>Mikro-Inzisionen:</strong> Winzige, nadelstichgroße Öffnungen werden im Brauenbereich geschaffen, um die Grafts aufzunehmen.</li>
                    <li><strong>Implantation:</strong> Die Grafts werden unter hoher Vergrößerung nacheinander eingesetzt, um absolute Präzision zu gewährleisten.</li>
                </ol>
            `
        },
        {
            id: 'recovery-growth',
            title: 'Was Sie während der Genesung erwartet',
            content: `
                <p>Das Verständnis des Heilungszyklus ist entscheidend für eine stressfreie Erfahrung:</p>
                <ul>
                    <li><strong>Initialphase:</strong> Leichte Rötungen und winzige Krusten um die Grafts heilen innerhalb von 5–7 Tagen ab.</li>
                    <li><strong>Die „Shedding“-Phase:</strong> Es ist normal, dass die transplantierten Haare nach 2–4 Wochen ausfallen. Die Wurzeln bleiben gesund und ruhen unter der Haut.</li>
                    <li><strong>Neues Wachstum:</strong> Feine neue Haare erscheinen nach 3–4 Monaten und werden im Laufe des ersten Jahres dicker.</li>
                    <li><strong>Trimmen:</strong> Da diese Haare vom Kopf stammen, wachsen sie länger als natürliche Brauenhaare und müssen alle 1–2 Wochen getrimmt werden.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Nahtlose Betreuung für internationale Kunden',
            content: `
                <p>Wir bieten umfassende Unterstützung für Patienten, die aus dem Ausland in unsere spezialisierten Zentren reisen:</p>
                <ul>
                    <li><strong>Logistik-Support:</strong> Volle Unterstützung bei lokalem Transport und erstklassige Unterbringung in der Nähe unserer Klinik.</li>
                    <li><strong>Regionale Kontinuität:</strong> Sie können wählen, ob Sie Ihre Nachsorge oder postoperativen Kontrollen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> durchführen lassen.</li>
                    <li><strong>Remote-Einschätzung:</strong> Senden Sie uns klare Fotos Ihrer Brauen und des Spenderbereichs für eine virtuelle Erstbewertung, bevor Sie Ihre Reise antreten.</li>
                </ul>
            `
        }
    ]
};

export default eyebrowTransplantContent;