import type { ServiceContent } from '@/lib/services';

const dentalImplantsContent: ServiceContent = {
    description: [
        "Implantet dentare përfaqësojnë zgjidhjen më moderne dhe afatgjatë për zëvendësimin e dhëmbëve të humbur. Një implant është një rrënjë artificiale prej titani që integrohet biologjikisht me kockën e nofullës (osteointegrim), duke krijuar një bazë të pathyeshme për kurorat, urat ose protezat e reja.",
        "Në klinikën tonë, kirurgët implantologë italianë përdorin teknologjinë 3D (CBCT) për planifikim preçiz dhe sisteme implantesh të markave lider botërore. Ky trajtim nuk rikthen vetëm estetikën e buzëqeshjes, por parandalon edhe humbjen e kockës dhe zhvendosjen e dhëmbëve fqinjë, duke ruajtur strukturën natyrale të fytyrës suaj."
    ],
    benefits: [
        "Stabilitet Maksimal: Ndjesia dhe funksioni janë identikë me dhëmbët natyralë.",
        "Mbrojtje e Kockës: Stimulon rritjen kockore dhe parandalon deformimin e fytyrës pas humbjes së dhëmbëve.",
        "Integritet Dentar: Nuk kërkon gërryerjen e dhëmbëve fqinjë, ndryshe nga urat tradicionale.",
        "Jetëgjatësi: Me higjienën e duhur, implantet janë të projektuara për të zgjatur gjatë gjithë jetës.",
        "Estetikë e Shkëlqyer: Kurorat mbi implant prodhohen me saktësi për t'u përshtatur me ngjyrën dhe formën e dhëmbëve tuaj."
    ],
    quickFacts: {
        procedureTime: '30 - 60 minuta për implant',
        anesthesia: 'Anestezi lokale ose sedacion',
        recoveryTime: '3 - 6 muaj për osteointegrimin e plotë',
        results: 'Zëvendësim i përhershëm dhe funksional',
    },
    sections: [
        {
            id: 'procesi-kirurgjikal',
            title: 'Hapat e Trajtimit me Implant',
            content: `
                <p>Procesi i implantimit ndiqet në disa faza për të garantuar suksesin maksimal:</p>
                <ul>
                    <li><strong>Konsulta dhe Skanimi 3D:</strong> Përdorim teknologjinë CBCT për të vlerësuar densitetin e kockës dhe për të planifikuar pozicionimin e saktë të implantit.</li>
                    <li><strong>Faza Kirurgjikale:</strong> Vendosja e vidës së titanit në kockë nën anestezi lokale, një procedurë pa dhimbje dhe me saktësi maksimale.</li>
                    <li><strong>Osteointegrimi:</strong> Një periudhë pritjeje prej 3-6 muajsh ku implanti bashkohet me kockën.</li>
                    <li><strong>Protizimi:</strong> Vendosja e abutmentit dhe kurorës finale prej zirkoni ose E-max.</li>
                </ul>
            `
        },
        {
            id: 'teknikat-e-avancuara',
            title: 'Inovacioni dhe Teknikat Moderne',
            content: `
                <p>Për raste specifike, ne ofrojmë zgjidhje të avancuara që minimizojnë kohën e pritjes:</p>
                <ul>
                    <li><strong>Ngarkesa e Menjëhershme:</strong> Mundësia për të vendosur dhëmbë provizorë brenda 24 orëve nga kirurgjia.</li>
                    <li><strong>All-on-4 / All-on-6:</strong> Zëvendësim i plotë i njërës nofull duke përdorur vetëm 4 ose 6 implante.</li>
                    <li><strong>Bone Augmentation:</strong> Shtimi i masës kockore ose Sinus Lift për pacientët që nuk kanë kockë të mjaftueshme për implantet klasike.</li>
                </ul>
            `
        },
        {
            id: 'ekspertiza-italiane',
            title: 'Pse të zgjidhni Klinika Jonë?',
            content: `
                <p>Dallimi ynë qëndron te kujdesi i plotë dhe standardet evropiane:</p>
                <ul>
                    <li><strong>Kirurgë Italianë:</strong> Specialistë me përvojë ndërkombëtare në kirurgjinë orale.</li>
                    <li><strong>Materiale të Certifikuara:</strong> Përdorim vetëm sisteme implantesh me garanci të përjetshme.</li>
                    <li><strong>Logjistika:</strong> Organizim i transportit dhe akomodimit në Shqipëri për pacientët që vijnë nga jashtë.</li>
                    <li><strong>Kontrolle në Itali:</strong> Ofojmë shërbimin e ndjekjes pas trajtimit direkt në Itali, për të garantuar stabilitetin e punimit në kohë.</li>
                </ul>
            `
        }
    ]
};

export default dentalImplantsContent;