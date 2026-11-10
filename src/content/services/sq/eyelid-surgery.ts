import type { ServiceContent } from '@/lib/services';

const blefaroplastikaContent: ServiceContent = {
    description: [],
    benefits: [],
    quickFacts: {
        procedureTime: '1 - 2 orë',
        anesthesia: 'anestezi lokale me sedacion ose anestezi e përgjithshme',
        recoveryTime: '7 - 10 ditë për aktivitetet sociale',
        results: 'rezultatet e dukshme teksa ënjtja ulet; rezultatet përfundimtare pas 1 - 2 muajsh'
    },
    sections: [
        {
            id: 'çfarë-është-blefaroplastika',
            title: 'Çfarë është Blefaroplastika?',
            content: `
                <p><strong>Blefaroplastika</strong>, ose kirurgjia e qepallave, është një procedurë kirurgjikale precize që rinovon zonën përreth syve. Ky operacion trajton qepallat e sipërme të varura, çantat poshtë syve, lëkurën e tepërt dhe dobësimin e muskujve, duke rikthyer një pamje më të re, të freskët dhe të zgjuar pa ndryshuar shprehjen natyrale të fytyrës.</p>
                <p>Lëkura rreth syve është shumë e hollë dhe delikate, prandaj tregon shenjat e plakjes më herët. Qasja jonë siguron rezultate të natyrshme, me prerje të fshehura në gropat natyrale ose brenda qepallës së poshtme, duke rikthyer konturet e gjalla të syve.</p>
            `
        },
        {
            id: 'qepallat-e-sipërme-dhe-poshtme',
            title: 'Blefaroplastika e Qepallave të Sipërme dhe Poshtme',
            content: `
                <p>Blefaroplastika mund të trajtojë qepallat e sipërme, të poshtme ose të dyja njëkohësisht, sipas nevojave tuaja.</p>
                <ul>
                    <li><strong>Blefaroplastika e Sipërme:</strong> Heq lëkurën dhe yndyrën e tepërt mbi qepallat e sipërme për të korrigjuar varjen ('hooding') që mund të ndikojë në shikim ose të japë pamje të lodhur. Prerja fshihet në gropën natyrale të qepallës.</li>
                    <li><strong>Blefaroplastika e Poshtme:</strong> Trajton çantat dhe ënjtjen poshtë syve dhe lëkurën e lirë. Qasja transkonjuktivale lejon që prerja të bëhet brenda qepallës, pa lënë shenja të jashtme.</li>
                    <li><strong>Trajtim i Kombinuar:</strong> Trajtimi i të dyja qepallave njëherësh ofron rinovim të plotë dhe të harmonizuar të zonës rreth syve.</li>
                </ul>
                <p><strong>Përfitimet:</strong> Heqja e lëkurës së tepërt, reduktimi i ënjtjes dhe çantave, konturet më të sheshta, rinovim afatgjatë dhe shenja pothuajse të padukshme.</p>
            `
        },
        {
            id: 'qasje-precize',
            title: 'Qasja Kirurgjikale e Precizuar',
            content: `
                <p>Blefaroplastika është një operacion që matet në milimetra: precizioni dhe njohja anatomike janë thelbësore. Kirurgët tanë përdorin teknika të avancuara për rezultate të sigurta dhe natyrale.</p>
                <ul>
                    <li><strong>Ekspertizë Anatomike:</strong> Njohuri të thella të muskujve dhe depozitave të yndyrës për të shmangur pamjen e tejoperuar ose të zbrazët.</li>
                    <li><strong>Suturë Ultra-Fine:</strong> Pikat hiqen brenda një jave, duke minimizuar shenjat e dukshme.</li>
                    <li><strong>Riposicionimi i Yndyrës:</strong> Yndyra shpesh ripozicionohet në vend që të hiqet komplet, për një kalim më të rrjedhshëm midis qepallës së poshtme dhe faqes.</li>
                </ul>
                <p><strong>Përfitimet:</strong> Ruajtja e kontureve natyrale të syve, kalime më të sheshta, shenja minimale dhe parandalimi i pamjes së zbrazët.</p>
            `
        },
        {
            id: 'shërim',
            title: 'Koha e Shërimit dhe Pikat Kryesore në Rikuperim',
            content: `
                <p>Shërimi pas blefaroplastikës është i shpejtë nëse ndiqni udhëzimet post-operatore.</p>
                <ol>
                    <li><strong>48 Orët e Para:</strong> Përdorni kompresat e ftohta dhe mbani kokën të ngritur për të reduktuar ënjtjen dhe mavijosjet.</li>
                    <li><strong>Ditet 5–7:</strong> Hiqen qepjet; mavijosjet zbehen dhe mund të mbulohen me make-up të lehtë.</li>
                    <li><strong>Java 2:</strong> Shumica e pacientëve kthehen në punë dhe aktivitete sociale; shmangni aktivitetet e rënda për 1–2 javë të tjera.</li>
                    <li><strong>Rezultati Përfundimtar:</strong> Edhe pse syrit duket i freskuar shpejt, konturet përfundimtare stabilizohen brenda 4–6 javësh.</li>
                </ol>
                <p><strong>Përfitimet:</strong> Rikthim i shpejtë në jetën sociale, zvogëlim gradual i ënjtjes, definim më i mirë i qepallave dhe rinovim afatgjatë.</p>
            `
        },
        {
            id: 'kujdes-internacional',
            title: 'Kujdes i Plotë për Pacientët Ndërkombëtarë',
            content: `
                <p>Ne ofrojmë një eksperiencë pa stres për pacientët që udhëtojnë nga jashtë për blefaroplastikë.</p>
                <ul>
                    <li><strong>Mbështetje Logjistike:</strong> Ndihmë me akomodimin dhe transportin premium për qëndrim komod.</li>
                    <li><strong>Follow-up i Flexibilizuar:</strong> Kontrolli post-operativ mund të bëhet në <strong>Shqipëri</strong>, <strong>Kosovë</strong> ose <strong>Itali</strong>.</li>
                    <li><strong>Monitorim në Distancë:</strong> Qasje digjitale direkte në ekipin tonë mjekësor për ndihmë gjatë fazave të para të shërimit.</li>
                </ul>
                <p><strong>Përfitimet:</strong> Qetësi maksimale, vazhdimësi në kujdes dhe besim në shërim kudo që ndodheni.</p>
            `
        }
    ]
};

export default blefaroplastikaContent;
