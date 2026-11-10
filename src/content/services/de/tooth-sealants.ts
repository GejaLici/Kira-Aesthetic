import type { ServiceContent } from '@/lib/services';

const dentalSealantsContent: ServiceContent = {
    description: [
        "Eine Fissurenversiegelung ist eine hauchdünne, schützende Hochleistungsbeschichtung, die auf die Kauflächen der Backenzähne (Molare und Prämolare) aufgetragen wird. Diese Zähne weisen von Natur aus tiefe Grübchen und Fissuren auf – mikroskopische Rillen, die oft schmaler sind als eine einzelne Borste der Zahnbürste. Durch das Auffüllen dieser anfälligen Bereiche schaffen Versiegelungen einen glatten Schutzschild, der verhindert, dass sich Speisereste und säureproduzierende Bakterien im Schmelz festsetzen.",
        "Versiegelungen gelten als eine der effektivsten Vorsorgemaßnahmen in der modernen Kinderzahnheilkunde. Diese schmerzfreie und nicht-invasive Behandlung wirkt als physikalische Barriere gegen Karies und reduziert die Wahrscheinlichkeit von Löchern in den kariesanfälligsten Jahren eines Kindes massiv. Es ist eine proaktive Investition, die die strukturelle Integrität der bleibenden Zähne schützt, bevor Karies überhaupt eine Chance hat zu beginnen."
    ],
    benefits: [
        "Gezielter Schutz: Schützt die tiefen Rillen der Backenzähne, in denen 80% der Karies bei Kindern entstehen.",
        "Schmerzfrei & Non-invasiv: Kein Bohren, keine Spritzen und kein Abtrag von gesunder Zahnsubstanz erforderlich.",
        "Schnelle Anwendung: Jeder Zahn kann in nur wenigen Minuten versiegelt und geschützt werden.",
        "Langfristige Haltbarkeit: Hält dem normalen Kaudruck über mehrere Jahre hinweg stand.",
        "Kosteneffektive Prävention: Deutlich preiswerter als Füllungen oder Kronen, die zur Kariesbehandlung nötig wären."
    ],
    quickFacts: {
        procedureTime: '5 - 10 Minuten pro Zahn',
        anesthesia: 'Nicht erforderlich',
        recoveryTime: 'Sofort; Patienten können direkt nach der Behandlung essen und trinken',
        results: 'Sofortiger Schutz gegen Speisereste und bakterielle Plaque',
    },
    sections: [
        {
            id: 'how-sealants-work',
            title: 'Schaffung einer physikalischen Barriere',
            content: `
                <p>Um den Wert von Versiegelungen zu verstehen, hilft ein Blick auf die Anatomie eines Backenzahns:</p>
                <ul>
                    <li><strong>Das Problem:</strong> Die „Fissuren“ auf der Oberseite der Molaren sind so tief, dass sie Plaque einfangen, aber zu schmal für die Reinigung mit einer Bürste sind.</li>
                    <li><strong>Die Lösung:</strong> Die flüssige Versiegelung fließt in diese Rillen, füllt sie vollständig aus und härtet zu einem harten, kunststoffähnlichen Schild aus.</li>
                    <li><strong>Das Ergebnis:</strong> Eine glatte Oberfläche, die leicht sauber zu halten ist und Bakterien keinen Raum zum Verstecken bietet.</li>
                </ul>
            `
        },
        {
            id: 'application-steps',
            title: 'Ein einfacher, mehrstufiger Prozess',
            content: `
                <p>Das Auftragen einer Versiegelung ist ein unkomplizierter klinischer Vorgang:</p>
                <ol>
                    <li><strong>Dekontamination:</strong> Der Zahn wird präzise gereinigt, um Oberflächenplaque oder Rückstände zu entfernen.</li>
                    <li><strong>Konditionierung:</strong> Ein mildes Ätzgel wird kurz aufgetragen, um eine mikroskopische Textur für eine dauerhafte Verbindung zu schaffen.</li>
                    <li><strong>Bonding:</strong> Der Zahn wird getrocknet und die flüssige Versiegelung auf die Grübchen „gemalt“.</li>
                    <li><strong>Lichthärtung:</strong> Ein spezielles blaues LED-Licht härtet das Material sofort aus und verbindet es sicher mit dem Schmelz.</li>
                </ol>
            `
        },
        {
            id: 'optimal-timing',
            title: 'Wann ist der beste Zeitpunkt für Versiegelungen?',
            content: `
                <p>Das Timing ist entscheidend, um Zähne zu schützen, sobald sie am anfälligsten sind:</p>
                <ul>
                    <li><strong>Erste Molaren:</strong> Diese erscheinen meist um das 6. Lebensjahr. Eine frühe Versiegelung schützt sie während der Übergangsphase.</li>
                    <li><strong>Zweite Molaren:</strong> Diese brechen etwa im Alter von 12 Jahren durch. Die Versiegelung dieser Zähne bietet Schutz während der Teenagerjahre.</li>
                    <li><strong>Erwachsene Patienten:</strong> Auch Erwachsene mit tiefen Fissuren und ohne bestehende Füllungen können von der präventiven Kraft profitieren.</li>
                </ul>
            `
        }
    ]
};

export default dentalSealantsContent;