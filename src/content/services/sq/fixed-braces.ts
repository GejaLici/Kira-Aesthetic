import type { ServiceContent } from '@/lib/services';

const fixedBracesContent: ServiceContent = {
    description: [
        "Aparatet fikse ortodontike, të njohura gjerësisht si 'telat', mbeten zgjidhja më e besueshme dhe universale për korrigjimin e dhëmbëve të shtrembëruar dhe problemeve të kafshimit (malokluzionit). Përmes presionit të butë dhe të vazhdueshëm, ky trajtim lëviz dhëmbët drejt pozicionit të tyre ideal, duke përmirësuar si estetikën e buzëqeshjes, ashtu edhe funksionin përtypës.",
        "Në klinikën tonë, specialistët italianë të ortodoncisë përdorin teknologjitë më të fundit në braktete metalike, qeramike dhe linguale. Çdo trajtim është i personalizuar për të siguruar jo vetëm dhëmbë të drejtë, por edhe një harmoni të plotë me tiparet e fytyrës suaj."
    ],
    benefits: [
        "Korrigjim i Plotë: Trajton me sukses rastet më komplekse të mbivendosjes së dhëmbëve dhe hapësirave (diastemave).",
        "Shëndet Oral Afatgjatë: Dhëmbët e drejtë pastrohen më lehtë, duke reduktuar kariesin dhe sëmundjet e mishrave.",
        "Funksion i Përmirësuar: Rregullon kafshimin, duke parandaluar dhimbjet e nofullës (TMJ) dhe konsumimin e dhëmbëve.",
        "Estetikë e Personalizuar: Opsione midis brakteteve klasike, atyre qeramike (transparente) ose linguale (të fshehura).",
        "Besim në vete: Një buzëqeshje e rregullt transformon imazhin tuaj personal dhe profesional."
    ],
    quickFacts: {
        procedureTime: '1 - 1.5 orë (vendosja fillestare)',
        anesthesia: 'Nuk kërkohet (procedurë pa dhimbje)',
        recoveryTime: '2 - 4 ditë (përshtatja fillestare)',
        results: 'Dallueshëm pas 6 muajsh; finale pas 18-36 muajsh',
    },
    sections: [
        {
            id: 'llojet-e-aparateve',
            title: 'Zgjidhni Aparatin e Duhur për Ju',
            content: `
                <p>Ne ofrojmë disa opsione bazuar në nevojat tuaja estetike dhe klinike:</p>
                <ul>
                    <li><strong>Aparate Metalike:</strong> Opsioni më i qëndrueshëm dhe efikas për lëvizje komplekse, i preferuar për fëmijë dhe adoleshentë.</li>
                    <li><strong>Aparate Qeramike:</strong> Përdorin materiale që imitojnë ngjyrën e dhëmbit, duke i bërë telat shumë më pak të dukshëm.</li>
                    <li><strong>Aparate Linguale:</strong> Vendosen në pjesën e brendshme të dhëmbëve, duke ofruar diskrecion total pasi janë plotësisht të padukshme nga jashtë.</li>
                </ul>
            `
        },
        {
            id: 'procesi-ortodontik',
            title: 'Hapat e Trajtimit',
            content: `
                <p>Rruga drejt buzëqeshjes perfekte ndjek një proces të mirëfilltë mjekësor:</p>
                <ol>
                    <li><strong>Diagnostikimi:</strong> Skanim 3D, radiografi dhe modele studimi për të hartuar planin e lëvizjes.</li>
                    <li><strong>Aplikimi:</strong> Ngjitja e brakteteve dhe vendosja e harkut (telit) të parë.</li>
                    <li><strong>Aktivizimi:</strong> Vizita çdo 4-8 javë për rregullime dhe ndërrim të telave për të vazhduar progresin.</li>
                    <li><strong>Retensioni:</strong> Pas heqjes, përdoren fiksues (retainers) për të garantuar që dhëmbët të mos kthehen në pozicionin e vjetër.</li>
                </ol>
            `
        },
        {
            id: 'pse-ne-ortodonci',
            title: 'Eksperta Italianë në Shërbimin Tuaj',
            content: `
                <p>Pse të na besoni buzëqeshjen tuaj?</p>
                <ul>
                    <li><strong>Ortodontë Italianë:</strong> Specialistë me përvojë ndërkombëtare në biomekanikën e dhëmbëve.</li>
                    <li><strong>Materiale Premium:</strong> Përdorim vetëm braktete dhe tela të certifikuar të standardeve më të larta europiane.</li>
                    <li><strong>Logjistikë e Plotë:</strong> Akomodim dhe transport për pacientët që vijnë nga jashtë Shqipërisë.</li>
                    <li><strong>Ndjekja në Itali:</strong> Kontrollet periodike dhe mirëmbajtja post-trajtuese mund të kryhen direkt në Itali, duke ju ofruar komoditet maksimal.</li>
                </ul>
            `
        }
    ]
};

export default fixedBracesContent;