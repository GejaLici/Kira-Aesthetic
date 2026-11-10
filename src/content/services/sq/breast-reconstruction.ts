import type { ServiceContent } from '@/lib/services';

const breastReconstructionContent: ServiceContent = {
    description: [
        "Rindërtimi i gjoksit është një udhëtim transformues drejt shërimit fizik dhe emocional pas mastektomisë. Kjo procedurë kirurgjikale synon të rikthejë formën, volumin dhe simetrinë e humbur, duke ndihmuar gratë të rifitojnë vetëbesimin dhe ndjenjën e plotësisë trupore. Qoftë përmes implanteve apo transferimit të indeve tuaja natyrale, qëllimi ynë është krijimi i një gjoksi që harmonizohet natyrshëm me siluetën tuaj.",
        "Në klinikën tonë, kirurgët italianë specialistë në kirurgjinë rindërtuese ofrojnë zgjidhje të avancuara të personalizuara. Ne bashkëpunojmë ngushtë me planet onkologjike për të përcaktuar kohën ideale të ndërhyrjes (menjëherë ose e vonuar), duke siguruar që çdo paciente të marrë kujdesin maksimal mjekësor dhe rezultatet më estetike të mundshme."
    ],
    benefits: [
        "Rikthim i Integritetit Trupor: Krijimi i një gjoksi të ri me formë dhe ndjesi natyrale.",
        "Simetri Estetike: Balancimi i figurës pas heqjes së njërit ose të dy gjokseve.",
        "Eliminimi i Protezave: Shmangia e nevojës për proteza të jashtme të lëvizshme.",
        "Shërim Emocional: Ndihmon në tejkalimin e traumës së mastektomisë dhe rritjen e vetëbesimit.",
        "Opsione të Avancuara: Mundësia për rindërtim me indet tuaja (Flap DIEP) për rezultate afatgjata."
    ],
    quickFacts: {
        procedureTime: '2 - 6+ orë (varet nga teknika)',
        anesthesia: 'Anestezi e përgjithshme',
        recoveryTime: '4 - 8 javë (rikuperim i plotë)',
        results: 'Dukshëm pas operacionit; maturim i indeve pas 6-12 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-rindertimit',
            title: 'Teknikat Moderne të Rindërtimit',
            content: `
                <p>Ekzistojnë dy rrugë kryesore për të rindërtuar gjoksin, të cilat diskutohen gjatë konsultimit:</p>
                <ul>
                    <li><strong>Rindërtimi me Implante:</strong> Përdoret një zgjerues indesh (expander) ose vendoset direkt implanti i silikonit. Është një procedurë më pak komplekse me kohë shërimi më të shpejtë.</li>
                    <li><strong>Rindërtimi Autolog (DIEP/TRAM):</strong> Përdoret lëkura dhe yndyra nga barku ose shpina e pacientes. Ky konsiderohet 'standardi i artë' pasi gjoksi i ri sillet si ind i gjallë dhe plaket natyrshëm me trupin.</li>
                    <li><strong>Rindërtimi i Thithit:</strong> Faza finale që përfshin rindërtimin e areolës dhe thithit për një pamje plotësisht anatomike.</li>
                </ul>
            `
        },
        {
            id: 'procesi-dhe-kujdesi',
            title: 'Udhëtimi drejt Rikuperimit',
            content: `
                <p>Rindërtimi kërkon një ndjekje të kujdesshme mjekësore për të garantuar suksesin e operacionit:</p>
                <ul>
                    <li><strong>Qëndrimi në Spital:</strong> Zakonisht kërkohet 1-3 ditë qëndrim për monitorimin e qarkullimit të gjakut në indet e reja.</li>
                    <li><strong>Drenazhet:</strong> Tuba të përkohshëm ndihmojnë në eliminimin e lëngjeve të tepërta në ditët e para.</li>
                    <li><strong>Aktiviteti:</strong> Lëvizjet e krahëve duhet të jenë të kufizuara në fazën fillestare për të lejuar shërimin e brendshëm pa tension.</li>
                </ul>
            `
        },
        {
            id: 'ekspertiza-italiane',
            title: 'Pse të zgjidhni specialistët tanë italianë?',
            content: `
                <p>Rindërtimi i gjoksit kërkon një kombinim të mikrokirurgjisë precize dhe syrit estetik:</p>
                <ul>
                    <li><strong>Përvojë Mikrokirurgjikale:</strong> Specialistë italianë të trajnuar në teknikat DIEP që ruajnë muskujt e barkut.</li>
                    <li><strong>Qasje Multidisiplinare:</strong> Koordinim i plotë me mjekët tuaj onkologë në Itali apo Shqipëri.</li>
                    <li><strong>Mbështetje Logjistike:</strong> Ne organizojmë gjithçka, nga udhëtimi te akomodimi, që ju të fokusoheni vetëm te shërimi.</li>
                    <li><strong>Ndjekje Post-Operatore në Itali:</strong> Kontrollet periodike mund t'i kryeni pranë klinikave tona partnere në Itali.</li>
                </ul>
            `
        }
    ]
};

export default breastReconstructionContent;