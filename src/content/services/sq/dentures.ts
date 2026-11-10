import type { ServiceContent } from '@/lib/services';

const denturesContent: ServiceContent = {
    description: [
        "Protezat dentare janë një zgjidhje protetike e lëvizshme dhe ekonomike për zëvendësimin e dhëmbëve që mungojnë. Ato përbëhen nga dhëmbë artificialë të montuar në një bazë që imiton mishrat e dhëmbëve, duke rikthyer jo vetëm aftësinë për të përtypur dhe folur, por edhe mbështetjen e muskujve të fytyrës.",
        "Në klinikën tonë, ne kombinojmë teknologjinë moderne me ekspertizën e mjekëve italianë për të krijuar proteza që përshtaten në mënyrë perfekte me anatominë tuaj. Pavarësisht nëse keni nevojë për një protezë të plotë apo të pjesshme, qëllimi ynë është t'ju ofrojmë rehati maksimale dhe një buzëqeshje natyrale."
    ],
    benefits: [
        "Zgjidhje Ekonomike: Mënyra më e përballueshme për të zëvendësuar një numër të madh dhëmbësh.",
        "Mbështetje Estetike: Parandalon rënien e faqeve dhe rrudhat rreth gojës duke mbështetur strukturën e fytyrës.",
        "Funksionalitet i Shpejtë: Rikthen aftësinë për të ngrënë dhe folur qartë brenda një kohe të shkurtër.",
        "Përshtatje e Personalizuar: Modele të dyllit që provohen paraprakisht për të garantuar formën dhe ngjyrën e dëshiruar.",
        "Lehtësi në Mirëmbajtje: Duke qenë të lëvizshme, ato mundësojnë pastrim të thellë të protezës dhe higjienës orale."
    ],
    quickFacts: {
        procedureTime: '3-4 vizita (masa, prova e dyllit, vendosja)',
        anesthesia: 'Jo e nevojshme (përveç rasteve të nxjerrjes së dhëmbëve)',
        recoveryTime: '1-2 javë periudhë adaptimi',
        results: 'Buzëqeshje e plotë dhe funksionale me kosto efektive',
    },
    sections: [
        {
            id: 'llojet-e-protezave',
            title: 'Llojet e Protezave që Ofrojmë',
            content: `
                <p>Në varësi të numrit të dhëmbëve që mungojnë, ne ofrojmë disa opsione:</p>
                <ul>
                    <li><strong>Proteza të Plota:</strong> Ideale për pacientët që kanë humbur të gjithë dhëmbët në një nofull.</li>
                    <li><strong>Proteza të Pjesshme (Skeletike):</strong> Përdoren kur mbeten ende dhëmbë natyralë, duke u fiksuar me kroçe (kapëse) metalike ose estetike.</li>
                    <li><strong>Proteza Fleksibël (Valplast):</strong> Më të holla dhe më të rehatshme se akriliku tradicional, pothuajse të padukshme në gojë.</li>
                    <li><strong>Proteza mbi Implante:</strong> Një zgjidhje hibride ku proteza klikohet mbi implante për stabilitet maksimal pa pasur nevojë për ngjitës.</li>
                </ul>
            `
        },
        {
            id: 'procesi-dhe-adaptimi',
            title: 'Rruga drejt një Buzëqeshjeje të Re',
            content: `
                <p>Procesi ynë siguron që proteza të jetë sa më komode:</p>
                <ol>
                    <li><strong>Marrja e Masës:</strong> Krijojmë një model të saktë të nofullës suaj.</li>
                    <li><strong>Prova e Dyllit:</strong> Ju do të provoni një version paraprak për të parë si duken dhëmbët përpara se të prodhohet modeli final.</li>
                    <li><strong>Finalizimi:</strong> Laboratori prodhon protezën me materiale biokompatibël të certifikuar.</li>
                    <li><strong>Rregullimet:</strong> Pas vendosjes, mjekët tanë italianë bëjnë rregullimet e fundit për të evituar pikat e presionit.</li>
                </ol>
            `
        },
        {
            id: 'kujdesi-italy',
            title: 'Pse të na zgjidhni ne?',
            content: `
                <p>Kujdesi ynë nuk mbaron me dorëzimin e protezës:</p>
                <ul>
                    <li><strong>Ekspertizë Italiane:</strong> Mjekë të trajnuar në teknikat më moderne të protetikës së lëvizshme.</li>
                    <li><strong>Materiale Elitare:</strong> Akrilik dhe qeramikë e cilësisë së lartë që nuk ndryshon ngjyrë.</li>
                    <li><strong>Asistencë në Itali:</strong> Për çdo rregullim (relining) apo kontroll, ne ofrojmë mbështetje direkte në klinikat tona në Itali.</li>
                    <li><strong>Udhëzime Higjienike:</strong> Ju pajisim me protokollin e plotë për pastrimin dhe ruajtjen e protezave gjatë natës.</li>
                </ul>
            `
        }
    ]
};

export default denturesContent;