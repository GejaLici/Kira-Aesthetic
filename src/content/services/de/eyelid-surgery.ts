import type { ServiceContent } from '@/lib/services';

const blepharoplastyContent: ServiceContent = {
    description: [
        "Die Augenlidstraffung, oder Blepharoplastik, ist ein präziser chirurgischer Eingriff zur Verjüngung der Augenpartie, bei dem erschlaffte Haut, überschüssiges Fett und Gewebeschwäche korrigiert werden. Ob an den Oberlidern, Unterlidern oder beiden durchgeführt – diese Behandlung beseitigt effektiv den „müden“ Blick, reduziert Schwellungen sowie Schlupflider und verleiht Ihnen einen helleren, wacheren und jugendlicheren Ausdruck.",
        "Die Augen sind aufgrund der zarten Beschaffenheit der Haut oft der erste Bereich, der Zeichen der Alterung zeigt. Unser Ansatz bei der Blepharoplastik konzentriert sich auf subtile, natürlich wirkende Korrekturen, die Ihre individuelle Gesichtsanatomie respektieren. Durch die akribische Neupositionierung von Gewebe und das Verbergen der Schnitte in den natürlichen Falten stellen wir die lebendige Kontur Ihrer Augen wieder her, ohne Ihr grundlegendes Erscheinungsbild zu verändern."
    ],
    benefits: [
        "Beseitigung von Schlupflidern am Oberlid, die manchmal das Sichtfeld einschränken können.",
        "Entfernung von Tränensäcken und Schwellungen unter den Augen für ein erholtes Aussehen.",
        "Reduzierung feiner Falten und überschüssiger Haut im Bereich des Unterlids.",
        "Lang anhaltende Verjüngung, die das gesamte Gesicht strahlen lässt.",
        "Praktisch unsichtbare Narbenbildung, verborgen in den natürlichen Lidfalten oder an der Lidinnenseite."
    ],
    quickFacts: {
        procedureTime: '1 - 2 Stunden',
        anesthesia: 'Lokalanästhesie mit Sedierung (oder Vollnarkose)',
        recoveryTime: '7 - 10 Tage für soziale Aktivitäten',
        results: 'Sichtbar, sobald die Schwellung abklingt; endgültig nach 1-2 Monaten',
    },
    sections: [
        {
            id: 'upper-vs-lower',
            title: 'Ober- und Unterlidstraffung',
            content: `
                <p>Abhängig von Ihren spezifischen Bedürfnissen können wir die Oberlider, die Unterlider oder beide gleichzeitig behandeln:</p>
                <ul>
                    <li><strong>Oberlidstraffung:</strong> Konzentriert sich auf das Entfernen der „schweren“ Haut, die über den Wimpern hängt. Der Schnitt wird perfekt in der natürlichen horizontalen Lidfalte verborgen.</li>
                    <li><strong>Unterlidstraffung:</strong> Zielt auf Augenringe und Fettansammlungen (Tränensäcke) ab. Dies kann oft über einen „transkonjunktivalen“ Zugang erfolgen, bei dem der Schnitt an der Innenseite des Augenlids gesetzt wird, sodass keine äußere Narbe entsteht.</li>
                    <li><strong>Kombinierte Verjüngung:</strong> Viele Patienten entscheiden sich dafür, beide Bereiche gleichzeitig behandeln zu lassen, um eine vollständige, harmonische Auffrischung der Augenpartie zu erzielen.</li>
                </ul>
            `
        },
        {
            id: 'surgical-precision',
            title: 'Unser Präzisionsansatz',
            content: `
                <p>Die Augenlidchirurgie ist ein Eingriff im Millimeterbereich. Unsere Chirurgen nutzen fortschrittliche Techniken, um Sicherheit und Ästhetik zu gewährleisten:</p>
                <ul>
                    <li><strong>Anatomische Expertise:</strong> Tiefes Verständnis der empfindlichen Muskeln und Fettpolster rund um das Auge, um ein „operiert“ wirkendes Aussehen zu vermeiden.</li>
                    <li><strong>Nahttechnik:</strong> Wir verwenden ultrafeine Fäden, die in der Regel innerhalb einer Woche entfernt werden, wodurch das Risiko sichtbarer Spuren minimiert wird.</li>
                    <li><strong>Fett-Repositionierung:</strong> Anstatt Fett nur zu entfernen, positionieren wir es oft um, um hohle Bereiche aufzufüllen. Dies verhindert ein „eingefallenes“ Aussehen und sorgt für einen glatten Übergang zur Wange.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Ihr Weg zur Genesung',
            content: `
                <p>Der Heilungsprozess bei einer Blepharoplastik ist im Vergleich zu anderen Gesichtsausoperationen relativ kurz:</p>
                <ol>
                    <li><strong>Die ersten 48 Stunden:</strong> Verwenden Sie konsequent kalte Kompressen, um Schwellungen und Blutergüsse zu minimieren. Halten Sie Ihren Kopf auch beim Schlafen hochgelagert.</li>
                    <li><strong>Tag 5-7:</strong> Die Fäden werden in der Praxis entfernt. Die meisten Blutergüsse verblassen zu einem leichten Gelb und können oft bereits mit Make-up kaschiert werden.</li>
                    <li><strong>Woche 2:</strong> Die meisten Patienten fühlen sich sicher genug, um zur Arbeit und ins öffentliche Leben zurückzukehren. Anstrengender Sport sollte für weitere 1-2 Wochen vermieden werden.</li>
                    <li><strong>Endergebnis:</strong> Während Sie schnell erholt aussehen, setzen sich die endgültigen, verfeinerten Konturen in den folgenden Wochen fest.</li>
                </ol>
            `
        },
        {
            id: 'global-patient-care',
            title: 'Nahtlose Betreuung für internationale Patienten',
            content: `
                <p>Wir sind stolz darauf, Patienten, die für eine Operation anreisen, eine stressfreie Erfahrung zu bieten:</p>
                <ul>
                    <li><strong>Logistische Unterstützung:</strong> Wir unterstützen Sie bei erstklassigen Unterkünften und dem lokalen Transport zu und von unserer Klinik.</li>
                    <li><strong>Flexibilität bei der Nachsorge:</strong> Sie haben die Möglichkeit, Ihre postoperativen Kontrolluntersuchungen in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> wahrzunehmen.</li>
                    <li><strong>Fernüberwachung:</strong> Für unsere internationalen Kunden bieten wir direkten digitalen Zugang zu unserem medizinischen Team für alle Fragen während der frühen Heilungsphase.</li>
                </ul>
            `
        }
    ]
};

export default blepharoplastyContent;