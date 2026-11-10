import type { ServiceContent } from '@/lib/services';

const breastReconstructionContent: ServiceContent = {
    description: [
        "Die Brustrekonstruktion ist ein essenzieller chirurgischer Prozess, der darauf abzielt, Form, Volumen und Erscheinungsbild der Brust nach einer Mastektomie oder Lumpektomie wiederherzustellen. Dieser Eingriff geht über die rein körperliche Wiederherstellung hinaus; er ist ein grundlegender Schritt in der emotionalen und psychologischen Genesung einer Patientin. Er hilft dabei, das Vertrauen in den eigenen Körper und ein Gefühl der Ganzheit nach einer Brustkrebserkrankung oder anderen medizinischen Indikationen zurückzugewinnen.",
        "Unser spezialisiertes Rekonstruktionsteam setzt fortschrittliche mikrochirurgische und implantatbasierte Techniken ein, um eine Brust zu kreieren, die so natürlich wie möglich aussieht und sich auch so anfühlt. Wir arbeiten eng mit Ihrem Onkologie-Team zusammen, um einen nahtlosen Übergang von der Behandlung zur Wiederherstellung zu gewährleisten. Dabei bieten wir sowohl die sofortige (zum Zeitpunkt der Mastektomie) als auch die verzögerte Rekonstruktion an, maßgeschneidert auf Ihren spezifischen Gesundheitsweg."
    ],
    benefits: [
        "Wiederherstellung der körperlichen Symmetrie und der natürlichen Brustkontur.",
        "Deutliche Verbesserung des psychischen Wohlbefindens und des Selbstwertgefühls nach einer Mastektomie.",
        "Beseitigt die Notwendigkeit für externe Brustprothesen.",
        "Bietet dauerhafte Ergebnisse durch modernste Implantate oder Eigengewebe.",
        "Individueller Ansatz zur Anpassung an Größe und Form der natürlichen Brust."
    ],
    quickFacts: {
        procedureTime: '2 - 12 Stunden (variiert je nach Technik)',
        anesthesia: 'Vollnarkose',
        recoveryTime: '4 - 8 Wochen für eine vollständige Genesung',
        results: 'Dauerhafte Wiederherstellung (evtl. spätere Verfeinerung der Brustwarze erforderlich)',
    },
    sections: [
        {
            id: 'reconstruction-options',
            title: 'Rekonstruktionsmethoden',
            content: `
                <p>Wir bieten verschiedene Wege der Rekonstruktion an, abhängig von Ihrer körperlichen Gesundheit und Ihren ästhetischen Vorlieben:</p>
                <ul>
                    <li><strong>Implantatbasierte Rekonstruktion:</strong> Der am häufigsten gewählte Ansatz, oft unter Verwendung eines Gewebeexpanders, gefolgt von einem dauerhaften Silikon- oder Kochsalzimplantat. Dies erfordert in der Regel eine kürzere Genesungszeit.</li>
                    <li><strong>Autologe (Eigengewebe-) Rekonstruktion:</strong> Eine hochmoderne Technik, bei der der Chirurg eigenes Gewebe vom Bauch (DIEP- oder TRAM-Flap), vom Rücken (Latissimus Dorsi) oder von den Oberschenkeln verwendet. Dies führt zu einer Brust, die sich am natürlichsten anfühlt.</li>
                    <li><strong>Onkoplastische Chirurgie:</strong> Bei Patientinnen, die sich einer Teilmastektomie unterziehen, nutzen wir plastisch-chirurgische Techniken, um das verbleibende Brustgewebe neu zu formen und Defekte oder Asymmetrien zu vermeiden.</li>
                </ul>
            `
        },
        {
            id: 'surgical-process',
            title: 'Der Weg der Rekonstruktion',
            content: `
                <p>Eine Rekonstruktion erfolgt oft in mehreren Phasen, um eine optimale Symmetrie zu erreichen:</p>
                <ol>
                    <li><strong>Phase 1 (Wiederherstellung):</strong> Aufbau des Brusthügels mittels Implantat oder Gewebelappen.</li>
                    <li><strong>Phase 2 (Symmetrie):</strong> Ein zweiter Eingriff an der gegenüberliegenden Brust (Straffung oder Verkleinerung) kann durchgeführt werden, um ein perfektes Match zu garantieren.</li>
                    <li><strong>Phase 3 (Verfeinerung):</strong> Optionale Rekonstruktion von Brustwarze und Warzenhof, oft durch lokale Gewebelappen oder medizinisches Tätowieren.</li>
                </ol>
            `
        },
        {
            id: 'safety-recovery',
            title: 'Genesung und Langzeitpflege',
            content: `
                <p>Die Genesung hängt von der Komplexität des Eingriffs ab, wobei Eigengewebe-Operationen eine intensivere Nachsorge erfordern:</p>
                <ul>
                    <li><strong>Klinikaufenthalt:</strong> Reicht von 1-2 Tagen bei Implantaten bis zu 3-7 Tagen bei autologen Gewebetransfers.</li>
                    <li><strong>Drainagen:</strong> Temporäre chirurgische Drainagen werden verwendet, um Wundflüssigkeit abzuleiten, und meist innerhalb von 1-2 Wochen entfernt.</li>
                    <li><strong>Aktivität:</strong> Anstrengende Bewegungen und schweres Heben müssen für mindestens 6 Wochen vermieden werden, um das Überleben des Gewebes und eine ordnungsgemäße Heilung zu gewährleisten.</li>
                </ul>
            `
        },
        {
            id: 'international-support',
            title: 'Globale Patientenkoordination',
            content: `
                <p>Wir bieten eine einfühlsame und umfassende Betreuung für Patienten, die für eine rekonstruktive Behandlung anreisen:</p>
                <ul>
                    <li><strong>Logistik-Service:</strong> Unterstützung bei Transport und sicherer, komfortabler Unterbringung während Ihrer ersten Erholungsphase.</li>
                    <li><strong>Kontinuität der Versorgung:</strong> Unser einzigartiges Netzwerk ermöglicht Ihnen Nachuntersuchungen in <strong>Albanien</strong>, <strong>Kosovo</strong> oder <strong>Italien</strong>.</li>
                    <li><strong>Kollaborative Medizin:</strong> Wir koordinieren uns direkt mit Ihrem Onkologen am Heimatort, um sicherzustellen, dass Ihr chirurgischer Plan mit Ihrem gesamten Krebsbehandlungsplan übereinstimmt.</li>
                </ul>
            `
        }
    ]
};

export default breastReconstructionContent;