import type { ServiceContent } from '@/lib/services';

const browLiftContent: ServiceContent = {
    description: [
        "Ngritja e vetullave, e njohur edhe si Brow Lift ose Lifting i Ballit, është një procedurë kirurgjikale estetike që synon rinovimin e pjesës së sipërme të fytyrës. Përmes kësaj ndërhyrjeje, korrigjohen vetullat e rëna, zbuten rrudhat horizontale të ballit dhe linjat e thella të shqetësimit midis syve, duke i dhënë fytyrës një pamje më të çelur, më rinore dhe më miqësore.",
        "Në klinikën tonë, kirurgët italianë aplikojnë teknikat më moderne, përfshirë metodën endoskopike (minimale invazive), për të siguruar rezultate natyrale pa shenja të dukshme. Kjo procedurë shpesh kombinohet me blefaroplastikën për një transformim të plotë të zonës rreth syve, duke eliminuar pamjen e lodhur dhe të rënduar që vjen me kalimin e moshës."
    ],
    benefits: [
        "Rinovim i menjëhershëm: Eliminon pamjen e lodhur ose të 'zemëruar' duke ripozicionuar vetullat.",
        "Zbutja e rrudhave: Redukton dukshëm linjat horizontale në ballë dhe ato midis vetullave.",
        "Hapja e vështrimit: Korrigjon vetullat e rëna që mund të peshojnë mbi qepallat e sipërme.",
        "Teknika moderne: Opsione endoskopike me prerje minimale dhe rikuperim të shpejtë.",
        "Rezultate afatgjata: Efekt i qëndrueshëm që zakonisht zgjat nga 5 deri në 10 vjet."
    ],
    quickFacts: {
        procedureTime: '1 - 2 orë',
        anesthesia: 'Lokale me sedacion ose e përgjithshme',
        recoveryTime: '7 - 10 ditë (rikthim në punë); 3 javë (aktivitet fizik)',
        results: 'Dukshme pas rënies së ënjtjes; finale pas 3-6 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-ngritjes',
            title: 'Teknikat kryesore të Brow Lift',
            content: `
                <p>Në varësi të anatomisë dhe nevojave tuaja, specialistët tanë italianë zgjedhin teknikën më efektive:</p>
                <ul>
                    <li><strong>Lifting Endoskopik:</strong> Teknika më e preferuar që përdor një kamerë të vogël dhe prerje minimale brenda vijës së flokëve.</li>
                    <li><strong>Lifting Koronal:</strong> Metoda klasike për korrigjime më të theksuara të lëkurës së tepërt në ballë.</li>
                    <li><strong>Lifting në vijën e flokëve:</strong> Ideal për pacientët me ballë të lartë, duke parandaluar tërheqjen e mëtejshme të flokëve mbrapsht.</li>
                    <li><strong>Lifting Direkt:</strong> Fokusohet direkt mbi vetull për raste specifike që kërkojnë saktësi maksimale të pozicionimit.</li>
                </ul>
            `
        },
        {
            id: 'shërimi-dhe-kujdesi',
            title: 'Faza e Shërimit dhe Rekomandimet',
            content: `
                <p>Procesi i rikuperimit është përgjithësisht i lehtë nëse ndiqen udhëzimet mjekësore:</p>
                <ul>
                    <li><strong>Ditët e para:</strong> Mund të ketë ënjtje dhe nxirje rreth syve, të cilat ulen me kompresa të ftohta dhe mbajtjen e kokës lart.</li>
                    <li><strong>Menaxhimi i dhimbjes:</strong> Parehatia është minimale dhe kontrollohet lehtë me medikamente të thjeshta.</li>
                    <li><strong>Kujdesi për prerjet:</strong> Shenjat fshihen në mënyrë strategjike brenda vijës së flokëve dhe zbehen plotësisht me kalimin e kohës.</li>
                </ul>
            `
        },
        {
            id: 'pse-ne',
            title: 'Ekselenca Italiane në Shërbimin Tuaj',
            content: `
                <p>Klinika jonë ofron një standard unik për pacientët që kërkojnë siguri dhe estetikë:</p>
                <ul>
                    <li><strong>Specialistë Italianë:</strong> Kirurgë me përvojë ndërkombëtare në harmoninë e fytyrës.</li>
                    <li><strong>Teknologji e avancuar:</strong> Përdorimi i endoskopisë për ndërhyrje sa më pak traumatike.</li>
                    <li><strong>Asistencë logjistike:</strong> Organizim i plotë i udhëtimit dhe akomodimit në Shqipëri.</li>
                    <li><strong>Ndjekje post-operatore në Itali:</strong> Mundësia për të kryer kontrollet në Itali, duke ju kursyer udhëtime të tepërta.</li>
                </ul>
            `
        }
    ]
};

export default browLiftContent;