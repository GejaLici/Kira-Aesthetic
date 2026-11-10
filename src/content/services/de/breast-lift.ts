import type { ServiceContent } from '@/lib/services';

const breastLiftContent: ServiceContent = {
    description: [
        "Eine Bruststraffung, auch Mastopexie genannt, ist ein chirurgischer Eingriff zur Korrektur von hängenden Brüsten (Ptosis) und zur Wiederherstellung einer festeren, angehobenen Brustkontur. Im Laufe der Zeit können Faktoren wie Schwangerschaft, Stillzeit, Gewichtsschwankungen und der natürliche Alterungsprozess dazu führen, dass die Brust an Elastizität verliert. Dieses Verfahren entfernt überschüssige Haut und strafft das umliegende Gewebe, um das Brustprofil neu zu formen und zu stützen.",
        "Im Gegensatz zu einer Brustvergrößerung konzentriert sich eine Straffung eher auf die Position als auf die Größe. Durch die Neupositionierung der Brustwarze und des Warzenhofs auf eine jugendliche Höhe können unsere Chirurgen eine verjüngte Silhouette schaffen, die natürlich wirkt und harmonisch zu Ihrem Körper passt. Für Patientinnen, die sich sowohl eine Straffung als auch mehr Volumen wünschen, kann dieser Eingriff auch mit Brustimplantaten kombiniert werden."
    ],
    benefits: [
        "Hebt die Brüste in eine jugendlichere, angehobene Position.",
        "Entfernt überschüssige, gedehnte Haut für ein festeres Gefühl.",
        "Positioniert Brustwarze und Warzenhof für eine bessere ästhetische Symmetrie neu.",
        "Formt das Brustgewebe neu, um Projektion und Kontur zu verbessern.",
        "Steigert das Selbstvertrauen und verbessert die Passform von Kleidung und Bademode."
    ],
    quickFacts: {
        procedureTime: '2 - 3 Stunden',
        anesthesia: 'Vollnarkose',
        recoveryTime: '4 - 6 Wochen für eine vollständige Genesung',
        results: 'Sofortige Verbesserung; die endgültige Form festigt sich nach 3-6 Monaten',
    },
    sections: [
        {
            id: 'surgical-techniques',
            title: 'Individuelle Straffungstechniken',
            content: `
                <p>Die Wahl des Schnittmusters hängt vom Grad des Durchhängens und der Menge der zu entfernenden Haut ab:</p>
                <ul>
                    <li><strong>Periareolär (Donut-Lift):</strong> Ein kreisförmiger Schnitt um den Warzenhof, geeignet für leichte Erschlaffung.</li>
                    <li><strong>Vertikal (Lollipop-Lift):</strong> Ein Schnitt um den Warzenhof und vertikal nach unten zur Brustfalte; ideal bei mäßiger Ptosis.</li>
                    <li><strong>Anker-Schnitt (Invertiertes T):</strong> Die umfassendste Straffung, mit Schnitten um den Warzenhof, vertikal nach unten und entlang der Brustumschlagfalte.</li>
                </ul>
            `
        },
        {
            id: 'safety-preparation',
            title: 'Vorbereitung und Sicherheitsprotokolle',
            content: `
                <p>Ihre Sicherheit hat für uns Priorität. Die präoperative Phase stellt sicher, dass Sie bereit für den Eingriff sind:</p>
                <ul>
                    <li><strong>Brustgesundheit:</strong> In der Regel ist eine Mammographie oder ein Ultraschall erforderlich, um den aktuellen Gesundheitszustand der Brust zu dokumentieren.</li>
                    <li><strong>Medizinische Freigabe:</strong> Beinhaltet umfassende Bluttests, ein EKG und ein Beratungsgespräch mit unserem Anästhesisten.</li>
                    <li><strong>Präoperative Pflege:</strong> Patientinnen müssen das Rauchen einstellen und blutverdünnende Medikamente (wie Aspirin) für einige Wochen vor dem Eingriff meiden.</li>
                </ul>
            `
        },
        {
            id: 'recovery-milestones',
            title: 'Genesung und Nachsorge',
            content: `
                <p>Ein erfolgreiches Ergebnis hängt von einer gewissenhaften postoperativen Pflege ab:</p>
                <ol>
                    <li><strong>Unterstützung:</strong> Sie werden in den ersten 4–6 Wochen rund um die Uhr einen speziellen chirurgischen BH tragen, um das heilende Gewebe zu stützen.</li>
                    <li><strong>Aktivität:</strong> Leichtes Gehen wird sofort empfohlen, aber schweres Heben und anstrengender Sport müssen für mindestens einen Monat vermieden werden.</li>
                    <li><strong>Narbenpflege:</strong> Wir bieten spezifische Protokolle für die Wundpflege und das Narbenmanagement an, um sicherzustellen, dass die Schnitte mit der Zeit so weit wie möglich verblassen.</li>
                </ol>
            `
        },
        {
            id: 'global-logistics',
            title: 'Unterstützung für internationale Patientinnen',
            content: `
                <p>Wir erleichtern jeden Aspekt Ihrer chirurgischen Reise, um eine sorgenfreie Erfahrung zu gewährleisten:</p>
                <ul>
                    <li><strong>Reiseunterstützung:</strong> Wir bieten volle Unterstützung bei Transport und erstklassiger Unterbringung in der Nähe unseres chirurgischen Zentrums.</li>
                    <li><strong>Flexible Nachsorge:</strong> Patientinnen haben die einzigartige Möglichkeit, ihre postoperativen Kontrolluntersuchungen in <strong>Albanien</strong>, <strong>Kosovo</strong> oder <strong>Italien</strong> durchzuführen.</li>
                    <li><strong>Kontinuierliche Überwachung:</strong> Unser Team steht für virtuelle Konsultationen während Ihrer Genesung zur Verfügung, sobald Sie wieder zu Hause sind.</li>
                </ul>
            `
        }
    ]
};

export default breastLiftContent;