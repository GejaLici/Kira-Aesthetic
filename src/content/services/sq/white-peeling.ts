import type { ServiceContent } from '@/lib/services';

const whitePeelingServiceContent: ServiceContent = {
  description: [
    "Peeling i Bardhë, i njohur gjithashtu si peeling kimik i lehtë, është një trajtim estetik minimalisht invaziv i krijuar për të rinovuar shtresat e sipërme të lëkurës. Përmes aplikimit të një solucioni të butë acidik, ky trajtim largon qelizat e vdekura dhe stimulon rigjenerimin qelizor, duke zbuluar një lëkurë më të lëmuar, më të ndritshme dhe me ton uniform.",
    "Nën mbikëqyrjen e specialistëve tanë italianë, kjo procedurë përshtatet sipas llojit tuaj të lëkurës, duke adresuar imperfeksionet si njollat pigmentare, poret e zmadhuara dhe linjat e holla, pa pasur nevojë për një periudhë të gjatë rikuperimi."
  ],
  benefits: [
    "Rinovim i Teksturës: Lëkurë dukshëm më e butë dhe më e lëmuar që në seancat e para.",
    "Shkëlqim Natyral: Eliminon pamjen e zbehtë duke i dhënë fytyrës vitalitet dhe freski.",
    "Trajtim i Njollave: Zbeh në mënyrë efektive hiperpigmentimin, njollat e diellit dhe shenjat e aknes.",
    "Pastrim i Poreve: Redukton pikat e zeza dhe minimizon dukshmërinë e poreve të zmadhuara.",
    "Rikuperim i Shpejtë: Procedurë 'lunch-time' që ju lejon t'i riktheheni aktiviteteve tuaja menjëherë."
  ],
  quickFacts: {
    procedureTime: '20 - 30 minuta',
    anesthesia: 'Nuk nevojitet (ndjesi e lehtë shpimi)',
    recoveryTime: 'E menjëhershme (skuqje e lehtë për pak orë)',
    results: 'Lëkurë më e ndritshme pas 3-5 ditësh',
  },
  sections: [
    {
      id: 'procesi-trajtimit',
      title: 'Si funksionon Peeling i Bardhë?',
      content: `
        <p>Procesi është i strukturuar për të garantuar siguri maksimale dhe efikasitet:</p>
        <ul>
          <li><strong>Vlerësimi:</strong> Mjeku përcakton përqindjen optimale të acidit (Glikolik, Laktik ose Salicilik) për lëkurën tuaj.</li>
          <li><strong>Aplikimi:</strong> Solucioni aplikohet me kujdes për të eksfoliuar shtresën e dëmtuar.</li>
          <li><strong>Neutralizimi:</strong> Acidi neutralizohet pas pak minutash për të ndaluar veprimin e tij.</li>
          <li><strong>Hidratimi:</strong> Lëkura qetësohet me maska hidratuese dhe mbrojtje SPF.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-pas-trajtimit',
      title: 'Rekomandime thelbësore',
      content: `
        <p>Për të ruajtur rezultatet dhe për të mbrojtur lëkurën e re, duhet të ndiqni këto hapa:</p>
        <ul>
          <li><strong>Mbrojtja Diellore:</strong> Përdorimi i SPF 50 është i detyrueshëm, pasi lëkura është më e ndjeshme ndaj diellit.</li>
          <li><strong>Hidratimi:</strong> Përdorni kremra ushqyes për të ndihmuar procesin e rigjenerimit.</li>
          <li><strong>Shmangni Produktet Agresive:</strong> Mos përdorni retinol apo acide të tjera për të paktën 5 ditë.</li>
          <li><strong>Mos e ngacmoni lëkurën:</strong> Nëse ndodh një qërim i lehtë, lëreni atë të bjerë natyrshëm.</li>
        </ul>
      `
    },
    {
      id: 'pse-ne-peeling',
      title: 'Pse të zgjidhni klinikën tonë?',
      content: `
        <p>Ne kombinojmë standardet italiane me inovacionin estetitk:</p>
        <ul>
          <li><strong>Specialistë Italianë:</strong> Trajtimi kryhet nga mjekë që kuptojnë thellësisht dermatologjinë estetike.</li>
          <li><strong>Produkte Cilësore:</strong> Përdorim vetëm solucione kimike të certifikuara dhe të sigurta.</li>
          <li><strong>Planimetrim Individual:</strong> Çdo kurs trajtimi (zakonisht 3-6 seanca) hartohet sipas nevojave tuaja.</li>
          <li><strong>Mbështetje Logjistike:</strong> Organizojmë udhëtimin tuaj dhe ofrojmë konsulta kontrolli edhe në Itali.</li>
        </ul>
      `
    }
  ]
};

export default whitePeelingServiceContent;