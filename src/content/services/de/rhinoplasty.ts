import type { ServiceContent } from '@/lib/services';

const rhinoplastikContent: ServiceContent = {
    description: [
        "Die Rhinoplastik, auch bekannt als Nasenkorrektur oder Nasenoperation, ist ein chirurgischer Eingriff, der darauf abzielt, die Form der Nase zu verbessern und sie harmonisch an die Gesichtszüge anzupassen. Viele Patientinnen und Patienten entscheiden sich dafür, die Nase operieren zu lassen, um einen Nasenhöcker, eine breite Nasenspitze oder eine schiefe Nase zu korrigieren.",
        "Neben der ästhetischen Verbesserung spielt die funktionelle Rhinoplastik eine zentrale Rolle bei der Behebung von Atemproblemen, insbesondere bei einer Nasenscheidewandverkrümmung. In unserer Klinik setzen wir überwiegend auf die geschlossene Rhinoplastik sowie auf die moderne ultraschallgestützte Rhinoplastik (Piezo), um präzise Ergebnisse und eine schnellere Heilung zu ermöglichen."
    ],
    benefits: [
        "Verbesserung der Gesichtsharmonie und der Nasenproportionen.",
        "Korrektur von Atemproblemen durch eine schiefe Nasenscheidewand (Rhinoseptoplastik).",
        "Natürliche und dauerhafte Ergebnisse ohne sichtbare Narben.",
        "Steigerung des Selbstbewusstseins und der Lebensqualität.",
        "Schnellere Genesung dank ultraschallgestützter Rhinoplastik."
    ],
    quickFacts: {
        procedureTime: '1–2 Stunden',
        anesthesia: 'Lokale oder Vollnarkose',
        recoveryTime: '1–2 Wochen',
        results: 'Dauerhaft',
    },
    sections: [
        {
            id: 'was-ist-rhinoplastik',
            title: 'Was ist eine Rhinoplastik?',
            content: `
                <p><strong>Die Rhinoplastik</strong> ist ein ästhetisch-funktioneller chirurgischer Eingriff zur Veränderung der Nasenform und zur Verbesserung der Nasenatmung.</p>
                <p>Sie gehört zu den anspruchsvollsten Eingriffen der <strong>ästhetischen Gesichtschirurgie</strong>, da die Nase im Zentrum des Gesichts steht und sowohl optische als auch funktionelle Aufgaben erfüllt.</p>
                <p>Ziel einer modernen Nasenkorrektur ist ein natürlich wirkendes Ergebnis, das sich harmonisch in das Gesamtbild des Gesichts einfügt.</p>
            `
        },
        {
            id: 'wann-nasenoperation',
            title: 'Wann ist eine Nasenoperation sinnvoll?',
            content: `
                <p>Eine Rhinoplastik kann aus ästhetischen, funktionellen oder kombinierten Gründen durchgeführt werden.</p>
                <ul>
                    <li>Ausgeprägter Nasenhöcker</li>
                    <li>Breite, hängende oder asymmetrische Nasenspitze</li>
                    <li>Schiefe Nase von vorne oder im Profil</li>
                    <li>Atembeschwerden durch Nasenscheidewandverkrümmung</li>
                    <li>Folgen von Nasenbrüchen oder Verletzungen</li>
                    <li>Revisions-Rhinoplastik nach misslungener Voroperation</li>
                </ul>
                <p>Entgegen häufiger Befürchtungen sind die <strong>Schmerzen nach einer Nasenoperation</strong> in der Regel gering und gut kontrollierbar.</p>
            `
        },
        {
            id: 'geschlossene-rhinoplastik',
            title: 'Geschlossene Rhinoplastik: Keine sichtbaren Narben',
            content: `
                <p><strong>Die geschlossene Rhinoplastik</strong> ist eine moderne Technik, bei der sämtliche Schnitte innerhalb der Nasenlöcher erfolgen.</p>
                <p>Die Vorteile dieser Methode sind:</p>
                <ul>
                    <li>Keine sichtbaren äußeren Narben</li>
                    <li>Weniger Schwellungen und Blutergüsse</li>
                    <li>Schnellere Heilungsphase</li>
                    <li>Sehr natürliche ästhetische Ergebnisse</li>
                </ul>
                <p>Die <strong>Kosten einer Rhinoplastik</strong> hängen von der individuellen Ausgangssituation und dem gewünschten Ergebnis ab.</p>
            `
        },
        {
            id: 'ultraschall-rhinoplastik',
            title: 'Ultraschall-Rhinoplastik (Piezo): Höchste Präzision',
            content: `
                <p><strong>Die ultraschallgestützte Rhinoplastik</strong>, auch Piezo-Rhinoplastik genannt, stellt einen bedeutenden Fortschritt in der Nasenchirurgie dar.</p>
                <p>Durch den Einsatz von Ultraschall können die Nasenknochen millimetergenau modelliert werden, ohne umliegende Weichteile zu schädigen.</p>
                <ul>
                    <li>Minimaler Knochen- und Gewebetrauma</li>
                    <li>Deutlich weniger Schwellungen und Hämatome</li>
                    <li>Angenehmere Erholungsphase</li>
                    <li>Sehr präzise und symmetrische Resultate</li>
                </ul>
                <p>Der <strong>Preis der ultraschallgestützten Rhinoplastik</strong> spiegelt den Einsatz modernster Technologie und chirurgischer Expertise wider.</p>
            `
        },
        {
            id: 'rhinoseptoplastik',
            title: 'Rhinoseptoplastik: Ästhetik und Atmung',
            content: `
                <p><strong>Die Rhinoseptoplastik</strong> kombiniert eine ästhetische Nasenkorrektur mit der Begradigung der Nasenscheidewand.</p>
                <p>Dieser Eingriff eignet sich für Patientinnen und Patienten, die sowohl unter Atemproblemen als auch unter ästhetischen Einschränkungen leiden.</p>
                <p>Die <strong>Kosten einer Rhinoseptoplastik</strong> richten sich nach dem Schweregrad der Septumabweichung und dem operativen Aufwand.</p>
            `
        },
        {
            id: 'ablauf-rhinoplastik',
            title: 'Ablauf der Rhinoplastik: Vorher, Während und Nachher',
            content: `
                <h3>Vor der Operation</h3>
                <p>Vor der Nasenoperation erfolgt eine umfassende medizinische Untersuchung.</p>
                <ul>
                    <li>Blut- und Urinuntersuchungen</li>
                    <li>Kardiologische Untersuchung und EKG</li>
                    <li>Anästhesie-Voruntersuchung</li>
                    <li>3D-Simulation des möglichen Ergebnisses</li>
                </ul>

                <h3>Narkose</h3>
                <p>Die Rhinoplastik wird unter <strong>intravenöser Vollnarkose</strong> durchgeführt, was eine optimale Kontrolle von Blutung und Schmerz ermöglicht.</p>

                <h3>Nach der Operation</h3>
                <ul>
                    <li>Nasenschiene für 7–10 Tage</li>
                    <li>Moderne, atmungsaktive Nasentamponaden</li>
                    <li>Vorübergehende Schwellung, die kontinuierlich abklingt</li>
                </ul>
            `
        },
        {
            id: 'heilung-ergebnis',
            title: 'Heilungsverlauf und Ergebnisse der Nasenkorrektur',
            content: `
                <p>Nach einer Rhinoplastik ist eine gewisse Schwellung – insbesondere an der Nasenspitze – normal.</p>
                <ul>
                    <li>Gesellschaftsfähigkeit nach etwa 10–14 Tagen</li>
                    <li>Sportliche Aktivitäten nach ca. 4 Wochen</li>
                    <li>Endgültiges Ergebnis nach 6–12 Monaten</li>
                </ul>
                <p>Geduld ist entscheidend, um das endgültige Resultat realistisch beurteilen zu können.</p>
            `
        },
        {
            id: 'warum-wir',
            title: 'Warum Sie sich für unsere Klinik entscheiden sollten',
            content: `
                <ul>
                    <li><strong>Hochspezialisierte Fachärzte</strong> für Rhinoplastik</li>
                    <li><strong>Modernste Piezo-Ultraschalltechnologie</strong></li>
                    <li><strong>Rundum-Betreuung</strong> inklusive Transfer und Unterkunft</li>
                    <li><strong>Postoperative Nachsorge</strong> in Deutschland, Italien oder Frankreich</li>
                </ul>
                <p>Eine <strong>Rhinoplastik im Ausland</strong> bietet ein hervorragendes Preis-Leistungs-Verhältnis bei gleichbleibend hoher medizinischer Qualität.</p>
            `
        }
    ]
};

export default rhinoplastikContent;
