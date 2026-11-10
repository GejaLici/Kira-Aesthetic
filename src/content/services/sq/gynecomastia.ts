import type { ServiceContent } from '@/lib/services';

const gynecomastiaContent: ServiceContent = {
    description: [
        "Gjinekomastia është një gjendje e zakonshme që karakterizohet nga zmadhimi i indit të gjoksit tek meshkujt, duke krijuar një pamje më femërore. Kjo procedurë kirurgjikale synon reduktimin e vëllimit të tepërt dhe rimodelimin e gjoksit për të arritur një kontur më të sheshtë, më të fortë dhe me definicion mashkullor.",
        "Përmes kombinimit të liposuksionit të avancuar dhe heqjes kirurgjikale të indit gjëndror, kirurgët tanë italianë rikthejnë harmoninë trupore dhe vetëbesimin e pacientit. Rezultati është një gjoks proporcional që lejon liri të plotë në veshje dhe aktivitete sociale."
    ],
    benefits: [
        "Kontur Mashkullor: Rikthen një pamje të sheshtë dhe të tonifikuar të zonës së gjoksit.",
        "Eliminim i Indit Gjëndror: Trajton shkakun rrënjësor të zmadhimit, jo vetëm yndyrën.",
        "Rritje e Vetëbesimit: Zhduk sikletin në plazh, palestër apo gjatë veshjes së rrobave të ngushta.",
        "Rezultate të Përhershme: Pasi hiqet indi gjëndror, rishfaqja e gjendjes është jashtëzakonisht e rrallë.",
        "Procedurë e Shpejtë: Ndërhyrja zgjat pak dhe rikuperimi është relativisht i lehtë."
    ],
    quickFacts: {
        procedureTime: '1 - 2 orë',
        anesthesia: 'Anestezi e përgjithshme ose lokale me sedacion',
        recoveryTime: '3 - 7 ditë (kthimi në punë)',
        results: 'Dallueshëm menjëherë; finale pas 3-6 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-trajtimit',
            title: 'Metodat Moderne të Ndërhyrjes',
            content: `
                <p>Trajtimi përshtatet sipas përbërjes së gjoksit të pacientit:</p>
                <ul>
                    <li><strong>Liposuksioni:</strong> Përdoret kur zmadhimi vjen kryesisht nga indet dhjamore të tepërta.</li>
                    <li><strong>Ekscizioni Kirurgjikal:</strong> I nevojshëm për heqjen e indit gjëndror të fortë ose lëkurës së tepërt rreth areolës.</li>
                    <li><strong>Teknika e Kombinuar:</strong> Metoda më e shpeshtë që garanton një rezultat estetik optimal dhe lëkurë të tërhequr mirë pas konturit të ri.</li>
                </ul>
            `
        },
        {
            id: 'shërimi-dhe-kujdesi',
            title: 'Rikuperimi Post-Operator',
            content: `
                <p>Pas ndërhyrjes, kujdesi është çelësi për rezultate të shkëlqyera:</p>
                <p>Pacientit i kërkohet të veshë një korse kompresuese për 4-6 javë për të minimizuar ënjtjen dhe për të ndihmuar lëkurën të përshtatet. Edhe pse mund të ketë pak ndjeshmëri ose mpirje fillestare, shumica e meshkujve kthehen në aktivitetet normale brenda një jave. Aktiviteti i rëndë fizik (palestra) duhet të shmanget për rreth një muaj.</p>
            `
        },
        {
            id: 'pse-ne',
            title: 'Pse të zgjidhni ekspertizën tonë?',
            content: `
                <p>Klinika jonë ofron standarde europiane për sigurinë tuaj:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë specifike në kirurgjinë plastike mashkullore.</li>
                    <li><strong>Teknologji e Avancuar:</strong> Përdorimi i liposuksionit me definicion të lartë për rezultate precize.</li>
                    <li><strong>Logjistikë Ndërkombëtare:</strong> Transport dhe akomodim i organizuar për pacientët që vijnë nga jashtë.</li>
                    <li><strong>Ndjekje në Itali:</strong> Kontrollet pas operacionit mund të kryhen direkt në Itali, duke ju kursyer kohë dhe udhëtime të tepërta.</li>
                </ul>
            `
        }
    ]
};

export default gynecomastiaContent;