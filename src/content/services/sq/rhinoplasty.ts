import type { ServiceContent } from '@/lib/services';

const rinoplastikaContent: ServiceContent = {
    description: [
        "Rinoplastika është një ndërhyrje kirurgjikale estetike dhe funksionale që synon përmirësimin e formës së hundës dhe harmonisë së saj me tiparet e fytyrës. Shumë pacientë zgjedhin të bëjnë operacion hunde për të korrigjuar gungën nazale, majën e trashë ose hundën e shtrembër, gjithmonë me synimin për të arritur një rezultat natyral.",
        "Përveç aspektit estetik, rinoplastika moderne përmirëson ndjeshëm frymëmarrjen, veçanërisht në rastet e devijimit të septumit nazal. Në klinikën tonë përdorim kryesisht rinoplastikën e mbyllur dhe rinoplastikën ultrasonike (Piezo), teknika të avancuara që reduktojnë traumën kirurgjikale dhe përshpejtojnë rikuperimin."
    ],
    benefits: [
        "Përmirëson harmoninë e fytyrës dhe proporcionet e hundës.",
        "Lehtëson frymëmarrjen duke korrigjuar septumin e devijuar (rinosetoplastikë).",
        "Rezultate natyrale pa shenja apo cikatrice të dukshme.",
        "Rrit vetëbesimin dhe mirëqenien personale.",
        "Rikuperim më i shpejtë falë rinoplastikës ultrasonike."
    ],
    quickFacts: {
        procedureTime: '1-2 Orë',
        anesthesia: 'Lokale ose e Përgjithshme',
        recoveryTime: '1-2 Javë',
        results: 'Të Përhershme',
    },
    sections: [
        {
            id: 'cfare-eshte-rinoplastika',
            title: 'Çfarë është Rinoplastika?',
            content: `
                <p><strong>Rinoplastika</strong> është një operacion estetik dhe funksional i hundës që synon ndryshimin e strukturës kockore dhe kërcore për të përmirësuar pamjen dhe frymëmarrjen. Ky <strong>operacion i hundës</strong> është ndër ndërhyrjet më të kërkuara në kirurgjinë plastike.</p>
                <p>Pacientët që pyesin <strong>çfarë është rinoplastika</strong> duhet të dinë se sot kjo procedurë është shumë e personalizuar. Qëllimi nuk është të krijohet një “hundë standarde”, por një hundë që i përshtatet në mënyrë natyrale fytyrës së pacientit.</p>
                <p>Një rinoplastikë e realizuar mirë nuk duhet të duket si “hundë e operuar”, por si pjesë harmonike e identitetit të fytyrës.</p>
            `
        },
        {
            id: 'kur-behet-operacioni-i-hundes',
            title: 'Kur këshillohet operacioni i hundës?',
            content: `
                <p>Rinoplastika rekomandohet si për arsye estetike ashtu edhe funksionale.</p>
                <ul>
                    <li>Hundë me gungë nazale</li>
                    <li>Majë e trashë ose e varur e hundës</li>
                    <li>Hundë e shtrembër (nga përpara ose profili)</li>
                    <li>Vështirësi në frymëmarrje për shkak të septumit të devijuar</li>
                    <li>Trauma ose fraktura të mëparshme të hundës</li>
                    <li>Rinoplastikë e pasuksesshme e mëparshme</li>
                </ul>
                <p>Shumë pacientë kanë frikë nga dhimbja, por <strong>operacioni i hundës</strong> sot shoqërohet me dhimbje minimale dhe menaxhohet lehtësisht me terapi pas operacionit.</p>
            `
        },
        {
            id: 'rinoplastika-e-mbyllur',
            title: 'Rinoplastika e mbyllur: pa cikatrice të dukshme',
            content: `
                <p><strong>Rinoplastika e mbyllur</strong> është një teknikë moderne ku prerjet kryhen vetëm brenda vrimave të hundës, pa prerje të jashtme në kolumelë.</p>
                <p>Kjo teknikë ofron përfitime të shumta:</p>
                <ul>
                    <li>Pa shenja ose cikatrice të dukshme</li>
                    <li>Ënjtje dhe mavijosje më të reduktuara</li>
                    <li>Rikuperim më i shpejtë</li>
                    <li>Rezultate më natyrale dhe të qëndrueshme</li>
                </ul>
                <p><strong>Çmimi i rinoplastikës</strong> me teknikë të mbyllur varet nga kompleksiteti i rastit dhe objektivat estetike të pacientit.</p>
            `
        },
        {
            id: 'rinoplastika-ultrasonike',
            title: 'Rinoplastika ultrasonike (Piezo): Teknologji e avancuar',
            content: `
                <p><strong>Rinoplastika ultrasonike</strong>, e njohur edhe si rinoplastikë Piezo, përfaqëson gjeneratën më të avancuar të kirurgjisë së hundës.</p>
                <p>Kjo teknikë përdor ultratinguj për të formësuar kockat e hundës me saktësi milimetrike, duke ruajtur indet përreth.</p>
                <ul>
                    <li>Më pak gjakderdhje gjatë operacionit</li>
                    <li>Më pak ënjtje dhe mavijosje pas operacionit</li>
                    <li>Rikuperim më i rehatshëm</li>
                    <li>Rezultate më të sakta dhe simetrike</li>
                </ul>
                <p><strong>Çmimi i rinoplastikës ultrasonike</strong> pasqyron teknologjinë e përdorur dhe nivelin e lartë të precizionit kirurgjikal.</p>
            `
        },
        {
            id: 'rinosetoplastika',
            title: 'Rinosetoplastika: Estetikë dhe frymëmarrje më e mirë',
            content: `
                <p><strong>Rinosetoplastika</strong> është një ndërhyrje e kombinuar që përfshin korrigjimin estetik të hundës dhe drejtimin e septumit nazal.</p>
                <p>Kjo procedurë rekomandohet për pacientët që vuajnë nga probleme të frymëmarrjes dhe dëshirojnë njëkohësisht përmirësim estetik.</p>
                <p><strong>Çmimi i rinosetoplastikës</strong> varet nga shkalla e devijimit të septumit dhe kompleksiteti i operacionit.</p>
            `
        },
        {
            id: 'rruga-e-rinoplastikes',
            title: 'Procesi i Rinoplastikës: Para, gjatë dhe pas',
            content: `
                <h3>Para operacionit</h3>
                <p>Para se të kryhet rinoplastika, pacienti i nënshtrohet ekzaminimeve të plota mjekësore për siguri maksimale.</p>
                <ul>
                    <li>Analiza gjaku dhe urine</li>
                    <li>Vizitë kardiologjike dhe EKG</li>
                    <li>Konsultë me anestezistin</li>
                    <li>Simulim 3D i rezultatit</li>
                </ul>

                <h3>Anestezia</h3>
                <p>Operacioni kryhet në <strong>anestezi të përgjithshme intravenoze</strong>, duke reduktuar gjakderdhjen dhe komplikacionet pas operacionit.</p>

                <h3>Pas operacionit</h3>
                <ul>
                    <li>Mbajtje e suportit nazal për 7–10 ditë</li>
                    <li>Tampona nazale moderne, që lejojnë frymëmarrjen</li>
                    <li>Ënjtje që zvogëlohet gradualisht</li>
                </ul>
            `
        },
        {
            id: 'rikuperimi-dhe-stabilizimi',
            title: 'Rikuperimi dhe stabilizimi i hundës',
            content: `
                <p>Pas rinoplastikës, ënjtja është normale, veçanërisht në majën e hundës. Stabilizimi i plotë i hundës ndodh gradualisht.</p>
                <ul>
                    <li>Kthim në aktivitetet e përditshme pas 10–14 ditësh</li>
                    <li>Aktivitete sportive pas rreth 1 muaji</li>
                    <li>Rezultati final vlerësohet pas 6–12 muajsh</li>
                </ul>
            `
        },
        {
            id: 'pse-te-na-zgjidhni',
            title: 'Pse të na zgjidhni për ne për këtë ndërhyrje?',
            content: `
                <ul>
                    <li><strong>Kirurgë të specializuar</strong> në rinoplastikë</li>
                    <li><strong>Teknologji Piezo</strong> për precizion maksimal</li>
                    <li><strong>Asistencë e plotë në Shqipëri</strong>: transport dhe akomodim</li>
                    <li><strong>Ndjekje pas operacionit në Itali</strong></li>
                </ul>
                <p><strong>Rinoplastika në Shqipëri</strong> ofron një raport ideal mes cilësisë së lartë mjekësore dhe kostos më të përballueshme krahasuar me vende të tjera evropiane.</p>
            `
        }
    ]
};

export default rinoplastikaContent;
