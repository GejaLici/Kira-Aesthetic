import type { ServiceContent } from '@/lib/services';

const rootCanalContent: ServiceContent = {
    description: [
        "Trajtimi i kanalit të rrënjës, ose Endodontia, është procedura kryesore që lejon shpëtimin e një dhëmbi të infektuar rëndë ose të dëmtuar, duke parandaluar heqjen e tij. Ky proces konsiston në heqjen e pulpës (nervit) të infektuar, dezinfektimin e thellë të kanaleve dhe vulosjen e tyre për të mbrojtur strukturën natyrale të dhëmbit.",
        "Në klinikën tonë, specialistët italianë përdorin teknologjinë më të fundit, përfshirë mikroskopinë operative dhe instrumentet rotative, për të siguruar që trajtimi të jetë preciz, i shpejtë dhe plotësisht pa dhimbje për pacientin."
    ],
    benefits: [
        "Ruajtja e Dhëmbit Natyral: Shmang nevojën për heqje dhe zëvendësim me implante apo ura.",
        "Eliminim i Menjëhershëm i Dhimbjes: Ndalon dhimbjen akute të shkaktuar nga inflamacioni i nervit.",
        "Parandalim i Abcesit: Ndalon përhapjen e infeksionit në kockën e nofullës dhe indet përreth.",
        "Funksion i Plotë: Dhëmbi i trajtuar ruan aftësinë përtypëse dhe estetikën e buzëqeshjes.",
        "Kosto-Efikasitet: Shpëtimi i dhëmbit natyral është shpesh më ekonomik se zëvendësimi i tij më vonë."
    ],
    quickFacts: {
        procedureTime: '45 - 90 minuta (zakonisht 1 seancë)',
        anesthesia: 'Anestezi lokale e plotë (pa dhimbje)',
        recoveryTime: '1 - 2 ditë (ndjeshmëri e lehtë)',
        results: 'Përfundimtare pas restaurimit me mbushje ose kurorë',
    },
    sections: [
        {
            id: 'kur-nevojitet-endodontia',
            title: 'Simptomat që nuk duhen injoruar',
            content: `
                <p>Nevoja për trajtim endodontik shfaqet kur bakteri depërton në brendësi të dhëmbit. Shenjat kryesore janë:</p>
                <ul>
                    <li>Dhimbje pulsuese që shtohet gjatë natës ose gjatë përtypjes.</li>
                    <li>Ndjeshmëri ekstreme ndaj të nxehtit dhe të ftohtit që zgjat mbi 30 sekonda.</li>
                    <li>Ënjtje e mishrave të dhëmbëve ose shfaqja e një fistule (puçrre me qelb).</li>
                    <li>Ndryshim i ngjyrës së dhëmbit (shfaqja e nuancave gri ose të errëta).</li>
                </ul>
            `
        },
        {
            id: 'procesi-teknologjik',
            title: 'Procedura hap pas hapi',
            content: `
                <p>Trajtimi modern endodontik është shumë i saktë falë teknologjisë:</p>
                <ol>
                    <li><strong>Aksesi:</strong> Hapja e një vrimë të vogël në kurorë për të arritur te nervi.</li>
                    <li><strong>Pastrimi:</strong> Heqja e indit të infektuar dhe dezinfektimi me solucione kimike.</li>
                    <li><strong>Formësimi:</strong> Përdorimi i instrumenteve rotative për të krijuar hapësirën e duhur për mbushjen.</li>
                    <li><strong>Vulosja:</strong> Mbushja e kanaleve me gutaperkë (material biokompatibël) për të bllokuar bakteret.</li>
                    <li><strong>Restaurimi:</strong> Përforcimi i dhëmbit me mbushje ose kurorë porcelani për të parandaluar thyerjen.</li>
                </ol>
            `
        },
        {
            id: 'pse-ne-endodonti',
            title: 'Ekselenca Italiane në Endodonti',
            content: `
                <p>Pse të zgjidhni stafin tonë për këtë procedurë delikate?</p>
                <ul>
                    <li><strong>Endodontistë Specialistë:</strong> Mjekë italianë që fokusohen ekskluzivisht në shpëtimin e dhëmbëve.</li>
                    <li><strong>Endodonti me Mikroskop:</strong> Përdorimi i zmadhimit lejon gjetjen e kanaleve më të imta që shpesh dështojnë në trajtimet klasike.</li>
                    <li><strong>Shërbim Post-Trajtim në Itali:</strong> Pacientët tanë mund të kryejnë ndjekjen dhe kontrollet direkte në Itali pas procedurës në Shqipëri.</li>
                    <li><strong>Garancia e Sterilitetit:</strong> Protokolle strikte të izolimit me dental dam për të garantuar suksesin afatgjatë.</li>
                </ul>
            `
        }
    ]
};

export default rootCanalContent;
