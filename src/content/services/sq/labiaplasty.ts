import type { ServiceContent } from '@/lib/services';

const labiaplastyContent: ServiceContent = {
    description: [
        "Labiaplastika është një procedurë e kirurgjisë estetike intime që synon rimodelimin dhe reduktimin e përmasave të labiave (buzëve gjenitale). Ky operacion adreson shqetësimet fizike dhe estetike, duke u ofruar grave lehtësim nga sikleti i shkaktuar nga madhësia e tepërt ose asimetria.",
        "Përmes teknikave kirurgjikale të avancuara dhe ekspertizës së mjekëve tanë italianë, procedura garanton rezultate natyrale që përmirësojnë jo vetëm pamjen, por edhe cilësinë e jetës, higjienën dhe vetëbesimin në situata intime."
    ],
    benefits: [
        "Eliminim i Sikletit Fizik: Redukton irritimin dhe fërkimin gjatë aktiviteteve sportive apo veshjes së rrobave të ngushta.",
        "Përmirësim i Higjienës: Lehtëson mirëmbajtjen e zonës intime, duke ulur rrezikun e infeksioneve.",
        "Rezultate Natyrale: Korrigjon asimetritë dhe rikthen proporcionet harmonike.",
        "Rritje e Vetëbesimit: Zhduk ndjenjën e vetëdijes negative dhe përmirëson rehatinë në jetën seksuale.",
        "Ndërhyrje e Shpejtë: Procedurë ambulatore me kohë rikuperimi relativisht të shkurtër."
    ],
    quickFacts: {
        procedureTime: '45 - 90 minuta',
        anesthesia: 'Lokale me sedacion ose e përgjithshme',
        recoveryTime: '1 - 2 javë (kthimi në punë), 4-6 javë (aktivitet i plotë)',
        results: 'Përfundimtare pas 6-12 javësh (kur ënjtja zhduket plotësisht)',
    },
    sections: [
        {
            id: 'teknikat-kirurgjikale',
            title: 'Teknikat e Rimodelimit',
            content: `
                <p>Zgjedhja e teknikës varet nga anatomia individuale dhe qëllimi i pacientes:</p>
                <ul>
                    <li><strong>Teknika Wedge (Në formë pyke):</strong> Heq një pjesë të indit qendror duke ruajtur skajet natyrale dhe pigmentimin e labiave. Konsiderohet teknika më estetike.</li>
                    <li><strong>Teknika Trim (Prerja lineare):</strong> Largon indin e tepërt përgjatë skajit të jashtëm. Ideale për raste me hipertrofi të theksuar.</li>
                    <li><strong>Qepjet:</strong> Përdoren fije të holla absorbuese që shkrihen vetë, duke eliminuar nevojën për heqjen e tyre dhe minimizuar shenjat.</li>
                </ul>
            `
        },
        {
            id: 'kujdesi-pas-operacionit',
            title: 'Rrugëtimi i Shërimit',
            content: `
                <p>Kujdesi post-operator është kyç për rezultate optimale:</p>
                <p>Në ditët e para, ënjtja dhe një ndjesi e lehtë mpirjeje janë normale. Rekomandohet veshja e rrobave të lirshme pambuku dhe higjiena e rreptë me ujë të ngrohtë. Aktivitetet që ushtrojnë presion (si çiklizmi apo marrëdhëniet seksuale) duhen shmangur për të paktën 4-6 javë për të lejuar shërimin e plotë të indeve delikate.</p>
            `
        },
        {
            id: 'pse-ne-kirurgji-intime',
            title: 'Ekspertizë, Diskrecion dhe Siguri',
            content: `
                <p>Pse klinika jonë është lider në kirurgjinë intime:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë të gjerë në procedurat estetike gjenitale, duke garantuar precizion maksimal.</li>
                    <li><strong>Privatësi e Plotë:</strong> Sigurojmë një ambient diskret dhe konfidencialitet absolut për çdo paciente.</li>
                    <li><strong>Teknologji Moderne:</strong> Përdorimi i instrumenteve që minimizojnë traumën e indeve dhe përshpejtojnë shërimin.</li>
                    <li><strong>Ndjekje në Itali:</strong> Ofrimi i kontrolleve post-operatore në Itali, duke lehtësuar procesin për pacientet ndërkombëtare.</li>
                </ul>
            `
        }
    ]
};

export default labiaplastyContent;