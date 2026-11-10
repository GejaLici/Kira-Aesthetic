import type { ServiceContent } from '@/lib/services';

const invisalignContent: ServiceContent = {
    description: [
        "Invisalign përfaqëson revolucionin në ortodonci, duke ofruar një mënyrë pothuajse të padukshme për të drejtuar dhëmbët pa pasur nevojë për tela apo braktete metalike. Përmes një serie aligner-ësh (mbajtëse) transparente të personalizuara, ky sistem lëviz gradualisht dhëmbët tuaj drejt pozicionit ideal me saktësi milimetrike.",
        "Ky trajtim është zgjedhja parësore për të rriturit dhe adoleshentët që kërkojnë diskrecion maksimal, rehati dhe liri gjatë ngrënies dhe higjienës orale. Me teknologjinë tonë të skanimit 3D, ju mund të shihni simulimin e buzëqeshjes suaj të ardhshme para se të filloni procedurën."
    ],
    benefits: [
        "Estetikë e Padukshme: Aligner-ët janë transparentë, duke i bërë ata pothuajse të padallueshëm nga të tjerët.",
        "Higjienë e Lehtësuar: Duke qenë të lëvizshëm, mund t'i hiqni për të larë dhëmbët dhe për të përdorur fillin dentar pa pengesa.",
        "Pa Kufizime në Ushqim: Shijoni çdo ushqim që dëshironi thjesht duke hequr aparatin gjatë vakteve.",
        "Më Pak Vizita te Dentisti: Trajtimi kërkon më pak takime kontrolli dhe nuk ka rrezik nga thyerja e telave.",
        "Saktësi Dixhitale: Plani i trajtimit hartohet me softuerin ClinCheck®, duke garantuar rezultate të parashikueshme."
    ],
    quickFacts: {
        procedureTime: '20-40 minuta (vizita e parë/skanimi)',
        anesthesia: 'Nuk nevojitet',
        recoveryTime: 'Nuk ka (përshtatje e menjëhershme)',
        results: 'Dallueshëm brenda pak muajsh; finale sipas planit',
    },
    sections: [
        {
            id: 'teknologjia-itero',
            title: 'Skanimi 3D dhe Planifikimi ClinCheck®',
            content: `
                <p>Në klinikën tonë, ne kemi zëvendësuar masat tradicionale me skanerin intraoral <strong>iTero</strong>:</p>
                <ul>
                    <li><strong>Saktësi Maksimale:</strong> Skanimi dixhital krijon një model 3D perfekt të dhëmbëve tuaj.</li>
                    <li><strong>Simulimi i Rezultatit:</strong> Ju shihni rrugëtimin e dhëmbëve tuaj javë pas jave deri në buzëqeshjen finale.</li>
                    <li><strong>Komoditet:</strong> Nuk ka më pasta të pakëndshme në gojë për marrjen e masës.</li>
                </ul>
            `
        },
        {
            id: 'përdorimi-i-përditshëm',
            title: 'Si të maksimizoni rezultatet',
            content: `
                <p>Suksesi i Invisalign varet nga disiplina juaj:</p>
                <p>Aligner-ët duhet të mbahen për <strong>20 deri në 22 orë në ditë</strong>. Ata hiqen vetëm gjatë vakteve dhe larjes së dhëmbëve. Çdo 1-2 javë ju do të kaloni në setin tjetër të mbajtëseve, të cilat do të vazhdojnë lëvizjen e programuar. Ky proces është i butë dhe shkakton shumë më pak presion se aparatet tradicionale.</p>
            `
        },
        {
            id: 'pse-ne-invisalign',
            title: 'Pse të zgjidhni specialistët tanë?',
            content: `
                <p>Ekspertiza italiane në shërbim të buzëqeshjes suaj:</p>
                <ul>
                    <li><strong>Ortodontë të Certifikuar:</strong> Ekipi ynë përbëhet nga mjekë italianë të certifikuar nga Invisalign me përvojë ndërkombëtare.</li>
                    <li><strong>Trajtim Hybrid:</strong> Nëse rasti e kërkon, ne kombinojmë Invisalign me teknika të tjera estetike për rezultatin perfekt.</li>
                    <li><strong>Mbështetje Logjistike:</strong> Organizojmë udhëtimin tuaj drejt Shqipërisë për marrjen e aparatit.</li>
                    <li><strong>Ndjekje në Itali:</strong> Mund të kryeni vizitat periodike të monitorimit direkt në pikat tona partnere në Itali.</li>
                </ul>
            `
        }
    ]
};

export default invisalignContent;