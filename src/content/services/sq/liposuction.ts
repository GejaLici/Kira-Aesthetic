import type { ServiceContent } from '@/lib/services';

const liposuctionContent: ServiceContent = {
  description: [
    "Liposuksioni është një nga procedurat më efektive të kirurgjisë estetike për eliminimin e depozitave yndyrore kokëforta që nuk reagojnë ndaj dietës apo ushtrimeve. Ky trajtim nuk është një metodë për humbje peshe, por një procedurë precize e konturimit të trupit që synon rimodelimin e siluetës.",
    "Përmes teknikave moderne si liposuksioni tumescent dhe ai i asistuar me ultratinguj (VASER), ne arrijmë të heqim qelizat dhjamore nga zona si barku, kofshët, krahët dhe mjekra, duke krijuar një profil më të hollë, proporcionale dhe estetikisht tërheqës."
  ],
  benefits: [
    "Eliminim i Përhershëm: Qelizat yndyrore të hequra nuk rikthehen më në zonën e trajtuar.",
    "Rimodelim i Siluetës: Përmirëson dukshëm proporcionet dhe simetrinë e trupit.",
    "Teknika Minimale Invazive: Incizione shumë të vogla (1-3 mm) që pothuajse nuk lënë shenja.",
    "Versatilitet: Mund të aplikohet në pothuajse çdo zonë të trupit ku ka tepricë dhjamore.",
    "Rritje e Vetëbesimit: Rezultate të dukshme që ndihmojnë pacientët të ndihen më mirë me veshjet dhe trupin e tyre."
  ],
  quickFacts: {
    procedureTime: '1 - 3 orë',
    anesthesia: 'Lokale me sedacion ose e përgjithshme',
    recoveryTime: '3 - 7 ditë për aktivitete të lehta',
    results: 'Dukshme pas rënies së ënjtjes (3-6 muaj për rezultatin final)',
  },
  sections: [
    {
      id: 'teknikat-e-specializuara',
      title: 'Teknologjia dhe Metodat tona',
      content: `
        <p>Ne përdorim teknikat më të sigurta për të garantuar lëkurë të lëmuar dhe rikuperim të shpejtë:</p>
        <ul>
          <li><strong>Liposuksioni Tumescent:</strong> Përdorimi i një solucioni special që minimizon gjakderdhjen dhe nxirjet.</li>
          <li><strong>VASER Lipo:</strong> Teknologji me ultratinguj që lëngëzon yndyrën para thithjes, duke e bërë procesin më të butë për indet.</li>
          <li><strong>PAL (Power-Assisted):</strong> Përdorimi i kanulave vibruese për saktësi maksimale në zonat me densitet të lartë yndyre.</li>
        </ul>
      `
    },
    {
      id: 'kujdesi-pas-operacionit',
      title: 'Rëndësia e Rikuperimit',
      content: `
        <p>Suksesi i liposuksionit varet shumë nga kujdesi post-operator:</p>
        <p>Përdorimi i <strong>veshjes kompresuese</strong> është i detyrueshëm për 3-6 javë për të parandaluar grumbullimin e lëngjeve dhe për të ndihmuar lëkurën të tërhiqet në mënyrë uniforme. Masazhet limfatike mund të rekomandohen për të përshpejtuar eliminimin e ënjtjes dhe për të siguruar një rezultat pa gunga apo parregullsi.</p>
      `
    },
    {
      id: 'standardi-italian',
      title: 'Pse të zgjidhni ekspertët tanë?',
      content: `
        <p>Përvoja jonë garanton siguri dhe rezultate elitare:</p>
        <ul>
          <li><strong>Kirurgë Italianë:</strong> Ekspertizë e dëshmuar në rimodelimin e trupit me qasje artistike.</li>
          <li><strong>Planifikim i Detajuar:</strong> Analizë e plotë e cilësisë së lëkurës para operacionit.</li>
          <li><strong>Asistencë Logjistike:</strong> Transport dhe akomodim i organizuar për pacientët që vijnë nga jashtë Shqipërisë.</li>
          <li><strong>Kontroll në Itali:</strong> Mundësia për të kryer vizitat vijuese direkt në Itali, pa pasur nevojë për udhëtime të përsëritura.</li>
        </ul>
      `
    }
  ]
};

export default liposuctionContent;