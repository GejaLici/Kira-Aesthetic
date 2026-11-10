import type { ServiceContent } from '@/lib/services';

const brachioplastyContent: ServiceContent = {
    description: [
        "Ngritja e krahëve, ose brakioplastia, është një procedurë kirurgjikale estetike e krijuar për të rimodeluar pjesën e sipërme të krahëve duke hequr lëkurën e tepërt dhe depozitat dhjamore. Kjo ndërhyrje është ideale për personat që përballen me fenomenin e 'krahëve të lakuriqit të natës' (lëkurë e varur), i cili shpesh vjen si pasojë e plakjes, humbjes së elasticitetit ose rënies drastike në peshë.",
        "Në klinikën tonë, brakioplastia kryhet nga kirurgë plastikë italianë të specializuar, të cilët kombinojnë heqjen e lëkurës me teknikat moderne të liposuksionit për të arritur një kontur krahësh sa më të tonifikuar dhe natyral. Synimi ynë është të rikthejmë harmoninë e krahëve me pjesën tjetër të trupit tuaj, duke rritur vetëbesimin dhe lirinë për t'u veshur pa komplekse."
    ],
    benefits: [
        "Tonifikim i Menjëhershëm: Eliminon lëkurën e varur që nuk mund të trajtohet me ushtrime fizike.",
        "Kontur i Skulpturuar: Kombinimi me liposuksion mundëson një krah më të hollë dhe më elegant.",
        "Proporcione Harmonike: Krahët bëhen më proporcionale me siluetën e përgjithshme të trupit.",
        "Rritje e Vetëbesimit: Liri e plotë për të veshur rroba pa mëngë dhe rroba banje.",
        "Rezultate Afatgjata: Heqja e lëkurës së tepërt ofron një zgjidhje të qëndrueshme në kohë."
    ],
    quickFacts: {
        procedureTime: '1.5 - 3 orë',
        anesthesia: 'Anestezi e përgjithshme',
        recoveryTime: '1-2 javë (punë zyre); 6-8 javë (aktivitet i plotë)',
        results: 'Dukshëm menjëherë; rezultati përfundimtar pas 6-12 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-ndërhyrjes',
            title: 'Teknikat e Personalizuara të Incizionit',
            content: `
                <p>Mënyra e kryerjes së brakioplastisë varet nga shkalla e varjes së lëkurës:</p>
                <ul>
                    <li><strong>Incizioni Minimal:</strong> Për raste të lehta, incizioni bëhet vetëm në zonën e sqetullës, duke lënë shenja pothuajse të padukshme.</li>
                    <li><strong>Brakioplastia Standarde:</strong> Incizioni shtrihet nga sqetulla deri te bërryli përgjatë pjesës së brendshme të krahut për të hequr sasi të konsiderueshme lëkure.</li>
                    <li><strong>Kombinimi me Liposuksion:</strong> Përdoret për të hequr dhjamin e tepërt para se të bëhet shtrëngimi i lëkurës, duke siguruar një rezultat më të lëmuar.</li>
                </ul>
            `
        },
        {
            id: 'kujdesi-pas-operacionit',
            title: 'Rikuperimi dhe Kujdesi Post-Operator',
            content: `
                <p>Një rikuperim i suksesshëm kërkon vëmendje ndaj detajeve mjekësore:</p>
                <ul>
                    <li><strong>Veshja Kompresuese:</strong> Përdorimi i një mëngëze kompresuese për 3-6 javë është thelbësor për të reduktuar ënjtjen.</li>
                    <li><strong>Kufizimi i Lëvizjeve:</strong> Evitoni ngritjen e peshave ose ngritjen e krahëve mbi nivelin e shpatullave për 3-4 javët e para.</li>
                    <li><strong>Menaxhimi i Shenjave:</strong> Inkurajojmë përdorimin e kremrave specifikë dhe mbrojtjen nga dielli për të siguruar që shenjat të zbehen maksimalisht.</li>
                </ul>
            `
        },
        {
            id: 'pse-ne',
            title: 'Pse duhet të zgjidhni ekspertizën tonë?',
            content: `
                <p>Ne ofrojmë një standard të lartë të kirurgjisë plastike përmes një qasjeje integruese:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë të gjatë në klinikat më të mira të Milanos dhe Romës.</li>
                    <li><strong>Mbështetje Logjistike:</strong> Organizim i plotë i udhëtimit, transportit dhe akomodimit në Shqipëri.</li>
                    <li><strong>Ndjekje në Itali:</strong> Kontrollet pas operacionit mund të kryhen direkt në Itali, duke ju kursyer udhëtime shtesë.</li>
                    <li><strong>Siguri Maksimale:</strong> Protokolle strikte sterilizimi dhe kujdes intensiv post-operator.</li>
                </ul>
            `
        }
    ]
};

export default brachioplastyContent;