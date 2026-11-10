import type { ServiceContent } from '@/lib/services';

const dentalBridgesContent: ServiceContent = {
    description: [
        "Ura dentare, e njohur edhe si ura fikse, është një restaurim protetik i përhershëm që zëvendëson një ose më shumë dhëmbë që mungojnë. Kjo zgjidhje 'uron' boshllëkun duke u mbështetur në dhëmbët natyralë fqinjë ose në implante, duke rikthyer jo vetëm estetikën e buzëqeshjes, por edhe funksionin e plotë të përtypjes dhe të folurit.",
        "Mungesa e dhëmbëve mund të shkaktojë zhvendosjen e dhëmbëve të tjerë dhe prishjen e kafshimit. Përmes ekspertizës sonë italiane dhe përdorimit të materialeve biokompatibël si zirkoni, ne krijojmë ura dentare që integrohen në mënyrë natyrale me anatominë tuaj, duke garantuar stabilitet, forcë dhe një pamje të përsosur."
    ],
    benefits: [
        "Rikthim i Funksionit: Mundëson përtypjen normale dhe parandalon vështirësitë në të folur.",
        "Stabilitet Dentar: Parandalon zhvendosjen e dhëmbëve natyralë drejt hapësirave boshe.",
        "Ruajtja e Kontureve: Ndihmon në ruajtjen e formës natyrale të fytyrës dhe strukturës së nofullës.",
        "Zgjidhje Fikse: Ndryshe nga protezat e lëvizshme, ura është e fiksuar dhe nuk kërkon heqje ditore.",
        "Estetikë Natyrale: Materialet si zirkoni imitojnë tejdukshmërinë dhe shkëlqimin e dhëmbëve të vërtetë."
    ],
    quickFacts: {
        procedureTime: '2 vizita (përgatitja dhe vendosja finale)',
        anesthesia: 'Anestezi lokale',
        recoveryTime: 'I menjëhershëm (përshtatje brenda 2-3 ditëve)',
        results: 'Zëvendësim i përhershëm me jetëgjatësi 10-15+ vite',
    },
    sections: [
        {
            id: 'llojet-e-urave',
            title: 'Materialet dhe Teknologjia',
            content: `
                <p>Në klinikën tonë, ne ofrojmë ura të personalizuara bazuar në nevojat tuaja klinike:</p>
                <ul>
                    <li><strong>Ura me Zirkon:</strong> Materiali më i avancuar për sa i përket forcës dhe estetikës, ideal për zonat që duken gjatë buzëqeshjes.</li>
                    <li><strong>Ura Metal-Qeramikë:</strong> Një zgjidhje e qëndrueshme dhe ekonomike, që kombinon forcën e metalit me estetikën e qeramikës.</li>
                    <li><strong>Ura mbi Implante:</strong> Zëvendëson dhëmbët pa pasur nevojë për të gërryer dhëmbët fqinjë, duke përdorur implantet si shtylla mbështetëse.</li>
                </ul>
            `
        },
        {
            id: 'procesi-i-vendosjes',
            title: 'Si realizohet Ura Dentare?',
            content: `
                <p>Procesi është i thjeshtë dhe i ndarë në dy faza kryesore:</p>
                <ol>
                    <li><strong>Faza e Përgatitjes:</strong> Dhëmbët mbështetës përgatiten lehtë dhe merret masa digitale ose klasike. Vendoset një urë e përkohshme për të mbrojtur zonën.</li>
                    <li><strong>Faza Finale:</strong> Ura e përhershme, e punuar me saktësi në laborator, provohet dhe cementohet në mënyrë fikse pasi sigurohet përshtatja perfekte me kafshimin tuaj.</li>
                </ol>
            `
        },
        {
            id: 'kujdesi-dhe-garancia',
            title: 'Pse të zgjidhni Ekspertizën tonë Italiane?',
            content: `
                <p>Ne ofrojmë më shumë se thjesht një procedurë dentare:</p>
                <ul>
                    <li><strong>Specialistë Italianë:</strong> Ekspertë në protetikë që garantojnë funksionalitet dhe estetikë maksimale.</li>
                    <li><strong>Asistencë Logjistike:</strong> Transport dhe akomodim i organizuar për pacientët që vijnë nga jashtë Shqipërisë.</li>
                    <li><strong>Shërbim Post-Trajtim në Itali:</strong> Mundësia për të kryer kontrollet periodike direkt në Itali, duke ruajtur garancinë e punimit.</li>
                    <li><strong>Higjiena:</strong> Instruksione të detajuara për përdorimin e fillit special (super-floss) për të garantuar jetëgjatësinë e urës.</li>
                </ul>
            `
        }
    ]
};

export default dentalBridgesContent;