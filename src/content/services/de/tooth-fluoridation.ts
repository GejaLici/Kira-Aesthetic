import type { ServiceContent } from '@/lib/services';

const toothFluoridationContent: ServiceContent = {
    description: [
        "Die professionelle Zahnfluoridierung ist ein Eckpfeiler der präventiven Kinderzahnheilkunde und wirkt wie ein mächtiger Schutzschild für wachsende Zähne. Fluorid ist ein natürliches Mineral, das die Remineralisierung des Zahnschmelzes fördert – der harten, schützenden äußeren Schicht der Zähne. Durch die Einlagerung in die Schmelzstruktur macht Fluorid die Zähne deutlich widerstandsfähiger gegen Säureangriffe von Plaque-Bakterien und Zucker, die Karies verursachen.",
        "Für Kinder sind professionelle Fluoridbehandlungen besonders wichtig, da der Zahnschmelz ihrer neuen bleibenden Zähne noch nicht vollständig mineralisiert und somit anfälliger für Karies ist. Dieser einfache und schmerzfreie Eingriff verhindert nicht nur zukünftige Löcher, sondern kann auch helfen, Karies im Frühstadium zu „heilen“, indem Mineralien in geschwächte Schmelzbereiche zurückgeführt werden, bevor ein Hohlraum entsteht."
    ],
    benefits: [
        "Schmelzhärtung: Stärkt den Zahnschmelz deutlich gegen bakterielle Säuren.",
        "Kariesprävention: Klinisch nachgewiesene Reduktion des Kariesrisikos bei Kindern und Jugendlichen.",
        "Schmerzfreier Schutz: Eine schnelle, nicht-invasive Anwendung ohne Bohren oder Spritzen.",
        "Rückgängigmachung von Frühkaries: Kann das Fortschreiten von initialen weißen Flecken stoppen und umkehren.",
        "Kosteneffizienz: Eine einfache Vorsorgemaßnahme, die teure Füllungen oder Extraktionen in der Zukunft vermeidet."
    ],
    quickFacts: {
        procedureTime: '5 - 10 Minuten',
        anesthesia: 'Nicht erforderlich',
        recoveryTime: 'Sofort; Zähneputzen erst wieder am nächsten Morgen',
        results: 'Gestärkter Zahnschmelz und erhöhte Kariesresistenz',
    },
    sections: [
        {
            id: 'fluoride-application',
            title: 'Hochentwickelte Fluoridlack-Technologie',
            content: `
                <p>Wir nutzen die neueste Generation von Fluorid-Abgabesystemen für maximale Aufnahme und Patientenkomfort:</p>
                <ul>
                    <li><strong>Fluoridlack:</strong> Im Gegensatz zu alten Schalen- oder Schaumsystemen wird unser hochkonzentrierter Lack auf die Zähne „gemalt“. Er bindet sofort bei Kontakt mit Speichel ab.</li>
                    <li><strong>Angenehme Aromen:</strong> Unsere Lacke sind in kinderfreundlichen Geschmacksrichtungen erhältlich, was die Erfahrung positiv gestaltet.</li>
                    <li><strong>Gezielte Abgabe:</strong> Die Anwendung per Pinsel ermöglicht es uns, Fluorid gezielt auf Hochrisikobereiche wie tiefe Backenzahngruben zu fokussieren.</li>
                </ul>
            `
        },
        {
            id: 'why-children-need-it',
            title: 'Warum früh anfangen?',
            content: `
                <p>Die zahnmedizinische Gesundheit im Kindesalter legt den Grundstein für ein lebenslanges Wohlbefinden:</p>
                <ol>
                    <li><strong>Unreifer Zahnschmelz:</strong> Neu durchgebrochene Zähne sind poröser als die von Erwachsenen und absorbieren Fluorid daher wie ein „Schwamm“.</li>
                    <li><strong>Ernährungsgewohnheiten:</strong> Kinder sind oft häufiger zuckerhaltigen Lebensmitteln ausgesetzt und benötigen diesen zusätzlichen Schutz.</li>
                    <li><strong>Lernphase der Mundhygiene:</strong> Während Kinder ihre Putztechnik verbessern, bietet Fluorid ein „Sicherheitsnetz“ für schwer erreichbare Stellen.</li>
                </ol>
            `
        },
        {
            id: 'post-treatment-care',
            title: 'Maximierung des Behandlungserfolgs',
            content: `
                <p>Damit der Fluoridlack den höchsten Schutz bietet, empfehlen wir folgende Nachsorge:</p>
                <ul>
                    <li><strong>Essen und Trinken:</strong> Kühle Getränke sind sofort erlaubt. Mit knusprigen oder klebrigen Speisen sollten Sie 4 bis 6 Stunden warten.</li>
                    <li><strong>Putzen und Zahnseide:</strong> Reinigen Sie die Zähne des Kindes für mindestens 6 bis 12 Stunden nicht (am besten erst am nächsten Morgen).</li>
                    <li><strong>Hitze vermeiden:</strong> Keine sehr heißen Getränke oder Suppen für den Rest des Behandlungstages.</li>
                </ul>
            `
        }
    ]
};

export default toothFluoridationContent;