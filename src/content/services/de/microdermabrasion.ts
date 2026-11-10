import type { ServiceContent } from '@/lib/services';

const microdermabrasionContent: ServiceContent = {
    description: [
        "Die Mikrodermabrasion ist ein nicht-invasives Verfahren zur Hauterneuerung, das darauf abzielt, die Haut zu vitalisieren und zu polieren. Mithilfe eines speziellen Applikators mit Diamantspitze oder feinen Strahlkristallen wird die dicke, äußere Schicht abgestorbener Hautzellen (das Stratum corneum) sanft entfernt. Dieses mechanische Peeling bringt die frische, strahlende Haut darunter zum Vorschein und triggert die natürliche Heilungsreaktion des Körpers, um mehr Kollagen zu produzieren.",
        "Bekannt als das „Lunchtime-Facial“, ist die Mikrodermabrasion eine schnelle und schmerzlose Methode, um eine Vielzahl oberflächlicher Hautunreinheiten zu behandeln. Egal, ob es sich um einen fahlen Teint, feine Linien oder eine unebene Hautstruktur handelt – diese Behandlung sorgt für einen sofortigen Glow und ein glatteres Hautgefühl ohne jegliche Ausfallzeit. Das macht sie zur perfekten Pflegebehandlung für einen geschäftigen Lebensstil."
    ],
    benefits: [
        "Sofortige Strahlkraft: Entfernt fahle, abgestorbene Hautzellen für einen sofortigen, gesunden Glow.",
        "Verfeinerte Struktur: Glättet raue Stellen und mildert das Erscheinungsbild feiner Linien.",
        "Befreit die Poren: Entfernt effektiv Ablagerungen auf der Oberfläche, um das Risiko von Unreinheiten zu senken.",
        "Verbesserte Wirkstoffaufnahme: Ermöglicht es Ihren Seren und Feuchtigkeitscremes, tiefer in die Haut einzudringen.",
        "Ebenmäßiger Hautton: Hilft bei regelmäßiger Anwendung, leichte Hyperpigmentierungen, Sonnenflecken und Altersflecken verblassen zu lassen."
    ],
    quickFacts: {
        procedureTime: '30 - 45 Minuten',
        anesthesia: 'Nicht erforderlich (schmerzfrei)',
        recoveryTime: 'Keine; leichte Rötungen können für 1-2 Stunden anhalten',
        results: 'Sofortige Frische; kumulative Ergebnisse nach einer Behandlungsserie',
    },
    sections: [
        {
            id: 'clinical-approach',
            title: 'Unser individueller Peeling-Ansatz',
            content: `
                <p>Wir betrachten die Mikrodermabrasion als klinischen Hautpflegeschritt und stellen sicher, dass die Intensität perfekt auf die Empfindlichkeit Ihrer Haut abgestimmt ist:</p>
                <ul>
                    <li><strong>Professionelles Equipment:</strong> Wir verwenden hochwertige Systeme mit einstellbaren Saug- und Abrasionsstufen für ein konsistentes und sicheres Ergebnis.</li>
                    <li><strong>Hautanalyse:</strong> Vor Beginn bewerten unsere Kosmetikerinnen Ihren Hauttyp, um sicherzustellen, dass die Mikrodermabrasion die effektivste Wahl für Ihre Anliegen ist.</li>
                    <li><strong>Nährstoff-Infusion:</strong> Nach dem Peeling ist die Haut bereit, Wirkstoffe optimal aufzunehmen. Wir tragen spezielle Seren auf, die reich an Antioxidantien und Hyaluronsäure sind, um die Haut zu beruhigen und zu hydratisieren.</li>
                </ul>
            `
        },
        {
            id: 'treatment-experience',
            title: 'Was Sie während der Sitzung erwartet',
            content: `
                <p>Das Gefühl während der Behandlung wird oft als sanftes „Schleifen“ oder wie das Lecken einer rauen Katzenzunge beschrieben:</p>
                <ol>
                    <li><strong>Reinigung:</strong> Die Haut wird gründlich von Make-up und Ölen befreit.</li>
                    <li><strong>Exfoliation:</strong> Die Kosmetikerin führt das Handstück über die Zielbereiche, wobei ein Vakuum-Sog genutzt wird, um die gelösten Hautschüppchen abzutragen.</li>
                    <li><strong>Hydratation & Schutz:</strong> Eine beruhigende Maske oder ein kühlendes Serum wird aufgetragen, gefolgt von einem Sonnenschutz mit hohem LSF, um die neu freigelegten Hautschichten zu schützen.</li>
                </ol>
            `
        },
        {
            id: 'optimal-results',
            title: 'Ihren Glow bewahren',
            content: `
                <p>Während eine Sitzung bereits eine sichtbare Erfrischung bietet, wird langfristige Hautgesundheit durch Kontinuität erreicht:</p>
                <ul>
                    <li><strong>Empfohlene Serie:</strong> Bei Anliegen wie feinen Linien oder leichten Narben empfehlen wir typischerweise eine Serie von 5 bis 10 Behandlungen.</li>
                    <li><strong>Abstände:</strong> Die Sitzungen finden idealerweise im Abstand von 2 bis 4 Wochen statt, um mit dem natürlichen 28-Tage-Regenerationszyklus Ihrer Haut zu harmonieren.</li>
                    <li><strong>Sonnenschutz:</strong> Da die schützende äußere Schicht entfernt wurde, reagiert Ihre Haut empfindlicher auf UV-Strahlen. Die tägliche Anwendung von Sonnenschutz ist nach der Behandlung obligatorisch.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Erfahrung für internationale Patienten',
            content: `
                <p>Für unsere Kunden, die aus dem Ausland anreisen, sorgen wir für einen produktiven und stressfreien Aufenthalt:</p>
                <ul>
                    <li><strong>Kombinationsbehandlungen:</strong> Die Mikrodermabrasion wird oft mit anderen Verfahren wie chemischen Peelings oder Laserbehandlungen kombiniert, um eine umfassende Hauterneuerung zu erzielen.</li>
                    <li><strong>Reiseunterstützung:</strong> Wir bieten Hilfe bei Transport und erstklassigen Unterkünften in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Grenzübergreifende Betreuung:</strong> Sie können Ihre Behandlungsserie an einem Standort beginnen und die Folgetermine in jeder unserer anderen regionalen Kliniken fortsetzen.</li>
                </ul>
            `
        }
    ]
};

export default microdermabrasionContent;