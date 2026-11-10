import type { ServiceContent } from '@/lib/services';

const breastReductionContent: ServiceContent = {
    description: [
        "Zvogëlimi i gjoksit, i njohur mjekësisht si reduktim mamoplastik, është një procedurë jetike për gratë që vuajnë nga pesha e tepërt e gjoksit. Ky operacion jo vetëm që përmirëson estetikën e trupit duke krijuar një siluetë më proporcionale, por shërben kryesisht si një zgjidhje për problemet shëndetësore si dhimbjet kronike të shpinës, qafës dhe irritimet e lëkurës.",
        "Ekipi ynë i kirurgëve italianë përdor teknika të avancuara për të hequr indin e tepërt gjëndror, yndyrën dhe lëkurën, duke e riformësuar gjoksin në një madhësi më të lehtë dhe më të ngritur. Qëllimi ynë është të kombinojmë lehtësimin fizik me një rezultat estetik natyral, duke ju mundësuar një stil jete më aktiv dhe pa dhimbje."
    ],
    benefits: [
        "Lehtësim Fizik: Reduktim i menjëhershëm i dhimbjeve të shpinës, qafës dhe shpatullave.",
        "Përmirësim i Posturës: Mundëson mbajtjen e një posture të drejtë pa sforcimin e shtyllës kurrizore.",
        "Liri në Aktivitet: Lehtëson pjesëmarrjen në sporte dhe aktivitete fizike që më parë ishin të vështira.",
        "Zgjidhje Dermatologjike: Eliminon irritimet dhe infeksionet e lëkurës në palën nëngjoksore.",
        "Besim i Rinovuar: Përmirëson imazhin për veten dhe lehtëson gjetjen e veshjeve të përshtatshme."
    ],
    quickFacts: {
        procedureTime: '2 - 4 orë',
        anesthesia: 'Anestezi e përgjithshme',
        recoveryTime: '2-3 javë (rikthim në punë); 6-8 javë (aktivitet i plotë)',
        results: 'Lehtësim i menjëhershëm; forma finale pas 6-12 muajsh',
    },
    sections: [
        {
            id: 'teknikat-e-reduktimit',
            title: 'Teknikat Kirurgjikale të Reduktimit',
            content: `
                <p>Mënyra e zvogëlimit përcaktohet nga anatomia juaj dhe sasia e indit që duhet hequr:</p>
                <ul>
                    <li><strong>Teknika Ankor (T e përmbysur):</strong> Metoda më efektive për reduktimet e mëdha, duke lejuar rimodelim maksimal.</li>
                    <li><strong>Teknika Lollipop (Vertikale):</strong> E përshtatshme për zvogëlime mesatare, me më pak shenja kirurgjikale.</li>
                    <li><strong>Riorientimi i Thithit:</strong> Gjatë procedurës, thithi dhe areola zhvendosen më lart për të shoqëruar formën e re të ngritur të gjoksit.</li>
                </ul>
            `
        },
        {
            id: 'rikuperimi-post-operator',
            title: 'Rikuperimi dhe Mirëmbajtja e Rezultateve',
            content: `
                <p>Pas operacionit, kujdesi është kyç për një shërim pa komplikacione:</p>
                <ul>
                    <li><strong>Sutjena Kompresuese:</strong> Duhet mbajtur rregullisht për 4-6 javë për të mbështetur indet në fazën e shërimit.</li>
                    <li><strong>Kufizimi i Peshave:</strong> Nuk lejohet ngritja e peshave apo lëvizjet e sforcuara të krahëve në muajin e parë.</li>
                    <li><strong>Qëndrueshmëria:</strong> Rezultatet janë afatgjata, megjithatë rekomandohet ruajtja e një peshe të qëndrueshme trupore.</li>
                </ul>
            `
        },
        {
            id: 'pervoja-italiane',
            title: 'Pse të zgjidhni ekspertizën tonë?',
            content: `
                <p>Ne ofrojmë një standard italian të mjekësisë estetike në zemër të Shqipërisë:</p>
                <ul>
                    <li><strong>Specialistë Italianë:</strong> Kirurgë me përvojë dekadash në reduktimet komplekse mamoplastike.</li>
                    <li><strong>Kujdes Ndërkufitar:</strong> Mundësia për të kryer vizitat pasuese direkt në Itali për pacientet që jetojnë atje.</li>
                    <li><strong>Transport dhe Akomodim:</strong> Mbështetje e plotë logjistike për pacientët që vijnë nga jashtë shtetit.</li>
                </ul>
            `
        }
    ]
};

export default breastReductionContent;