import type { ServiceContent } from '@/lib/services';

const prpFaceContent: ServiceContent = {
    description: [
        "Die PRP-Therapie (Platelet-Rich Plasma) für das Gesicht, populär bekannt als „Vampire Facial“, ist eine revolutionäre Behandlung zur Hautverjüngung, welche die Heilkraft Ihrer eigenen Biologie nutzt. Durch die Isolierung konzentrierter Blutplättchen aus Ihrem Blut, die reich an essenziellen Wachstumsfaktoren sind, löst dieses 100 % natürliche Verfahren eine Tiefengewebereparatur aus, stimuliert die Kollagenproduktion und beschleunigt den Erneuerungsprozess der Haut.",
        "Im Gegensatz zu synthetischen Behandlungen arbeitet PRP von innen heraus, um die strukturelle Integrität Ihrer Haut zu verbessern. Es ist eine ideale Lösung für Personen, die feine Linien reduzieren, Aknenarben glätten und einen jugendlichen, gesunden Glow wiederherstellen möchten. Durch die Nutzung der körpereigenen regenerativen Fähigkeiten liefert das Vampire Facial langfristige Verbesserungen der Hautqualität, -textur und -festigkeit ohne das Risiko allergischer Reaktionen."
    ],
    benefits: [
        "Natürliche Verjüngung: Nutzt Ihre eigenen Blutbestandteile ohne synthetische Chemikalien oder Zusätze.",
        "Kollagensynthese: Steigert die Produktion von Typ-I-Kollagen für eine festere und dickere Haut.",
        "Narben- & Texturreparatur: Äußerst effektiv bei der Glättung von Aknenarben und feinen Hautunregelmäßigkeiten.",
        "Strahlender Teint: Verbessert die Durchblutung und den Zellumsatz für ein Leuchten von innen heraus.",
        "Sicher & Biokompatibel: Kein Risiko von Abstoßungen oder allergischen Reaktionen, da es autolog ist (vom eigenen Körper)."
    ],
    quickFacts: {
        procedureTime: '60 - 90 Minuten',
        anesthesia: 'Starke topische Betäubungscreme',
        recoveryTime: '24 - 48 Stunden leichte Rötung (Gefühl eines Sonnenbrands)',
        results: 'Erster Glow nach 1 Woche; strukturelle Verbesserungen nach 4-6 Wochen',
    },
    sections: [
        {
            id: 'science-of-prp',
            title: 'Die Wissenschaft hinter dem Glow',
            content: `
                <p>Die Wirksamkeit eines Vampire Facials liegt in der hohen Konzentration von Blutplättchen, die direkt in die Dermis abgegeben werden:</p>
                <ul>
                    <li><strong>Die Extraktion:</strong> Eine kleine Blutprobe wird entnommen und in einer speziellen Zentrifuge platziert, um das Plasma von den roten Blutkörperchen zu trennen.</li>
                    <li><strong>Wachstumsfaktoren:</strong> Das resultierende PRP enthält die 5- bis 10-fache Konzentration an Wachstumsfaktoren im Vergleich zu normalem Blut, die als „Botenstoffe“ fungieren, um das Zellwachstum anzuregen.</li>
                    <li><strong>Synergie mit Microneedling:</strong> Wir verwenden Microneedling, um vertikale Kanäle in der Haut zu erzeugen, die es dem PRP ermöglichen, die Oberflächenbarriere zu umgehen und die regenerativen Schichten der Haut zu erreichen.</li>
                </ul>
            `
        },
        {
            id: 'treatment-steps',
            title: 'Was Sie während Ihrer Sitzung erwartet',
            content: `
                <p>Unser klinisches Protokoll ist auf maximalen Komfort und Sterilität ausgelegt:</p>
                <ol>
                    <li><strong>Betäubung & Entnahme:</strong> Während eine starke Betäubungscreme einwirkt, führt unser medizinisches Team eine schnelle, standardmäßige Blutentnahme durch.</li>
                    <li><strong>Verarbeitung:</strong> Ihr Blut wird vor Ort mit einer Hochpräzisionszentrifuge verarbeitet, um das „flüssige Gold“ (PRP) zu isolieren.</li>
                    <li><strong>Infusion:</strong> Das PRP wird topisch aufgetragen, während ein medizinisches Microneedling-Gerät über die Haut gleitet und die Blutplättchen in die Mikrokanäle drückt.</li>
                    <li><strong>Beruhigung:</strong> Wir schließen die Behandlung mit dem Auftragen des restlichen Plasmas ab, das als natürliche Heilmaske fungiert.</li>
                </ol>
            `
        },
        {
            id: 'aftercare-protocol',
            title: 'Nachsorge und Haltbarkeit der Ergebnisse',
            content: `
                <p>Da die Behandlung eine natürliche Heilungsreaktion auslöst, ist die korrekte Nachsorge essenziell:</p>
                <ul>
                    <li><strong>Die ersten 24 Stunden:</strong> Vermeiden Sie es, Ihr Gesicht zu waschen oder Make-up aufzutragen, damit die Wachstumsfaktoren weiter wirken können. Erwarten Sie ein Aussehen wie bei einem leichten Sonnenbrand.</li>
                    <li><strong>Hydratation & Schutz:</strong> Verwenden Sie nur sanfte, zugelassene Feuchtigkeitscremes und vermeiden Sie für mindestens eine Woche direkte Sonneneinstrahlung.</li>
                    <li><strong>Optimale Ergebnisse:</strong> Während eine Sitzung eine sichtbare Erfrischung bietet, empfehlen wir in der Regel eine Serie von 3 Behandlungen im Abstand von 4-6 Wochen für eine tiefgreifende Hauterneuerung.</li>
                </ul>
            `
        },
        {
            id: 'international-concierge',
            title: 'Premium-Betreuung für internationale Patienten',
            content: `
                <p>Wir gewährleisten eine nahtlose und komfortable Reise für unsere globalen Kunden, die eine natürliche Hautverjüngung suchen:</p>
                <ul>
                    <li><strong>Reiseunterstützung:</strong> Hilfe bei Flughafentransfers und erstklassigen Unterkünften in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Regionale Nachsorge:</strong> Sie können Ihre Folgesitzungen an jedem unserer Klinikstandorte wählen, passend zu Ihrem Reiseplan.</li>
                    <li><strong>Medizinische Standards:</strong> Alle PRP-Verfahren werden von zertifiziertem medizinischem Fachpersonal unter Verwendung steriler Einweg-Sets und FDA/CE-geprüfter Geräte durchgeführt.</li>
                </ul>
            `
        }
    ]
};

export default prpFaceContent;