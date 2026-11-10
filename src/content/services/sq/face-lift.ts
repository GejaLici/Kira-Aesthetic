import type { ServiceContent } from '@/lib/services';

const faceLiftContentAL: ServiceContent = {
    description: [],
    benefits: [],
    quickFacts: {
        procedureTime: '3 - 6 orë',
        anesthesia: 'gjeneral ose lokale me sedacion të thellë',
        recoveryTime: '2 - 4 javë',
        results: 'përfundimtar pas 6-12 muajsh'
    },
    sections: [
        {
            id: 'ce-eshte-lifting-fytyre',
            title: 'Çfarë është Lifting i Fytyrës dhe Si Funksionon',
            content: `
                <p><strong>Lifting i fytyrës</strong>, i njohur edhe si <strong>ritidektomi</strong>, është një ndërhyrje kirurgjikale estetike për të luftuar shenjat e plakjes në fytyrë dhe qafë. Përmes <strong>rivendosjes së indeve të lëkurës dhe muskujve</strong>, eliminohet lëkura e shtrirë, rrudhat e thella dhe profili i mjekrës bëhet më i përcaktuar.</p>
                <p>Qasja moderne nuk është thjesht “tërheqje e lëkurës”: ajo punon mbi shtresat e thella (SMAS) për një rezultat natyral dhe të harmonishëm, duke ruajtur mimikën dhe tiparet karakteristike të fytyrës.</p>
                <p><strong>Pyetje të shpeshta:</strong> “A ka dhimbje gjatë liftingut të fytyrës?” “Sa zgjat rikuperimi?” “A duken shenjat e kirurgjisë?” Me kirurgë të kualifikuar, dhimbja dhe ënjtja janë të menaxhueshme, rikuperimi është 2-4 javë dhe shenjat janë të fshehura natyralisht.</p>
            `
        },
        {
            id: 'llojet-e-liftingut',
            title: 'Llojet e Liftingut të Fytyrës: Tradicional, Mini-Lifting, Deep Plane dhe Lifting i Qafës',
            content: `
                <p><strong>Lloji i liftingut</strong> përcaktohet nga mosha, cilësia e lëkurës dhe niveli i shtrirjes:</p>
                <ul>
                    <li><strong>Lifting Tradicional:</strong> për fytyrë dhe qafë, për një rinovim të plotë dhe të thellë.</li>
                    <li><strong>Mini-Lifting:</strong> më pak invaziv, ideal për shtrirje të lehta të pjesës së poshtme të fytyrës.</li>
                    <li><strong>Deep Plane Lift:</strong> ndërhyrje mbi shtresat muskulore të thella për rezultate natyrale pas operacionit.</li>
                    <li><strong>Lifting i Qafës:</strong> eliminon “tendat e qafës” dhe përcakton këndin midis mjekrës dhe qafës.</li>
                </ul>
                <p><strong>Përfitimet:</strong> rinovim i dukshëm, profil i përcaktuar i mjekrës, harmonizim i volumit të fytyrës, shenja të fshehura, rezultate deri 10-15 vjet.</p>
            `
        },
        {
            id: 'pergatitja-per-operacionin',
            title: 'Si të Përgatiteni për Liftingun e Fytyrës',
            content: `
                <p>Përgatitja është thelbësore për sigurinë dhe suksesin e operacionit:</p>
                <ol>
                    <li><strong>Analiza e fytyrës:</strong> vlerësim i strukturës kockore dhe i cilësisë së indeve për planifikimin e prerjeve.</li>
                    <li><strong>Testet klinike:</strong> gjak, ECG dhe testet e tjera për të konfirmuar përshtatshmërinë.</li>
                    <li><strong>Protokolli para-kirurgjikal:</strong> ndalimi i duhanit dhe i medikamenteve që hollojnë gjakun 4-6 javë para operacionit.</li>
                </ol>
                <p><strong>Përfitimet:</strong> ul rrezikun, optimizon shërimin dhe përgatit trupin për rikuperim të sigurt.</p>
            `
        },
        {
            id: 'rikuperimi-pas-operacionit',
            title: 'Rikuperimi Pas Operacionit dhe Kujdesi i Pas-Liftingut',
            content: `
                <p>Rikuperimi nga <strong>liftingu i fytyrës</strong> kërkon kujdes për të siguruar rezultate optimale:</p>
                <ul>
                    <li><strong>Ditët e para:</strong> fashë kompresive, koka e ngritur, akull për të reduktuar ënjtjen.</li>
                    <li><strong>Heqja e qepjeve:</strong> zakonisht midis ditës së 7-të dhe 10-të.</li>
                    <li><strong>Kthimi në aktivitetet sociale:</strong> shumica e pacientëve rifillojnë punën dhe jetën sociale pas 15-20 ditësh.</li>
                    <li><strong>Mbrojtja:</strong> shmangia e diellit direkt dhe aktiviteteve të rënda për 4-6 javë.</li>
                </ul>
                <p><strong>Përfitimet:</strong> vendosja optimale e indeve, ënjtje më e ulët, rezultate natyrale dhe harmonike.</p>
            `
        },
        {
            id: 'siguria-dhe-rreziqet',
            title: 'Siguria dhe Rreziqet e Liftingut',
            content: `
                <p><strong>Liftingu i fytyrës</strong> kërkon aftësi të lartë për të ruajtur nervat, simetrinë dhe funksionin muskulor. Kirurgët e certifikuar reduktojnë rrezikun e asimetrisë dhe të shenjave të tepërta.</p>
                <p><strong>Përfitimet:</strong> fytyrë më e re dhe e pushuar, rezultat natyral dhe afatgjatë, menaxhim i sigurt i çdo faze të operacionit.</p>
                <p><strong>Pyetje të shpeshta:</strong> “A duken shenjat e kirurgjisë?” “Sa zgjat efekti?” “A mund të kombinohet me trajtime të tjera estetike?” Përgjigjet variojnë nga rasti dhe jepen gjatë konsultës me kirurgun.</p>
            `
        }
    ]
};

export default faceLiftContentAL;
