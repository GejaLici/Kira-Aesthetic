import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign ist ein revolutionäres kieferorthopädisches System, das Zähne mithilfe einer Serie maßgefertigter, praktisch unsichtbarer klarer Zahnschienen (Aligner) begradigt. Dieser moderne Ansatz bietet eine diskrete, komfortable und flexible Alternative zu herkömmlichen Metallzahnspangen und ist damit die erste Wahl für Erwachsene und Jugendliche, die ihr Lächeln ohne den typischen „Zahnspangen-Look“ verschönern möchten. Die Aligner werden aus glattem, BPA-freiem Kunststoff gefertigt, schmiegen sich eng an Ihre Zähne an und üben kontrollierten Druck aus, um sie in die perfekte Position zu führen.",
        "Über die Ästhetik hinaus bietet Invisalign eine hochgradig planbare und hygienische Erfahrung. Da die Schienen herausnehmbar sind, können Sie Ihre gewohnte Ernährung und Zahnpflege problemlos beibehalten. Mithilfe fortschrittlicher digitaler 3D-Modellierung können wir Ihren gesamten Weg vom ersten Aligner bis zu Ihrem finalen, selbstbewussten Lächeln planen, sodass Sie Ihre voraussichtlichen Ergebnisse bereits vor Beginn der Behandlung sehen können."
    ],
    benefits: [
        "Nahezu unsichtbar: Das klare SmartTrack™-Material macht Ihre Behandlung praktisch unbemerkbar.",
        "Herausnehmbar: Nehmen Sie Ihre Aligner zum Essen, Trinken und für besondere soziale Anlässe einfach heraus.",
        "Überlegener Komfort: Keine Metallbrackets oder Drähte, die Reizungen im Mund oder Notfälle verursachen könnten.",
        "Bessere Hygiene: Zähneputzen und die Verwendung von Zahnseide bleiben einfach, was das Risiko von Plaquebildung während der Behandlung senkt.",
        "Digitale Präzision: 3D-Mapping sorgt für genauere Zahnbewegungen und oft kürzere Behandlungszeiten."
    ],
    quickFacts: {
        procedureTime: 'Erster Scan: 30 Min.; Kontrollen: Alle 6-8 Wochen',
        anesthesia: 'Nicht erforderlich',
        recoveryTime: 'Keine; 1-2 Tage leichter Druck bei jeder neuen Schiene',
        results: 'Gerade Zähne typischerweise in 12 - 18 Monaten',
    },
    sections: [
        {
            id: 'digital-precision',
            title: 'Fortschrittliche 3D-Planungstechnologie',
            content: `
                <p>Der Kern des Erfolgs von Invisalign ist unser hochmoderner digitaler Workflow, der eine perfekte Passform und vorhersehbare Ergebnisse garantiert:</p>
                <ul>
                    <li><strong>iTero® Digital Scanning:</strong> Wir erfassen in wenigen Minuten ein hochauflösendes 3D-Bild Ihrer Zähne und ersetzen damit die unangenehmen, klebrigen Abdruckmassen der Vergangenheit.</li>
                    <li><strong>ClinCheck® Software:</strong> Dies ermöglicht uns die Feinabstimmung jeder Zahnbewegung. Sie können eine virtuelle 3D-Animation der Transformation Ihres Lächelns sehen, bevor wir Ihre individuellen Schienen bestellen.</li>
                    <li><strong>SmartStage® Technologie:</strong> Diese optimiert die Abfolge Ihrer Zahnbewegungen, um sicherzustellen, dass sich jeder Zahn in der richtigen Reihenfolge für maximale Effizienz bewegt.</li>
                </ul>
            `
        },
        {
            id: 'the-invisalign-journey',
            title: 'Ihr Weg zu einem neuen Lächeln',
            content: `
                <p>Die Behandlung ist unkompliziert und so konzipiert, dass sie nahtlos in einen geschäftigen Lebensstil passt:</p>
                <ol>
                    <li><strong>Beratung:</strong> Wir bewerten Ihre Zahnstruktur und besprechen Ihre ästhetischen Ziele, um sicherzustellen, dass Invisalign die richtige Wahl für Sie ist.</li>
                    <li><strong>Individuelle Fertigung:</strong> Ihre 3D-Scans werden an das Labor geschickt, wo eine komplette Serie maßgefertigter Aligner speziell für Sie hergestellt wird.</li>
                    <li><strong>Die Routine:</strong> Sie tragen jeden Schienensatz etwa 20–22 Stunden am Tag und wechseln alle 1–2 Wochen zum nächsten Satz.</li>
                    <li><strong>Überwachung:</strong> Kurze Kontrolltermine alle paar Monate stellen sicher, dass sich Ihre Zähne exakt nach Plan bewegen.</li>
                </ol>
            `
        },
        {
            id: 'lifestyle-maintenance',
            title: 'Leben mit unsichtbaren Schienen',
            content: `
                <p>Invisalign erfordert Disziplin, bietet aber im Vergleich zu festsitzenden Apparaturen unübertroffene Freiheit:</p>
                <ul>
                    <li><strong>Ernährungsfreiheit:</strong> Da Sie die Schienen zum Essen herausnehmen, gibt es keine Einschränkungen bei harten, klebrigen oder knusprigen Lebensmitteln.</li>
                    <li><strong>Reinigung:</strong> Spülen Sie Ihre Aligner einfach ab und bürsten Sie sie vorsichtig mit einer weichen Zahnbürste, um sie klar und geruchsfrei zu halten.</li>
                    <li><strong>Vivera® Retainer:</strong> Nach Abschluss Ihrer Behandlung erhalten Sie maßgefertigte Vivera-Retainer, die mit derselben hochwertigen Technologie hergestellt werden, um Ihr neues Lächeln dauerhaft perfekt in Position zu halten.</li>
                </ul>
            `
        },
        {
            id: 'international-patient-care',
            title: 'Globale kieferorthopädische Exzellenz',
            content: `
                <p>Wir sind darauf spezialisiert, Invisalign-Behandlungen für unsere internationalen Patienten zu koordinieren:</p>
                <ul>
                    <li><strong>Kompakte Termine:</strong> Wir können mehrere Aligner-Sets auf einmal aushändigen, um die Anzahl der erforderlichen Klinikbesuche zu minimieren.</li>
                    <li><strong>Regionale Unterstützung:</strong> Nutzen Sie Fortschrittskontrollen und zahnärztliche Betreuung in jeder unserer Partnerkliniken in <strong>Albanien</strong>, im <strong>Kosovo</strong> oder in <strong>Italien</strong>.</li>
                    <li><strong>Concierge-Service:</strong> Wir unterstützen Sie bei Reisevorbereitungen und Unterkünften vor Ort, um Ihren „Zahnurlaub“ reibungslos und stressfrei zu gestalten.</li>
                </ul>
            `
        }
    ]
};

export default invisalignContent;