import type { ServiceContent } from '@/lib/services';

const otoplastyContent: ServiceContent = {
    description: [
        "Otoplastika, ose riformimi i veshëve, është një procedurë kirurgjikale estetike që synon korrigjimin e formës, pozicionit ose përmasave të veshëve. Kjo ndërhyrje është zgjidhja ideale për veshët e dalë (kupë), asimetritë e dukshme ose deformimet e lindura, duke rikthyer balancën dhe harmoninë në tiparet e fytyrës.",
        "Përmes ekspertizës së kirurgëve tanë italianë, ne realizojmë ndërhyrje që ofrojnë rezultate natyrale dhe të përhershme. Procedura është e sigurt për të rriturit dhe fëmijët (mbi moshën 5-6 vjeç), duke ndihmuar jo vetëm në përmirësimin e pamjes fizike, por edhe në rritjen e ndjeshme të vetëbesimit."
    ],
    benefits: [
        "Harmoni Fytyre: Krijon një raport proporcional midis veshëve dhe kontureve të kokës.",
        "Rezultate të Përhershme: Ndryshimi i formës së kërcit është definitiv dhe i qëndrueshëm.",
        "Cicatrica të Padukshme: Prerjet realizohen në palosjen e pasme të veshit, duke i bërë ato praktikisht të padukshme.",
        "Rritje e Vetëbesimit: Eliminon shqetësimet estetike që shpesh çojnë në izolim social apo ngacmime (bullying) te fëmijët.",
        "Procedurë e Shpejtë: Ndërhyrja zgjat 1 deri në 3 orë me një fazë shërimi relativisht të shpejtë."
    ],
    quickFacts: {
        procedureTime: '1 - 3 orë',
        anesthesia: 'Lokale me sedacion (të rritur) / E përgjithshme (fëmijë)',
        recoveryTime: '1 javë (mbajtje fashe) / 2 javë (kthim në aktivitete)',
        results: 'Të përhershme dhe të dukshme menjëherë',
    },
    sections: [
        {
            id: 'procesi-kirurgjikal',
            title: 'Si realizohet Otoplastika?',
            content: `
                <p>Ndërhyrja bazohet në rimodelimin e kërcit të veshit për të krijuar një strukturë më estetike:</p>
                <ul>
                    <li><strong>Aksesimi:</strong> Realizohet një prerje e vogël në pjesën e pasme të veshit.</li>
                    <li><strong>Rimodelimi:</strong> Kërci paloset ose hiqet pjesërisht për të zvogëluar projeksionin e veshit dhe për ta afruar atë me kokën.</li>
                    <li><strong>Qepja:</strong> Përdoren qepje të brendshme speciale për të mbajtur formën e re dhe qepje të jashtme fine për mbylljen e lëkurës.</li>
                    <li><strong>Fashimi:</strong> Vendoset një fashë kompresuese që mbron zonën dhe ndihmon në reduktimin e ënjtjes.</li>
                </ul>
            `
        },
        {
            id: 'otoplastika-te-femijet',
            title: 'Koha Ideale për Ndërhyrje',
            content: `
                <p>Otoplastika është një nga procedurat e pakta kirurgjikale estetike që rekomandohet të kryhet në moshë të hershme:</p>
                <p>Pas moshës 5-6 vjeçare, kërci i veshit është i zhvilluar mjaftueshëm për t'u rimodeluar. Kryerja e procedurës përpara fillimit të shkollës fillore shpesh rekomandohet për të kursyer fëmijën nga ndikimet psikologjike dhe ngacmimet që mund të vijnë si pasojë e veshëve të dalë.</p>
            `
        },
        {
            id: 'kujdesi-dhe-asistenca',
            title: 'Pse të zgjidhni klinikën tonë?',
            content: `
                <p>Ne ofrojmë një standard elitar kujdesi për pacientët tanë:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë të gjatë në kirurgjinë plastike dhe rikonstruktive.</li>
                    <li><strong>Teknika Minimale:</strong> Qasje kirurgjikale që minimizon traumën e indeve dhe përshpejton shërimin.</li>
                    <li><strong>Logjistikë Ndërkombëtare:</strong> Ne organizojmë udhëtimin dhe akomodimin tuaj në Shqipëri.</li>
                    <li><strong>Ndjekje në Itali:</strong> Ofojmë kontrolle post-operatore direkt në Itali për pacientët që jetojnë atje, duke garantuar siguri maksimale.</li>
                </ul>
            `
        }
    ]
};

export default otoplastyContent;