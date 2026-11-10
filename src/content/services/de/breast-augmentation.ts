import type { ServiceContent } from '@/lib/services';

const breastAugmentationContent: ServiceContent = {
    description: [
        "Die Brustvergrößerung, medizinisch als Augmentationsmammoplastik bezeichnet, ist einer der weltweit am häufigsten durchgeführten ästhetischen Eingriffe. Ziel ist es, das Volumen der Brüste zu erhöhen, ihre Form zu verbessern und eine harmonische Körperproportion zu schaffen. Ob durch den Einsatz von modernsten Silikonimplantaten oder durch Eigenfetttransfer – der Eingriff wird individuell auf Ihre Anatomie und Ihre ästhetischen Ziele abgestimmt.",
        "In unserer Klinik kombinieren wir chirurgische Präzision mit einem tiefen Verständnis für weibliche Ästhetik. Wir verwenden ausschließlich zertifizierte Implantate der neuesten Generation, die für ihre Sicherheit und ihr natürliches Tastgefühl bekannt sind. Unser Ansatz konzentriert sich auf langlebige Ergebnisse und eine schnelle Genesung, damit Sie sich in Ihrem Körper vollkommen wohl und selbstbewusst fühlen können."
    ],
    benefits: [
        "Verbesserte Körperproportionen: Schafft eine ausgewogene Silhouette und betont die weiblichen Konturen.",
        "Korrektur von Asymmetrien: Gleicht Unterschiede in Größe und Form zwischen den Brüsten effektiv aus.",
        "Wiederherstellung von Volumen: Ideal nach Schwangerschaften, Stillzeit oder erheblichem Gewichtsverlust.",
        "Individuelle Ästhetik: Große Auswahl an Implantatformen (rund oder anatomisch) und Profilen für ein maßgeschneidertes Ergebnis.",
        "Gesteigertes Selbstwertgefühl: Verbessert das Körperbild und die Sicherheit im Auftreten sowie bei der Kleidungswahl."
    ],
    quickFacts: {
        procedureTime: '1 - 2 Stunden',
        anesthesia: 'Vollnarkose',
        recoveryTime: '1 - 2 Wochen (Rückkehr zum Alltag); 6 Wochen bis zum Sport',
        results: 'Sofort sichtbar; finales Ergebnis nach ca. 3-6 Monaten',
    },
    sections: [
        {
            id: 'implant-technology',
            title: 'Moderne Implantat-Optionen & Techniken',
            content: `
                <p>Der Erfolg einer Brustvergrößerung basiert auf der Wahl der richtigen Methode für Ihren Körpertyp:</p>
                <ul>
                    <li><strong>Silikonimplantate der neuesten Generation:</strong> Wir verwenden hochkohäsive Gele („Gummibärchen-Implantate“), die formstabil und besonders sicher sind.</li>
                    <li><strong>Runde vs. Anatomische Implantate:</strong> Während runde Implantate mehr Volumen im oberen Dekolleté bieten, ahmen anatomische (tropfenförmige) Implantate die natürliche Brustform nach.</li>
                    <li><strong>Platzierungsmethoden:</strong> Je nach Gewebebeschaffenheit wird das Implantat entweder über dem Muskel (subglandulär) oder unter dem Brustmuskel (submuskulär/Dual-Plane) platziert, um natürlichste Ergebnisse zu erzielen.</li>
                    <li><strong>Minimalinvasive Schnitte:</strong> Die Schnittführung erfolgt meist dezent in der Unterbrustfalte, um Narben fast unsichtbar zu machen.</li>
                </ul>
            `
        },
        {
            id: 'safety-consultation',
            title: 'Sicherheit und 3D-Planung',
            content: `
                <p>Ihre Sicherheit und Zufriedenheit stehen an erster Stelle. Jede Behandlung umfasst eine detaillierte Planung:</p>
                <ol>
                    <li><strong>Umfassende Beratung:</strong> Wir analysieren Ihr Brustgewebe, die Hautelastizität und Ihre Körpermaße, um die ideale Implantatgröße zu bestimmen.</li>
                    <li><strong>Präoperative Diagnostik:</strong> Vor dem Eingriff sind Ultraschalluntersuchungen oder eine Mammographie sowie ein großes Blutbild obligatorisch.</li>
                    <li><strong>Markenqualität:</strong> Wir arbeiten nur mit weltweit führenden Herstellern zusammen, die lebenslange Austauschgarantien auf ihre Produkte bieten.</li>
                </ol>
            `
        },
        {
            id: 'recovery-care',
            title: 'Heilung und Nachsorge',
            content: `
                <p>Ein strukturierter Genesungsplan sorgt für ein stabiles und schönes Endergebnis:</p>
                <ul>
                    <li><strong>Kompressions-BH:</strong> Sie tragen für etwa 6 Wochen einen speziellen Stütz-BH, der die Implantate in der gewünschten Position fixiert.</li>
                    <li><strong>Schmerzmanagement:</strong> Postoperative Beschwerden werden durch moderne Medikamente effektiv kontrolliert und ähneln meist einem starken Muskelkater.</li>
                    <li><strong>Narbenpflege:</strong> Nach der Wundheilung beraten wir Sie zu speziellen Silikonpflastern und Massagetechniken für eine optimale Narbenreifung.</li>
                    <li><strong>Sportliche Pause:</strong> Während leichtes Gehen sofort möglich ist, sollten Sie auf schweres Heben und Oberkörpertraining für 6 Wochen verzichten.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Service für internationale Patientinnen',
            content: `
                <p>Wir machen Ihre Reise zu einem neuen Ich so angenehm wie möglich:</p>
                <ul>
                    <li><strong>VIP-Logistik:</strong> Organisation aller Transfers und Aufenthalt in Partnerhotels in <strong>Albanien</strong>, <strong>Italien</strong> oder im <strong>Kosovo</strong>.</li>
                    <li><strong>Nachsorge-Netzwerk:</strong> Nutzen Sie unsere Standorte für Ihre Kontrolltermine, auch wenn Sie zwischen verschiedenen Ländern reisen.</li>
                    <li><strong>Digitale Betreuung:</strong> Vorab-Beratungen via Video-Call und eine 24/7-Erreichbarkeit nach der Operation für absolute Sicherheit.</li>
                </ul>
            `
        }
    ]
};

export default breastAugmentationContent;