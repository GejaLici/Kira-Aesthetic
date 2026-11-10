import type { ServiceContent } from '@/lib/services';

const denturesContent: ServiceContent = {
    description: [
        "Zahnersatz bzw. Prothesen sind individuell angefertigte, herausnehmbare Vorrichtungen, die dazu dienen, fehlende Zähne zu ersetzen und die Funktion Ihres Lächelns wiederherzustellen. Über die Ästhetik hinaus kann der Verlust von Zähnen Ihre Fähigkeit, klar zu sprechen, effektiv zu kauen und Ihre Gesichtsstruktur zu bewahren, erheblich beeinträchtigen. Moderne Prothesen bieten eine bewährte und zuverlässige Lösung für diese Herausforderungen und geben Ihnen ein vollständiges und sicheres Lächeln zurück.",
        "Die heutigen Prothesen sind weitaus fortschrittlicher als die „dritten Zähne“ der Vergangenheit. Unter Verwendung hochwertiger Acryle und fortschrittlicher prothetischer Techniken fertigen wir Prothesen an, die leicht, langlebig und akribisch auf die natürlichen Konturen Ihres Mundes abgestimmt sind. Ob Sie einen vollständigen Ersatz oder nur den Ersatz einiger weniger Zähne benötigen – unser Ziel ist eine Versorgung, die sich komfortabel anfühlt und vollkommen natürlich aussieht."
    ],
    benefits: [
        "Stellt ein vollständiges Lächeln wieder her und steigert Selbstvertrauen und Aussehen.",
        "Bietet lebenswichtige Unterstützung für die Gesichtsmuskulatur und verhindert ein „eingefallenes“ Aussehen.",
        "Verbessert die Sprache und phonetische Klarheit, die oft durch fehlende Zähne beeinträchtigt wird.",
        "Verbessert die Kaufähigkeit, was eine vielseitigere und gesündere Ernährung ermöglicht.",
        "Verfügbar in vielseitigen Optionen, einschließlich Voll-, Teil- und implantatgetragener Versionen."
    ],
    quickFacts: {
        procedureTime: 'Mehrere Termine über 3 - 5 Wochen',
        anesthesia: 'Nicht erforderlich (außer in Kombination mit Extraktionen)',
        recoveryTime: '2 - 4 Wochen Eingewöhnungszeit',
        results: 'Funktionelle Wiederherstellung; Prothesen werden üblicherweise alle 5-7 Jahre ersetzt',
    },
    sections: [
        {
            id: 'denture-types',
            title: 'Arten von Zahnersatz, die wir anbieten',
            content: `
                <p>Wir bieten spezialisierte Lösungen an, abhängig von der Anzahl der fehlenden Zähne und der Gesundheit Ihres Kiefers:</p>
                <ul>
                    <li><strong>Vollprothesen:</strong> Werden verwendet, wenn alle Zähne im oberen oder unteren Zahnbogen fehlen. Sie bestehen aus einer zahnfleischfarbenen Acrylbasis für einen sicheren Sitz.</li>
                    <li><strong>Teilprothesen:</strong> Ideal, wenn noch einige natürliche Zähne vorhanden sind. Diese werden oft mit einem diskreten Gerüst gesichert, um ein Verschieben der vorhandenen Zähne zu verhindern.</li>
                    <li><strong>Implantatgetragene Prothesen:</strong> Für maximale Stabilität können Prothesen an Zahnimplantaten verankert werden. Dies macht Haftmittel überflüssig und verhindert ein Verrutschen beim Essen oder Sprechen.</li>
                </ul>
            `
        },
        {
            id: 'custom-crafting',
            title: 'Die Kunst der individuellen Anpassung',
            content: `
                <p>Der Erfolg einer Prothese liegt in ihrer Präzision. Unser mehrstufiger Anpassungsprozess sorgt für optimalen Komfort:</p>
                <ol>
                    <li><strong>Detaillierte Abdrücke:</strong> Wir erstellen präzise Abformungen Ihres Kieferkamms und Gaumens, um eine möglichst stabile Basis zu gewährleisten.</li>
                    <li><strong>Bissregistrierung:</strong> Wir messen, wie Ihre Kiefer aufeinandertreffen, um sicherzustellen, dass Ihre neuen Zähne harmonisch funktionieren, ohne Kieferschmerzen zu verursachen.</li>
                    <li><strong>Wachsanprobe:</strong> Sie probieren eine Wachsversion Ihrer Prothese aus, um Ästhetik – Größe, Form und Farbton – zu bestätigen, bevor der endgültige Satz gefertigt wird.</li>
                </ol>
            `
        },
        {
            id: 'adjustment-period',
            title: 'Das Leben mit neuen Prothesen',
            content: `
                <p>Die Gewöhnung an neuen Zahnersatz ist ein schrittweiser Prozess. Das erwartet Sie in den ersten Wochen:</p>
                <ul>
                    <li><strong>Muskuläre Anpassung:</strong> Ihre Zungen- und Wangenmuskulatur lernt mit der Zeit ganz natürlich, die Prothese an ihrem Platz zu halten.</li>
                    <li><strong>Sprechen & Ernährung:</strong> Wir empfehlen, lautes Vorlesen zu üben und mit weichen, klein geschnittenen Speisen zu beginnen, um Sicherheit zu gewinnen.</li>
                    <li><strong>Tägliche Pflege:</strong> Prothesen sollten täglich mit speziellen Bürsten gereinigt und über Nacht eingeweicht werden, um das Material hydratisiert und Ihr Zahnfleisch gesund zu halten.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Globale Patientenbetreuung',
            content: `
                <p>Wir bieten eine nahtlose Erfahrung für internationale Patienten, die hochwertige und erschwingliche Prothetik suchen:</p>
                <ul>
                    <li><strong>Optimierte Zeitpläne:</strong> Wir priorisieren Ihre Laborarbeiten, um sicherzustellen, dass Ihre Anpassungstermine während Ihres Besuchs effizient abgeschlossen werden.</li>
                    <li><strong>Reise-Concierge:</strong> Unterstützung bei lokalem Transport und komfortabler Unterbringung in der Nähe unserer Klinik.</li>
                    <li><strong>Bequeme Nachsorge:</strong> Folgetermine für Anpassungen oder Unterfütterungen können an unseren Partnerstandorten in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong> arrangiert werden.</li>
                </ul>
            `
        }
    ]
};

export default denturesContent;