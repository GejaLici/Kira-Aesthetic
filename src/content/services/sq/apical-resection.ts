import type { ServiceContent } from '@/lib/services';

const apicalResectionContent: ServiceContent = {
    description: [
        "Rezeksioni apikal, i njohur mjekësisht si apikoektomi, është një procedurë e specializuar e mikrokirurgjisë endodontike që synon shpëtimin e dhëmbëve kur trajtimet tradicionale të kanaleve dështojnë. Kur një infeksion vazhdon ose rishfaqet në majën e rrënjës (apex), kjo ndërhyrje lejon kirurgun të heqë indin e infektuar dhe majën e rrënjës, duke vulosur kanalin nga poshtë për të parandaluar ri-infektimin.",
        "Në klinikën tonë, kjo procedurë kryhet me saktësi mikroskopike nga specialistë italianë të kirurgjisë orale. Synimi ynë është të ruajmë dhëmbin tuaj natyral, duke shmangur nevojën për heqje dhe zëvendësim me implante. Përmes përdorimit të teknologjisë së avancuar dhe materialeve biokompatibël si MTA, ne garantojmë një shkallë të lartë suksesi edhe në rastet më komplekse me cista apo granuloma."
    ],
    benefits: [
        "Ruajtja e Dhëmbit Natyral: Shmang heqjen e dhëmbit dhe nevojën për ura apo implante të kushtueshme.",
        "Eliminimi i Infeksionit: Heq burimin e infeksionit (cistat ose granulomat) që nuk shërohen me trajtime të thjeshta.",
        "Mbrojtja e Restaurimeve: Lejon ruajtjen e kurorave ose urave ekzistuese pa pasur nevojë për t'i thyer ato.",
        "Saktësi Mikrokirurgjikale: Përdorimi i mikroskopit siguron pastrimin e plotë të kanaleve anësore të rrënjës.",
        "Zgjidhje Përfundimtare: Adreson problemet anatomike që trajtimi tradicional i kanalit nuk mund t'i arrijë."
    ],
    quickFacts: {
        procedureTime: '30 - 90 minuta',
        anesthesia: 'Anestezi lokale (sedacion opsional)',
        recoveryTime: '2 - 5 ditë; heqja e fijeve pas 7 ditësh',
        results: 'Shërim i plotë i kockës brenda 6-12 muajsh',
    },
    sections: [
        {
            id: 'procedura-kirurgjikale',
            title: 'Hapat e Apikoektomisë',
            content: `
                <p>Një rezeksion apikal është një procedurë e strukturuar mirë që kryhet me sterilitet maksimal:</p>
                <ul>
                    <li><strong>Aksesi:</strong> Bëhet një hapje e vogël në mishrat e dhëmbëve për të ekspozuar majën e rrënjës së infektuar.</li>
                    <li><strong>Rezeksioni:</strong> Largohet maja e rrënjës (rreth 3mm) dhe pastrohet e gjithë zona nga indet inflamatore.</li>
                    <li><strong>Vulosja Retrograde:</strong> Fundi i rrënjës mbushet me material biokompatibël për të krijuar një barrierë hermetike kundër baktereve.</li>
                    <li><strong>Mbyllja:</strong> Mishrat qepen me fije kirurgjikale të imëta që minimizojnë traumën dhe përshpejtojnë shërimin.</li>
                </ul>
            `
        },
        {
            id: 'kujdesi-pas-operacionit',
            title: 'Udhëzime për Rikuperim',
            content: `
                <p>Kujdesi pas ndërhyrjes është thelbësor për suksesin afatgjatë të trajtimit:</p>
                <ul>
                    <li><strong>Menaxhimi i Ënjtjes:</strong> Aplikoni kompresa të ftohta në faqe gjatë 24 orëve të para për të reduktuar inflamacionin.</li>
                    <li><strong>Higjiena:</strong> Shmangni larjen e zonës së operuar ditën e parë; më pas përdorni një furçë shumë të butë dhe shpëlarës me klorheksidinë.</li>
                    <li><strong>Ushqimi:</strong> Konsumoni ushqime të buta dhe të ftohta; shmangni ushqimet krokante apo pikante që mund të irritojnë plagën.</li>
                    <li><strong>Aktiviteti:</strong> Shmangni sforcimet fizike të rënda për 48 orët e para pas operacionit.</li>
                </ul>
            `
        },
        {
            id: 'ekspertiza-italiane',
            title: 'Pse të zgjidhni Klinikën Tonë?',
            content: `
                <p>Ne kombinojmë standardet më të larta europiane me një shërbim të dedikuar për pacientin:</p>
                <ul>
                    <li><strong>Specialistë Italianë:</strong> Kirurgjia kryhet nga mjekë italianë me përvojë ndërkombëtare në mikrokirurgjinë endodontike.</li>
                    <li><strong>Teknologji e Avancuar:</strong> Përdorimi i mikroskopit operativ dhe radiografisë dixhitale për saktësi maksimale.</li>
                    <li><strong>Mbështetje Logjistike:</strong> Për pacientët që vijnë nga jashtë, ne organizojmë transportin dhe akomodimin në Shqipëri.</li>
                    <li><strong>Kontroll pas Trajtimit në Itali:</strong> Ofrojmë mundësinë e ndjekjes dhe kontrolleve post-operatore direkt në klinikat tona partnere në Itali.</li>
                </ul>
            `
        }
    ]
};

export default apicalResectionContent;