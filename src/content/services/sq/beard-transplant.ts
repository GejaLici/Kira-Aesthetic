import type { ServiceContent } from '@/lib/services';

const beardTransplantContent: ServiceContent = {
    description: [
        "Transplantimi i mjekrës është një procedurë e avancuar e restaurimit të qimeve të fytyrës, e krijuar për meshkujt që dëshirojnë një mjekër më të plotë, më të dendur dhe me konture të qarta. Përmes teknikave moderne mikrokirurgjikale, kjo ndërhyrje lejon mbushjen e boshllëqeve, korrigjimin e asimetrive dhe krijimin e një forme maskuline që harmonizohet me tiparet e fytyrës.",
        "Në klinikën tonë, ne kombinojmë ekspertizën e kirurgëve italianë me teknologjitë më të fundit FUE dhe DHI për të garantuar rezultate 100% natyrale. Duke përdorur gjëndra floku rezistente nga pjesa e pasme e kokës, ne sigurojmë një rritje të përhershme të mjekrës, mustaqeve dhe barsetave, duke rikthyer vetëbesimin dhe pamjen e dëshiruar në një seancë të vetme."
    ],
    benefits: [
        "Dendësi e Plotë: Eliminon zonat e rralla dhe boshllëqet në mjekër, mustaqe dhe barseta.",
        "Rezultat i Përhershëm: Qimet e transplantuara janë gjenetikisht rezistente ndaj rënies dhe rriten gjithë jetën.",
        "Pamje Natyrale: Teknologjia DHI mundëson kontrollin e këndit dhe drejtimit të rritjes për një rezultat të padallueshëm.",
        "Pa Dhimbje dhe Pa Shenja: Procedura kryhet me anestezi lokale dhe nuk lë shenja lineare në zonën e dhurimit.",
        "Stilizim i Lirë: Mjekra e re mund të rruhet, të pritet dhe të stilizohet si një mjekër normale pas shërimit."
    ],
    quickFacts: {
        procedureTime: '3 - 5 orë',
        anesthesia: 'Anestezi lokale (pa dhimbje)',
        recoveryTime: '7 - 10 ditë (derisa të bien krustat e vogla)',
        results: 'Fillimi i rritjes pas 3 muajsh; rezultati final në 12-18 muaj',
    },
    sections: [
        {
            id: 'teknikat-moderne',
            title: 'Metodat FUE dhe DHI: Precizion dhe Inovacion',
            content: `
                <p>Zgjedhja e teknikës varet nga nevojat tuaja specifike dhe rezultati i synuar:</p>
                <ul>
                    <li><strong>Metoda FUE:</strong> Ideale për mbushjen e sipërfaqeve të mëdha, ku gjëndrat ekstraktohen një nga një dhe implantohen në kanale të parapërgatitura me kujdes.</li>
                    <li><strong>Metoda DHI (Choi Pen):</strong> Teknologjia më elitare që lejon implantimin e drejtpërdrejtë pa hapur kanale paraprakisht, duke ofruar densitet maksimal dhe saktësi absolute në konturet e fytyrës.</li>
                    <li><strong>Mbijetesa e Gjëndrave:</strong> Përdorimi i solucioneve speciale të ruajtjes garanton që pothuajse të gjitha gjëndrat e transplantuara të fillojnë ciklin e ri të rritjes.</li>
                </ul>
            `
        },
        {
            id: 'procesi-dhe-sherimi',
            title: 'Rrugëtimi drejt Mjekrës së Re',
            content: `
                <p>Nga konsulta deri te rezultati final, ne jemi me ju në çdo hap:</p>
                <ol>
                    <li><strong>Dizajni i Personalizuar:</strong> Kirurgu vizaton vijën e mjekrës sipas kërkesave tuaja dhe simetrisë së fytyrës.</li>
                    <li><strong>Faza e Rënies 'Shock':</strong> 2-4 javë pas trajtimit, qimet e transplantuara do të bien. Ky është një proces normal; gjëndrat mbeten në vend dhe do të prodhojnë qime të reja.</li>
                    <li><strong>Rritja Graduale:</strong> Pas muajit të tretë, do të shihni qimet e para të mjekrës që do të trashen dhe dendësohen muaj pas muaji.</li>
                </ol>
            `
        },
        {
            id: 'pse-klinika-jone',
            title: 'Ekselenca Mjekësore dhe Mbështetja Logjistike',
            content: `
                <p>Ne ofrojmë një standard unik shërbimi që tejkalon kufijtë:</p>
                <ul>
                    <li><strong>Specialistë Italianë:</strong> Procedurat udhëhiqen nga kirurgë italianë me përvojë të gjatë në Turqi dhe Itali.</li>
                    <li><strong>Paketa 'All-Inclusive':</strong> Për pacientët ndërkombëtarë, ne garantojmë transportin VIP dhe akomodimin luksoz në Tiranë.</li>
                    <li><strong>Kontroll në Itali:</strong> Jemi e vetmja klinikë që ofron ndjekjen post-operatore dhe kontrollet periodike direkt në Itali, duke ju siguruar qetësi maksimale.</li>
                </ul>
            `
        }
    ]
};

export default beardTransplantContent;