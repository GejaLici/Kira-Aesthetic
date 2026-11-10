import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "Eine Zahnbrücke ist eine fest sitzende restaurative Lösung, die dazu dient, einen oder mehrere fehlende Zähne zu ersetzen, indem sie die entstandene Lücke buchstäblich „überbrückt“. Sie besteht aus individuell angefertigten künstlichen Zähnen (Pontics), die von Zahnkronen (Pfeilerzähnen) gehalten werden, welche auf den natürlichen Zähnen oder Implantaten zu beiden Seiten der Lücke befestigt sind.",
        "Eine Brücke ist nicht nur für die Ästhetik Ihres Lächelns wichtig, sondern auch für die allgemeine Zahngesundheit. Sie verhindert, dass sich Ihre verbleibenden Zähne verschieben, stellt Ihre Fähigkeit zum richtigen Kauen und Sprechen wieder her und hilft, die natürliche Gesichtsform zu bewahren, indem sie Lippen und Wangen strukturell stützt."
    ],
    benefits: [
        "Stellt das ästhetische Erscheinungsbild eines vollständigen, gesunden Lächelns sofort wieder her.",
        "Verbessert die Kaueffizienz und klärt die durch fehlende Zähne beeinträchtigte Sprache.",
        "Verhindert das „Wandern“ – die Bewegung benachbarter Zähne in den Leerraum.",
        "Verteilt die Beißkraft gleichmäßig, um die umliegenden Zähne zu schützen.",
        "Bietet eine stabile, fest sitzende Alternative zu herausnehmbaren Teilprothesen."
    ],
    quickFacts: {
        procedureTime: '2+ Besuche (Vorbereitung & endgültiges Einsetzen)',
        anesthesia: 'Lokalanästhesie',
        recoveryTime: 'Sofort; Eingewöhnungszeit von 2-3 Tagen',
        results: 'Langlebige und dauerhafte, fest sitzende Restauration',
    },
    sections: [
        {
            id: 'bridge-types',
            title: 'Maßgeschneiderte Brückenoptionen',
            content: `
                <p>Wir bieten verschiedene Arten von Brücken an, die auf Ihre spezifischen klinischen Bedürfnisse und die Position der fehlenden Zähne zugeschnitten sind:</p>
                <ul>
                    <li><strong>Traditionelle Brücken:</strong> Die häufigste Wahl, bei der Kronen auf die beiden Zähne neben der Lücke gesetzt werden.</li>
                    <li><strong>Freiendbrücken (Cantilever):</strong> Werden verwendet, wenn nur an einer Seite der Zahnlücke ein Pfeilerzahn vorhanden ist.</li>
                    <li><strong>Maryland-Brücken:</strong> Eine konservative Option, oft für Frontzähne verwendet, bei der ein Metall- oder Porzellangerüst an die Rückseite der Nachbarzähne geklebt wird.</li>
                    <li><strong>Implantatgetragene Brücken:</strong> Die stabilste Lösung für mehrere fehlende Zähne, die durch Zahnimplantate anstatt durch natürliche Zähne verankert wird.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Der Restaurationsprozess',
            content: `
                <p>Der Weg zu einem restaurierten Lächeln umfasst in der Regel zwei Hauptphasen:</p>
                <ol>
                    <li><strong>Vorbereitung der Pfeilerzähne:</strong> Die Ankerzähne werden präzise geformt, um die tragenden Kronen aufzunehmen. Anschließend nehmen wir hochauflösende Abdrücke als Vorlage für das Dentallabor.</li>
                    <li><strong>Provisorische Brücke:</strong> Wir setzen eine temporäre Versorgung ein, um Ihre Zähne zu schützen und die Ästhetik zu bewahren, während Ihre individuelle Brücke gefertigt wird.</li>
                    <li><strong>Endgültige Integration:</strong> Sobald die permanente Brücke fertig ist, prüfen wir Passform, Biss und Farbübereinstimmung akribisch, bevor sie mit Zahnzement befestigt wird.</li>
                </ol>
            `
        },
        {
            id: 'maintenance-care',
            title: 'Langfristige Mundgesundheit',
            content: `
                <p>Die Langlebigkeit einer Brücke hängt von der Gesundheit der tragenden Zähne und des Zahnfleisches ab:</p>
                <ul>
                    <li><strong>Spezialisierte Reinigung:</strong> Wir zeigen Ihnen, wie Sie Floss-Einfädler oder Interdentalbürsten verwenden, um den Bereich unter dem Brückenglied (dem künstlichen Zahn) zu reinigen.</li>
                    <li><strong>Gesundheit des Fundaments:</strong> Regelmäßiges Putzen und die Verwendung von Zahnseide an den Ankerzähnen sind unerlässlich, um Karies und Zahnfleischerkrankungen vorzubeugen.</li>
                    <li><strong>Professionelle Kontrolluntersuchungen:</strong> Routinebesuche ermöglichen es uns, den festen Sitz der Brücke und die Gesundheit des umliegenden Gewebes sicherzustellen.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Weltklasse-Betreuung für globale Patienten',
            content: `
                <p>Wir bieten eine nahtlose Erfahrung für Patienten, die für restaurative Zahnmedizin in unsere Klinik reisen:</p>
                <ul>
                    <li><strong>Koordinierte Logistik:</strong> Umfassende Unterstützung beim lokalen Transport und erstklassige Unterbringung in Kliniknähe.</li>
                    <li><strong>Nachsorge in mehreren Ländern:</strong> Sie haben den einzigartigen Vorteil, Nachuntersuchungen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> wahrzunehmen.</li>
                    <li><strong>Effiziente Zeitpläne:</strong> Wir priorisieren Ihren Behandlungsplan, um sicherzustellen, dass Ihre permanente Versorgung komfortabel innerhalb Ihrer Reisedaten abgeschlossen wird.</li>
                </ul>
            `
        }
    ]
};

export default dentalBridgesContent;