import type { ServiceContent } from '@/lib/services';

const whitePeelingContent: ServiceContent = {
    description: [
        "Ein weißes Peeling ist eine spezialisierte chemische Behandlung auf medizinischem Niveau, die gezielt auf Hyperpigmentierung und einen unebenen Hautton ausgerichtet ist. Im Gegensatz zu Standard-Peelings, die sich auf die allgemeine Textur oder Akne konzentrieren, nutzt ein weißes Peeling eine potente Mischung aus depigmentierenden Wirkstoffen, die darauf ausgelegt sind, die Melanozyten zu hemmen – die Zellen, die für die Pigmentproduktion verantwortlich sind. Dieser duale Ansatz beseitigt bestehende dunkle Flecken und unterdrückt gleichzeitig die biologischen Auslöser, die neue Verfärbungen verursachen.",
        "Diese fortschrittliche Behandlung ist die ideale Lösung für Patienten, die mit Melasma, Sonnenschäden und postinflammatorischer Hyperpigmentierung (PIH) zu kämpfen haben. Durch die Beschleunigung der Zellerneuerung und ein sanftes Peeling der pigmentierten Schichten der Epidermis enthüllt das weiße Peeling einen leuchtenden, gleichmäßigeren Teint und hellt das gesamte Erscheinungsbild der Haut mit professioneller Präzision deutlich auf."
    ],
    benefits: [
        "Pigmentkorrektur: Verblasst effektiv Sonnenflecken, Altersflecken und hartnäckiges hormonelles Melasma.",
        "Melanin-Unterdrückung: Hemmt die Tyrosinase-Aktivität, um die Bildung neuer dunkler Flecken zu verhindern.",
        "Strahlender Teint: Beseitigt fahle Haut durch Entfernung abgestorbener Hautzellen und Stimulierung neuen Zellwachstums.",
        "Ebenmäßiger Hautton: Harmonisiert die Farbpalette der Haut und reduziert Rötungen sowie braune Flecken.",
        "Heilung nach Akne: Zielt auf dunkle Male ab, die oft nach Akne-Ausbrüchen zurückbleiben, und lässt diese verblassen."
    ],
    quickFacts: {
        procedureTime: '30 Minuten',
        anesthesia: 'Keine erforderlich (leichtes Kribbeln)',
        recoveryTime: '3 - 7 Tage mit leichter Rötung und Schuppung',
        results: 'Optimale Ergebnisse nach einer Serie von 3-6 Sitzungen',
    },
    sections: [
        {
            id: 'targeted-pigment-science',
            title: 'Die Wissenschaft der Depigmentierung',
            content: `
                <p>Unser White-Peeling-System wirkt über drei verschiedene biologische Wege, um langfristige Hautklarheit zu gewährleisten:</p>
                <ul>
                    <li><strong>Tyrosinase-Hemmung:</strong> Wirkstoffe erreichen die tieferen Schichten der Epidermis, um das Enzym „auszuschalten“, das die Melaninproduktion auslöst.</li>
                    <li><strong>Beschleunigte Exfoliation:</strong> Die chemische Lösung löst die Verbindungen zwischen pigmentierten Hautzellen, sodass diese schneller abgestoßen werden können.</li>
                    <li><strong>Aufhellende Synergie:</strong> Durch das Freimachen des Weges für neue, gesunde Zellen lässt das Peeling das Licht gleichmäßiger von der Hautoberfläche reflektieren, was einen „Glass Skin“-Effekt erzeugt.</li>
                </ul>
            `
        },
        {
            id: 'treatment-protocol',
            title: 'Was Sie während des Verfahrens erwartet',
            content: `
                <p>Eine White-Peeling-Sitzung ist ein fokussiertes klinisches Verfahren, das von unseren Ästhetik-Spezialisten durchgeführt wird:</p>
                <ol>
                    <li><strong>Hautanalyse:</strong> Wir bewerten Ihren Fitzpatrick-Hauttyp und die Tiefe Ihrer Pigmentierung, um die Intensität des Peelings zu kalibrieren.</li>
                    <li><strong>Vorbereitung:</strong> Die Haut wird gründlich gereinigt und entfettet, um sicherzustellen, dass die Peeling-Wirkstoffe gleichmäßig eindringen.</li>
                    <li><strong>Anwendung:</strong> Die Lösung wird in präzisen Schichten aufgetragen. Sie können ein kurzes Wärmegefühl oder ein Stechen verspüren, wenn die Wirkstoffe mit der Haut interagieren.</li>
                    <li><strong>Neutralisierung:</strong> Sobald der gewünschte klinische Endpunkt erreicht ist, wird das Peeling neutralisiert und ein kühlender, beruhigender Balsam aufgetragen.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-importance',
            title: 'Nachbehandlung & Sonnenschutz',
            content: `
                <p>Der Erfolg eines weißen Peelings besteht zu 50 % aus der Behandlung und zu 50 % aus der Nachsorge. Der Schutz Ihrer „neuen“ Haut ist entscheidend:</p>
                <ul>
                    <li><strong>SPF ist obligatorisch:</strong> Sie müssen täglich Breitband-Sonnenschutz mit SPF 50+ auftragen. Unprotected Sonnenexposition kann dazu führen, dass das Pigment dunkler als zuvor zurückkehrt.</li>
                    <li><strong>Sanfte Routine:</strong> Verwenden Sie für mindestens 7 Tage nach der Behandlung nur milde, feuchtigkeitsspendende Reinigungsmittel und ceramidreiche Feuchtigkeitscremes.</li>
                    <li><strong>Hände weg:</strong> Lassen Sie die Haut natürlich abschuppen. Das Zupfen an schälender Haut kann zu Narbenbildung oder sekundärer Hyperpigmentierung führen.</li>
                    <li><strong>Wirkstoff-Pause:</strong> Vermeiden Sie Retinoide, AHAs und Vitamin-C-Seren für eine Woche nach der Behandlung, sofern nicht anders angewiesen.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Elite-Support für internationale Kunden',
            content: `
                <p>Wir bieten einen nahtlosen Ablauf für Patienten, die für fortschrittliche ästhetische Dermatologie anreisen:</p>
                <ul>
                    <li><strong>Koordinierte Reise:</strong> Vollständige Unterstützung bei Flughafentransfers und Unterbringung in <strong>Albanien</strong>, <strong>Kosovo</strong> oder <strong>Italien</strong>.</li>
                    <li><strong>Kontinuität der Behandlung:</strong> Bei Patienten, die eine Serie von Peelings benötigen, können die Sitzungen an unseren verschiedenen regionalen Standorten passend zu Ihrem Reiseplan geplant werden.</li>
                    <li><strong>Virtuelle Konsultationen:</strong> Besprechen Sie Ihre Hautprobleme vor Ihrer Reise per Videoanruf mit unseren Spezialisten, um sicherzustellen, dass das weiße Peeling die beste Wahl für Sie ist.</li>
                </ul>
            `
        }
    ]
};

export default whitePeelingContent;