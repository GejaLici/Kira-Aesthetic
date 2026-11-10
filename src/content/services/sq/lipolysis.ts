import type { ServiceContent } from '@/lib/services';

const lipolysisContent: ServiceContent = {
  description: [
    "Lipoliza është një zgjidhje inovative jo-kirurgjikale për eliminimin e depozitave yndyrore lokale që nuk reagojnë ndaj dietës apo ushtrimeve fizike. Ky trajtim minimalisht invaziv synon shpërbërjen e qelizave dhjamore në zona specifike si barku, kofshët, krahët dhe mjekra e dyfishtë.",
    "Përmes teknikave të avancuara si injeksionet lipolitike apo lazer-lipoliza, ne ndihmojmë në rimodelimin e siluetës suaj pa nevojën e bisturisë, anestezisë së përgjithshme apo kohës së gjatë të rikuperimit që kërkon një liposuksion tradicional."
  ],
  benefits: [
    "Reduktim i Targetuar: Eliminon yndyrën saktësisht në zonat problematike.",
    "Pa Kirurgji: Nuk kërkon prerje, qepje apo qëndrim në spital.",
    "Rikuperim i Shpejtë: Pacienti mund t'i rikthehet aktiviteteve ditore pothuajse menjëherë.",
    "Shtrëngim i Lëkurës: Stimulon prodhimin e kolagjenit, duke përmirësuar elasticitetin e zonës së trajtuar.",
    "Rezultate të Përhershme: Qelizat yndyrore të shkatërruara nuk rikthehen më (me ruajtjen e një peshe të qëndrueshme)."
  ],
  quickFacts: {
    procedureTime: '30 - 60 minuta',
    anesthesia: 'Anestezi lokale ose krem mpirës',
    recoveryTime: '1 - 3 ditë (për skuqje/ënjtje të lehtë)',
    results: 'Graduale (optimale pas 8-12 javësh)',
  },
  sections: [
    {
      id: 'metodat-e-lipolizes',
      title: 'Teknikat Tona të Trajtimit',
      content: `
        <p>Klinika jonë ofron metodat më efektive të lipolizës për rezultate maksimale:</p>
        <ul>
          <li><strong>Lipoliza Injektive:</strong> Përdorimi i enzimave natyrale (Fosfatidilkolinë dhe Deoksikolat) për të shpërbërë muret e qelizave dhjamore.</li>
          <li><strong>Lazer-Lipoliza:</strong> Përdorimi i energjisë lazer për të lëngëzuar yndyrën dhe njëkohësisht për të shtrënguar lëkurën përmes nxehtësisë së kontrolluar.</li>
          <li><strong>HIFU (Ultratinguj):</strong> Fokusimi i valëve me intensitet të lartë në thellësi të indit dhjamor për shkatërrimin e adipociteve pa dëmtuar sipërfaqen e lëkurës.</li>
        </ul>
      `
    },
    {
      id: 'zonat-dhe-procesi',
      title: 'Zonat e Trajtimit dhe Çfarë të Prisni',
      content: `
        <p>Lipoliza është jashtëzakonisht efektive për zona të vogla dhe të mesme:</p>
        <p>Zonat më të kërkuara përfshijnë <strong>mjekrën e dyfishtë</strong>, "love handles" në ije, pjesën e brendshme të kofshëve dhe depozitat në shpinë. Gjatë procesit, ju mund të ndjeni një ndjesi nxehtësie ose pickimi. Rezultatet janë progresive, pasi trupit i duhen disa javë për të metabolizuar dhe eliminuar yndyrën e shpërbërë përmes sistemit limfatik.</p>
      `
    },
    {
      id: 'ekspertiza-italiane',
      title: 'Pse të zgjidhni Lipolizën në klinikën tonë?',
      content: `
        <p>Ne kombinojmë shkencën italiane me kujdesin maksimal për pacientin:</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Trajtimet kryhen nga mjekë me përvojë ndërkombëtare në mjekësinë estetike.</li>
          <li><strong>Teknologji e Certifikuar:</strong> Përdorim pajisje dhe substanca të aprovuara nga FDA dhe CE.</li>
          <li><strong>Plan Individual:</strong> Çdo protokoll hartohet sipas nevojave specifike të trupit tuaj.</li>
          <li><strong>Kujdes Post-Trajtim në Itali:</strong> Ofrojmë asistencë dhe kontrolle direkte në Itali për komoditetin tuaj maksimal.</li>
        </ul>
      `
    }
  ]
};

export default lipolysisContent;