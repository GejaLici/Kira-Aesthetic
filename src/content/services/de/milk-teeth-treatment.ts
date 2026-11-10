import type { ServiceContent } from '@/lib/services';

const milkTeethTreatmentContent: ServiceContent = {
    description: [
        "Die Gesundheit der Milchzähne eines Kindes ist das Fundament für sein zukünftiges Lächeln als Erwachsener. Diese ersten Zähne sind viel mehr als nur ein Provisorium; sie sind essenziell für die richtige Ernährung durch Kauen, die Entwicklung einer klaren Sprache und, was am wichtigsten ist, sie fungieren als natürliche Platzhalter. Sie leiten die bleibenden Zähne in ihre korrekte Position und verhindern so zukünftige Engstände und komplexe kieferorthopädische Probleme.",
        "Die Behandlung von Karies und Infektionen an Milchzähnen ist lebenswichtig, um Schmerzen zu vermeiden und sicherzustellen, dass die darunter liegenden bleibenden Zähne nicht durch sich ausbreitende Bakterien geschädigt werden. Unser Fokus in der Kinderzahnheilkunde liegt darauf, diese Primärzähne wann immer möglich zu erhalten, damit Ihr Kind mit einem gesunden, funktionellen Gebiss und einer positiven Einstellung zur Zahnpflege aufwächst."
    ],
    benefits: [
        "Richtige Entwicklung: Stellt sicher, dass bleibende Zähne den korrekten Platz zum Durchbrechen haben.",
        "Schmerzprävention: Stoppt Zahnschmerzen und Empfindlichkeiten, die den Schlaf und das Lernen eines Kindes beeinträchtigen können.",
        "Klare Aussprache: Unterstützt die korrekte Zungenposition für eine deutliche Artikulation.",
        "Ernährungsgesundheit: Ermöglicht es Kindern, eine Vielzahl gesunder, knackiger Lebensmittel bequem zu kauen.",
        "Psychologisches Selbstvertrauen: Hilft Kindern, von klein auf stolz auf ihr Lächeln zu sein."
    ],
    quickFacts: {
        procedureTime: '30 - 60 Minuten pro Sitzung',
        anesthesia: 'Lokalanästhesie oder bei Bedarf leichte Sedierung',
        recoveryTime: 'Sofort; Essen vermeiden, bis die Taubheit abgeklungen ist',
        results: 'Wiederhergestellte Funktion und infektionsfreie Milchzähne',
    },
    sections: [
        {
            id: 'pediatric-specialties',
            title: 'Spezialisierte Behandlungen für Kinder',
            content: `
                <p>Kinder benötigen einen anderen klinischen Ansatz als Erwachsene. Wir bieten spezialisierte pädiatrische Verfahren an, die auf kleine Münder zugeschnitten sind:</p>
                <ul>
                    <li><strong>Kompositfüllungen:</strong> Wir verwenden sichere, zahnfarbene Materialien, um Karies dezent zu reparieren und die Zahnstruktur wiederherzustellen.</li>
                    <li><strong>Pulpotomie („Kinder-Wurzelbehandlung“):</strong> Wenn Karies den Nerv erreicht, führen wir eine sanfte Pulpatherapie durch, um nur den betroffenen Teil zu entfernen, den Zahn zu retten und den Schmerz zu stoppen.</li>
                    <li><strong>Kinderkronen:</strong> Bei Zähnen mit ausgeprägter Karies verwenden wir langlebige Zirkon- oder Edelstahlkronen, um den Zahn zu schützen, bis er natürlich ausfällt.</li>
                    <li><strong>Platzhalter:</strong> Wenn ein Milchzahn zu früh verloren geht, setzen wir eine maßgeschneiderte Apparatur ein, um die Lücke für den zukünftigen bleibenden Zahn offen zu halten.</li>
                </ul>
            `
        },
        {
            id: 'fear-free-dentistry',
            title: 'Eine angstfreie Erfahrung',
            content: `
                <p>Wir wissen, dass die ersten Zahnarztbesuche eines Kindes die lebenslange Einstellung zur Mundgesundheit prägen können. Unsere Klinik ist als einladender Ort gestaltet:</p>
                <ol>
                    <li><strong>Erklären-Zeigen-Handeln:</strong> Wir erklären jedes Instrument und jeden Schritt in kindgerechter Sprache, bevor wir beginnen.</li>
                    <li><strong>Sanfte Technik:</strong> Unsere Kinderspezialisten sind in Verhaltensmanagement geschult, um Kinder ruhig und kooperativ zu halten.</li>
                    <li><strong>Positive Verstärkung:</strong> Wir legen Wert darauf, die Erfahrung belohnend zu gestalten, damit Ihr Kind die Praxis mit einem Lächeln und einem Erfolgserlebnis verlässt.</li>
                </ol>
            `
        },
        {
            id: 'preventive-shield',
            title: 'Der Schutzschild der Prävention',
            content: `
                <p>Die beste Behandlung ist die Vorbeugung. Wir bieten hochwirksamen Schutz, um Karies zu stoppen, bevor sie entsteht:</p>
                <ul>
                    <li><strong>Fissurenversiegelung:</strong> Eine dünne Schutzschicht, die auf die Kauflächen der hinteren Backenzähne aufgetragen wird, um Speisereste und Bakterien „auszusperren“.</li>
                    <li><strong>Fluoridierung:</strong> Professionelle Fluorid-Applikationen zur Stärkung des Zahnschmelzes, um ihn widerstandsfähiger gegen Säureangriffe zu machen.</li>
                    <li><strong>Schulung zur häuslichen Pflege:</strong> Praktische Demonstrationen für Eltern und Kinder zu den besten Putz- und Flossing-Techniken für kleine Hände.</li>
                </ul>
            `
        },
        {
            id: 'international-families',
            title: 'Unterstützung für internationale Familien',
            content: `
                <p>Wir begrüßen Familien aus der ganzen Welt und bieten einen reibungslosen Ablauf für die zahnärztliche Versorgung von Kindern:</p>
                <ul>
                    <li><strong>Familienfreundliche Logistik:</strong> Unterstützung bei kindgerechten Unterkünften und Transporten in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Mehrsprachige Betreuung:</strong> Unser Team kommuniziert klar in mehreren Sprachen, damit sich sowohl Eltern als auch Kinder verstanden fühlen.</li>
                    <li><strong>Kontinuität:</strong> Nachsorgetermine und Vorsorgeuntersuchungen können über alle unsere regionalen Klinikstandorte hinweg koordiniert werden.</li>
                </ul>
            `
        }
    ]
};

export default milkTeethTreatmentContent;