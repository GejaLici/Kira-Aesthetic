import type { ServiceContent } from '@/lib/services';

const breastLiftContent: ServiceContent = {
    description: [
        "Ngritja e gjoksit, ose mastopeksia, është një procedurë kirurgjikale estetike që synon korrigjimin e gjoksit të varur (ptozës) duke rikthyer formën, pozicionin dhe qëndrueshmërinë e tij rinore. Përmes heqjes së lëkurës së tepërt dhe shtrëngimit të indeve mbështetëse, kjo ndërhyrje rimodelon konturin e gjoksit dhe zhvendos thithat në një pozicion më estetik dhe proporcional.",
        "Kjo procedurë është zgjidhja ideale për gratë që kanë pësuar ndryshime pas shtatzënisë, ushqyerjes me gji ose rënies në peshë. Kirurgët tanë italianë aplikojnë teknikat më të avancuara të incizionit (lollipop, ankor) për të minimizuar shenjat dhe për të garantuar një rezultat natyral që harmonizohet me siluetën tuaj, duke rikthyer vetëbesimin dhe rehatinë me trupin tuaj."
    ],
    benefits: [
        "Rikthim i Pozicionit: Ngritja e thithave dhe areolave në nivelin ideal anatomik.",
        "Riformësim i Plotë: Gjoksi bëhet më i fortë, më kompakt dhe me formë më të rrumbullakët.",
        "Reduktim i Areolave: Korrigjimi i areolave të zgjeruara për një pamje më proporcionale.",
        "Simetri e Përmirësuar: Eliminimi i diferencave të varjes midis dy gjokseve.",
        "Harmoni Trupore: Përmirësim i ndjeshëm i mënyrës se si rrinë veshjet dhe rrobat e banjës."
    ],
    quickFacts: {
        procedureTime: '2 - 4 orë',
        anesthesia: 'Anestezi e përgjithshme',
        recoveryTime: '10-14 ditë (rikthim në aktivitetet e lehta); 6 javë (aktivitet i plotë)',
        results: 'Dukshëm pas operacionit; stabilizim final pas 6-12 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-ngritjes',
            title: 'Teknikat e Mastopeksisë sipas Shkallës së Ptozës',
            content: `
                <p>Zgjedhja e teknikës kirurgjikale varet nga shkalla e varjes së gjoksit tuaj:</p>
                <ul>
                    <li><strong>Teknika Periareolare:</strong> Një incizion rreth areolës, i përshtatshëm për varje shumë të lehta.</li>
                    <li><strong>Teknika Vertikale (Lollipop):</strong> Incizion rreth areolës dhe një vijë vertikale poshtë saj; ideal për varje mesatare.</li>
                    <li><strong>Teknika Ankor (T e përmbysur):</strong> Përdoret për varje të theksuara, duke lejuar heqjen maksimale të lëkurës së tepërt.</li>
                    <li><strong>Kombinimi me Augmentim:</strong> Nëse dëshironi edhe volum shtesë, mastopeksia mund të kryhet së bashku me vendosjen e implanteve.</li>
                </ul>
            `
        },
        {
            id: 'rikuperimi-dhe-kujdesi',
            title: 'Kujdesi Post-Operator për Rezultate Afatgjata',
            content: `
                <p>Një proces shërimi i suksesshëm kërkon ndjekjen e rreptë të udhëzimeve mjekësore:</p>
                <ul>
                    <li><strong>Sutjena Mjekësore:</strong> Mbajtja e një sutjene kompresuese për 4-6 javë ndihmon në stabilizimin e formës së re.</li>
                    <li><strong>Menaxhimi i Shenjave:</strong> Përdorimi i xhelit të silikonit dhe mbrojtja nga dielli janë thelbësore për zbehjen e incizioneve.</li>
                    <li><strong>Aktiviteti Fizik:</strong> Evitoni ngritjen e peshave dhe vrapimin gjatë muajit të parë për të mos tensionuar indet në shërim.</li>
                </ul>
            `
        },
        {
            id: 'pse-ne',
            title: 'Ekselencë Italiane në Kirurgjinë e Gjoksit',
            content: `
                <p>Zgjedhja e klinikës sonë ju garanton një standard europian të kujdesit:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë ndërkombëtare në kirurgjinë rindërtuese dhe estetike.</li>
                    <li><strong>Planimetria Individuale:</strong> Çdo ndërhyrje dizajnohet duke respektuar proporcionet natyrale të trupit tuaj.</li>
                    <li><strong>Asistencë pas operacionit në Itali:</strong> Ofertë unike për ndjekjen e ecurisë dhe kontrollet periodike direkt në Itali.</li>
                </ul>
            `
        }
    ]
};

export default breastLiftContent;