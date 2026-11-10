import type { ServiceContent } from '@/lib/services';

const dentalCrownsContent: ServiceContent = {
    description: [
        "Kurora dentare, e njohur gjerësisht si 'kapaku i dhëmbit', është një restaurim protetik që mbulon plotësisht një dhëmb të dëmtuar për të rikthyer formën, madhësinë, forcën dhe pamjen e tij origjinale. Kjo procedurë shërben si një mburojë mbrojtëse për dhëmbët e thyer, të konsumuar ose ato që kanë kaluar trajtime rrënjësore (endodontike).",
        "Përmes përdorimit të materialeve elitare si Zirkoni dhe E-Max, ne sigurojmë që kurora të mos jetë thjesht një mjet funksional, por një element estetik që imiton në mënyrë të përsosur smaltin natyral. Ekipi ynë i specialistëve italianë garanton një përshtatje precize, duke mbrojtur integritetin e dhëmbit tuaj për një periudhë afatgjatë."
    ],
    benefits: [
        "Mbrojtje Strukturore: Forcon dhëmbët e brishtë dhe parandalon thyerjen e tyre të mëtejshme.",
        "Estetikë Superiore: Korrigjon dhëmbët me ngjyrë të errët, formë të parregullt ose madhësi të pabarabartë.",
        "Funksionalitet i Plotë: Rikthen aftësinë për të përtypur dhe folur pa shqetësime apo dhimbje.",
        "Biokompatibilitet: Materiale moderne që nuk irritojnë mishrat e dhëmbëve dhe nuk shkaktojnë alergji.",
        "Zgjidhje e Qëndrueshme: Një investim që me kujdesin e duhur zgjat mesatarisht 10 deri në 20 vjet."
    ],
    quickFacts: {
        procedureTime: '2 seanca (përgatitja dhe vendosja finale)',
        anesthesia: 'Anestezi lokale',
        recoveryTime: 'I menjëhershëm (ndjeshmëri e lehtë për 24-48 orë)',
        results: 'Rikthim i menjëhershëm i funksionit dhe estetikës',
    },
    sections: [
        {
            id: 'llojet-e-kurorave',
            title: 'Materialet dhe Llojet e Kurorave',
            content: `
                <p>Zgjedhja e materialit varet nga pozicioni i dhëmbit dhe kërkesat estetike:</p>
                <ul>
                    <li><strong>Zirkon (Zirconia):</strong> Kombinimi perfekt i forcës dhe estetikës. Ideale për urat dentare dhe dhëmbët që u nënshtrohen forcave të mëdha të përtypjes.</li>
                    <li><strong>E-Max:</strong> Qeramika më estetike në treg, e njohur për tejdukshmërinë e saj natyrale, kryesisht e rekomanduar për dhëmbët e përparmë.</li>
                    <li><strong>Metal-Qeramikë:</strong> Një opsion tradicional dhe rezistent që ofron një balancë të mirë mes kostos dhe performancës.</li>
                    <li><strong>Kurora mbi Implant:</strong> Zgjidhja finale për zëvendësimin e dhëmbit që mungon pas procesit të implantologjisë.</li>
                </ul>
            `
        },
        {
            id: 'procesi-i-realizimit',
            title: 'Si realizohet vendosja e kurorës?',
            content: `
                <p>Procesi ynë është i strukturuar për të siguruar rehati maksimale:</p>
                <ol>
                    <li><strong>Përgatitja:</strong> Dhëmbi reduktohet lehtë në dimensione për të krijuar hapësirë për kurorën e re.</li>
                    <li><strong>Masa Digitale ose Klasike:</strong> Merret masa e saktë e dhëmbit për t'u dërguar në laboratorin tonë tekniko-dentar.</li>
                    <li><strong>Provizori:</strong> Vendoset një kurorë e përkohshme që pacienti të mos qëndrojë pa dhëmb gjatë kohës së prodhimit.</li>
                    <li><strong>Cementimi:</strong> Kurora finale ngjitet me materiale speciale që garantojnë stabilitet të përhershëm.</li>
                </ol>
            `
        },
        {
            id: 'kujdesi-pas-trajtimit',
            title: 'Mirëmbajtja dhe Ekspertiza Italiane',
            content: `
                <p>Ne kujdesemi që buzëqeshja juaj të zgjasë në kohë përmes shërbimeve tona unike:</p>
                <ul>
                    <li><strong>Higjiena Orale:</strong> Trajtojini kurorat si dhëmbët natyralë; larja dhe filli dentar janë thelbësore.</li>
                    <li><strong>Kontrollet në Itali:</strong> Ofojmë mundësinë që kontrollet periodike post-operatore t'i kryeni direkt në klinikat tona partnere në Itali.</li>
                    <li><strong>Garancia e Materialeve:</strong> Përdorim vetëm materiale të certifikuara sipas standardeve më të larta të BE-së.</li>
                </ul>
            `
        }
    ]
};

export default dentalCrownsContent;